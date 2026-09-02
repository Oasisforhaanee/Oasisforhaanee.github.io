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

Anyone who has studied linear algebra or engineering mathematics will have encountered eigenvalues and eigenvectors. The defining equation has the form

$$A\mathbf{v}=\lambda \mathbf{v}$$

Here $\mathbf{v}$ is the eigenvector, $\lambda$ is the eigenvalue, and $A$ is a linear transformation. This equation is frequently presented as a computational procedure, without much attention to what it means.

Eigenvalues and eigenvectors appear not only in engineering mathematics but across many fields. In quantum mechanics in particular, the Schrödinger equation has exactly this form: $H\psi(x)=E\psi(x)$.

This post examines what eigenvalues and eigenvectors mean.

To state the conclusion first: when a linear transformation $A$ is applied, the vectors that are mapped to scalar multiples of themselves are the eigenvectors, and the corresponding scalar factors are the eigenvalues.

This is not a hidden meaning; the equation states it directly. The equation $A\mathbf{v} = \lambda \mathbf{v}$ asks for the vectors $\mathbf{v}$ such that applying the transformation $A$ produces the same vector scaled by $\lambda$.

Let us look more closely. As discussed in an [earlier post on matrices](https://oasisforhaanee.github.io/matrix/), a linear transformation $A$ can be understood as a uniform deformation of the entire space. Consider the example

$$\begin{bmatrix}2&0\\0&1\end{bmatrix}$$

This matrix scales the $x$-components by 2 and leaves the $y$-components unchanged.

$$\begin{bmatrix}3&0\\0&2\end{bmatrix}\begin{bmatrix}2\\1\end{bmatrix}=\begin{bmatrix}6\\2\end{bmatrix}$$

Applying this second matrix to the vector $(2,1)$, the $x$-component is tripled to 6 and the $y$-component is doubled to 2. Whatever vector in the plane this matrix is applied to, all $x$-components are scaled by 3 and all $y$-components by 2.

Now imagine the $xy$-plane itself being stretched, with every point moving to 3 times its $x$-coordinate and 2 times its $y$-coordinate. Every point (vector) in the plane moves—just as $(2,1)$ moved to $(6,2)$. It is intuitively clear that certain vectors will change only in magnitude, not in direction. Such vectors do indeed exist.

These are the eigenvectors. Under a linear transformation, despite the deformation of the space, an eigenvector is a vector whose components are merely scaled. The scale factor is the eigenvalue.

Why do eigenvalues and eigenvectors play such an important role? We have said that eigenvectors are only rescaled when the space is transformed. This is exactly the property that allows them to serve as a **basis** for the transformation. Because a linear transformation only rescales them, a vector expressed in the eigenvector basis transforms in a particularly simple way. For example, if the eigenvectors are $\mathbf{A}$ and $\mathbf{B}$ with eigenvalues $p$ and $q$, and the original vector is $\mathbf{v}=\mathbf{A}+\mathbf{B}$, then after the transformation $\mathbf{v}$ becomes $\mathbf{v}'=p\mathbf{A}+q\mathbf{B}$. This requires, of course, that there exist as many linearly independent eigenvectors as the dimension of the matrix.

This viewpoint also makes it intuitively clear why $\det(A)$ equals the product of the eigenvalues. In the two-dimensional case, consider a region in the plane. Under the linear transformation $A$, its area is scaled by $\det(A)$, and this holds uniformly throughout the space, as covered in an [earlier post on the determinant](https://oasisforhaanee.github.io/2025-11-09-determinant/). From the eigenvalue perspective, the area of the parallelogram spanned by the eigenvectors is scaled by the product of the eigenvalues under the transformation. It follows immediately that $\det(A)$ is the product of the eigenvalues of $A$.

This post has covered the meaning of eigenvectors and eigenvalues, which are central concepts in linear algebra. Eigenvalues are particularly important in quantum mechanics, where they emerge as the measured values when an operator acts on a state; a solid grasp of them is valuable for anyone studying physics.

---

This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.
