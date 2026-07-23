---
layout: post
title:  "The Fourier Transform in Quantum Mechanics"
date:   2026-07-19 14:00:00 +0900
categories: [quantum-mechanics, mathematics]
tags: [Fourier Transform, Fourier Series, Quantum Mechanics, Wave Function]
description: From Fourier series to the Fourier transform — and why decomposing a wave function into momentum components matters in quantum mechanics.
canonicalURL: "https://blog.naver.com/kkul20235/224354607368"
usemathjax: true
comments: true
permalink: /fourier-transform-in-quantum-mechanics/
---

Welcome back. In this post we'll look at the **Fourier transform**. Before diving into it, though, we need to understand the **Fourier series** first.

## Fourier Series

A Fourier series is the following expression:

$$f(t)=\frac{a_0}{2}+\sum _{n=1}^{\infty }\left[a_n\cos (n\omega _0t)+b_n\sin (n\omega _0t)\right]\quad \left(\omega _0=\frac{2\pi }{T}\right)$$

What this means is that **any periodic function** with period $T$ can be written as a sum of sines and cosines with appropriate coefficients.

Let's take the sawtooth wave as an example.

<!-- TODO: insert sawtooth graph from the original Naver post -->

Using the right coefficients, we can reconstruct this sawtooth wave out of sines and cosines. The figures below show what happens when we add 5, 100, and then 1000 such terms — the shape gets closer and closer to the original function, even if it's never exactly the same.

<!-- TODO: insert reconstruction figures from the original Naver post -->

The key question is how to actually compute those coefficients, and the answer is:

$$a_0=\frac{2}{T}\int _{-T/2}^{T/2}f(t)\, dt$$

Explaining this properly requires the orthogonality ideas from linear algebra, so for now it's enough to notice that such formulas *do* exist.

But the Fourier series has a serious limitation: it only works for **periodic functions**. Because we're only adding sines and cosines of fixed frequency $\omega_0$, the overall period is forced to be $2\pi/\omega_0$. So a non-periodic function cannot be represented exactly this way.

## Fourier Transform

The Fourier transform is very similar to the Fourier series, except that instead of a sum we use an **integral**, and instead of only frequencies around some $\omega_0$ we integrate over the whole range $-\infty < \omega < \infty$. In a slightly hand-wavy but useful way, think of it as letting the period $T\to\infty$, which turns a periodic function into a non-periodic one.

The factor $e^{i\omega t}$ is doing the same job that $\cos$ and $\sin$ did in the series, just wrapped into a single complex exponential. And the prefactor $F(\omega)$ plays the same role as the $a_n$ and $b_n$ coefficients from before.

So why does this matter in quantum mechanics? Given an arbitrary wave function, the Fourier transform breaks it into infinitely many plane waves with definite $k$. The resulting weights $\psi(k)$ describe how much of each momentum/energy component is present in the original state.

In quantum mechanics we usually use the **spatial** Fourier transform rather than the temporal one. If the wave function at time $t=0$ has some arbitrary shape $\psi(x,0)$, we can rewrite it as a superposition of plane waves $e^{ikx}$ with continuous weights $\psi(k)$.

For a plane-wave component $e^{ikx}$, the stationary-state energy is $E_k=\hbar^2 k^2/2m$. The total wave function is a superposition of these stationary states, and the superposition weight is exactly the Fourier coefficient $\psi(k)$.

Now look at the **time-dependent factor**: higher $|k|$ means higher energy, which means $e^{-iE_k t/\hbar}$ oscillates faster in time. So over time the components with large $|k|$ spread out faster, and the original shape of the wave function gradually broadens. That's why a localized wave packet does not stay localized forever.

That's it for this post. Thanks for reading, and feel free to ask questions if anything was unclear.

---
> This post reflects my personal understanding, so there may be mistakes. Questions are always welcome.<br>
> Original: [Naver Blog](https://blog.naver.com/kkul20235/224354607368)
