---
layout: post
title: "Bra-Ket Notation"
date: 2026-08-12
categories: [linear-algebra]
tags: [Bra-Ket Notation, Inner Product, Hilbert Space, Basis, Projection, Complex Plane, State Vector]
description: "Bra-ket notation is just the inner product of functions — turning functions into infinite-dimensional vectors in a Hilbert space, projecting state vectors onto the position basis, and why ⟨f|g⟩ is exactly the integral of f*(x)g(x)."
canonicalURL: "https://blog.naver.com/kkul20235/224376503820"
usemathjax: true
comments: true
permalink: /bra-ket-notation/
---

In this post, we'll look at the most widely used notation in quantum mechanics: bra-ket notation.

First, please read the post below:

[The Inner Product and Orthogonality of Functions](https://blog.naver.com/kkul20235/224376331608)

## Bra-ket notation

To give the conclusion first: bra-ket notation is the same as expressing the inner product of functions.

When we have two functions f(x) and g(x), their inner product is expressed as:

$$\int _{-\infty }^{\infty }f^*(x)g(x)dx$$

At this point, each function can be transformed into the form of an infinite-dimensional vector (refer to the inner product and orthogonality of functions post). This infinite-dimensional vector space is called a Hilbert space.

$$g\rightarrow \begin{pmatrix}g(x_1)\\g(x_2)\\g(x_3)\\\vdots \end{pmatrix}$$

$$f^{\dagger }\rightarrow \begin{pmatrix}f^*(x_1)&f^*(x_2)&f^*(x_3)&\cdots \end{pmatrix}$$

Multiplying these two matrices gives the same result as the inner product integral of the functions (originally Δx should be attached, but let's assume it's normalized into the matrices and ignore it).

$$\begin{pmatrix}f^*(x_1)&f^*(x_2)&f^*(x_3)&\cdots \end{pmatrix}\begin{pmatrix}g(x_1)\\g(x_2)\\g(x_3)\\\vdots \end{pmatrix}$$

$$=f^*(x_1)g(x_1)+f^*(x_2)g(x_2)+f^*(x_3)g(x_3)+\cdots$$

$$=\int _{-\infty }^{\infty }f^*(x)g(x)dx$$

In bra-ket notation, the equation above is expressed as:

$$\int _{-\infty }^{\infty }f^*(x)g(x)dx=\left\langle f|g\right\rangle$$

Here, ⟨f| is called the Bra, and |g⟩ is called the Ket.

⟨f| and |g⟩ are state vectors that don't belong to any particular basis. If we want to express f and g in position space, we need to project f and g onto the position basis as below.

$$\left\langle x|g\right\rangle \rightarrow \begin{pmatrix}g(x_1)\\g(x_2)\\g(x_3)\\\vdots \end{pmatrix}$$

$$\left\langle f|x\right\rangle \rightarrow \begin{pmatrix}f^*(x_1)&f^*(x_2)&f^*(x_3)&\cdots \end{pmatrix}$$

What does |x⟩ mean here? It's a vector for expressing something at a specific position x — vectors where only the component at that position is 1 and the rest are 0.

$$\left|x_1\right\rangle \rightarrow \begin{pmatrix}1\\0\\0\\\vdots \end{pmatrix},\quad \left|x_2\right\rangle \rightarrow \begin{pmatrix}0\\1\\0\\\vdots \end{pmatrix},\quad \left|x_3\right\rangle \rightarrow \begin{pmatrix}0\\0\\1\\\vdots \end{pmatrix}......$$

In other words, f and g are the wave functions themselves, and the moment the state vector itself is projected onto the position basis, it finally becomes the familiar wave function g(x) or f*(x) as a function of position x, so it can be drawn as a graph. In the figure below, xi means each individual point on the x-axis.

![Projecting the state vector f onto the position basis vectors xi gives the values f*(xi) on the complex plane](/assets/img/bra-ket-projection.png)

The figure above shows the state vector f projected onto the position basis vectors xi. Projecting f onto each xi (which denotes a position on the x-axis) gives the values f*(xi) on the complex plane. Also, adding them all up, you can see that the graph of f*(x) emerges in the end.

Expanding the equation to the end, we can express it as:

$$\left\langle f|g\right\rangle =\sum _i^{\infty }\left\langle f|x_i\right\rangle \left\langle x_i|g\right\rangle =\begin{pmatrix}f^*(x_1)&f^*(x_2)&f^*(x_3)&\cdots \end{pmatrix}\begin{pmatrix}g(x_1)\\g(x_2)\\g(x_3)\\\vdots \end{pmatrix}$$

$$=\int _{-\infty }^{\infty }f^*(x)g(x)dx$$

Through this, we can see that bra-ket notation matches the inner product formula of functions.

In this post, we went a bit deeper into bra-ket notation, but what you really need to know is that bra-ket notation isn't much different from the inner product of functions. The difference is this: the usual function inner product always assumes wave functions f(x), g(x) expressed in a specific variable (basis) like position x, whereas bra-ket notation expresses the physical state itself without being tied to a specific basis.

That's it for this post. Thanks for reading the long post.

※This post reflects my own understanding, so there may be errors.
