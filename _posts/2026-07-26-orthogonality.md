---
layout: post
title: "Orthogonality"
date: 2026-07-26
categories: [linear-algebra]
tags: [Orthogonality, Linear Algebra, Inner Product]
description: "Linear dependence and independence, then orthogonality and inner product."
canonicalURL: "https://blog.naver.com/kkul20235/224357601640"
usemathjax: true
comments: true
permalink: /orthogonality/
---

## Linear Dependence

Vectors are linearly dependent if one is a scalar multiple of another.

![Diagram](/assets/img/orthogonality_img_01.png)

## Linear Independence

They are linearly independent if no nontrivial combination makes zero:

$$c_1\mathbf{v}_1+\cdots+c_n\mathbf{v}_n=\mathbf{0}$$

The only solution should be all `c_i=0`.

![Diagram](/assets/img/orthogonality_img_02.png)

## Orthogonality

Two vectors are orthogonal when their inner product is zero:

$$\langle \mathbf{u},\mathbf{v}\rangle = 0$$

This concept is essential in signal processing, PCA, and quantum mechanics.

![Diagram](/assets/img/orthogonality_img_03.png)

## Determinant Bonus

For geometric intuition, see [Determinant](https://oasisforhaanee.github.io/2025-11-09-determinant/).

![Diagram](/assets/img/orthogonality_img_04.png)

## Basis

If two vectors are linearly independent, they can serve as a basis. A basis is simply a set of axes used to describe a space.

![Diagram](/assets/img/orthogonality_img_05.png)

## Orthogonality of functions

By now, those with some linear algebra background may have an intuitive feel for vector orthogonality. But orthogonality of functions is a bit harder to picture intuitively. When two functions are orthogonal, the following relation holds:

$$\langle f,g\rangle=\int_a^b f(x)\cdot g(x)\,dx=0$$

![Diagram](/assets/img/orthogonality_img_06.png)

## Connection to the Fourier transform

Now we know that cos and sin are orthogonal. This lets us prove the premise of the Fourier transform: that any function can be expressed using sine and cosine functions.

![Diagram](/assets/img/orthogonality_img_07.png)

This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.
