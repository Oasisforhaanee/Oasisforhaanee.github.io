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

In this post, we'll look at the proof of the Fourier transform. The following equations are the Fourier transform relations between position $x$ and wavenumber $k$:

$$f(x)=\frac{1}{2\pi }\int _{−∞}^∞F(k)e^{ikx}dk\ \ \ x↔k\ transform$$

$$F(k)=\int _{-\infty }^{\infty }f(x)e^{-ikx}\, dx$$

Let's find out why they're expressed this way.

## Orthogonality

It would help your understanding to read [the inner product and orthogonality of functions](https://oasisforhaanee.github.io/inner-product-and-orthogonality-of-functions/) first.

The inner product of functions is expressed as follows:

$$<f,g>=\int _a^b\combi{f(x)}*\cdot g(x)\, dx=0$$

Here, $f(x)^*$ means the complex conjugate, which is obtained by flipping the sign in front of the imaginary unit $i$ in the function $f(x)$.

The Fourier transform sets $e^{ikx}$ as its basis. If we compute the inner product of $e^{ikx}$ for different $k$ values, we can see that $e^{ikx}$ is orthogonal for all cases with different $k$ values:

$$\left\langle e^{ik_1x},e^{ik_2x}\right\rangle =\int _{-\infty }^{\infty }e^{-ik_1x}e^{ik_2x}\, dx=\int _{-\infty }^{\infty }e^{i(k_2-k_1)x}\, dx$$

$$\combi{k}_1\ne \combi{k}_2\ :\ \int _{-\infty }^{\infty }e^{i(k_2-k_1)x}\, dx=0$$

$$\combi{k}_1=\combi{k}_2:\int _{-\infty }^{\infty }1\, dx=\infty $$

$$\int _{-\infty }^{\infty }e^{i(k_2-k_1)x}\, dx=2\pi \cdot \delta (k_2-k_1)$$

The symbol marked with $\delta$ is the Dirac delta function, which diverges to infinity only when its input (= $k_2-k_1$) is 0, and is 0 for all other input values. Also, integrating this function over the entire interval gives 1. You can think of the $2\pi$ in the last equation as coming from the properties of the Dirac delta function.

In other words, since the complex exponential function $e^{ikx}$ is orthogonal when it has different $k$ values, it can be used as an independent basis for each $k$ component. Just like the Fourier series, which used cos and sin as its basis based on the orthogonality of trigonometric functions, using the sum of $e^{ikx}$ for all continuous $k$ values allows us to express any arbitrary function $f(x)$.

Here, since $k$ has a continuous spectrum rather than discrete values, an arbitrary function $f(x)$ can be expressed in the form of an integral (∫) rather than a sum (∑), and that equation is as follows:

$$f(x)=A\int _{−∞}^∞F(k)e^{ikx}dk$$

Here, $A$ is a normalization constant that adjusts the size to fit the function $f(x)$.

Now we need to find $F(k)$. The way to find $F(k)$ is simple. Just multiply both sides by $e^{-ik_1x}$ and integrate with respect to $x$ from $-\infty$ to $\infty$. This uses the fact that $e^{ikx}$ is orthogonal for different $k$ values, making the integral 0:

$$\int _{-\infty }^{\infty }f(x)e^{-ik_1x}\, dx=\int _{-\infty }^{\infty }\left[A\int _{-\infty }^{\infty }F(k)e^{ikx}\, dk\right]e^{-ik_1x}\, dx$$

In this equation, $k$ and $x$ are independent variables, so it doesn't matter if we swap their order. Just like a multivariable function:

$$\int _{-\infty }^{\infty }\left[A\int _{-\infty }^{\infty }F(k)e^{ikx}\, dk\right]e^{-ik_1x}\, dx=A\int _{-\infty }^{\infty }F(k)\left(\int _{-\infty }^{\infty }e^{i(k-k_1)x}\, dx\right)dk$$

As mentioned earlier, the integral of $e^{i(k-k_1)x}$ over the entire interval comes out in the form of $2\pi$ times the delta function. Substituting this in, it simplifies as follows:

$$\int _{-\infty }^{\infty }e^{i(k-k_1)x}\, dx=2\pi \cdot \delta (k-k_1)$$

$$A\int _{-\infty }^{\infty }F(k)\left(\int _{-\infty }^{\infty }e^{i(k-k_1)x}\, dx\right)dk=A\int _{-\infty }^{\infty }F(k)\cdot 2\pi \delta (k-k_1)\, dk=2\pi A\cdot F(k_1)$$

Substituting $k$ for $k_1$ and rearranging finally, we get:

$$F(k)=\frac{1}{2\pi A}\int _{-\infty }^{\infty }f(x)e^{-ikx}\, dx$$

$$f(x)=A\int _{-\infty }^{\infty }F(k)e^{ikx}\, dk$$

Here, $A$ is a proportionality constant, so it doesn't matter what value we set it to. In general, engineering sets $A$ to $1/2\pi$ to unify the form, and in some cases $A=1/\sqrt{2\pi}$ is used to make the coefficients match:

$$A=\frac{1}{2\pi }\ :\ \ \ \ \ \ F(k)=\int _{-\infty }^{\infty }f(x)e^{-ikx}\, dx$$

$$\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ f(x)=\frac{1}{2\pi }\int _{-\infty }^{\infty }F(k)e^{ikx}\, dk$$

$$A=\frac{1}{\sqrt{2\pi }}:\ F(k)=\frac{1}{\sqrt{2\pi }}\int _{-\infty }^{\infty }f(x)e^{-ikx}\, dx$$

$$\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ f(x)=\frac{1}{\sqrt{2\pi }}\int _{-\infty }^{\infty }F(k)e^{ikx}\, dk$$

To visualize this: imagine infinitely many $e^{ikx}$ waves spiraling out in complex space, each multiplied by its coefficient $F(k)$ and all superimposed. Looking at this from the real axis direction, the function $f(x)$ we're looking for is completed. The graph below shows $e^{ikx}$ waves for infinitely many $k$ values being superimposed (= the graphs on the right) to express $f(x)$ on the complex plane, and when viewed from the real axis, the $f(x)$ we know comes out:

![Superimposing e^(ikx) waves for many k values to build f(x)](/assets/img/fourier-superposition.png)

![3D visualization of the complex plane wave](/assets/img/3d-complex-wave.gif)

In this post, we looked at the Fourier transform between space and wavenumber (x-k). The time-angular frequency (t-w) Fourier transform can be transformed in exactly the same way, just by changing the x-axis in the graph above to the time axis.

The key point here is that any function $f(x)$ can be expressed as an infinite superposition of simple plane waves ($e^{ikx}$), and the weight (coefficient) that each plane wave takes can also be clearly found through the Fourier transform.

That's it for this post. Thanks for reading the long post.

---

This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.
