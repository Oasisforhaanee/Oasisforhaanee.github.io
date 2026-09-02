---
layout: post
title: "The Inner Product and Orthogonality of Functions"
date: 2026-08-12
categories: [linear-algebra]
tags: [Inner Product, Orthogonality, Hilbert Space, Riemann Sum, Fourier Series, Orthogonal Functions]
description: "Why the inner product of functions is an integral — turning a function into an infinite-dimensional vector via the Riemann sum, when two functions are orthogonal, and how sin(nx) and cos(nx) being orthogonal powers the Fourier series."
canonicalURL: "https://blog.naver.com/kkul20235/224376331608"
usemathjax: true
comments: true
permalink: /inner-product-and-orthogonality-of-functions/

---

This post covers the inner product and orthogonality of functions. This material is very close to the bra-ket notation used throughout quantum mechanics, so it is especially useful for anyone studying quantum mechanics.

If you are not yet familiar with orthogonality, reading the post below first will help:

[Linear Dependence, Linear Independence, and Orthogonality](https://oasisforhaanee.github.io/linear-dependence-independence-and-orthogonality/)

## The Inner Product of Functions

On the interval $[a, b]$, the inner product of two functions is

$$\langle f,g\rangle=\int _a^bf(x)^*\cdot g(x)\, dx$$

Here $f(x)^*$ denotes the complex conjugate of $f(x)$. Since this post deals only with real-valued functions, we may think of $f(x)^*$ as simply $f(x)$.

But why does the inner product of functions take this form? It looks quite different from the vector inner product we know.

Compute the integral using the Riemann sum, the very definition of the integral. Dividing $[a,b]$ into $N$ pieces, with $x_k$ the coordinate of the $k$-th piece:

$$\int _a^bf(x)g(x)\, dx=\sum _{k=1}^Nf(x_k)g(x_k)\, \Delta x$$

As $N\to\infty$ this converges to the true integral. To illustrate, set $f(x)=\cos(x)$ on $[0, 2\pi]$, split into 32 pieces; $f_1, f_2, \dots$ denote the function values at each point.

![f(x) = cos(x) split into 32 pieces](/assets/img/cos-sampled-32.png)

The sampled function values can be written as a vector:

$$\mathbf{f}=\begin{bmatrix}f(x_1)&f(x_2)&f(x_3)&\dots &f(x_N)\end{bmatrix}=\begin{bmatrix}f_1&f_2&f_3&\dots &f_N\end{bmatrix}$$

Likewise, for $g(x)=\sin(x)$:

![g(x) = sin(x) as a vector](/assets/img/sin-sampled-vector.png)

$$\mathbf{g}=\begin{bmatrix}g(x_1)\\g(x_2)\\g(x_3)\\\vdots \\g(x_N)\end{bmatrix}=\begin{bmatrix}g_1\\g_2\\g_3\\\vdots \\g_N\end{bmatrix}$$

Taking the inner product of these two vectors:

$$\begin{bmatrix}f(x_1)&f(x_2)&\dots &f(x_N)\end{bmatrix}\begin{bmatrix}g(x_1)\\g(x_2)\\\vdots \\g(x_N)\end{bmatrix}=\sum _{k=1}^Nf(x_k)g(x_k)$$

This resembles the Riemann-sum expression above. Multiplying by $\Delta x$:

$$\begin{bmatrix}f(x_1)&f(x_2)&\dots &f(x_N)\end{bmatrix}\begin{bmatrix}g(x_1)\\g(x_2)\\\vdots \\g(x_N)\end{bmatrix}\Delta x=(\mathbf{f}\cdot \mathbf{g})\, \Delta x$$

Splitting the function into infinitely many pieces (so that $\Delta x\to 0$) reproduces the integral:

$$\sum _{k=1}^Nf(x_k)g(x_k)\, \Delta x\ \fallingdotseq \int _a^bf(x)g(x)\, dx\ \ \left(N\to\infty\right)$$

In this way, by finely discretizing a function into a vector, we obtain an infinite-dimensional vector space—the **Hilbert space**.

Thus the inner product of functions is no different from the inner product of vectors. A continuous function can be split infinitely finely into a vector with infinitely many components, and taking the inner product of those vectors computes the inner product of the functions.

## The Orthogonality of Functions

For vectors, orthogonality meant a vanishing inner product. The same holds for functions: if two functions, expressed as vectors, have inner product zero, they are orthogonal. That is, if

$$\int _a^bf(x)\cdot g(x)\, dx=0$$

then $f(x)$ and $g(x)$ are orthogonal on $[a,b]$.

Orthogonality of functions is significant: if function A and function B are orthogonal, then—as with orthogonal vectors—B cannot be expressed in terms of A, and the two functions can serve as a basis. The Fourier series is a powerful tool that exploits the orthogonality of sine and cosine to express any function as a sum of infinitely many sine and cosine basis functions.

### The Orthogonality of Sine and Cosine Functions

For $\cos(x)$ and $\sin(x)$ above:

$$\langle \cos (x),\sin (x)\rangle=\int _0^{2\pi }\cos (x)\sin (x)\, dx=\frac{1}{2}\int _0^{2\pi }\sin (2x)\, dx$$

$$=\frac{1}{2}\left[-\frac{1}{2}\cos (2x)\right]_0^{2\pi }=-\frac{1}{4}\left\{\cos (4\pi )-\cos (0)\right\}=0$$

So $\cos(x)$ and $\sin(x)$ can serve as a basis.

More generally, $\cos(nx)$ and $\sin(mx)$ are orthogonal for all integers $n$, $m$:

$$\left\langle \cos (nx),\sin (mx)\right\rangle =\int _{-\pi }^{\pi }\cos (nx)\sin (mx)\, dx$$

$$1.\ n=m$$

$$\int _{-\pi }^{\pi }\cos (nx)\sin (nx)\, dx=\int _{-\pi }^{\pi }\frac{1}{2}\sin (2nx)\, dx=0$$

$$2.\ n\ne m$$

Using $\sin (A)\cos (B)=\frac{1}{2}\left\{\sin (A+B)+\sin (A-B)\right\}$:

$$\int _{-\pi }^{\pi }\sin (mx)\cos (nx)\, dx=\frac{1}{2}\int _{-\pi }^{\pi }\left\{\sin ((m+n)x)+\sin ((m-n)x)\right\}dx$$

$$=\frac{1}{2}\left[-\frac{\cos ((m+n)x)}{m+n}-\frac{\cos ((m-n)x)}{m-n}\right]_{-\pi }^{\pi }=0$$

Similarly, $\sin(nx)$ and $\sin(mx)$, and $\cos(nx)$ and $\cos(mx)$, are orthogonal whenever $n\ne m$.

### 1. Orthogonality of sin(nx), sin(mx)

$$\left\langle \sin (nx),\sin (mx)\right\rangle =\int _{-\pi }^{\pi }\sin (nx)\sin (mx)\, dx$$

$$1.\ n\ne m$$

Using $\sin (A)\sin (B)=\frac{1}{2}\left\{\cos (A-B)-\cos (A+B)\right\}$:

$$\int _{-\pi }^{\pi }\sin (nx)\sin (mx)\, dx=\frac{1}{2}\int _{-\pi }^{\pi }\left\{\cos ((n-m)x)-\cos ((n+m)x)\right\}\, dx$$

$$=\frac{1}{2}\left[\frac{\sin ((n-m)x)}{n-m}-\frac{\sin ((n+m)x)}{n+m}\right]_{-\pi }^{\pi }=0$$

$$2.\ n=m$$

$$\int _{-\pi }^{\pi }\sin ^2(nx)\, dx=\int _{-\pi }^{\pi }\frac{1-\cos (2nx)}{2}\, dx=\left[\frac{x}{2}-\frac{\sin (2nx)}{4n}\right]_{-\pi }^{\pi }=\pi \ \ne 0$$

### 2. Orthogonality of cos(nx), cos(mx)

$$\left\langle \cos (nx),\cos (mx)\right\rangle =\int _{-\pi }^{\pi }\cos (nx)\cos (mx)\, dx$$

$$1.\ n\ne m$$

Using $\cos (A)\cos (B)=\frac{1}{2}\left\{\cos (A+B)+\cos (A-B)\right\}$:

$$\int _{-\pi }^{\pi }\cos (nx)\cos (mx)\, dx=\frac{1}{2}\int _{-\pi }^{\pi }\left\{\cos ((n+m)x)+\cos ((n-m)x)\right\}\, dx$$

$$=\frac{1}{2}\left[\frac{\sin ((n+m)x)}{n+m}+\frac{\sin ((n-m)x)}{n-m}\right]_{-\pi }^{\pi }=0$$

$$2.\ n=m$$

$$\int _{-\pi }^{\pi }\cos ^2(nx)\, dx=\int _{-\pi }^{\pi }\frac{1+\cos (2nx)}{2}\, dx=\left[\frac{x}{2}+\frac{\sin (2nx)}{4n}\right]_{-\pi }^{\pi }=\pi \ne 0$$

## Connection to the Fourier Series

We now know that sine and cosine are orthogonal. This underlies the premise of the Fourier series: that any function can be expressed in terms of sines and cosines. Since the sine and cosine functions form a basis of the function space, "completeness" holds—every function in the space can be expressed. Proving completeness requires additional steps, but I will not pursue it here.

The important point is that we now understand the foundation of the Fourier series and can use it with confidence.

The Fourier transform works on the same principle, but uses the complex exponential $e^{ikx}$ rather than $\cos(nx)$ or $\sin(nx)$ as its basis.

The Fourier series, using $\cos(nx)$ and $\sin(nx)$ as its basis, has a fixed fundamental period of $2\pi$, so it applies only to periodic functions. The Fourier transform, using $e^{ikx}$ with continuous wavenumber $k$, extends the period to infinity, so it also applies to arbitrary non-periodic functions.

The next post covers the Fourier transform.

---

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
