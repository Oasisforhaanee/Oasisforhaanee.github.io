---
layout: post
title: "Fourier Transform"
date: 2026-07-26
categories: [mathematical-methods, quantum-mechanics]
tags: [Fourier Transform, Orthogonality, Quantum Mechanics]
description: Deriving the Fourier transform using orthogonality of plane waves, and why that matters in quantum mechanics for representing a wave function in momentum space.
canonicalURL: "https://blog.naver.com/kkul20235/224358309175"
usemathjax: true
comments: true
---

In this post, I'll walk through the derivation of the Fourier transform.

The following equations are the Fourier transform between position \(x\) and wave number \(k\).

$$
f(x)=\frac{1}{2\pi }\int _{-\infty }^{\infty }F(k)e^{ikx}\, dk \qquad x\leftrightarrow k\ \text{transform}
$$

$$
F(k)=\int _{-\infty }^{\infty }f(x)e^{-ikx}\, dx
$$

Let's see why it takes this exact form.

## Orthogonality

If you haven't read it yet, the post on [Orthogonality](https://oasisforhaanee.github.io/orthogonality/) will help a lot.

The inner product of functions is written as follows.

$$
\langle f, g \rangle=\int_a^b \overline{f(x)} \cdot g(x)\, dx = 0
$$

Here \(\overline{f(x)}\) means the complex conjugate, i.e. flip the sign in front of the imaginary unit \(i\).

If we compute the inner product of \(e^{ikx}\) with different values of \(k\), we can see that \(e^{ikx}\) is orthogonal for different \(k\) values.

$$
\left\langle e^{ik_1x}, e^{ik_2x} \right\rangle =\int_{-\infty}^{\infty} e^{-ik_1x}\, e^{ik_2x}\, dx =\int_{-\infty}^{\infty} e^{i(k_2 - k_1)x}\, dx
$$

If \(k_1 \ne k_2\):

$$
\int_{-\infty}^{\infty} e^{i(k_2 - k_1)x}\, dx = 0
$$

If \(k_1 = k_2\):

$$
\int_{-\infty}^{\infty} 1\, dx = \infty
$$

Combined:

$$
\int_{-\infty}^{\infty} e^{i(k_2 - k_1)x}\, dx = 2\pi \cdot \delta(k_2 - k_1)
$$

The symbol \(\delta\) denotes the **Dirac delta function**: it diverges only when the input \(k_2 - k_1 = 0\), and is zero everywhere else. Also, integrating this function over the whole domain gives 1. The last equation above reflects exactly that property, multiplied by \(2\pi\).

So as long as \(e^{ikx}\) has a different \(k\), it can be regarded as belonging to a different basis. And for all \(k\),

$$
f(x)=A\int_{-\infty}^{\infty} F(k)\, e^{ikx}\, dk
$$

holds true. Here \(A\) is an arbitrary constant.

So we need to find \(F(k)\). The method is straightforward: multiply both sides by \(e^{-ik_1x}\) and integrate from \(-\infty\) to \(\infty\) with respect to \(x\).

$$
\int_{-\infty}^{\infty} f(x)\, e^{-ik_1x}\, dx =\int_{-\infty}^{\infty} \left[ A\int_{-\infty}^{\infty} F(k)\, e^{ikx}\, dk \right] e^{-ik_1x}\, dx
$$

Since \(k\) and \(x\) are independent variables, we can swap the order just like in multivariate functions.

$$
\int_{-\infty}^{\infty} \left[ A\int_{-\infty}^{\infty} F(k)\, e^{ikx}\, dk \right] e^{-ik_1x}\, dx =A\int_{-\infty}^{\infty} F(k)\left( \int_{-\infty}^{\infty} e^{i(k-k_1)x}\, dx \right) dk
$$

As mentioned earlier, the integral of \(e^{i(k-k_1)x}\) over the whole range takes the form of \(2\pi\) times the delta function. Substituting this, we get:

$$
\int_{-\infty}^{\infty} e^{i(k-k_1)x}\, dx = 2\pi \cdot \delta(k - k_1)
$$

$$
A\int_{-\infty}^{\infty} F(k)\left( \int_{-\infty}^{\infty} e^{i(k-k_1)x}\, dx \right) dk=A\int_{-\infty}^{\infty} F(k)\, 2\pi\, \delta(k-k_1)\, dk = 2\pi A \cdot F(k_1)
$$

Substituting \(k_1 \to k\) and cleaning up, we obtain:

$$
F(k)=\frac{1}{2\pi A}\int_{-\infty}^{\infty} f(x)\, e^{-ikx}\, dx
$$

$$
f(x)=A\int_{-\infty}^{\infty} F(k)\, e^{ikx}\, dk
$$

Here \(A\) is just a proportionality constant, so we can set it to whatever we like. In engineering it is usually fixed to \(1/2\pi\) for uniformity, while in some physics contexts it is set to \(1/\sqrt{2\pi}\) to keep the coefficients identical.

$$
A=\frac{1}{2\pi} \quad\Rightarrow\quad F(k) =\int_{-\infty}^{\infty} f(x)\, e^{-ikx}\, dx
$$

$$
f(x)=\frac{1}{2\pi}\int_{-\infty}^{\infty} F(k)\, e^{ikx}\, dk
$$

$$
A=\frac{1}{\sqrt{2\pi}} \quad\Rightarrow\quad F(k) =\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} f(x)\, e^{-ikx}\, dx
$$

$$
f(x)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} F(k)\, e^{ikx}\, dk
$$

In this post we learned the Fourier transform between space and wave number (\(x \leftrightarrow k\)), but exactly the same idea works for the transform between time and angular frequency (\(t \leftrightarrow \omega\)).

The key point is that **any** function \(f(x)\) can be written as an infinite superposition of simple plane waves \(e^{ikx}\), and the weight of each plane wave can be computed explicitly through the Fourier transform. That's the real meaning of the formula.

That's it for this post. Thank you for reading all the way through.

---

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
