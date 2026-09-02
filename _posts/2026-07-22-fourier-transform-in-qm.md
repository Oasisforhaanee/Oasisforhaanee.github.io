---
layout: post
title: "The Fourier Transform in Quantum Mechanics"
date: 2026-07-22
categories: [quantum-mechanics]
tags: [Fourier Transform, Fourier Series, Wave Function, Stationary State]
description: How the Fourier series leads to the Fourier transform, and why that matters in quantum mechanics for decomposing a wave function into stationary states of definite momentum.
canonicalURL: "https://blog.naver.com/kkul20235/224354607368"
usemathjax: true
comments: true

---

This post covers the Fourier transform. Before turning to the transform itself, we need the **Fourier series**.

## Fourier series

The Fourier series is the expression

$$f(t)=\frac{a_0}{2}+\sum _{n=1}^{\infty }\left[a_n\cos (n\omega _0t)+b_n\sin (n\omega _0t)\right]\ \ \ \left(\omega _0=\frac{2\pi }{T}\right)$$

This states that *any* function of period $T$ can be expressed as a sum of sine and cosine functions with suitable coefficients.

Suppose, for example, that we have a sawtooth-shaped function.

![Sawtooth-shaped graph](/assets/img/fourier_sawtooth.png)

This sawtooth can be expressed as a sum of appropriately chosen sines and cosines. The figure below shows that adding the five functions on the left produces something close to the graph on the right—not identical, but similar.

![Result of summing 5 functions (left: 5 functions, right: their sum)](/assets/img/fourier_5sum.png)

The figure below shows the result of adding 100, then 1000 functions. It is not exactly identical, but it becomes close enough that the difference is imperceptible.

![Result of summing 100 functions (left) and 1000 functions (right)](/assets/img/fourier_100_1000.png)

The key is finding the coefficients of the sine and cosine functions. This too is mathematically straightforward:

$$a_0=\frac{2}{T}\int _{-T/2}^{T/2}f(t)\, dt$$

$$a_n=\frac{2}{T}\int _{-T/2}^{T/2}f(t)\cos (n\omega _0t)\, dt$$

$$b_n=\frac{2}{T}\int _{-T/2}^{T/2}f(t)\sin (n\omega _0t)\, dt$$

A proper explanation would require orthogonality from linear algebra, but for now it suffices to know that the coefficients are given by such formulas.

The Fourier series has a fundamental limitation: it holds only for *periodic* functions. Since it sums $\sin(n\omega_0t)$ and $\cos(n\omega_0t)$, the result necessarily has period $2\pi/\omega_0$. Just as adding functions of periods 1, 2, and 4 yields a function of period 4, as long as $\omega_0$ is finite the series cannot represent non-periodic functions.

## Fourier transform

$$f(t)=\frac{1}{2\pi }\int _{-\infty }^{\infty }F(\omega )e^{i\omega t}\, d\omega \ \ \ (t\leftrightarrow \omega \text{ transform})$$

$$f(x)=\frac{1}{2\pi }\int _{-\infty }^{\infty }F(k)e^{ikx}\, dk \ \ \ (x\leftrightarrow k \text{ transform})$$

The Fourier transform is very similar to the Fourier series, with one difference: an integral instead of a sum (Σ). Earlier we noted that the period of the Fourier series is $2\pi/\omega_0$; here the range of $\omega$ is extended to the entire interval from $-\infty$ to $+\infty$. The period $T$ thus grows to infinity, and—put somewhat loosely—the transform holds even for non-periodic functions.

The factor $e^{i\omega t}$, as explained in the [complex-plane post](https://oasisforhaanee.github.io/complex-plane/), is a function spiraling along the time and complex-plane axes. It plays the role of $\cos$ and $\sin$ in the Fourier series. The multiplicative factor $F(\omega)$ plays the role of the coefficient for each $\omega$, analogous to $a_n$ and $b_n$.

Why is this important in quantum mechanics? Earlier, in discussing stationary states, we noted that the energy changes depending on how much the stationary states are superimposed. Given an arbitrary wave function, applying the Fourier transform decomposes it into infinitely many functions each of constant $k$, and finding their coefficients reveals the energy distribution contained in the wave function.

Consider an example.

The Fourier transform used in quantum mechanics is with respect to space rather than time. If a wave function at $t=0$ has some given form, the Fourier transform expresses it as a sum of infinitely many $e^{ikx}$ terms:

$$\psi (x,0)=\frac{1}{\sqrt{2\pi }}\int _{-\infty }^{\infty }\phi (k)e^{ikx}\, dk$$

Suppose we have an arbitrary wave function like the one below, at $t=0$.

![An arbitrary wave function at t=0](/assets/img/fourier_wavefunction.png)

This function can be expressed as a sum of functions with many different $k$ values.

![Left: sum of wave functions with several k values. Right: psi(k) found over a continuous k range to build the actual psi(x,0)](/assets/img/fourier_psi_k_left.png)

![Left: sum of wave functions with several k values. Right: psi(k) over a continuous k range](/assets/img/fourier_psi_k_right.png)

The stationary-state energy for $e^{ikx}$ was said to be $E=\frac{\hbar^2 k^2}{2m}$. In a stationary state the wave function factors into a time part and a space part, so the stationary-state wave function of wave number $k$ can be written as

$$\Psi _k(x,t)=\psi (k)\, e^{ikx}\, e^{-i\frac{E_k}{\hbar }t}$$

and the total wave function is a superposition of such terms, with the degree of superposition given by the coefficient $\psi(k)$:

$$\Psi (x,t)=\frac{1}{\sqrt{2\pi }}\int _{-\infty }^{\infty }\psi (k)\, e^{ikx}\, e^{-i\frac{E_k}{\hbar }t}\, dk$$

Consider the time part. In the time factor, the energy $E_k$ grows with the magnitude of $k$. The higher the energy, the faster the time factor $e^{-iEt/\hbar}$ oscillates, so low-energy and high-energy components evolve at different rates, as in the animation below.

![Quantum waves spreading over time](/assets/img/fourier_quantum_waves.gif)

As time passes, therefore, the original shape of the wave function is not maintained; it gradually spreads. The lower-energy components spread slowly and the higher-energy components spread quickly, so the overall shape disperses.

That is it for this post. Thank you for reading.

---

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
