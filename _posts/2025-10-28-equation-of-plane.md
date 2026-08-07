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

When I first entered college (especially in science and engineering), many students learn calculus. I was one of them, but when I first encountered the subject, I studied for the exam right in front of me rather than trying to understand, and in the end it was shelved without ever really understanding it.

Recently I started studying calculus again, and this time I tried to make an effort to understand. Also, when writing posts about calculus in the future, I plan to describe things from the very basics, step by step, without missing anything. That way I think I'll be able to understand even the things I didn't know before, without skipping over them.

That introduction was long. So in this post, I'll explain the equation of a plane that appears in calculus in detail.

## Scalars and Vectors

Before looking at the plane equation, we need to learn about vectors in detail.

A **vector** is a value that can express both magnitude and direction. For example, when there's a car moving at 10 m/s, you can't tell which direction it's moving. By marking it with an arrow, you can tell how fast the car is going and in which direction, completely expressing the car's motion. This is velocity, a kind of vector. As another example, force is also a vector, because you need to know how much force is applied in which direction to fully describe it.

![Scalar and vector](/assets/img/scalar-vs-vector.png)

In contrast, values that have no direction and only magnitude are called **scalars**. An object with a mass of 10 kg, a temperature of 25 degrees, a speed of 10 m/s (when direction is included it's called velocity; when only the fastness is given without direction, it's called speed), a height of 175 cm, etc. — these numbers are not given a direction.

## Vectors on the Coordinate Plane

The vectors we'll use in this post are vectors on the coordinate plane. $(1,1)$ can represent a point on the coordinate plane, but it's also a vector that starts at the origin and ends at the point $(1,1)$. To distinguish these two, an arrow is placed over the symbol, as in the figure below:

![Vector notation with an arrow](/assets/img/vector-notation-arrow.jpg)

## The Dot Product (1)

Just as we do multiplication and addition with numbers, vectors also have calculation formulas between vectors. One of them is the dot product. The way to compute the dot product of vector a and vector b is as follows:

$$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}|\,|\mathbf{b}|\,\cos\theta$$

Here, $|\mathbf{a}|$ represents the length of vector a (excluding the direction component).

$\theta$ represents the angle between vector a and vector b.

Looking at the meaning geometrically, $\mathbf{a} \cdot \mathbf{b}$ is the length of the perpendicular foot dropped from vector a onto vector b, multiplied by the length of b:

![Dot product geometry](/assets/img/dot-product-geometry.jpg)

When the two vectors are perpendicular, the length becomes 0 even if you drop the perpendicular foot, so $\mathbf{a} \cdot \mathbf{b}=0$.

This can also be interpreted as (length of b) × (the component of b that vector a has). Conversely, dropping the perpendicular foot from vector b onto vector a gives the same result.

The important point here is: **if the two vectors form a right angle, the dot product of the two vectors is 0.**

## The Dot Product (2)

Also, if we take the dot product of the vector $(a, b)$ and the vector $(c, d)$, the result comes out as $ac+bd$. This can be seen in the figure below:

![Dot product with components](/assets/img/dot-product-components.jpg)

The $ax$ vector and $by$ vector, and the $ay$ vector and $bx$ vector, are perpendicular to each other, so their dot products are 0.

## The Equation of a Plane

The equation of a line that we commonly know can be expressed in the form $ax+by+c=0$. So what does this mean?

$ax+by+cz=0$ has the same meaning as $(a, b, c)\cdot(x, y, z)=0$. That is, the dot product of the 3D vector pointing in the direction $(a, b, c)$, which consists of known values, and the vector $(x, y, z)$ we want to find out is 0. As we saw above, this means the two vectors are perpendicular to each other.

This means that every vector perpendicular to the $(a, b, c)$ vector can be $(x, y, z)$.

![All points perpendicular to the normal vector lie on the plane](/assets/img/plane-normal-vector.png)

All the points perpendicular to the $(a, b, c)$ vector lie on the plane in the figure above. Those points are all the $(x, y, z)$ that satisfy $ax+by+cz=0$.

The case of the equation $ax+by+cz=k$ where $k$ is not 0 is the same. We just need to transform this equation into $a(x - k/a) + by + cz = 0$.

Then we can see that the solution set of this equation is the plane $ax+by+cz=0$ (the plane passing through the origin) translated parallel by $k/a$ in the x-axis direction. Even if you build the equation using y or z instead of x, it's the same.

Therefore, we can see that the **normal vector** of $ax+by+cz=k$ (= the vector perpendicular to the plane) is $(a, b, c)$.

In this post, to describe the meaning of the plane equation, we looked at the definition of vectors and the dot product, and finally looked at what the letters that make up the plane equation mean.

If you don't understand something or find an error, feel free to ask in the comments anytime.

---

This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.
