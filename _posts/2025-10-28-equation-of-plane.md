---
layout: post
title: "Equation of a Plane and Vectors"
date: 2025-10-28T19:31:00+09:00
categories: [calculus, linear-algebra]
tags: [Plane Equation, Vectors, Dot Product, Calculus]
description: "A first-principles explanation of scalar and vectors, dot product, and equations of a plane."
canonicalURL: "https://blog.naver.com/kkul20235/224056851459"
usemathjax: true
comments: true
permalink: /equation-of-plane/
---

When I first learned calculus in college, I mostly studied to pass exams instead of really understanding. This series revisits the basics carefully, starting from vectors and scalars, then building up to equations of a plane.

## Scalars and Vectors

A **vector** expresses magnitude and direction, while a **scalar** expresses magnitude only. Mass, temperature, speed, and height are scalar examples.

![Scalar and vector illustration](/assets/img/plane_img_01.png)

We work with vectors in the coordinate plane. The point `(1,1)` is also a vector from the origin to `(1,1)`. To distinguish vectors from points, we put an arrow over the symbol.

![Notation: vectors use arrows](/assets/img/plane_img_02.jpg)

## Vector Dot Product

The dot product measures how much two vectors point in the same direction:

$$\mathbf{a}\cdot\mathbf{b}=\|\mathbf{a}\|\|\mathbf{b}\|\cos\theta$$

`|a|` is the length of vector `a`. `theta` is the angle between vectors `a` and `b`.

Geometrically, the dot product equals the length of `b` times the component of `a` along `b`. When the vectors are perpendicular, the dot product is `0`.

![Dot product geometry](/assets/img/plane_img_04.jpg)

For components, `(a,b)·(c,d)=ac+bd` because the cross terms are orthogonal.

![Dot product with components](/assets/img/plane_img_05.png)

## Equation of a Plane

A plane can be written as

$$\mathbf{n}\cdot(\mathbf{r}-\mathbf{r}_0)=0$$

where `n` is a normal vector and `r_0` is any point on the plane. This says every vector lying in the plane is orthogonal to `n`.

The familiar form `ax+by+cz=k` has normal vector `(a,b,c)`. When `k=0`, the plane passes through the origin. For nonzero `k`, it is just the origin plane shifted along the normal direction.

This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.
