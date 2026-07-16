---
layout: post
title:  "The Complex Plane"
date:   2026-07-12 21:00:00 +0900
categories: [mathematics, quantum-mechanics]
tags: [complex-plane, euler, taylor]
description: A visual, intuitive introduction to the complex plane — Taylor series, Euler's identity, and how e^{iωt} draws a rotating spiral in space-time.
usemathjax: true
comments: true

---

In this post we'll explore the **complex plane**. Understanding the concept matters, but *seeing* it helps a lot — so let's start with a couple of short animations.
<img width="750" height="750" alt="complex_plane_theta" src="https://github.com/user-attachments/assets/de448a6f-732e-46ae-9574-879981792219" />

*How $e^{i\theta}$ moves as $\theta$ changes.*

<img width="800" height="600" alt="Code_Generated_Image_(2)" src="https://github.com/user-attachments/assets/21a1ef5a-ad99-455d-8302-1a7241a3fb3b" />

*How $e^{i\omega t}$ advances as a helix along the time axis.*

Did you get it? If that already makes sense to you, you might be a genius — it took me almost months for me to really get it. (...Or maybe I'm just slow.)

Anyway, even if you don't understand it yet, I'm sure you will eventually get it if you study step by step. 

Okay then let's get started.

## Taylor Expansion

A **Taylor expansion** rewrites a function we know as an infinite sum of polynomials, by computing its 1st, 2nd, ... nth (up to $n\to\infty$) derivatives at a point and building a polynomial that matches those derivative values. Of course not every function behaves this way, and sometimes the Taylor-expanded form doesn't match the real function. When the Taylor expansion differs significantly from the actual function, we call it **non-analytic**; when the real function can be approximated by its Taylor expansion, we call it an **analytic function**. Every function we'll meet in this post is analytic, so you don't need to worry about counterexamples.

Let's look at a concrete example using Taylor expansion. Consider the following expression:

$$f\left(x\right)=\frac{1}{1-x}\quad\left(-1<x<1\right)$$

This is just the sum of a geometric series with ratio $x$, which we know well. Using the derivatives at $x=0$, we can express this function as an infinite sum of polynomials:

$$f(0)=\frac{1}{1-0}=1$$

$$f'(0)=\frac{1}{(1-x)^2}\rightarrow 1$$

$$f''(0)=\frac{2}{(1-x)^3}\rightarrow 2$$

$$f'''(0)=\frac{6}{(1-x)^4}\rightarrow 6$$

Building a polynomial that satisfies these derivative values: since $f(0)=1$ the constant term is 1; the linear term has coefficient 1 (because the first derivative is 1); the quadratic term has coefficient 2/2! = 1 (because the second derivative is 2); and so on. Working through it, $f(x)$ becomes:

$$f\left(x\right)=\frac{1}{1-x}=1+x+x^2+x^3+x^4+\dots $$

This matches perfectly with the sum of a geometric series of ratio $x$ that we already know. That's the core idea of Taylor expansion: it can approximate the real function almost exactly.

## Euler's Identity

$$e^{i\pi}+1=0$$

This is **Euler's identity**, called the most beautiful equation in the world. (I'm not so sure myself, but anyway —) to prove this formula we need the Taylor expansion from above.

$e^x$ is also analytic, so it too can be written as an infinite polynomial via Taylor expansion. $e^x$ is a bit special: differentiating it with respect to $x$ keeps giving $e^x$, i.e. the original function. Using this property together with the fact that $e^0=1$, we get:

$$e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+\frac{x^5}{5!}+\dots =\sum_{n=0}^{\infty}\frac{x^n}{n!}$$

You can see that differentiating with respect to $x$ over and over just gives back the same expression. The only polynomial whose derivative returns itself and equals 1 at $x=0$ is exactly this one.

It's not just $e^x$. For sine and cosine: differentiating $\sin(x)$ gives $\cos(x)$, and differentiating $\cos(x)$ gives $-\sin(x)$. Using $\sin(0)=0$, $\cos(0)=1$, and this relationship, $\sin(x)$ and $\cos(x)$ can also be written as infinite polynomials:

$$\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\dots =\sum_{n=0}^{\infty}\frac{(-1)^nx^{2n+1}}{(2n+1)!}$$

$$\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\dots =\sum_{n=0}^{\infty}\frac{(-1)^nx^{2n}}{(2n)!}$$

Notice how similar these are to the terms of $e^x$. If we plug in $ix$ for $x$, it looks like we could recover $\sin$ and $\cos$. Computing $e^{ix}$:

$$e^{ix}=1+(ix)+\frac{(ix)^2}{2!}+\frac{(ix)^3}{3!}+\frac{(ix)^4}{4!}+\frac{(ix)^5}{5!}+\dots $$

$$=e^{ix}=1+ix-\frac{x^2}{2!}-\frac{ix^3}{3!}+\frac{x^4}{4!}+\frac{ix^5}{5!}-\frac{x^6}{6!}-\frac{ix^7}{7!}+\dots$$

Notice that the $\cos$ terms line up exactly with those of $e^{ix}$; if we additionally add the terms that are $\sin$ multiplied by $i$, it matches $e^{ix}$ perfectly. Thus we obtain:

$$e^{ix}=\cos x+i\sin x$$

This is called as "Euler Formula"

Plug in $x=\pi$: $\cos(\pi)+i\sin(\pi)=-1$, so $e^{i\pi}+1=0$. The relation for $e^{ix}$ is absolutely central in mathematics, science, and engineering — keep it in mind.

## The Complex Plane

We now know $e^{ix}=\cos x+i\sin x$, but what does it *mean*? There's a more interesting way to interpret this formula. If we take the familiar coordinate plane and let the $x$-axis be the real axis and the $y$-axis be the imaginary axis, then $\cos x+i\sin x$ can be plotted just like a coordinate point: $(\cos x,\ \sin x)$.

![A complex number a+bi plotted on the complex plane](/assets/img/complex_plane_ab.svg)
*A complex number $a+bi$ plotted on the complex plane.*

![cos ψ + i sin ψ plotted on the complex plane](/assets/img/complex_plane_cossin.svg)
*$\cos\psi+i\sin\psi$ plotted on the complex plane.*


Then, as in the second figure, since the real axis is $\cos x$ and the imaginary axis is $\sin x$, the $x$ here represents the angle between that point and the real axis.

In conclusion: if we treat the familiar $x$-axis as the real axis and the $y$-axis as the imaginary axis, then $e^{ix}$ becomes a point on the unit circle, at angle $x$ from the real axis.

## The Time Axis

![Euler's formula e^{iωt} visualized in 3D — a helix advancing along the time axis](/assets/img/complex_plane_3d_euler.png)
*Euler's formula $e^{i\omega t}=\cos(\omega t)+i\sin(\omega t)$ visualized in 3D: a helix advancing along the time axis, with its $\cos(\omega t)$ (blue) and $\sin(\omega t)$ (red) projections on the side walls.*

The complex plane was an expression involving $x$, but it gets more interesting when we include *time*. The figure above shows the complex plane we know, extended with a time axis. This expression is written only in terms of time, not $x$.

If we view it from the 3rd viewpoint, showing only the imaginary axis (Im) and real axis (Re), we see the circle representing $e^{i\omega t}=\cos(\omega t)+i\sin(\omega t)$ on the complex plane — here $\omega t$ plays the role of $x$.

Viewed from the 2nd viewpoint, showing only the time axis and imaginary axis, we see the graph of $e^{i\omega t}=\cos(\omega t)+i\sin(\omega t)$'s $i\sin(\omega t)$, i.e. $\sin(\omega t)$. The red graph in the figure is $\sin(\omega t)$.

Viewed from the 1st viewpoint, showing only the time axis and real axis, we see the graph of $\cos(\omega t)$. The blue graph is $\cos(\omega t)$.

You can see there's a *rotation* as time progresses: starting from $t=0$, the point moves along a helical line. In the 3rd viewpoint, since $\omega t$ is the angle on the complex plane, a larger $\omega$ means it rotates faster in time and the helix is tighter. That's why $\omega$ is called the **angular frequency** — think of it as the angular version of frequency $f$, expressing how much it oscillates.

## Plane Waves

Now let's look at ordinary waves. The waves we usually picture look something like this — they don't move.

<img width="800" height="400" alt="Code_Generated_Image (1)" src="https://github.com/user-attachments/assets/6f83642b-4f90-4a2d-806e-ee3595cdf208" />


But a real wave moves like this: a real wave is the static wave from the first picture, plus a term for time:
<img width="800" height="400" alt="Code_Generated_Image_(3)" src="https://github.com/user-attachments/assets/41bd4dd3-91f7-4c94-9650-1f09abee2de9" />


$$e^{i(kx-\omega t)}$$

This is the most basic form of a moving **plane wave**. The $\omega t$ term gives the wave its time-dependent motion; the $kx$ term sets the **wave number** of the stationary wave, like in the first wave picture.

$$k=\frac{2\pi}{\lambda}$$

$$k:\ \text{wavenumber (Unit: rad/m)}$$

$$\lambda:\ \text{wavelength (Unit: m)}$$

The wavenumber formula is $2\pi$ divided by the wavelength; since $2\pi$ is the phase change over one wavelength, this tells us the wavenumber is the phase change per unit distance.

A plane wave uses the $e^{ikx}$ term to express the shape of the stationary wave, and the $e^{-i\omega t}$ term to express its progression over time. One thing to note: when a plane wave moves, we often show only its **real part**.

<img width="800" height="500" alt="Code_Generated_Image_(4)" src="https://github.com/user-attachments/assets/acd8933c-950e-45c4-9b8d-ec0b9e09cf9f" />
<img width="800" height="580" alt="traveling_wave_3d_with_real" src="https://github.com/user-attachments/assets/784c30af-9244-4d7f-b970-92837d059ced" />

The blue graph shows only the real part of $e^{i(kx-\omega t)}$, which moves helically.

Complex-plane concepts come up constantly in quantum mechanics and physics as the notion of **phase**, so if you gloss over them without understanding, you'll pay for it later. If anything is unclear, please make sure you understand it properly before moving on. And that's it for this post — thanks for reading this long piece.

---

*This post is written from my own perspective, so it may contain errors. Questions are always welcome — feel free to ask anytime.*
