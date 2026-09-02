---
layout: post
title: "The Method of Lagrange Multipliers"
date: 2025-12-25 21:37:00 +0900
categories: [mathematics]
tags: [Lagrange multiplier, optimization, gradient]
description: An intuitive, geometric explanation of the method of Lagrange multipliers for constrained optimization, with level surfaces and worked examples.
canonicalURL: "https://blog.naver.com/kkul20235/224122558794"
usemathjax: true
comments: true

---

Problems that ask for the maximum or minimum of an expression subject to a given condition are familiar from secondary-school mathematics. The arithmetic–geometric mean (AM–GM) inequality is a classic tool for such problems:

$$\frac{x+y+z}{3}\ge \sqrt[3]{xyz}\quad (x,y,z>0;\ \text{equality holds when } x=y=z)$$

A slight rearrangement of the AM–GM inequality yields the statement: if $x+y+z=s$, then the maximum of $xyz$ is attained when the three variables are equal, $x=y=z=s/3$.

The AM–GM inequality, however, applies only to expressions of that particular form. How, then, do we find the extrema of an *arbitrary* expression under a given constraint? The general method is the **method of Lagrange multipliers**, which is the subject of this post.

To state the conclusion first: for a function $f(x_1,x_2,\dots,x_n)$ of independent variables, subject to the constraint $g(x_1,x_2,\dots,x_n)=k$, the condition that $(x_1,x_2,\dots,x_n)$ must satisfy for $f$ to attain an extremum is

$$\nabla f=\lambda \nabla g$$

The left-hand side is the gradient of $f$; the right-hand side is the gradient of $g$ multiplied by a constant $\lambda$ (lambda). The factor $\lambda$ expresses the fact that the two gradient vectors are parallel. The points satisfying this equation are *candidates* for extrema of $f$. If $f$ is continuous and does not diverge to infinity, we may compare these candidates and select the largest as the maximum and the smallest as the minimum. We now examine why this works.

## The constraint $g(x_1,x_2,\dots,x_n)=k$

We seek the extreme values of $f$ subject to $g(x_1,x_2,\dots,x_n)=k$. For concreteness, restrict to three variables $x,y,z$. In three-dimensional space the condition $g(x,y,z)=k$ traces out a surface, just as $x^2+y^2+z^2=1$ is the sphere of radius $1$. Since $g(x,y,z)=k$ is the constraint, the admissible inputs to $f(x,y,z)$ are the points lying on this surface.

## The level surfaces of $f(x,y,z)$

Now consider $f(x,y,z)$. As with $g(x,y,z)=k$, the expression for $f$ defines a family of surfaces. Because the value of $f$ is not fixed, however, the surface defined by $f$ changes with that value. For example, if $f(x,y,z)=x+y+z$, each surface is a plane with normal vector $(1,1,1)$, but the plane for $f=1$ differs from the plane for $f=2$. In the previous post, the locus of points sharing a common function value was called a level curve or level surface. Every point on the level surface $f=1$ has $x+y+z=1$; every point on $f=2$ has $x+y+z=2$. Since a single point cannot carry two different function values, distinct level surfaces never intersect.

## The relationship between $f(x,y,z)$ and $g(x,y,z)=k$

Consider a concrete example. Suppose we want the maximum and minimum of $x+y+z$ subject to $x^2+y^2+z^2=1$. Then $g=k$ and $f$ are

$$g(x,y,z)=x^2+y^2+z^2=1$$

$$f(x,y,z)=x+y+z$$

We now relate the two. Among the points on the surface $g(x,y,z)=k$, we want to make $f(x,y,z)$ as large or as small as possible. First, here is the constraint surface $g$.

![The graph of $x^2+y^2+z^2=1$.](/assets/img/Screenshot_20251225_203847_Chrome.jpg)

The graph of $x^2+y^2+z^2=1$

Over this surface, we lay out the level surfaces corresponding to various values of $x+y+z$.

![The level surfaces of $x+y+z$ over the sphere $x^2+y^2+z^2=1$.](/assets/img/Screenshot_20251225_204224_Chrome.jpg)

The graph of $x^2+y^2+z^2=1$ together with $x+y+z=1$

The intersection of $x+y+z=1$ and $x^2+y^2+z^2=1$ is the set of points satisfying both equations. Is the maximum of $x+y+z$ therefore equal to $1$? Clearly not. As $x+y+z$ increases, the plane shifts in the $(+x,+y,+z)$ direction, yet it still intersects the sphere. The figure below adds the plane $x+y+z=1.5$.

![Adding the plane $x+y+z=1.5$, which still meets the sphere.](/assets/img/Screenshot_20251225_205923_Chrome.jpg)

The graph of $x+y+z=1$ (left) and $x+y+z=1.5$ (right)

Even the plane $x+y+z=1.5$ still intersects $x^2+y^2+z^2=1$. If we continue to increase the value of $f$ and locate the last point at which the plane still touches $g$, we may expect the maximum of $f$ to occur there. At that point the level surfaces of $f$ and $g$ are tangent. This is the heart of the method of Lagrange multipliers: a point where the two level surfaces are tangent is a candidate extremum of $f$.

Why only a *candidate*? Because such a point may be a saddle point. Briefly, a saddle point is the three-dimensional analogue of an inflection point of a cubic; $f$ and $g$ are tangent at a saddle point as well. This causes no difficulty for finding the maximum and minimum, however: even if saddle points are included among the candidates, the maximum and minimum will be taken at the genuine extrema, not at the saddles.

![Visualizing a saddle point on the hyperbolic paraboloid $z=x^2-y^2$.](/assets/img/saddle_point_hyperbolic_paraboloid.jpg)

The shape of a saddle point—the hyperbolic paraboloid $z=x^2-y^2$, with a minimum along the $x$-axis and a maximum along the $y$-axis meeting at $(0,0,0)$.

We now know that candidate extrema arise where the level surfaces of $f$ and $g$ are tangent. To locate them, we use the gradient. In the previous post on partial derivatives and the gradient, we showed that the gradient vector is perpendicular to the level surface. Tangency of $f$ and $g$ therefore means that at the point of contact the two gradient vectors are parallel—that is, one is a constant multiple of the other. In symbols:

$$\nabla f=\lambda \nabla g$$

Here the inverted triangle is the gradient operator, and $\lambda$ expresses that the two gradient vectors are proportional. We now solve the example above using this equation. The gradients of $f$ and $g$ are

$$\nabla f=\left(\frac{\partial f}{\partial x},\frac{\partial f}{\partial y},\frac{\partial f}{\partial z}\right)=\left(1,\ 1,\ 1\right)$$

$$\nabla g=\left(\frac{\partial g}{\partial x},\frac{\partial g}{\partial y},\frac{\partial g}{\partial z}\right)=(2x,2y,2z)$$

Thus $(1,1,1)=\lambda(2x,2y,2z)$, which gives

$$\nabla f=\lambda \nabla g=(1,1,1)=\lambda (2x,2y,2z)$$

$$x=y=z=\frac{1}{2\lambda }$$

Substituting into the constraint $g$ determines $\lambda$. With $x^2+y^2+z^2=1$,

$$\left(\frac{1}{2\lambda }\right)^2+\left(\frac{1}{2\lambda }\right)^2+\left(\frac{1}{2\lambda }\right)^2=1$$

$$3\cdot \frac{1}{4\lambda ^2}=1\quad \Rightarrow \quad \lambda ^2=\frac{3}{4}$$

$$\lambda =\pm \frac{\sqrt{3}}{2}$$

Therefore

$$x=y=z=\pm \frac{1}{\sqrt{3}}$$

$$f\left(\frac{1}{\sqrt{3}},\frac{1}{\sqrt{3}},\frac{1}{\sqrt{3}}\right)=\frac{3}{\sqrt{3}}=\sqrt{3}$$

$$f\left(-\frac{1}{\sqrt{3}},-\frac{1}{\sqrt{3}},-\frac{1}{\sqrt{3}}\right)=-\frac{3}{\sqrt{3}}=-\sqrt{3}$$

These are the candidate extrema of $f$. Since this problem is posed on a closed and bounded set, both a maximum and a minimum must exist (the detailed justification is omitted), and we conclude that the maximum is $\sqrt{3}$ and the minimum is $-\sqrt{3}$.

![The planes $x+y+z=-\sqrt3$ (left) and $x+y+z=\sqrt3$ (right); they are perfectly tangent to $g$.](/assets/img/Screenshot_20251225_213042_Chrome.jpg)

The graphs of $x+y+z=-\sqrt3$ (left) and $x+y+z=\sqrt3$ (right); both are tangent to $g$.

The core idea of the method of Lagrange multipliers—for finding the extrema of an arbitrary expression under a constraint—is that an extremum can occur only where the constraint surface and a level surface of the objective are tangent. Since tangency means the gradient vectors are parallel, we solve for the points where this holds.

The method has limitations. The points found are only *candidates* for extrema and need not actually be extrema. If a very large number of candidates appear, the computation becomes heavy. Nevertheless, because it isolates a finite set of candidate points from infinitely many possibilities, it is nearly indispensable for constrained optimization problems and is well worth mastering.

---

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
