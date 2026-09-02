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

This post covers the most widely used notation in quantum mechanics: bra-ket notation.

First, please read:

[Linear Dependence, Linear Independence, and Orthogonality](https://oasisforhaanee.github.io/linear-dependence-independence-and-orthogonality/)

## Bra-ket notation

To state the conclusion first: bra-ket notation is simply the inner product of functions.

For two functions $f(x)$ and $g(x)$, their inner product is

$$\int _{-\infty }^{\infty }f^*(x)g(x)dx$$

Each function can be transformed into an infinite-dimensional vector (see the post on [the inner product and orthogonality of functions](https://oasisforhaanee.github.io/inner-product-and-orthogonality-of-functions/)). This infinite-dimensional vector space is called a Hilbert space.

$$g\rightarrow \begin{pmatrix}g(x_1)\\g(x_2)\\g(x_3)\\\vdots \end{pmatrix}$$

$$f^{\dagger }\rightarrow \begin{pmatrix}f^*(x_1)&f^*(x_2)&f^*(x_3)&\cdots \end{pmatrix}$$

Multiplying these two gives the same result as the inner-product integral (a $\Delta x$ should strictly be attached, but we absorb it into the normalization of the vectors):

$$\begin{pmatrix}f^*(x_1)&f^*(x_2)&f^*(x_3)&\cdots \end{pmatrix}\begin{pmatrix}g(x_1)\\g(x_2)\\g(x_3)\\\vdots \end{pmatrix}$$

$$=f^*(x_1)g(x_1)+f^*(x_2)g(x_2)+f^*(x_3)g(x_3)+\cdots$$

$$=\int _{-\infty }^{\infty }f^*(x)g(x)dx$$

In bra-ket notation this is written

$$\int _{-\infty }^{\infty }f^*(x)g(x)dx=\left\langle f|g\right\rangle$$

Here $\langle f|$ is the **Bra** and $|g\rangle$ the **Ket**.

$\langle f|$ and $|g\rangle$ are state vectors not tied to any particular basis. To express $f$ and $g$ in position space, we project them onto the position basis:

$$\left\langle x|g\right\rangle \rightarrow \begin{pmatrix}g(x_1)\\g(x_2)\\g(x_3)\\\vdots \end{pmatrix}$$

$$\left\langle f|x\right\rangle \rightarrow \begin{pmatrix}f^*(x_1)&f^*(x_2)&f^*(x_3)&\cdots \end{pmatrix}$$

What does $|x\rangle$ mean? It is the vector for a specific position $x$—a vector with a $1$ in the component for that position and $0$ everywhere else:

$$\left|x_1\right\rangle \rightarrow \begin{pmatrix}1\\0\\0\\\vdots \end{pmatrix},\quad \left|x_2\right\rangle \rightarrow \begin{pmatrix}0\\1\\0\\\vdots \end{pmatrix},\quad \left|x_3\right\rangle \rightarrow \begin{pmatrix}0\\0\\1\\\vdots \end{pmatrix},\dots$$

In other words, $f$ and $g$ are the wave functions themselves; the moment the state vector is projected onto the position basis, it becomes the familiar wave function $g(x)$ or $f^*(x)$ as a function of position $x$, and can be drawn as a graph. In the figure below, $x_i$ denotes each point on the $x$-axis.

![Projecting the state vector f onto the position basis vectors xi gives the values f*(xi) on the complex plane](/assets/img/bra-ket-projection.png)

The figure shows the state vector $f$ projected onto the position basis vectors $x_i$. Projecting $f$ onto each $x_i$ gives the values $f^*(x_i)$ on the complex plane. Adding them all up, the graph of $f^*(x)$ emerges.

Expanding to the end:

$$\left\langle f|g\right\rangle =\sum _i^{\infty }\left\langle f|x_i\right\rangle \left\langle x_i|g\right\rangle =\begin{pmatrix}f^*(x_1)&f^*(x_2)&f^*(x_3)&\cdots \end{pmatrix}\begin{pmatrix}g(x_1)\\g(x_2)\\g(x_3)\\\vdots \end{pmatrix}$$

$$=\int _{-\infty }^{\infty }f^*(x)g(x)dx$$

This shows that bra-ket notation matches the inner-product formula for functions.

The takeaway is that bra-ket notation is not much different from the inner product of functions. The difference is this: the ordinary function inner product assumes wave functions $f(x)$, $g(x)$ expressed in a specific variable (basis) such as position $x$, whereas bra-ket notation expresses the physical state itself without committing to any particular basis.

---

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
