---
layout: post
title: "Eigenvalue & Eigenvector"
date: 2026-03-18
categories: [linear-algebra]
tags: [Eigenvalue, Eigenvector, Linear Transformation, Matrix, Basis, Quantum Mechanics, Schrödinger Equation]
description: "What eigenvalues and eigenvectors really mean — the vectors that only get scaled (not rotated) under a linear transformation, why they can serve as a basis, and why det(A) is the product of the eigenvalues; the same form as the Schrödinger equation Hψ = Eψ."
canonicalURL: "https://blog.naver.com/kkul20235/224221436871"
usemathjax: true
comments: true
permalink: /eigenvalue-and-eigenvector/
---

If you've studied linear algebra, or engineering mathematics, you must have heard of eigenvalues and eigenvectors. The form looks like this:

$$A\mathbf{v=\lambda \mathbf{v}}$$

$v$ is the eigenvector, $\lambda$ is the eigenvalue, and A is a linear transformation. I also first came across this equation around my sophomore year when I took Engineering Mathematics 1, and back then I memorized problem-solving procedures without knowing what it meant and took the exam.

Anyway, eigenvalues and eigenvectors appear frequently not only in engineering mathematics but in various fields. In particular, in quantum mechanics, the famous Schrödinger equation has exactly the same form, $H\psi(x)=E\psi(x)$.

In this post, let's quickly look at what eigenvalues and eigenvectors mean.

To give the conclusion first: when a linear transformation A is applied, the vectors that become scalar multiples of the original vector are eigenvectors, and that scalar value is the eigenvalue.

Actually, this isn't a hidden meaning — the equation directly shows it. The equation $Av = \lambda v$ is an equation that finds the cases where, when the linear transformation matrix A is applied to a vector $v$, the transformed $v$ is scaled by $\lambda$ times.

Let's look a bit more closely. As I mentioned in a previous post ([the calculus-matrix post](https://oasisforhaanee.github.io/matrix/)), a linear transformation A can be understood as the whole space being twisted uniformly. Let me give an example:

$$\begin{bmatrix}2&0\\0&1\end{bmatrix}$$

What this matrix means is: scale the x-axis components by 2, and leave the y-axis components as they are.

$$\begin{bmatrix}3&0\\0&2\end{bmatrix}\begin{bmatrix}2\\1\end{bmatrix}=\begin{bmatrix}6\\2\end{bmatrix}$$

As you can see, applying the matrix to the vector $[2;1]$, the x-axis component grew threefold to 6, and the y-axis component doubled to 2. Whatever vector in 2D space you apply this matrix to, all x-axis components will grow 3 times and y-axis components 2 times.

Then let's imagine. Let's stretch the xy graph plane we know, with the points on it growing 3 times in the x-axis direction and 2 times in the y-axis direction. Then the points (vectors) on it will each move — just like the vector $[2;1]$ moved to $[6;2]$ earlier. At that time, you can intuitively know that some vectors will only change in magnitude and not in direction. And such vectors really do exist.

Those vectors are the eigenvectors we're dealing with in this post. When a linear transformation is applied, despite the change in space, the vector whose components are only scaled as they are is an eigenvector. And that scale factor is the eigenvalue. When I realized this meaning, my mind was completely blown. Why did I just write down equations without thinking about understanding such a simple meaning...

So why do eigenvalues and eigenvectors play such an important role? When the space is transformed, we said eigenvectors only change in scale. What does this resemble? These eigenvectors can serve as a basis for the linearly transformed matrix. Since only the scale changes when a linear transformation is applied, they can serve as a basis. For example, if the eigenvectors are A and B and the eigenvalues are $p$ and $q$, then if the original vector $v$ is expressed as $v=A+B$, after the linear transformation $v$ becomes $v'=pA+qB$. Of course, this requires the condition that distinct eigenvectors matching the dimension of the matrix exist.

Additionally, understanding eigenvectors this way, you can also intuitively understand that $\det(A)$ is expressed as the product of the eigenvalues. Understanding with the 2D case: suppose there's a 2D shape on the coordinate plane. When a linear transformation A is applied, its scaling factor is $\det(A)$, and this applies everywhere in that space, as covered in a previous post ([the calculus-determinant post](https://oasisforhaanee.github.io/2025-11-09-determinant/)). Then looking at this from the eigenvalue perspective, the area formed by those eigenvectors is scaled by the product of the eigenvalues under the linear transformation, so you can immediately see that $\det(A)$ is expressed as the product of A's eigenvalues.

In this post, we dealt with the meaning of eigenvectors and eigenvalues, which are very important concepts in linear algebra. Eigenvalues are a very important concept that comes out as the value when an operator is applied, especially in quantum mechanics, so if you're studying physics, it'd be good to know them. Thanks for reading the long post.

※This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.
