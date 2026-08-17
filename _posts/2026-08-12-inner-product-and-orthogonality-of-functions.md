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

In this post, I'll write about the inner product of functions and the orthogonality of functions. This content is very similar to the bra-ket notation most frequently used in quantum mechanics, so if you're studying quantum mechanics, this post will help you a lot.

If you're not familiar with orthogonality, reading the post below first will help your understanding:

[Linear Dependence, Linear Independence, and Orthogonality](https://oasisforhaanee.github.io/linear-dependence-independence-and-orthogonality/)

Then let's first look at what the inner product of functions is.

## The Inner Product of Functions

On the interval $[a, b]$, the inner product of functions is computed as follows:

$$\langle f,g\rangle=\int _a^bf(x)^*\cdot g(x)\, dx$$

Here, $f(x)^*$ means the complex conjugate of $f(x)$. Since we'll only deal with real-valued functions in this post, let's just think of $f(x)^*$ as $f(x)$.

But why is the inner product formula for functions expressed like that? It looks so different from the vector inner product we know.

First, let's compute the integral from $a$ to $b$ using the Riemann sum, which is the definition of the integral. Dividing the interval into N pieces and expressing it with sigma, we can approximate it as follows. Here $x_k$ is the x-coordinate of each piece when divided into N pieces:

$$\int _a^bf(x)g(x)\, dx=\sum _{k=1}^Nf(x_k)g(x_k)\, \Delta x$$

As we take the limit of N diverging to infinity, this expression converges precisely to the actual integral value. To help understanding, let me give an example of how $x_k$ is divided.

Let's set $f(x)=\cos(x)$ and the interval $[0, 2\pi]$. If we split the function $f(x)$ on the interval $[a, b]$, we can express it as follows. In the figure below, $f(x)$ is shown split into 32 pieces. $f_1, f_2...$ mean the function values at each point, as in the figure.

![f(x) = cos(x) split into 32 pieces](/assets/img/cos-sampled-32.png)

The function values split this way can be expressed as a matrix as follows:

$$\mathbf{f}=\begin{bmatrix}f(x_1)&f(x_2)&f(x_3)&\dots &f(x_N)\end{bmatrix}=\begin{bmatrix}f_1&f_2&f_3&\dots &f_N\end{bmatrix}$$

Likewise, if we say $g(x)=\sin(x)$, $g$ also comes out as such a matrix:

![g(x) = sin(x) as a vector](/assets/img/sin-sampled-vector.png)

$$\mathbf{g}=\begin{bmatrix}g(x_1)\\g(x_2)\\g(x_3)\\\vdots \\g(x_N)\end{bmatrix}=\begin{bmatrix}g_1\\g_2\\g_3\\\vdots \\g_N\end{bmatrix}$$

Now, taking the inner product of the f vector and the g vector, the equation comes out as follows:

$$\begin{bmatrix}f(x_1)&f(x_2)&\dots &f(x_N)\end{bmatrix}\begin{bmatrix}g(x_1)\\g(x_2)\\\vdots \\g(x_N)\end{bmatrix}=\sum _{k=1}^Nf(x_k)g(x_k)\,$$

It's similar to the integral expression we got using the Riemann sum, right? If we multiply this by $\Delta x$, the gap between the x values, the following equation holds:

$$\begin{bmatrix}f(x_1)&f(x_2)&\dots &f(x_N)\end{bmatrix}\begin{bmatrix}g(x_1)\\g(x_2)\\\vdots \\g(x_N)\end{bmatrix}\Delta x=(\mathbf{f}\cdot \mathbf{g})\, \Delta x$$

In the figure above, the function was split into 32 pieces, but if we split it into infinitely many pieces (= N ⮕ ∞) so that $\Delta x$ converges to 0, we can approximate the integral expression we know:

$$\begin{bmatrix}f(x_1)&f(x_2)&\dots &f(x_N)\end{bmatrix}\begin{bmatrix}g(x_1)\\g(x_2)\\\vdots \\g(x_N)\end{bmatrix}\Delta x=\sum _{k=1}^Nf(x_k)g(x_k)\, \Delta x\ \fallingdotseq \int _a^bf(x)g(x)\, dx\ \ \left(N⮕∞\right)$$

In this way, by splitting a function finely and converting it into a vector, we can create an infinite-dimensional vector space — this is called a **Hilbert space**.

Through this, we can see that the inner product of functions is actually no different from the inner product of vectors. A continuous function can also be split infinitely many times and expressed as a vector with infinitely many components, and if we take the inner product of these matrices, we can compute the inner product of the functions.

## The Orthogonality of Functions

For vectors, if two vectors are orthogonal, their inner product was 0. The same holds for functions. If two functions are expressed as matrices and the inner product of the two matrices is 0, then the two functions are orthogonal just like orthogonal vectors. In other words, if the following equation holds, the two functions $f(x)$, $g(x)$ are defined as orthogonal on the interval $[a, b]$:

$$\int _a^bf(x)\cdot g(x)\, dx=0$$

The meaning of two functions being orthogonal is very significant. If function A and function B are orthogonal, it means that, just like with orthogonal vectors, function B cannot be expressed using function A — and like linear independence, it means the two functions can serve as a basis. The Fourier series is a powerful mathematical tool that uses the property that sine and cosine functions are orthogonal to each other to express any function as a sum of infinitely many sine and cosine basis functions.

### The Orthogonality of Sine and Cosine Functions

For the $\cos(x)$ and $\sin(x)$ from the example above:

$$\langle \cos (x),\sin (x)\rangle=\int _0^{2\pi }\cos (x)\sin (x)\, dx=\frac{1}{2}\int _0^{2\pi }\sin (2x)\, dx$$

$$=\frac{1}{2}\left[-\frac{1}{2}\cos (2x)\right]_0^{2\pi }=-\frac{1}{4}\left\{\cos (4\pi )-\cos (0)\right\}=0$$

Since this equation holds, $\cos(x)$ and $\sin(x)$ can serve as a basis.

Going further, $\cos(nx)$ and $\sin(mx)$ are orthogonal for all integers $n$, $m$. Here's the proof:

$$\left\langle \cos (nx),\sin (mx)\right\rangle =\int _{-\pi }^{\pi }\cos (nx)\sin (mx)\, dx$$

$$1.\ n=m$$

$$\int _{-\pi }^{\pi }\cos (nx)\sin (nx)\, dx=\int _{-\pi }^{\pi }\frac{1}{2}\sin (2nx)\, dx=0$$

$$2.\ n\ne m$$

$$use\ \ \sin (A)\cos (B)=\frac{1}{2}\left\{\sin (A+B)+\sin (A-B)\right\}$$

$$\int _{-\pi }^{\pi }\sin (mx)\cos (nx)\, dx=\frac{1}{2}\int _{-\pi }^{\pi }\left\{\sin ((m+n)x)+\sin ((m-n)x)\right\}dx$$

$$=\frac{1}{2}\left[-\frac{\cos ((m+n)x)}{m+n}-\frac{\cos ((m-n)x)}{m-n}\right]_{-\pi }^{\pi }=0$$

In a similar way, $\sin(nx)$, $\sin(mx)$ and $\cos(nx)$, $\cos(mx)$ are orthogonal only when $n$ and $m$ are different. Here are the proofs:

### 1. Orthogonality of sin(nx), sin(mx)

$$\left\langle \sin (nx),\sin (mx)\right\rangle =\int _{-\pi }^{\pi }\sin (nx)\sin (mx)\, dx$$

$$1.\ n\ne m$$

$$use\ \sin (A)\sin (B)=\frac{1}{2}\left\{\cos (A-B)-\cos (A+B)\right\}$$

$$\int _{-\pi }^{\pi }\sin (nx)\sin (mx)\, dx=\frac{1}{2}\int _{-\pi }^{\pi }\left\{\cos ((n-m)x)-\cos ((n+m)x)\right\}\, dx$$

$$=\frac{1}{2}\left[\frac{\sin ((n-m)x)}{n-m}-\frac{\sin ((n+m)x)}{n+m}\right]_{-\pi }^{\pi }=0$$

$$2.\ n=m$$

$$\int _{-\pi }^{\pi }\sin ^2(nx)\, dx=\int _{-\pi }^{\pi }\frac{1-\cos (2nx)}{2}\, dx=\left[\frac{x}{2}-\frac{\sin (2nx)}{4n}\right]_{-\pi }^{\pi }=\pi \ \ne 0$$

### 2. Orthogonality of cos(nx), cos(mx)

$$\left\langle \cos (nx),\cos (mx)\right\rangle =\int _{-\pi }^{\pi }\cos (nx)\cos (mx)\, dx$$

$$1.\ n\ne m$$

$$use\ \cos (A)\cos (B)=\frac{1}{2}\left\{\cos (A+B)+\cos (A-B)\right\}$$

$$\int _{-\pi }^{\pi }\cos (nx)\cos (mx)\, dx=\frac{1}{2}\int _{-\pi }^{\pi }\left\{\cos ((n+m)x)+\cos ((n-m)x)\right\}\, dx$$

$$=\frac{1}{2}\left[\frac{\sin ((n+m)x)}{n+m}+\frac{\sin ((n-m)x)}{n-m}\right]_{-\pi }^{\pi }=0$$

$$2.\ n=m$$

$$\int _{-\pi }^{\pi }\cos ^2(nx)\, dx=\int _{-\pi }^{\pi }\frac{1+\cos (2nx)}{2}\, dx=\left[\frac{x}{2}+\frac{\sin (2nx)}{4n}\right]_{-\pi }^{\pi }=\pi \ne 0$$

## Connection to the Fourier Series

Now we know that cos and sin are orthogonal. Using this, we can prove the premise of the Fourier series: that any function can be expressed using sine and cosine functions. Since the sine and cosine functions form a basis of the entire function space, "completeness" holds — meaning all spaces can be expressed. Actually, proving completeness requires additional steps, but since I don't plan to major in mathematics, I'll stop here.

The important thing is that we now understand the foundation of the Fourier series and can use it confidently.

The Fourier transform works on a very similar principle, but instead of using $\cos(nx)$ or $\sin(nx)$ as the basis, it uses the complex exponential function $e^{ikx}$.

The Fourier series, which uses $\cos(nx)$ and $\sin(nx)$ as its basis, has a fixed fundamental period of $2\pi$, so it can only be applied to periodic functions. In contrast, the Fourier transform, which sets $e^{ikx}$ as the basis, uses continuous wavenumber $k$ values to extend the period to infinity (∞), so it also holds for arbitrary non-periodic functions that have no period.

The next post will be about the Fourier transform.

That's it for this post. Thanks for reading the long post.

※This post reflects my own understanding, so there may be errors.
