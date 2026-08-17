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

Hello. Today I'll write about the most fundamental concepts of linear algebra: linear dependence, linear independence, and orthogonality. These concepts are essential in linear algebra — wherever linear algebra is used, they're treated as very important, so understanding them will help you a lot.

First, let's look at linear independence and linear dependence.

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

If you read [the determinant post](https://oasisforhaanee.github.io/2025-11-09-determinant/), you can intuitively understand why the determinant of linearly dependent vectors comes out to 0. In a 2x2 matrix, the meaning of the determinant is the area of the parallelogram made by the two vectors — so what happens when the two vectors are parallel? A flattened parallelogram is made, so the area comes out to 0.

![Determinant = area of the parallelogram made by vectors A and B](/assets/img/determinant-area.png)

![Determinant = 0 for parallel vectors](/assets/img/determinant-zero.png)

Such matrices lower the dimension. When applied to 3D space, they reduce it to 2D or below. These matrices are called projection matrices.

## Orthogonal

Two vectors being orthogonal is a concept that goes one step beyond linear independence. As you can expect from the word "orthogonal" itself, the two vectors must be perpendicular.

![Perpendicular vectors A[4,1] and B[-1.25,5]](/assets/img/orthogonal-vectors.png)

The two vectors are linearly independent because they're not parallel, but they don't even share any related components. In this case, the two vectors are said to be orthogonal.

![General independence vs. orthogonality](/assets/img/independent-vs-orthogonal.png)

When vectors are orthogonal, their inner product comes out to 0. Considering that the formula for the inner product is:

$$\vec{a}\cdot \vec{b}=\vec{\left|a\right|}\ \vec{\left|b\right|}\cos \theta$$

when the two vectors are perpendicular, $\cos(\theta)$ comes out to 0, so of course it must be 0.

## Basis

If two vectors are linearly independent, they can serve as a basis. A basis is, simply put, a set of axes used to express a space. In the familiar 2D xy-plane, the x-axis and y-axis serve as the basis. What happens if a linearly dependent vector is added here? Even if that new axis is added, it can only express exactly the same 2D space as before. For example, even if you bring in an axis that makes a 45-degree angle with the x- and y-axes, the region you can express is the same as when you only had the x- and y-axes.

But if a z-axis that is linearly independent of the existing xy-axes is newly included, you can finally express 3D space, and the z-axis also performs its role as a member of the basis. Please remember well that the essential condition for being a basis is linear independence.

That's it for this post. Thanks for reading the long post.

※This post reflects my own understanding, so there may be errors.
