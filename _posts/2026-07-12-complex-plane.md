---
layout: post
title:  "The Complex Plane"
date:   2026-07-12 21:00:00 +0900
categories: [mathematics]
tags: [complex-plane, euler, taylor]
description: A visual, intuitive introduction to the complex plane — Taylor series, Euler's identity, and how e^{iωt} draws a rotating spiral in space-time.
usemathjax: true
comments: true

---

This post explores the **complex plane**. Understanding the concept matters, but *seeing* it helps considerably—so let us begin with a couple of short animations.

<img width="750" height="750" alt="complex_plane_theta" src="https://github.com/user-attachments/assets/de448a6f-732e-46ae-9574-879981792219" />

*How $e^{i\theta}$ moves as $\theta$ changes.*

<img width="800" height="600" alt="Code_Generated_Image_(2)" src="https://github.com/user-attachments/assets/21a1ef5a-ad99-455d-8302-1a7241a3fb3b" />

*How $e^{i\omega t}$ advances as a helix along the time axis.*

If that already makes sense to you, you may be a genius—it took me months to really grasp it.

In any case, even if it is not yet clear, it will become so with a step-by-step treatment.

## Taylor Expansion

A **Taylor expansion** rewrites a known function as an infinite sum of polynomials by computing its 1st, 2nd, ..., $n$-th (up to $n\to\infty$) derivatives at a point and constructing a polynomial that matches those derivative values. Not every function behaves this way, of course; sometimes the Taylor-expanded form does not match the original function. When the Taylor expansion differs substantially from the actual function, the function is called **non-analytic**; when the function can be approximated by its Taylor expansion, it is called an **analytic function**. Every function encountered in this post is analytic, so counterexamples need not concern us.

Let us work through a concrete example. Consider

$$f\left(x\right)=\frac{1}{1-x}\quad\left(-1<x<1\right)$$

This is the sum of a geometric series of ratio $x$, which we know well. Using the derivatives at $x=0$, we can express the function as an infinite sum of polynomials:

$$f(0)=\frac{1}{1-0}=1$$

$$f'(0)=\frac{1}{(1-x)^2}\rightarrow 1$$

$$f''(0)=\frac{2}{(1-x)^3}\rightarrow 2$$

$$f'''(0)=\frac{6}{(1-x)^4}\rightarrow 6$$

Constructing a polynomial that satisfies these derivative values: since $f(0)=1$ the constant term is $1$; the linear term has coefficient $1$ (the first derivative is $1$); the quadratic term has coefficient $2/2! = 1$ (the second derivative is $2$); and so on. Working through this, $f(x)$ becomes

$$f\left(x\right)=\frac{1}{1-x}=1+x+x^2+x^3+x^4+\dots $$

This matches the geometric series of ratio $x$ exactly. This is the essence of the Taylor expansion: it can approximate the true function almost exactly.

## Euler's Identity

$$e^{i\pi}+1=0$$

This is **Euler's identity**, often called the most beautiful equation in mathematics. To prove it we need the Taylor expansion above.

The function $e^x$ is also analytic, so it too admits an infinite polynomial expansion. It has a special property: differentiating with respect to $x$ returns $e^x$ itself. Combining this with $e^0=1$, we obtain

$$e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+\frac{x^5}{5!}+\dots =\sum_{n=0}^{\infty}\frac{x^n}{n!}$$

Differentiating with respect to $x$ repeatedly reproduces the same expression. The only polynomial whose derivative returns itself and which equals $1$ at $x=0$ is exactly this one.

The same idea applies to sine and cosine. Differentiating $\sin(x)$ gives $\cos(x)$, and differentiating $\cos(x)$ gives $-\sin(x)$. Using $\sin(0)=0$, $\cos(0)=1$, and this relationship, $\sin(x)$ and $\cos(x)$ can also be written as infinite polynomials:

$$\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\dots =\sum_{n=0}^{\infty}\frac{(-1)^nx^{2n+1}}{(2n+1)!}$$

$$\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\dots =\sum_{n=0}^{\infty}\frac{(-1)^nx^{2n}}{(2n)!}$$

Notice how similar these are to the terms of $e^x$. Substituting $ix$ for $x$ seems likely to recover $\sin$ and $\cos$. Computing $e^{ix}$:

$$e^{ix}=1+(ix)+\frac{(ix)^2}{2!}+\frac{(ix)^3}{3!}+\frac{(ix)^4}{4!}+\frac{(ix)^5}{5!}+\dots $$

$$=1+ix-\frac{x^2}{2!}-\frac{ix^3}{3!}+\frac{x^4}{4!}+\frac{ix^5}{5!}-\frac{x^6}{6!}-\frac{ix^7}{7!}+\dots$$

The $\cos$ terms line up exactly with those of $e^{ix}$; if we add the $\sin$ terms multiplied by $i$, the match is complete. Thus we obtain

$$e^{ix}=\cos x+i\sin x$$

This is **Euler's formula**.

Substituting $x=\pi$: $\cos(\pi)+i\sin(\pi)=-1$, so $e^{i\pi}+1=0$. The relation $e^{ix}=\cos x+i\sin x$ is absolutely central in mathematics, science, and engineering—it is worth committing to memory.

## The Complex Plane

We now know $e^{ix}=\cos x+i\sin x$, but what does it *mean*? There is a revealing interpretation. Taking the familiar coordinate plane and letting the $x$-axis be the real axis and the $y$-axis be the imaginary axis, the quantity $\cos x+i\sin x$ can be plotted as a point $(\cos x,\ \sin x)$.

![A complex number a+bi plotted on the complex plane](/assets/img/complex_plane_ab.svg)
*A complex number $a+bi$ plotted on the complex plane.*

![cos ψ + i sin ψ plotted on the complex plane](/assets/img/complex_plane_cossin.svg)
*$\cos\psi+i\sin\psi$ plotted on the complex plane.*

As in the second figure, since the real axis is $\cos x$ and the imaginary axis is $\sin x$, the quantity $x$ here represents the angle between that point and the real axis.

In conclusion: treating the $x$-axis as the real axis and the $y$-axis as the imaginary axis, $e^{ix}$ becomes a point on the unit circle at angle $x$ from the real axis.

## The Time Axis

![Euler's formula e^{iωt} visualized in 3D — a helix advancing along the time axis](/assets/img/complex_plane_3d_euler.png)
*Euler's formula $e^{i\omega t}=\cos(\omega t)+i\sin(\omega t)$ visualized in 3D: a helix advancing along the time axis, with its $\cos(\omega t)$ (blue) and $\sin(\omega t)$ (red) projections on the side walls.*

The complex plane above was expressed in terms of $x$, but it becomes more interesting when we include *time*. The figure above extends the complex plane with a time axis. This expression is written in terms of time alone, not $x$.

Viewed from the third viewpoint—showing only the imaginary axis (Im) and real axis (Re)—we see the circle representing $e^{i\omega t}=\cos(\omega t)+i\sin(\omega t)$ on the complex plane; here $\omega t$ plays the role of $x$.

Viewed from the second viewpoint—showing only the time axis and imaginary axis—we see the graph of the $i\sin(\omega t)$ part, i.e. $\sin(\omega t)$. The red graph in the figure is $\sin(\omega t)$.

Viewed from the first viewpoint—showing only the time axis and real axis—we see the graph of $\cos(\omega t)$. The blue graph is $\cos(\omega t)$.

There is a *rotation* as time progresses: starting from $t=0$, the point moves along a helical path. In the third viewpoint, since $\omega t$ is the angle on the complex plane, a larger $\omega$ means faster rotation in time and a tighter helix. This is why $\omega$ is called the **angular frequency**—the angular counterpart of the frequency $f$, expressing how rapidly the oscillation occurs.

## Plane Waves

Now let us look at ordinary waves. The waves we usually picture look like this—static, not moving.

<img width="800" height="400" alt="Code_Generated_Image (1)" src="https://github.com/user-attachments/assets/6f83642b-4f90-4a2d-806e-ee3595cdf208" />

A real wave, however, moves. A real wave is the static wave of the first picture plus a time-dependent term:

<img width="800" height="400" alt="Code_Generated_Image_(3)" src="https://github.com/user-attachments/assets/41bd4dd3-91f7-4c94-9650-1f09abee2de9" />

$$e^{i(kx-\omega t)}$$

This is the most basic form of a moving **plane wave**. The $\omega t$ term gives the wave its time-dependent motion; the $kx$ term sets the **wave number** of the stationary wave, as in the first picture.

$$k=\frac{2\pi}{\lambda}$$

$$k:\ \text{wavenumber (Unit: rad/m)}$$

$$\lambda:\ \text{wavelength (Unit: m)}$$

The wavenumber is $2\pi$ divided by the wavelength; since $2\pi$ is the phase change over one wavelength, the wavenumber is the phase change per unit distance.

A plane wave uses the $e^{ikx}$ term to express the shape of the stationary wave, and the $e^{-i\omega t}$ term to express its progression over time. One note: when a plane wave moves, we often display only its **real part**.

<img width="800" height="500" alt="Code_Generated_Image_(4)" src="https://github.com/user-attachments/assets/acd8933c-950e-45c4-9b8d-ec0b9e09cf9f" />
<img width="800" height="580" alt="traveling_wave_3d_with_real" src="https://github.com/user-attachments/assets/784c30af-9244-4d7f-b970-92837d059ced" />

The blue graph shows only the real part of $e^{i(kx-\omega t)}$, which moves helically.

Complex-plane concepts recur constantly in quantum mechanics and physics under the name of **phase**, so glossing over them without understanding will cause difficulties later. It is worth making sure the material is clear before moving on.

---

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
