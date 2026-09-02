---
layout: post
title: "Fourier Transform"
date: 2026-07-26
categories: [mathematics]
tags: [Fourier Transform, Orthogonality, Dirac Delta Function, Complex Exponentials, Quantum Mechanics]
description: "Derivation of the Fourier transform from the orthogonality of complex exponentials — using the Dirac delta function and the normalization constant A."
canonicalURL: "https://blog.naver.com/kkul20235/224358309175"
usemathjax: true
comments: true
permalink: /fourier-transform/

---

This post derives the Fourier transform. The following equations are the Fourier transform relations between position $x$ and wavenumber $k$:

$$f(x)=\frac{1}{2\pi }\int _{-\infty}^{\infty}F(k)e^{ikx}dk\ \ \ (x\leftrightarrow k\ \text{transform})$$

$$F(k)=\int _{-\infty }^{\infty }f(x)e^{-ikx}\, dx$$

Let us see why they take this form.

## Orthogonality

It will help to first read [the inner product and orthogonality of functions](https://oasisforhaanee.github.io/inner-product-and-orthogonality-of-functions/).

The inner product of functions is defined as

$$\langle f,g\rangle=\int _a^bf(x)^{*}\cdot g(x)\, dx=0$$

where $f(x)^{*}$ denotes the complex conjugate, obtained by flipping the sign in front of the imaginary unit $i$ in $f(x)$.

The Fourier transform uses $e^{ikx}$ as its basis. Computing the inner product of $e^{ikx}$ for different values of $k$ shows that these functions are orthogonal whenever $k$ differs:

$$\left\langle e^{ik_1x},e^{ik_2x}\right\rangle =\int _{-\infty }^{\infty }e^{-ik_1x}e^{ik_2x}\, dx=\int _{-\infty }^{\infty }e^{i(k_2-k_1)x}\, dx$$

$$k_1\ne k_2\ :\ \int _{-\infty }^{\infty }e^{i(k_2-k_1)x}\, dx=0$$

$$k_1=k_2:\int _{-\infty }^{\infty }1\, dx=\infty $$

$$\int _{-\infty }^{\infty }e^{i(k_2-k_1)x}\, dx=2\pi \cdot \delta (k_2-k_1)$$

The symbol $\delta$ is the Dirac delta function, which diverges to infinity only when its argument ($k_2-k_1$) is zero and is zero for all other input values. Its integral over the entire real line is $1$. The factor $2\pi$ in the last equation comes from the properties of the Dirac delta function.

Since the complex exponential $e^{ikx}$ is orthogonal for distinct values of $k$, it can serve as an independent basis for each $k$ component. Just as the Fourier series uses $\cos$ and $\sin$ as a basis by virtue of the orthogonality of trigonometric functions, summing $e^{ikx}$ over all continuous $k$ values lets us express any function $f(x)$.

Because $k$ has a continuous spectrum rather than discrete values, an arbitrary function $f(x)$ is expressed with an integral (∫) rather than a sum (∑):

$$f(x)=A\int _{-\infty}^{\infty}F(k)e^{ikx}dk$$

Here $A$ is a normalization constant that adjusts the overall scale to match the function $f(x)$.

We now need to find $F(k)$. The method is straightforward: multiply both sides by $e^{-ik_1x}$ and integrate over $x$ from $-\infty$ to $\infty$. This exploits the orthogonality of $e^{ikx}$ for distinct $k$, which makes the integral vanish:

$$\int _{-\infty }^{\infty }f(x)e^{-ik_1x}\, dx=\int _{-\infty }^{\infty }\left[A\int _{-\infty }^{\infty }F(k)e^{ikx}\, dk\right]e^{-ik_1x}\, dx$$

Since $k$ and $x$ are independent variables, the order of integration may be swapped:

$$\int _{-\infty }^{\infty }\left[A\int _{-\infty }^{\infty }F(k)e^{ikx}\, dk\right]e^{-ik_1x}\, dx=A\int _{-\infty }^{\infty }F(k)\left(\int _{-\infty }^{\infty }e^{i(k-k_1)x}\, dx\right)dk$$

As noted, the integral of $e^{i(k-k_1)x}$ over the entire real line is $2\pi$ times the delta function. Substituting this in simplifies the expression:

$$\int _{-\infty }^{\infty }e^{i(k-k_1)x}\, dx=2\pi \cdot \delta (k-k_1)$$

$$A\int _{-\infty }^{\infty }F(k)\left(\int _{-\infty }^{\infty }e^{i(k-k_1)x}\, dx\right)dk=A\int _{-\infty }^{\infty }F(k)\cdot 2\pi \delta (k-k_1)\, dk=2\pi A\cdot F(k_1)$$

Relabeling $k_1$ as $k$ and rearranging, we finally obtain

$$F(k)=\frac{1}{2\pi A}\int _{-\infty }^{\infty }f(x)e^{-ikx}\, dx$$

$$f(x)=A\int _{-\infty }^{\infty }F(k)e^{ikx}\, dk$$

Since $A$ is a proportionality constant, its value is a matter of convention. In engineering, $A$ is typically set to $1/2\pi$ to unify the form; in some contexts $A=1/\sqrt{2\pi}$ is used so that the forward and inverse transforms have matching coefficients:

$$A=\frac{1}{2\pi }\ :\ \ \ \ \ \ F(k)=\int _{-\infty }^{\infty }f(x)e^{-ikx}\, dx$$

$$\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ f(x)=\frac{1}{2\pi }\int _{-\infty }^{\infty }F(k)e^{ikx}\, dk$$

$$A=\frac{1}{\sqrt{2\pi }}:\ F(k)=\frac{1}{\sqrt{2\pi }}\int _{-\infty }^{\infty }f(x)e^{-ikx}\, dx$$

$$\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ f(x)=\frac{1}{\sqrt{2\pi }}\int _{-\infty }^{\infty }F(k)e^{ikx}\, dk$$

To visualize: imagine infinitely many $e^{ikx}$ waves spiraling through complex space, each multiplied by its coefficient $F(k)$ and all superimposed. Viewed along the real axis, this superposition forms the function $f(x)$. The graphs below show $e^{ikx}$ waves for many $k$ values being superimposed to express $f(x)$ on the complex plane, and how viewing along the real axis reproduces the familiar $f(x)$:

![Superimposing e^(ikx) waves for many k values to build f(x)](/assets/img/fourier-superposition.png)

![3D visualization of the complex plane wave](/assets/img/3d-complex-wave.gif)

This post has covered the Fourier transform between space and wavenumber ($x$–$k$). The transform between time and angular frequency ($t$–$\omega$) is obtained in exactly the same way, simply by relabeling the horizontal axis as time.

The key point is that any function $f(x)$ can be expressed as an infinite superposition of simple plane waves ($e^{ikx}$), and the weight (coefficient) of each plane wave can be recovered through the Fourier transform.

---

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
