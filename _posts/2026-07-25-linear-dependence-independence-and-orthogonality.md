---
layout: post
title: "Linear Dependence, Linear Independence, and Orthogonality"
date: 2026-07-25
categories: [linear-algebra]
tags: [Linear Dependence, Linear Independence, Orthogonality, Basis, Inner Product, Linear Algebra]
description: "The most fundamental concepts of linear algebra — when vectors are parallel they're linearly dependent, when they're not they're linearly independent, and when they share no components at all they're orthogonal; plus why the determinant of dependent vectors is 0 and how independence makes a basis."
canonicalURL: "https://blog.naver.com/kkul20235/224357601640"
usemathjax: true
comments: true
permalink: /linear-dependence-independence-and-orthogonality/

---

This post covers the most fundamental concepts of linear algebra: linear dependence, linear independence, and orthogonality. Wherever linear algebra is used, these notions are central, so a solid understanding of them is valuable.

## Linear Dependence

![Two parallel vectors — linearly dependent](/assets/img/linearly-dependent.png)

This figure makes linear dependence intuitive. When two vectors are parallel—that is, when one is a scalar multiple of the other—they are said to be linearly dependent. In the example above, vector B is 2 times vector A.

## Linear Independence

![Two non-parallel vectors — linearly independent](/assets/img/linearly-independent.png)

Conversely, if two distinct vectors are not parallel, they are linearly independent. In the figure above the two vectors are not parallel: no scalar multiple of B equals A. The two vectors are therefore linearly independent.

The above is a simplified picture. The rigorous definitions are as follows. Consider

$$c_1v_1+c_2v_2+\dots +c_nv_n=0$$

**Linear independence:** for vectors $v_1, \dots, v_n$ and coefficients $c_1, \dots, c_n$, if the only solution to the equation above is $c_1=c_2=\dots=c_n=0$, then $v_1, \dots, v_n$ are linearly independent.

**Linear dependence:** if there exists a solution other than $c_1=c_2=\dots=c_n=0$, then $v_1, \dots, v_n$ are linearly dependent.

Definitions are always dry, but the intuitive version—parallel vectors are linearly dependent, non-parallel vectors are linearly independent—is the most useful way to connect the concepts with other material.

### Bonus: The Determinant

If you read [the determinant post](https://oasisforhaanee.github.io/2025-11-09-determinant/), you can see intuitively why the determinant of linearly dependent vectors is $0$. For a $2\times 2$ matrix, the determinant is the area of the parallelogram spanned by its two column vectors. When those two vectors are parallel, the parallelogram collapses and its area is $0$.

![Determinant = area of the parallelogram made by vectors A and B](/assets/img/determinant-area.png)

![Determinant = 0 for parallel vectors](/assets/img/determinant-zero.png)

Such matrices reduce the dimension: applied to three-dimensional space, they collapse it to two dimensions or fewer. These matrices are called projection matrices.

## Orthogonal

Two vectors being orthogonal goes one step beyond linear independence. As the word suggests, the two vectors must be perpendicular.

![Perpendicular vectors A[4,1] and B[-1.25,5]](/assets/img/orthogonal-vectors.png)

The two vectors are linearly independent because they are not parallel, but they also share no components at all. In this case they are said to be orthogonal.

![General independence vs. orthogonality](/assets/img/independent-vs-orthogonal.png)

When vectors are orthogonal, their inner product is $0$. Given the inner-product formula

$$\vec{a}\cdot \vec{b}=|\vec{a}|\,|\vec{b}|\cos \theta$$

when the two vectors are perpendicular, $\cos(\theta)=0$, so the inner product must vanish.

## Basis

If two vectors are linearly independent, they can serve as a basis. A basis is, loosely, the set of axes used to describe a space. In the familiar two-dimensional $xy$-plane, the $x$-axis and $y$-axis form the basis. What happens if a linearly dependent vector is added? Even with the new axis, the space described remains exactly the same 2D space as before. For example, adding an axis at 45° to both the $x$- and $y$-axes still describes only the original 2D region.

But if a $z$-axis, linearly independent of the existing $xy$-axes, is introduced, three-dimensional space can finally be described, and the $z$-axis joins the basis. The essential condition for a set of vectors to be a basis is linear independence.

That is it for this post. Thank you for reading.

---

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
