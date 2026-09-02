---
layout: post
title: "Equation of a Plane and Vectors"
date: 2025-10-28T19:31:00+09:00
categories: [mathematics]
tags: [Plane Equation, Vectors, Dot Product, Normal Vector, Calculus]
description: "A first-principles explanation of scalars and vectors, the dot product, and what the equation of a plane really means — starting from the very basics."
canonicalURL: "https://blog.naver.com/kkul20235/224056851459"
usemathjax: true
comments: true
permalink: /equation-of-plane/
---

This post examines the equation of a plane, a topic that appears early in multivariable calculus. Rather than starting from the formula itself, we build up from the underlying concepts—vectors and the dot product—so that the meaning of each symbol in the plane equation becomes clear.

## Scalars and Vectors

Before turning to the plane equation, we need a precise understanding of vectors.

A **vector** is a quantity that carries both magnitude and direction. Consider a car moving at 10 m/s. The speed alone does not tell us which way the car is heading. If we represent the motion with an arrow, both how fast the car is moving and in which direction are captured at once; this is the *velocity*, which is a vector. Force is another example: to describe a force completely, we must specify both how strong it is and in which direction it acts.

![Scalar and vector](/assets/img/scalar-vs-vector.png)

By contrast, quantities that have magnitude but no direction are called **scalars**. A mass of 10 kg, a temperature of 25 °C, a speed of 10 m/s, and a height of 175 cm are all scalars—none of these numbers is associated with a direction. (Note the distinction in terminology: when direction is included, we speak of *velocity*; when only the rate of motion is given, we speak of *speed*.)

## Vectors in the Coordinate Plane

The vectors used in this post live in the coordinate plane. The pair $(1,1)$ can denote a point in the plane, but it can equally denote the vector that starts at the origin and ends at the point $(1,1)$. To distinguish the two interpretations, an arrow is placed over the symbol when a vector is intended, as shown below.

![Vector notation with an arrow](/assets/img/vector-notation-arrow.jpg)

## The Dot Product (1)

Just as numbers can be added and multiplied, vectors admit their own operations. One of the most important is the **dot product**. For two vectors $\mathbf{a}$ and $\mathbf{b}$, it is defined as

$$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}|\,|\mathbf{b}|\,\cos\theta$$

Here $|\mathbf{a}|$ denotes the length (magnitude) of $\mathbf{a}$, with no reference to its direction, and $\theta$ is the angle between $\mathbf{a}$ and $\mathbf{b}$.

Geometrically, $\mathbf{a} \cdot \mathbf{b}$ equals the length of the perpendicular projection of $\mathbf{a}$ onto $\mathbf{b}$, multiplied by the length of $\mathbf{b}$:

![Dot product geometry](/assets/img/dot-product-geometry.jpg)

When the two vectors are perpendicular, the projection has zero length, and therefore $\mathbf{a} \cdot \mathbf{b}=0$.

Equivalently, the dot product can be read as (length of $\mathbf{b}$) × (the component of $\mathbf{a}$ along $\mathbf{b}$). Projecting $\mathbf{b}$ onto $\mathbf{a}$ instead yields the same result.

The essential point to carry forward is this: **if two vectors are perpendicular, their dot product is zero.**

## The Dot Product (2)

In component form, the dot product of $(a, b)$ and $(c, d)$ is $ac+bd$. The figure below illustrates why:

![Dot product with components](/assets/img/dot-product-components.jpg)

The component vectors $a\hat{x}$ and $d\hat{y}$ are perpendicular, as are $b\hat{y}$ and $c\hat{x}$, so their pairwise dot products vanish; only the parallel components $ac$ and $bd$ survive.

## The Equation of a Plane

The familiar equation of a line has the form $ax+by+c=0$. What does an analogous expression mean in three dimensions?

The equation $ax+by+cz=0$ is exactly the statement $(a, b, c)\cdot(x, y, z)=0$. In words: the dot product of the fixed vector $(a, b, c)$, whose components are known, and the unknown vector $(x, y, z)$ is zero. As established above, this means the two vectors are perpendicular.

Consequently, every vector perpendicular to $(a, b, c)$ is an admissible $(x, y, z)$.

![All points perpendicular to the normal vector lie on the plane](/assets/img/plane-normal-vector.png)

The set of all points perpendicular to $(a, b, c)$ forms the plane shown in the figure. These points are precisely the solutions $(x, y, z)$ of $ax+by+cz=0$.

The case $ax+by+cz=k$ with $k \neq 0$ is handled in the same way. Rewrite the equation as $a(x - k/a) + by + cz = 0$.

The solution set is then the plane $ax+by+cz=0$ (which passes through the origin) translated by $k/a$ along the $x$-axis. The same argument works if the constant is absorbed into the $y$ or $z$ term instead.

We conclude that the **normal vector** of the plane $ax+by+cz=k$—the vector perpendicular to the plane—is $(a, b, c)$.

To summarize, we reviewed the definition of a vector and the dot product, and then used them to interpret the coefficients in the equation of a plane: they are simply the components of the plane's normal vector.

---

This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.
