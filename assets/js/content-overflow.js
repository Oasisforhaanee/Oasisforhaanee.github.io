(() => {
  "use strict";

  const article = document.querySelector('[itemprop="articleBody"]');
  if (!article || window.OasisOverflow) return;

  const regions = new Set();
  let nextId = 0;
  let scheduled = false;
  let mathReadyBound = false;
  const resizeObserver = window.ResizeObserver
    ? new ResizeObserver(scheduleRefresh)
    : null;

  function scheduleRefresh() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      refresh();
    });
  }

  function createRegion(content, kind) {
    if (content.closest(".content-overflow__viewport")) return null;

    // Spans remain valid when an image is inside a Markdown paragraph or link.
    const wrapper = document.createElement("span");
    wrapper.className = `content-overflow content-overflow--${kind}`;
    const viewport = document.createElement("span");
    viewport.className = "content-overflow__viewport";
    viewport.id = `oasis-content-scroll-${++nextId}`;
    const tools = document.createElement("span");
    tools.className = "content-overflow__tools";
    tools.hidden = true;
    const hint = document.createElement("span");
    hint.className = "content-overflow__hint";
    hint.textContent = "\u2194 Scroll horizontally";
    hint.setAttribute("aria-hidden", "true");
    hint.hidden = true;

    content.before(wrapper);
    wrapper.append(viewport, tools);
    viewport.append(content);
    tools.append(hint);

    const region = { wrapper, viewport, tools, hint, kind };
    regions.add(region);
    if (resizeObserver) resizeObserver.observe(viewport);
    return region;
  }

  function prepareImage(image) {
    if (image.closest(".content-overflow__viewport")) return;
    const link = image.closest("a");
    // Preserve linked images; the toggle must stay OUTSIDE the original link.
    if (link && link.querySelectorAll("img").length !== 1) return;
    const content = link || image.closest("picture") || image;
    const region = createRegion(content, "image");
    if (!region) return;
    region.image = image;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "content-overflow__toggle";
    button.textContent = "View full size";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", region.viewport.id);
    button.hidden = true;
    button.addEventListener("click", () => {
      const expanded = region.wrapper.classList.toggle("is-expanded");
      button.textContent = expanded ? "Fit to width" : "View full size";
      button.setAttribute("aria-expanded", String(expanded));
      region.viewport.scrollLeft = 0;
      refresh();
    });
    region.tools.prepend(button);
    region.button = button;
    image.addEventListener("load", scheduleRefresh);
    image.addEventListener("error", scheduleRefresh);
  }

  function updateRegion(region) {
    const { wrapper, viewport, tools, hint, kind, image, button } = region;
    if (!article.contains(wrapper)) {
      if (resizeObserver) resizeObserver.unobserve(viewport);
      regions.delete(region);
      return;
    }
    if (image) {
      wrapper.style.setProperty("--image-original-width", `${image.naturalWidth}px`);
      button.hidden = !image.naturalWidth || (
        image.naturalWidth <= viewport.clientWidth + 1 &&
        !wrapper.classList.contains("is-expanded")
      );
    }

    const overflowing = viewport.scrollWidth > viewport.clientWidth + 1;
    wrapper.classList.toggle("is-overflowing", overflowing);
    hint.hidden = !overflowing;
    tools.hidden = hint.hidden && (!button || button.hidden);
    if (overflowing) {
      viewport.setAttribute("tabindex", "0");
      viewport.setAttribute("role", "region");
      viewport.setAttribute("aria-label", `${kind === "math" ? "Equation" : "Image"}: scroll horizontally`);
    } else {
      viewport.removeAttribute("tabindex");
      viewport.removeAttribute("role");
      viewport.removeAttribute("aria-label");
    }
  }

  function bindMathReady() {
    const ready = window.MathJax && window.MathJax.startup && window.MathJax.startup.promise;
    if (ready && !mathReadyBound) {
      mathReadyBound = true;
      ready.then(refresh).catch(() => {});
    }
  }

  function refresh() {
    article.querySelectorAll('mjx-container[display="true"]').forEach((math) => {
      createRegion(math, "math");
    });
    article.querySelectorAll("img").forEach(prepareImage);
    regions.forEach(updateRegion);
    bindMathReady();
  }

  // Image controls add height once their natural dimensions become available.
  // Let the existing MathJax anchor jump wait for that layout to settle.
  const imageLoads = Array.from(article.querySelectorAll("img"), (image) => {
    if (image.complete || image.loading === "lazy") return Promise.resolve();
    return new Promise((resolve) => {
      image.addEventListener("load", resolve, { once: true });
      image.addEventListener("error", resolve, { once: true });
    });
  });
  const ready = new Promise((resolve) => {
    const timeout = setTimeout(resolve, 5000);
    Promise.all(imageLoads).then(() => {
      clearTimeout(timeout);
      resolve();
    });
  }).then(() => document.fonts && document.fonts.ready).then(refresh);

  window.OasisOverflow = { refresh, ready, version: "1" };
  // MathJax renders asynchronously. Batch DOM changes instead of polling it.
  new MutationObserver(scheduleRefresh).observe(article, {
    childList: true,
    subtree: true
  });
  if (resizeObserver) resizeObserver.observe(article);
  window.addEventListener("resize", scheduleRefresh, { passive: true });
  window.addEventListener("load", scheduleRefresh, { once: true });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(scheduleRefresh);
  refresh();
})();
