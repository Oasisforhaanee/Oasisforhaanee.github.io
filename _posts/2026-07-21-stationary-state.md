---
layout: post
title:  "Stationary States"
date:   2026-07-21 14:00:00 +0900
categories: [quantum-mechanics, physics]
tags: [Stationary State, Schrödinger Equation, Wave Function]
description: Why the time-independent Schrödinger equation only holds for special states, and how superposition makes the full time-dependent equation linear.
canonicalURL: "https://blog.naver.com/kkul20235/224353189556"
usemathjax: true
comments: true
permalink: /stationary-state/
---

If you haven't already, I'd recommend reading the previous post first:
- [The Schrödinger Equation (Time-Independent & Time-Dependent)](https://oasisforhaanee.github.io/schrodinger-equation/)

Earlier we wrote the time-dependent wave function as a product of a spatial part and a temporal part:

$$\Psi(x,t)=\psi(x)\phi(t)$$

That separation gave us two pieces:

- time part: $\phi(t)=e^{-iEt/\hbar}$
- space part: $-\frac{\hbar^2}{2m}\frac{d^2\psi(x)}{dx^2}+V(x)\psi(x)=E\psi(x)$

But this separated form does **not** hold for every wave function. Let's step back to the full time-dependent Schrödinger equation.

This is the time-dependent Schrödinger equation, and it holds for **any** wave function. Think of it as $F = ma$ for quantum waves: it's universally valid.

The key hidden assumption was the **separation of variables**: we assumed the wave function could be written as a product $\psi(x)\phi(t)$. That assumption only works for certain special states.

Suppose we had two stationary states, one with energy $E_1$ and wave function $\psi_1(x,t)$, and another with energy $E_2$ and wave function $\psi_2(x,t)$. Their superposition is:

$$\Psi(x,t) = c_1\,\psi_1(x,t) + c_2\,\psi_2(x,t)$$

For this superposition, **the separation of variables breaks down**. We can no longer write $\Psi$ as a single product $\psi(x)\phi(t)$.

So the time-independent Schrödinger equation only holds for those special energy eigenstates. We call those **stationary states**.

But then how can the time-dependent Schrödinger equation be valid for all states? Because **it is linear**. If $\psi_1$ and $\psi_2$ both satisfy the Schrödinger equation, then any superposition

$$\Psi(x,t)=c_1\,\psi_1(x,t)+c_2\,\psi_2(x,t)$$

is also a valid solution.

This means: if you superpose multiple stationary states, the resulting state is still a perfectly valid solution of the full time-dependent Schrödinger equation. The coefficients $c_1, c_2, \dots$ control how much of each stationary state is present.

To make this more concrete, consider a free electron ($V(x)=0$). A plane wave with wavenumber $k$ has energy:

$$E_k=\frac{\hbar^2 k^2}{2m}$$

So each $k$ corresponds to one stationary-state energy. When we superpose many such plane waves, the resulting state has a spread of energies, determined by the Fourier coefficients $\psi(k)$. This connection leads naturally to the Fourier transform.

## Summary

- The time-independent Schrödinger equation holds only for **stationary states** — states with definite energy.
- A superposition of stationary states is still a valid solution of the **time-dependent** Schrödinger equation.
- In superposition, the energy is not single-valued; it depends on how much of each stationary state is present.

We'll need the Fourier transform to make point 3 much more precise.

Thanks for reading, and feel free to ask questions.

---
> This post reflects my personal understanding, so there may be mistakes. Questions are always welcome.<br>
> Original: [Naver Blog](https://blog.naver.com/kkul20235/224353189556)
