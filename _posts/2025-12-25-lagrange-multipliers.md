---
layout: post
title: "The Method of Lagrange Multipliers"
date: 2025-12-25 21:37:00 +0900
categories: [mathematics, calculus]
tags: [Lagrange multiplier, optimization, gradient]
description: An intuitive, geometric explanation of the method of Lagrange multipliers for constrained optimization, with level surfaces and worked examples.
usemathjax: true
---

Hello everyone. Merry Christmas. Luckily it didn't snow. This will probably be my last post of 2025. I hope you all wrap up the remaining bit of 2025 well and start 2026 with energy.

You've surely met, back in high school, problems of finding the maximum or minimum of one expression subject to some given condition. The arithmetic–geometric mean inequality is a classic example. With a slight twist on the AM–GM inequality, the statement "if $x+y+z$ has the value $s$, then the maximum of $xyz$ occurs when they are all equal, $x=y=z=s/3$" can be rephrased as follows.

But the AM–GM inequality only applies to expressions of that particular form — it doesn't work for every equation. So how do we find the maximum or minimum of an expression under a given condition? The method that works for *any* expression and helps us find its max or min is the **method of Lagrange multipliers**. In this post we'll look at it.

To give the conclusion up front: for a function $f(x_1,x_2,\dots,x_n)$ of independent variables, when the variables satisfy the condition $g(x_1,x_2,\dots,x_n)=k$, the condition on the variables $(x_1,x_2,\dots,x_n)$ under which $f$ can take an extremum is:

$$\nabla f = \lambda\,\nabla g$$

Here the left side is the gradient of $f$, and the right side is the gradient of $g$ multiplied by the constant $\lambda$ (lambda). $\lambda$ indicates that the two gradient vectors are parallel. The points satisfying this equation are *candidates* for extrema of $f$. If $f$ is a continuous function that doesn't blow up to infinity, we can compare these candidate extrema and pick the largest as the maximum and the smallest as the minimum. Let's see why this works.

## The condition $g(x_1,x_2,\dots,x_n)=k$

We are currently finding the value of $f$ under the condition $g(x_1,x_2,\dots,x_n)=k$. For convenience, let's restrict to three variables $x,y,z$. In 3D space the condition $g(x,y,z)=k$ traces out a locus — just as $x^2+y^2+z^2=1$ is a sphere of radius $1$. Since $g(x,y,z)=k$ is the constraint, the variables of the $f(x,y,z)$ we want are points lying on this locus.

## The level surfaces of $f(x,y,z)$

Now let's look at $f(x,y,z)$. Just like $g(x,y,z)=k$ above, there will be loci satisfying the expression for $f(x,y,z)$. But since $f$'s value isn't fixed, the locus that $f$'s expression describes changes with the value of $f$. For instance, if $f(x,y,z)=x+y+z$, that's a plane with normal vector $(1,1,1)$. But the locus for $f=1$ and the locus for $f=2$ are different. In the previous post we called the locus of points sharing the same function value a level curve, or level surface. For every point on the level surface $f=1$, the value of $x+y+z$ is $1$; likewise on $f=2$ it's $2$. Since a single point can't have two different function values, level surfaces can never overlap.

## The relationship between $f(x,y,z)$ and $g(x,y,z)=k$

Let's take an example. Suppose we want the max or min of $x+y+z$ subject to $x^2+y^2+z^2=1$. Then $g=k$ and $f$ are:

$$g(x,y,z)=x^2+y^2+z^2=1,\qquad f(x,y,z)=x+y+z$$

Now let's connect the two. Over the points on the locus satisfying $g(x,y,z)=k$, we must make the value of $f(x,y,z)$ as large or as small as possible. First, here is the locus of $g$.

![The graph of $x^2+y^2+z^2=1$.](/assets/img/Screenshot_20251225_203847_Chrome.jpg)

The graph of $x^2+y^2+z^2=1$

Over the points of this locus, let's lay out the level surfaces corresponding to the values of $x+y+z$.

![The level surfaces of $x+y+z$ over the sphere $x^2+y^2+z^2=1$.](/assets/img/Screenshot_20251225_204224_Chrome.jpg)

The graph of $x^2+y^2+z^2=1$ together with $x+y+z=1$

The overlap of $x+y+z=1$ and $x^2+y^2+z^2=1$ is the locus of solutions satisfying both equations. So is the maximum of $x+y+z$ equal to $1$? Looking at this picture, clearly not. As $x+y+z$ grows larger, the plane equation shifts in the $+x,+y,+z$ direction, yet it still intersects $x^2+y^2+z^2=1$. Here is the same figure with $x+y+z=1.5$ added.

![Adding the plane $x+y+z=1.5$, which still meets the sphere.](/assets/img/Screenshot_20251225_205923_Chrome.jpg)

The graph of $x+y+z=1$ (left) and $x+y+z=1.5$ (right)

We see that even the $x+y+z=1.5$ plane still intersects $x^2+y^2+z^2=1$. So if we keep increasing the value of $f$, and finally find the point where it last meets $g$, we can guess that the maximum of $f$ occurs at that point. And we also see that at that point the level surfaces of $g$ and $f$ are tangent. This is the heart of the method of Lagrange multipliers: the point where the two level surfaces are tangent serves as a candidate extremum of $f$.

Why a *candidate* extremum? We haven't studied it yet, but it's because that point could be a saddle point. Briefly, think of it as similar to an inflection point of a cubic in 3D. $f$ and $g$ are tangent even at a saddle point. But this doesn't cause a problem for finding max/min — even if we include saddle points along with the extrema, the max and min will after all come from the actual extrema, not the saddles.

![A saddle point.](/assets/img/_EB_8B_A4_EC_9A_B4_EB_A1_9C_EB_93_9C__1_.jpeg)

The shape of a saddle point

Now we know that candidate extrema of $f$ and $g$ can appear. To find them we use the gradient. In the previous post (on partial derivatives and the gradient) we said the gradient vector is perpendicular to the level surface. $f$ and $g$ being tangent means that at the point of tangency the two gradient vectors are parallel — i.e., they stand in a constant-multiple proportion. In formula form:

$$\nabla f = \lambda\,\nabla g$$

Here the upside-down triangle is the operator that computes the gradient. $\lambda$ tells us the two gradient vectors are constant multiples of each other. Let's solve the example above using this equation. The gradients of $f$ and $g$ are:

$$\nabla f=(1,1,1),\qquad \nabla g=(2x,2y,2z)$$

So $(1,1,1)=\lambda(2x,2y,2z)$, which gives $x=y=z=1/(2\lambda)$. Substituting these into the constraint $g$ yields the value of $\lambda$. With $x^2+y^2+z^2=1$ we get $3\cdot(1/(2\lambda))^2=1$, hence $\lambda=\pm\sqrt{3}/2$, and $x=y=z=\pm 1/\sqrt{3}$.

These values are the candidate extrema of $f$. Since this equation yields both the max and the min (because it's defined on a closed bounded set — the detailed explanation is omitted), we naturally find the maximum to be $\sqrt{3}$ and the minimum to be $-\sqrt{3}$.

![The planes $x+y+z=-\sqrt{3}$ (left) and $x+y+z=\sqrt{3}$ (right); they are perfectly tangent to $g$.](/assets/img/Screenshot_20251225_213042_Chrome.jpg)

The graphs of $x+y+z=-\sqrt{3}$ (left) and $x+y+z=\sqrt{3}$ (right); you can see they are perfectly tangent to $g$.

The core of the Lagrange multiplier method — for finding the max of an arbitrary expression under constraints — is that an extremum can occur where the constraint locus and the level surface of the expression are tangent. Since tangency means the gradient vectors are parallel, we solve using this fact. That is the method of Lagrange multipliers.

Of course the method has limitations. The points we find are only *candidates* for extrema, so they might not actually be extrema. Also, if a huge number of extrema appear, the computation becomes massive. But in that it singles out the candidate points for the max/min among infinitely many points, it is nearly indispensable for problems of maximizing or minimizing a function under given conditions, so it's worth learning.

Thanks for reading this long post. Have a great end of the year, and I hope you're well prepared for the coming 2026. Merry Christmas!

---

*This post was written from my own perspective, so it may contain errors. Questions are always welcome — feel free to ask anytime.*
