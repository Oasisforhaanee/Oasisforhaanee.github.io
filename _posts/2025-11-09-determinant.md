---
layout: post
title: "Determinant"
date: 2025-11-09T21:37:00+09:00
categories: [linear-algebra]
tags: [Determinant, Linear Algebra, Area, Volume, Linear Transformation]
description: "Geometric interpretation of determinants — the area/volume scaling factor of a space transformation, how to compute 2x2 and 3x3 determinants, and what det=0 means."
canonicalURL: "https://blog.naver.com/kkul20235/224070231552"
usemathjax: true
comments: true
permalink: /2025-11-09-determinant/
---

The [previous post](https://oasisforhaanee.github.io/matrix/) introduced matrices. This post continues from there and examines the meaning of the determinant.

## The Meaning of the Determinant

To state the conclusion first: the determinant is the area or volume of the region spanned by the column (or row) vectors of a matrix. For a $2\times 2$ matrix, the determinant is the area of the parallelogram formed by its two column (or row) vectors in the plane. For a $3\times 3$ matrix, it is the volume of the parallelepiped formed by its three column (or row) vectors in three-dimensional space.

## The Definition of the Determinant

Unlike a matrix, which consists of many numbers, the determinant of a matrix $A$ is a single number, written $\det(A)$. The determinant is defined only for square matrices—$n\times n$ matrices with the same number of rows and columns. We now look at how it is computed in each case.

### 2x2 Matrix

$$A=\begin{pmatrix}a&b\\c&d\end{pmatrix}\ \ \ \ \ \ \ \ \ \ \det (A)=ad-bc$$

The determinant of a $2\times 2$ matrix is obtained by multiplying the entries along the main diagonal (from the top-left entry down to the right) and subtracting the product of the entries along the opposite diagonal.

### 3x3 Matrix

$$A=\begin{pmatrix}2&0&1\\1&1&0\\0&1&1\end{pmatrix}$$

The $3\times 3$ determinant is somewhat more involved, but the principle is similar. Multiply the entries along the main diagonal ($a, e, i$), together with the two other "wrap-around" downward-right diagonals ($c, d, h$ and $b, f, g$); sum these three products; then subtract the sum of the three products taken along the opposite diagonals.

Alternatively, it can be computed as follows:

$$A=\begin{pmatrix}a&b&c\\d&e&f\\g&h&i\end{pmatrix}\ \ \ \ \ \ \ \det \left(A\right)=a\begin{vmatrix}e&f\\h&i\end{vmatrix}-b\begin{vmatrix}d&f\\g&i\end{vmatrix}+c\begin{vmatrix}d&e\\g&h\end{vmatrix}$$

This method evaluates a $3\times 3$ determinant in terms of $2\times 2$ determinants, expanding along one row of the matrix. In the example above, we expand along the first row $a, b, c$. For the entry $a$, we multiply it by the determinant of the submatrix obtained by deleting $a$'s row and column (figure 1 below), and by the sign associated with $a$'s position (figure 4). Applying the same rule to $b$ and $c$ in the same row and summing the three terms gives the determinant.

![Computing the 3x3 determinant with 2x2 determinants](/assets/img/det-cofactor-expansion.png)

This expansion method extends to higher-order matrices such as $4\times 4$ and $5\times 5$. The determinant of a $4\times 4$ matrix is computed from four $3\times 3$ determinants, and a $5\times 5$ determinant from five $4\times 4$ determinants. Determinants of such large matrices are laborious to compute by hand, but since most matrices encountered in practice are $2\times 2$ or $3\times 3$, knowing these two cases is sufficient for most purposes.

## The Meaning of the Determinant

We have seen how to compute the determinant; the question is why it matters. In the [previous post](https://oasisforhaanee.github.io/matrix/), a matrix was interpreted as a transformation of space. The determinant measures how much that transformation changes the size of space—its scale factor.

Consider the unit square in the ordinary coordinate plane. This is the space described by the standard basis vectors, written as a matrix:

$$\begin{pmatrix}1&0\\0&1\end{pmatrix}$$

Applying the matrix

$$\begin{pmatrix}a&b\\c&d\end{pmatrix}$$

to it can be viewed as a transformation that sends the standard basis vector $(1, 0)$ to $(a, c)$ and $(0, 1)$ to $(b, d)$.

![Space transformation: the unit square becomes a parallelogram](/assets/img/det-space-transformation.png)

What, then, does $ad-bc$ mean in the right-hand figure above? In terms of the vectors $(a, c)$ and $(b, d)$, it is the area of the parallelogram they span. The proof is given in the figure below:

![Proof that ad-bc is the parallelogram area](/assets/img/det-parallelogram-proof.png)

The point to remember is that **the determinant of a $2\times 2$ matrix is the area of the region spanned by the transformed basis vectors.**

The same interpretation carries over to $3\times 3$ matrices. For a matrix such as

$$A=\begin{pmatrix}-2&0&-1\\0&1&0\\0&1&1\end{pmatrix}$$

the quantity $|\det(A)|$ is the volume of the parallelepiped spanned by the vectors $(-2, 0, 0)$, $(0, 1, 1)$, and $(-1, 0, 1)$:

![The 3x3 determinant as the volume of a parallelepiped](/assets/img/det-3x3-volume.png)

Since the determinant may be negative, it is the absolute value $|\det(A)|$ that gives the volume.

If a matrix $A$ has determinant 3 and a matrix $B$ has determinant 4, then the determinant of $AB$ is 12. If $B$ scales space by a factor of 4 and $A$ is then applied, scaling by a further factor of 3, the total scaling is 12. The determinant of $BA$ is likewise 12.

The determinant can also be zero. This occurs when the transformation collapses space to a lower dimension—for example, from three dimensions to two, or from two to one. This happens precisely when the column vectors are linearly dependent. For further discussion, see the "Bonus: The Determinant" section of the post [Linear Dependence, Linear Independence, and Orthogonality](https://oasisforhaanee.github.io/linear-dependence-independence-and-orthogonality/).

This post covered the definition and geometric meaning of the determinant.

---

This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.
