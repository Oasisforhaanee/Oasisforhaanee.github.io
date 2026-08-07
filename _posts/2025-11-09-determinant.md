---
layout: post
title: "Determinant"
date: 2025-11-09T21:37:00+09:00
categories: [linear-algebra, calculus]
tags: [Determinant, Linear Algebra, Area, Volume, Linear Transformation]
description: "Geometric interpretation of determinants — the area/volume scaling factor of a space transformation, how to compute 2x2 and 3x3 determinants, and what det=0 means."
canonicalURL: "https://blog.naver.com/kkul20235/224070231552"
usemathjax: true
comments: true
permalink: /2025-11-09-determinant/
---

In the previous post, we learned about matrices. In this post, continuing from matrices, let's look at what meaning the determinant has.

## The Meaning of the Determinant

Let me give you the conclusion first: the determinant means the volume, or area, of the space formed by each column or row vector. For a 2x2 matrix, the determinant of the matrix is the area of the parallelogram made by the two vectors when each column vector or row vector of the matrix is expressed in 2D space, and for a 3x3 matrix, it's the volume of the 3D solid formed by each column vector or row vector in 3D space.

## The Definition of the Determinant

Unlike a matrix made of many numbers, the determinant of a matrix A comes out as a single value. The determinant of A is expressed as det(A), and matrix A must be an n×n matrix with the same number of rows and columns to compute its determinant. Let's look at how to compute the determinant for each case.

### 2x2 Matrix

$$A=\begin{pmatrix}a&b\\c&d\end{pmatrix}\ \ \ \ \ \ \ \ \ \ \det (A)=ad-bc$$

![Computing the 2x2 determinant](/assets/img/det-2x2-calculation.png)

The determinant of a 2x2 matrix is computed by starting with the number in row 1, column 1, multiplying the numbers on the diagonal going down to the right, and subtracting the product of the numbers on the opposite diagonal.

### 3x3 Matrix

$$A=\begin{pmatrix}2&0&1\\1&1&0\\0&1&1\end{pmatrix}$$

![Computing the 3x3 determinant](/assets/img/det-space-transformation.png)

The case of the 3x3 determinant is a bit more complicated, but the principle is similar. Multiply all the numbers on the diagonal going down to the right (a, e, i), and also multiply the numbers in the other downward-right directions and the remaining numbers (c, d, h and b, f, g), add them all, and subtract the value obtained by multiplying and adding the numbers in the opposite diagonal direction.

Alternatively, it can also be computed as follows:

$$A=\begin{pmatrix}a&b&c\\d&e&f\\g&h&i\end{pmatrix}\ \ \ \ \ \ \ \det \left(A\right)=a\begin{vmatrix}e&f\\h&i\end{vmatrix}-b\begin{vmatrix}d&f\\g&i\end{vmatrix}+c\begin{vmatrix}d&e\\g&h\end{vmatrix}$$

![Computing the 3x3 determinant with 2x2 determinants](/assets/img/det-parallelogram-proof.png)

This is a method of computing a 3x3 determinant using 2x2 matrices, computed over the numbers in one row of the matrix. In the example above, taking the a, b, c in row 1 as the reference, for a we multiply the determinant excluding a (figure 1 below) and multiply the sign corresponding to a's position (figure 4). Applying this same principle to a, b, c in the same row and adding them all gives the determinant.

The determinant calculation method I just explained can compute higher-dimensional matrices like 4x4, 5x5, and so on as well. The determinant of a 4x4 matrix comes out by computing four 3x3 determinants, and the determinant of a 5x5 matrix can be computed with five 4x4 matrices. As you can see, the determinants of such high-dimensional matrices are very complicated to compute, but since most of the matrices we deal with are 2x2 or 3x3 matrices, knowing these two is no big problem.

## The Meaning of the Determinant

We've now learned how to compute the determinant, but why is it important? In the previous post (Calculus - Matrix), we said that a matrix is an expression that represents a transformation of space. The determinant means how much the space has changed in that transformation — its scale factor.

Suppose there's a square with sides of length 1 on the coordinate plane we normally know. This is a space expressed with standard basis vectors, expressed as a matrix:

$$\begin{pmatrix}1&0\\0&1\end{pmatrix}$$

Applying this matrix:

$$\begin{pmatrix}a&b\\c&d\end{pmatrix}$$

to it can be seen as a matrix transformation that moves the standard basis vector $(1, 0)$ to $(a, c)$ and $(0, 1)$ to $(b, d)$.

![Space transformation: the unit square becomes a parallelogram](/assets/img/det-space-transformation.png)

Then what does ad-bc mean in the right figure above? If we try to find the meaning of ad-bc using $(a, c)$ and $(b, d)$, it's the area of the parallelogram made by the two vectors. The proof is done in the figure below:

![Proof that ad-bc is the parallelogram area](/assets/img/det-parallelogram-proof.png)

What we should remember and move on with here is that **the determinant of a 2x2 matrix is the area of the space formed by the basis vectors.**

This meaning carries over to the 3x3 matrix as well. If we have a matrix like this:

$$A=\begin{pmatrix}-2&0&-1\\0&1&0\\0&1&1\end{pmatrix}$$

then |det(A)| would be the volume of the 3D solid formed by the vectors $(-2, 0, 0)$, $(0, 1, 1)$, and $(-1, 0, 1)$:

![The 3x3 determinant as the volume of a parallelepiped](/assets/img/det-3x3-volume.png)

Since det can also come out as a negative number, its absolute value |det(A)| can be seen as the volume of the solid.

If there's a matrix A with determinant 3 and a matrix B with determinant 4, we can see that the determinant of AB is 12. If the space grows by 4 times through B's operation, then when operation A is applied afterward it grows by 3 times, becoming 12 times. We can also see that the determinant of BA is 12, just like AB.

There are also cases where the determinant is 0. When a matrix transformation compresses to a lower dimension — for example, from 3D to 2D, or from 2D to 1D — the determinant comes out as 0. This happens when linearly dependent vectors are included. If you're curious, see the Bonus: Determinant section of my [Orthogonality](https://oasisforhaanee.github.io/orthogonality/) post.

In this post, we looked at the definition and meaning of the determinant. I'll keep posting various and interesting posts about calculus. Thanks for reading the long post.

---

This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.
