---
layout: post
title: "Calculus — Partial Derivatives and the Gradient (plus the Chain Rule)"
date: 2025-12-07 19:32:00 +0900
categories: [mathematics]
tags: [partial derivative, gradient, chain rule]
description: An intuitive introduction to partial derivatives, the geometric meaning of the gradient, and the chain rule — with contour plots and 3D surfaces.
canonicalURL: "https://blog.naver.com/kkul20235/224101388177"
usemathjax: true
comments: true

---

This post examines two concepts that appear constantly in multivariable calculus: the **partial derivative** and the **gradient**.

To state the conclusions up front: a partial derivative is the derivative of a multivariable function taken with respect to one chosen variable while all other variables are held fixed as constants.

The gradient at a point $a$ is the normal vector perpendicular to the level set of the function through $a$ (in two dimensions, the curve $f(x,y)=c$; in three dimensions, the surface $f(x,y,z)=c$).

## Independent and dependent variables

Since we will be working with multivariable functions of several independent variables, we first clarify what an independent variable is, and what its counterpart—a dependent variable—is.

A function built from independent variables behaves somewhat differently from the single-variable functions we are accustomed to. Consider the following example.

$$f\left(x,y\right)=x^2+y^2$$

$$r^2=x^2+y^2$$

The first expression, $f(x,y)$, is a function of two variables, $x$ and $y$. The second is the familiar equation of a circle. Although $f$ resembles the circle equation, the two are different. In the circle equation, as $|x|$ increases, $|y|$ must decrease: $x$ and $y$ are *dependent* on one another. For the function $f$, by contrast, $x$ and $y$ range freely over the coordinate plane without constraining each other: they are *independent*. When $x$ or $y$ changes, only the value of $f$ changes.

A function of independent variables of this kind is called a **multivariable function**.

The two expressions are nonetheless related. The set of points where $f$ takes the value $r^2$ coincides with the solution set of the circle equation. The set of points on which $f$ has the constant value $r^2$ is a **level curve** in two dimensions.

![A contour plot draws the level curves that connect points of equal height.](/assets/img/img_page07.jpg)

The notion of a **contour plot** is a useful aid to intuition. A contour line connects points of equal height; joining such points produces closed curves like those in the figure above. The same construction applies to $f(x,y)=x^2+y^2$. If we plot $f(x,y)$ as the height along the $z$-axis in three dimensions, we obtain the surface shown below.

![The graph of $z=x^2+y^2$.](/assets/img/Screenshot_20251207_114700_KakaoTalk.jpg)

The graph of $z=x^2+y^2$

Here, the locus $r^2=x^2+y^2$ is the set of points at height $z=r^2$. By the same reasoning as for the contour plot, the points at height $z=r^2$ form the circle of radius $r$.

## Partial derivative

A partial derivative of an expression in several variables is obtained by treating all variables except one as constants and differentiating with respect to the remaining variable, yielding the instantaneous rate of change in that variable. It is used to find the rate of change with respect to each variable separately in a multivariable function whose variables act independently.

$$\frac{\partial f}{\partial x}\ \ \ \ \ \ \ \ \ f_x$$

The partial derivative is denoted either with the rounded "$\partial$" symbol (left) or with a subscript (right).

### The geometric meaning of a partial derivative

Consider the function of two variables $z=x^2+xy+y^2$:

![The geometric meaning of a partial derivative.](/assets/img/images_swan9405_post_cb6f5f98-1c93-4aaf-a4ee-a5bead9115d4_image.png)

The figure shows the three-dimensional graph of $z=x^2+xy+y^2$. At any point on this surface there are infinitely many tangent lines, so "the slope" at a point is not well defined until a direction is fixed. The partial derivative is precisely the derivative in a fixed coordinate direction.

What does the partial derivative look like on the graph? The red curve in the figure is obtained by holding $y$ fixed as a constant (here $y=1$) and letting only $x$ vary. The slope of this red curve is the partial derivative of the surface with respect to $x$. Concretely, substituting $y=1$ into $x^2+xy+y^2$ gives $x^2+x+1$, and differentiating with respect to $x$ yields $2x+1$.

For a multivariable function whose variables are independent, then, the partial derivative is simply a matter of treating the remaining variables as constants and differentiating. If the variables are *dependent*—for example, if $x$ and $y$ influence one another—the **chain rule** must be used instead.

## Chain rule

Suppose $w(x,y)$ depends on $x$ and $y$, and that $x=x(t)$ and $y=y(t)$ in turn depend on $t$. Then the derivative of $w$ with respect to $t$ is

$$\frac{\partial w}{\partial t}=\frac{\partial w}{\partial x}\frac{\partial x}{\partial t}+\frac{\partial w}{\partial y}\frac{\partial y}{\partial t}$$

The first term on the right is the change in $w$ caused by $x$, and the second is the change caused by $y$. The products of partial derivatives arise because the change in $w$ with respect to $t$ is driven both by how $x$ changes with $t$ and by how $y$ changes with $t$.

One might be tempted to "cancel" the $\partial x$ or $\partial y$ in a single term to recover the left-hand side. This is not valid: because $w$ varies with respect to the *independent* variables $x$ and $y$, the total change is the sum of the change due to $x$ and the change due to $y$. Neither term can be dropped.

Implicit differentiation, familiar from single-variable calculus, is itself an application of the chain rule. Consider the standard example of differentiating the circle equation $x^2+y^2=r^2$ with respect to $x$. Since $x$ and $y$ are dependent rather than independent, the chain rule applies:

$$\frac{d}{dx}(x^2+y^2)=\frac{d}{dx}(r^2)$$

$$\frac{d}{dx}(x^2)+\frac{d}{dx}(y^2)=\frac{d(x^2)}{dx}\cdot \frac{dx}{dx}+\frac{d(y^2)}{dy}\cdot \frac{dy}{dx}=2x+2y\frac{dy}{dx}=0$$

$$\frac{dy}{dx}=-\frac{2x}{2y}=-\frac{x}{y}$$

The chain rule is thus the essential bridge that allows differentiation even when the variables are dependent, and it appears throughout applied mathematics and physics.

## Gradient

We begin with the definition. The gradient of a function of independent variables is the vector whose components are the partial derivatives of the function with respect to each variable. In symbols:

$$\nabla f(\mathbf{x})=\left(\frac{\partial f}{\partial x_1},\frac{\partial f}{\partial x_2},\dots ,\frac{\partial f}{\partial x_n}\right)$$

This says that the gradient of a function $f$ of the independent variables $x_1,x_2,\dots,x_n$, evaluated at the point $\mathbf{x}$, is the vector written above. This is the general definition; in the more intuitive three-dimensional setting, for a function $f$ of $x,y,z$, the gradient is

$$\nabla f(x,y,z)=\left(\frac{\partial f}{\partial x},\frac{\partial f}{\partial y},\frac{\partial f}{\partial z}\right)$$

If $f(x,y,z)=x^2+y^2+z^2$, the partial derivative with respect to $x$ is $2x$ (treating $y$ and $z$ as constants); similarly, the partials with respect to $y$ and $z$ are $2y$ and $2z$. By definition, the gradient is $(2x,2y,2z)$. At the point $(1,2,3)$, for example, the gradient is $(2,4,6)$.

The gradient is simpler to compute than one might expect, but it is not meaningful for every function: as noted above, it applies to multivariable functions of *independent* variables.

## The geometric meaning of the gradient

Having seen how to compute the gradient, we now ask what it means. We approach this intuitively through both graphs and formulas.

Recall the chain-rule formula derived above:

$$\frac{\partial w}{\partial t}=\frac{\partial w}{\partial x}\frac{\partial x}{\partial t}+\frac{\partial w}{\partial y}\frac{\partial y}{\partial t}$$

Rewriting it for a function $f$ of the variables $x,y,z$, we obtain

$$\frac{\partial f}{\partial t}=\frac{\partial f}{\partial x}\frac{\partial x}{\partial t}+\frac{\partial f}{\partial y}\frac{\partial y}{\partial t}+\frac{\partial f}{\partial z}\frac{\partial z}{\partial t}$$

Remarkably, this expression is exactly the dot product of the gradient vector and the velocity vector:

$$\frac{\partial f}{\partial t}=\frac{\partial f}{\partial x}\frac{\partial x}{\partial t}+\frac{\partial f}{\partial y}\frac{\partial y}{\partial t}+\frac{\partial f}{\partial z}\frac{\partial z}{\partial t}$$

$$=\left(\frac{\partial f}{\partial x},\frac{\partial f}{\partial y},\frac{\partial f}{\partial z}\right)\cdot \left(\frac{\partial x}{\partial t},\frac{\partial y}{\partial t},\frac{\partial z}{\partial t}\right)$$

$$=\nabla f(x,y,z)\cdot \frac{d\mathbf{r}}{dt}$$

where $\vec{v}=\frac{d\mathbf{r}}{dt}=\left(\frac{dx}{dt},\frac{dy}{dt},\frac{dz}{dt}\right)$ is the velocity vector.

Now suppose this expression equals $0$. On the right-hand side, a vanishing dot product means the gradient vector and the velocity vector are perpendicular. On the left-hand side, $df/dt=0$ means the value of $f$ does not change along the path. Exactly as with a contour line on a hillside, the points satisfying $df/dt=0$ form the locus of points sharing the same value of $f$, and on that locus the gradient is perpendicular to the velocity.

For a function of two variables, the velocity vector is tangent to the level curve; for a function of three variables, the velocity vectors span the tangent plane of the level surface. The normal vector perpendicular to that tangent line or plane is the gradient. There are two perpendicular directions (inward and outward); the gradient points in the direction in which the function value *increases*—if the point lies on $f(x,y,z)=c$, the gradient points toward $f(x,y,z)=c+1$. The figure below shows the gradient vector at a point $P$ (the blue arrow) as the normal vector to the tangent plane of the level set $f(x,y,z)=0$ (the ellipsoidal surface).

![The gradient vector (blue arrow) at point P is the normal vector to the tangent plane of the level set $f(x,y,z)=0$.](/assets/img/image.png)

This post has covered partial derivatives, the chain rule, and the gradient together with its interpretation as the normal to a level set.

---

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
