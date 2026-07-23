---
layout: post
title: "The Fourier Transform in Quantum Mechanics"
date: 2026-07-22
categories: [quantum-mechanics, physics]
tags: [Fourier Transform, Fourier Series, Wave Function, Stationary State]
description: How the Fourier series leads to the Fourier transform, and why that matters in quantum mechanics for decomposing a wave function into stationary states of definite momentum.
canonicalURL: "https://blog.naver.com/kkul20235/224354607368"
usemathjax: true
comments: true
---

In this post I'll cover the Fourier transform. Before we look at the Fourier transform itself, we first need to know about something called the **Fourier series**.

## Fourier series

The Fourier series refers to the following expression:

$$f(t)=\frac{a_0}{2}+\sum _{n=1}^{\infty }\left[a_n\cos (n\omega _0t)+b_n\sin (n\omega _0t)\right]\ \ \ \left(\omega _0=\frac{2\pi }{T}\right)$$

This means that *any* function with period $T$ can be expressed as a sum of sine and cosine functions multiplied by appropriate coefficients.

For example, let's suppose there's a function shaped like a sawtooth.

![Sawtooth-shaped graph](/assets/img/fourier_sawtooth.png)

This sawtooth graph can be expressed as a sum of appropriately chosen sine and cosine functions. The figure below means that adding the 5 functions on the left gives something like the graph on the right. It's still a bit different from the sawtooth, but it looks similar.

![Result of summing 5 functions (left: 5 functions, right: their sum)](/assets/img/fourier_5sum.png)

The figure below shows the graph shape when we add not 5, but 100, and then 1000 functions. It's not exactly identical, but you can see it gets close enough that you can't tell the difference.

![Result of summing 100 functions (left) and 1000 functions (right)](/assets/img/fourier_100_1000.png)

The key here is finding the coefficients of the sine and cosine functions. This too is mathematically possible:

$$a_0=\frac{2}{T}\int _{-T/2}^{T/2}f(t)\, dt$$

$$a_n=\frac{2}{T}\int _{-T/2}^{T/2}f(t)\cos (n\omega _0t)\, dt$$

$$b_n=\frac{2}{T}\int _{-T/2}^{T/2}f(t)\sin (n\omega _0t)\, dt$$

To explain this properly we'd need to bring in orthogonality from linear algebra, but for now it's enough to just know that the coefficients can be found through formulas like these.

But the Fourier series has a fatal flaw: it only holds for *periodic* functions. Since we're adding $\sin(n\omega_0t)$ and $\cos(n\omega_0t)$, the period is inevitably limited to $2\pi/\omega_0$. It's like how adding functions of period 1, 2, and 4 gives a function of period 4. What this means is that as long as $\omega_0$ takes a finite value, it cannot hold for non-periodic functions.

## Fourier transform

$$f(t)=\frac{1}{2\pi }\int _{-\infty }^{\infty }F(\omega )e^{i\omega t}\, d\omega \ \ \ t\leftrightarrow \omega \text{ transform}$$

$$f(x)=\frac{1}{2\pi }\int _{-\infty }^{\infty }F(k)e^{ikx}\, dk \ \ \ x\leftrightarrow k \text{ transform}$$

The Fourier transform is very similar to the Fourier series, but with one difference: instead of a sum ($\Sigma$), it uses an integral. Earlier we said the period of the Fourier series is $2\pi/\omega_0$; here we've expanded the range of $\omega$ to the entire interval from $-\infty$ to $+\infty$. So the period $T$ grows to infinity — a bit of a wordplay, but in the end it holds even for non-periodic functions.

The $e^{i\omega t}$ term afterward, as you'll see if you read the complex-plane post, is a function spiraling around in a helix along the time axis and the complex-plane axis over time. That is, it plays the role of $\cos$ and $\sin$ from the Fourier series. And the $F(\omega)$ multiplied in front plays the role of the coefficient for each $\omega$, like $a_n$, $b_n$ in the Fourier series. (Complex-plane post: ["The Complex Plane"](https://oasisforhaanee.github.io/complex-plane/).)

https://blog.naver.com/kkul20235/224344379486

So why is this important in quantum mechanics? Earlier I explained that in a stationary state, the energy changes depending on how much the stationary states are superimposed. Given an arbitrary wave function, if we use the Fourier transform to break it into infinitely many functions each with a constant $k$ value, and find their coefficients, this expresses the energy distribution that the wave function contains.

Let me explain with an example.

First, the Fourier transform used in quantum mechanics is one with respect to space rather than time, and it has the following form. If a wave function at time $t=0$ looks like the following, we can use the Fourier transform to express it as a sum of infinitely many $e^{ikx}$'s.

$$\psi (x,0)=\frac{1}{\sqrt{2\pi }}\int _{-\infty }^{\infty }\phi (k)e^{ikx}\, dk$$

For example, suppose we have an arbitrary wave function like the one in the figure below. The time is $t=0$.

![An arbitrary wave function at t=0](/assets/img/fourier_wavefunction.png)

This function can be expressed as a sum of functions with many different $k$ values.

![Left: sum of wave functions with several k values. Right: psi(k) found over a continuous k range to build the actual psi(x,0)](/assets/img/fourier_psi_k_left.png)

![Left: sum of wave functions with several k values. Right: psi(k) over a continuous k range](/assets/img/fourier_psi_k_right.png)

The stationary-state energy for $e^{ikx}$ was said to be $E=\frac{\hbar^2 k^2}{2m}$. And in a stationary state the wave function can be factored into a time part and a space part multiplied together. So the stationary-state wave function with wave number $k$ can be written as:

$$\Psi _k(x,t)=\psi (k)\, e^{ikx}\, e^{-i\frac{E_k}{\hbar }t}$$

And the total wave function is a superposition of such wave functions. The degree of superposition is given by the coefficient $\psi(k)$.

$$\Psi (x,t)=\frac{1}{\sqrt{2\pi }}\int _{-\infty }^{\infty }\psi (k)\, e^{ikx}\, e^{-i\frac{E_k}{\hbar }t}\, dk$$

Let's look at the time part here. In the time term, the energy $E_k$ is larger the larger the absolute value of $k$. The higher the energy, the faster the time term of the wave oscillates in $e^{-iEt/\hbar}$, so the low-energy graph and the high-energy graph will progress in a form similar to the video below. The lower graph oscillates faster.

![Quantum waves spreading over time](/assets/img/fourier_quantum_waves.gif)

So as time passes, the original shape of the wave function won't be maintained and it will gradually spread out. The lower-energy side spreads slowly, and the higher-energy side spreads quickly, so the shape itself spreads.

That's it for this post. Thank you for reading all the way through.

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
