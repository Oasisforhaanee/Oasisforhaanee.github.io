---
layout: post
title: "Orthogonality"
date: 2026-07-26
categories: [linear-algebra]
tags: [Orthogonality, Linear Algebra, Inner Product, Linear Independence, Basis, Hilbert Space, Fourier Series]
description: "Linear dependence and independence, orthogonality, inner product, function orthogonality via Riemann sums, and why sin(nx) and cos(nx) are orthogonal — the basis behind the Fourier series."
canonicalURL: "https://blog.naver.com/kkul20235/224357601640"
usemathjax: true
comments: true
permalink: /orthogonality/
---

Hello. Today I'll write about orthogonality. Orthogonality is an essential concept in linear algebra, and it's treated as very important in engineering, so understanding it will help you a lot.

Before we look at orthogonality, let's look at linear independence and linear dependence first.

## Linear Dependence

![Two parallel vectors — linearly dependent](/assets/img/linearly-dependent.png)

This is a figure that lets you understand linear dependence intuitively. When vectors are parallel to each other — that is, when one vector can be expressed as a scalar multiple of the other — the two are said to be in a linearly dependent relationship. In the example above, vector B can be expressed as 2 times vector A.

## Linear Independence

![Two non-parallel vectors — linearly independent](/assets/img/linearly-independent.png)

Conversely, if two different vectors are not parallel to each other, they are considered linearly independent. In the figure above, the two vectors are not parallel. No matter what you multiply vector B by, you can't express vector A. In this case, the two vectors are in a linearly independent relationship.

The explanation above is a simplified analogy to make understanding easier — the rigorous definitions of linear dependence and independence are as follows:

$$c_1v_1+c_2v_2+\dots +c_nv_n=0$$

**Linear independence:** for arbitrary vectors $v_1 \sim v_n$ and coefficients $c_1 \sim c_n$, if the only solution satisfying the equation above is $c_1=c_2=...=c_n=0$, then the vectors $v_1 \sim v_n$ are in a linearly independent relationship.

**Linear dependence:** for arbitrary vectors $v_1 \sim v_n$ and coefficients $c_1 \sim c_n$, if there exists a solution other than $c_1=c_2=...=c_n=0$ satisfying the equation above, then the vectors $v_1 \sim v_n$ are in a linearly dependent relationship.

Definitions are boring as always, right? Parallel: linearly dependent, not parallel: linearly independent — knowing it this way is better for connecting it with other concepts while studying.

### Bonus: The Determinant

If you read about the determinant, you can intuitively understand why the determinant of linearly dependent vectors comes out to 0. In a 2x2 matrix, the meaning of the determinant is the area of the parallelogram made by the two vectors — so what happens when the two vectors are parallel? A flattened parallelogram is made, so the area comes out to 0.

![Determinant = area of the parallelogram made by vectors A and B](/assets/img/determinant-area.png)

![Determinant = 0 for parallel vectors](/assets/img/determinant-zero.png)

Such matrices lower the dimension. When applied to 3D space, they reduce it to 2D or below. These matrices are called projection matrices.

## Orthogonal

Two vectors being orthogonal is a concept that goes one step beyond linear independence. As you can expect from the word "orthogonal" itself, the two vectors must be perpendicular.

![Perpendicular vectors A[4,1] and B[-1.25,5]](/assets/img/orthogonal-vectors.png)

The two vectors are linearly independent because they're not parallel, but they don't even share any related components. In this case, the two vectors are said to be orthogonal.

![General independence vs. orthogonality](/assets/img/independent-vs-orthogonal.png)

When vectors are orthogonal, their inner product comes out to 0. Considering that the formula for the inner product is:

$$\vec{a}\cdot \vec{b}=\vec{\left|a\right|}\ \vec{\left|b\right|}\cos \theta $$

when the two vectors are perpendicular, $\cos(\theta)$ comes out to 0, so of course it must be 0.

## Basis

If two vectors are linearly independent, they can serve as a basis. A basis is, simply put, a set of axes used to express a space. In the familiar 2D xy-plane, the x-axis and y-axis serve as the basis. What happens if a linearly dependent vector is added here? Even if that new axis is added, it can only express exactly the same 2D space as before. For example, even if you bring in an axis that makes a 45-degree angle with the x- and y-axes, the region you can express is the same as when you only had the x- and y-axes.

But if a z-axis that is linearly independent of the existing xy-axes is newly included, you can finally express 3D space, and the z-axis also performs its role as a member of the basis. Please remember well that the essential condition for being a basis is linear independence.

## Orthogonality of Functions

Up to vector orthogonality, people with a bit of a linear algebra background would have understood it somewhat intuitively. But the orthogonality of functions is hard to understand intuitively. The inner product of functions is computed as follows:

$$<f,g>=\int _a^b\combi{f(x)}*\cdot g(x)\, dx$$

Here, $f(x)^*$ means the complex conjugate of $f(x)$. Since we'll only deal with real-valued functions in this post, let's just think of $f(x)^*$ as $f(x)$.

If the functions $f(x)$ and $g(x)$ are orthogonal on the interval $[a, b]$, their inner product must be 0. In other words, if the following equation holds, the two functions $f(x)$, $g(x)$ are defined as orthogonal on the interval $[a, b]$:

$$\int _a^b\combi{f(x)}\cdot g(x)\, dx=0$$

But why is the inner product formula for functions expressed like that? It looks so different from the vector inner product we know.

First, let's compute the integral from $a$ to $b$ using the Riemann sum. Dividing the interval into N pieces and expressing it with sigma, we can approximate it as follows. Here $x_k$ is the x-coordinate of each piece when divided into N pieces:

$$\int _a^bf(x)g(x)\, dx=\sum _{k=1}^Nf(x_k)g(x_k)\, \Delta x$$

As we take the limit of N diverging to infinity, this expression converges precisely to the actual integral value. To help understanding, let me give an example of how $x_k$ is divided.

Let's set $f(x)=\cos(x)$ and the interval $[0, 2\pi]$. If we split the function $f(x)$ on the interval $[a, b]$, we can express it as follows. In the figure below, $f(x)$ is shown split into 32 pieces:

![f(x) = cos(x) split into 32 pieces](/assets/img/cos-sampled-32.png)

The function values split this way can be expressed as follows:

$$\mathbf{f}=\begin{bmatrix}f(x_1)&f(x_2)&f(x_3)&\dots &f(x_N)\end{bmatrix}=\begin{bmatrix}f_1&f_2&f_3&\dots &f_N\end{bmatrix}$$

Likewise, if we say $g(x)=\sin(x)$, it comes out as follows:

![g(x) = sin(x) as a vector](/assets/img/sin-sampled-vector.png)

$$\mathbf{g}=\begin{bmatrix}g(x_1)\\g(x_2)\\g(x_3)\\\vdots \\g(x_N)\end{bmatrix}=\begin{bmatrix}g_1\\g_2\\g_3\\\vdots \\g_N\end{bmatrix}$$

Now, taking the inner product of the f vector and the g vector, the equation comes out as follows:

$$\begin{bmatrix}f(x_1)&f(x_2)&\dots &f(x_N)\end{bmatrix}\begin{bmatrix}g(x_1)\\g(x_2)\\\vdots \\g(x_N)\end{bmatrix}=\sum _{k=1}^Nf(x_k)g(x_k)\, $$

If the gap between the x values is called $\Delta x$, the following equation holds:

$$\begin{bmatrix}f(x_1)&f(x_2)&\dots &f(x_N)\end{bmatrix}\begin{bmatrix}g(x_1)\\g(x_2)\\\vdots \\g(x_N)\end{bmatrix}\Delta x=(\mathbf{f}\cdot \mathbf{g})\, \Delta x$$

In the figure above, the function was split into 32 pieces, but if we split it into infinitely many pieces (= N ⮕ ∞), we can approximate the integral value:

$$\begin{bmatrix}f(x_1)&f(x_2)&\dots &f(x_N)\end{bmatrix}\begin{bmatrix}g(x_1)\\g(x_2)\\\vdots \\g(x_N)\end{bmatrix}\Delta x=\sum _{k=1}^Nf(x_k)g(x_k)\, \Delta x\ \fallingdotseq \int _a^bf(x)g(x)\, dx\ \ \left(N⮕∞\right)$$

In this way, by splitting a function finely and converting it into a vector, we can create an infinite-dimensional vector space — this is called a **Hilbert space**.

The inner product of functions is actually no different from the inner product of vectors. A continuous function can also be split infinitely many times and expressed as a vector with infinitely many components, and if the inner product of the two function vectors is 0, then the two functions are orthogonal just like orthogonal vectors.

The meaning of two functions being orthogonal is very significant. If function A and function B are orthogonal, it means that, just like with orthogonal vectors, function B cannot be expressed using function A — and like linear independence, it means the two functions can serve as a basis. The Fourier series is a powerful mathematical tool that uses the property that sine and cosine functions are orthogonal to each other to express any function as a sum of infinitely many sine and cosine basis functions.

## Orthogonality of Sine and Cosine Functions

For the $\cos(x)$ and $\sin(x)$ from the example above:

$$<\cos (x),\sin (x)>=\int _0^{2\pi }\cos (x)\sin (x)\, dx=\frac{1}{2}\int _0^{2\pi }\sin (2x)\, dx$$

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

---

This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.
