---
layout: post
title: "Calculus — Partial Derivatives and the Gradient (plus the Chain Rule)"
date: 2025-12-07 19:32:00 +0900
categories: [mathematics, calculus]
tags: [partial derivative, gradient, chain rule]
description: An intuitive introduction to partial derivatives, the geometric meaning of the gradient, and the chain rule — with contour plots and 3D surfaces.
usemathjax: true
---

Hello everyone, it's been a while. We had the first snow yesterday. Snow is lovely out in society, but here I never want to see it again... honestly it's a bit sad. Seoul got hit with a heavy snowfall, so please be careful on the icy roads and stay warm.

In this post we'll look at two concepts that come up constantly in calculus: the **partial derivative** and the **gradient**.

To give the conclusion up front: a partial derivative means taking the derivative of a multivariable function while treating one specific variable as the variable and holding all the others fixed as constants.

The gradient at an arbitrary point $a$ is the normal vector that is perpendicular to the level set of the function at $a$ (in 2D, the curve satisfying $f(x,y)=c$; in 3D, the surface satisfying $f(x,y,z)=c$).

## Independent and dependent variables

In what follows we'll deal with multivariable functions made of several independent variables, so let's first clarify what an independent variable is, and what the opposite — a dependent variable — is.

A function built from independent variables is a little different from the functions we usually know. Let me give an example.

The function $f(x,y)$ above is a multivariable function of two variables, $x$ and $y$, while the equation below is the familiar equation of a circle. $f$ looks similar to the circle equation, but it is different. In the circle equation, as the absolute value of $x$ grows the absolute value of $y$ shrinks — $x$ and $y$ are in a *dependent* relationship where each affects the other. But for the function $f$, over the points of the $xy$-coordinate plane, the $x$ and $y$ values do not influence each other — they stand in an *independent* relationship. When $x$ or $y$ changes, only the value of the function $f$ changes.

A function composed of such independent variables is what we call a **multivariable function**.

Still, the two expressions are related. In the function $f$, the locus of points where $f$ takes the value $r^2$ coincides with the solution of the circle equation. The set of points where $f$ has the same value $r^2$ can be viewed as a **level curve** in 2D.

![A contour plot draws the level curves that connect points of equal height.](/assets/img/img_page07.jpg)

A contour plot shows the level curves connecting points of equal height.

To help build intuition, we can use the idea of a **contour plot**. A contour connects points that share the same height. Joining points of equal height gives us closed curves like those in the figure above. The same holds for $f(x,y)=x^2+y^2$. If we place $f(x,y)$ along the height of the $z$-axis in 3D, we get the graph shown below.

![The graph of $z=x^2+y^2$.](/assets/img/Screenshot_20251207_114700_KakaoTalk.jpg)

The graph of $z=x^2+y^2$

Here, the locus $r^2=x^2+y^2$ is the collection of points where $z=r^2$. By the same logic as the contour plot, if we look for the points at height $z=r^2$, we recover the circle of radius $r$ that we know well.

## Partial derivative

A partial derivative means, for an expression made of several variables, treating all variables except one as constants and differentiating the function with respect to that single variable to obtain its instantaneous rate of change. It is used to find the rate of change with respect to each variable in a multivariable function whose variables act independently.

The partial derivative symbol uses a rounded "d" on the left, or a superscript notation on the right.

![The geometric meaning of a partial derivative.](/assets/img/images_swan9405_post_cb6f5f98-1c93-4aaf-a4ee-a5bead9115d4_image.png)

The geometric meaning of a partial derivative

The graph above is the 3D plot of the multivariable function $z=x^2+xy+y^2$. If you were asked to draw a tangent line at some point, the 3D surface would let you draw infinitely many tangents. To get the derivative in a particular direction, you must fix the direction — and that's where the partial derivative comes in.

So what does the partial derivative mean on the graph? The red line in the figure above is the graph obtained by treating the remaining variable $y$ as a constant, leaving only $x$ as the variable (in the figure, $y$ is fixed at $y=1$). The derivative — the slope — of this red line is the partial derivative of the graph with respect to $x$. In other words, substituting $y=1$ into $x^2+xy+y^2$ gives $x^2+x+1$, and differentiating with respect to $x$ yields $2x+1$.

So for a multivariable function whose variables are independent, the partial derivative is simply a matter of treating the remaining variables as constants and differentiating. But if the variables are *dependent* — for example, when $x$ and $y$ each affect one another's values — you must use the **chain rule** to take the partial derivative.

## Chain rule

Suppose the function $w(x,y)$ depends on $x$ and $y$, and $x=x(t)$, $y=y(t)$ are themselves dependent on $t$. Then the derivative of $w$ with respect to $t$ is:

$$\frac{dw}{dt}=\frac{\partial w}{\partial x}\frac{dx}{dt}+\frac{\partial w}{\partial y}\frac{dy}{dt}$$

The first term on the right is the change in $w$ caused by $x$, and the second term is the change caused by $y$. This product of partial derivatives appears because $w$'s change with respect to $t$ is affected by both the change in $x$ as $t$ changes and the change in $y$ as $t$ changes.

You might wonder whether canceling one term on the right wouldn't just give the left side — but since $w$'s expression changes with respect to the *independent* variables $x$ and $y$, you must add the change due to $x$ and the change due to $y$ to get the total change. You can't simply cancel.

Implicit differentiation from high-school calculus also uses the chain rule. Consider the classic example of differentiating the circle equation $x^2+y^2=r^2$ with respect to $x$. Since $x$ and $y$ are not independent but dependent variables influencing each other, we must apply the chain rule. That gives:

$$\frac{d}{dx}\left(x^2+y^2\right)=\frac{d}{dx}\left(r^2\right) \quad\Rightarrow\quad 2x+2y\frac{dy}{dx}=0 \quad\Rightarrow\quad \frac{dy}{dx}=-\frac{x}{y}$$

As you can see, the chain rule is a crucial bridge that lets us differentiate even when variables are dependent. I remember using it a lot back when I studied my major, and it's well worth knowing.

## Gradient

First, the definition of the gradient. The gradient is the vector made of the partial derivatives of a function (built from independent variables) with respect to each of its variables. In symbols:

$$\nabla f = \left(\frac{\partial f}{\partial x_1},\frac{\partial f}{\partial x_2},\dots,\frac{\partial f}{\partial x_n}\right)$$

The formula above means that the gradient of a function $f$ expressed in the independent variables $x_1,x_2,\dots,x_n$, evaluated at the point $x$, is the vector written above. This is the general definition; in the more intuitive 3D setting, for a function $f$ of the independent variables $x,y,z$, the gradient is:

$$\nabla f = \left(\frac{\partial f}{\partial x},\frac{\partial f}{\partial y},\frac{\partial f}{\partial z}\right)$$

If $f(x,y,z)=x^2+y^2+z^2$, then the partial with respect to $x$ is $2x$ (treating $y,z$ as constants); similarly the partial w.r.t. $y$ is $2y$ and w.r.t. $z$ is $2z$, so by definition the gradient vector is $(2x,2y,2z)$. For example, at the point $(1,2,3)$ the gradient vector comes out to $(2,4,6)$.

The gradient formula is derived more simply than you'd think, but that doesn't mean it works for every function. As mentioned earlier, it is meaningful only for multivariable functions made of *independent* variables.

## The geometric meaning of the gradient

We've seen that the gradient comes out as above, but why compute it? Let's understand what the gradient means, intuitively, through graphs and formulas.

Earlier we found that the chain-rule formula comes out as:

$$\frac{df}{dt}=\frac{\partial f}{\partial x}\frac{dx}{dt}+\frac{\partial f}{\partial y}\frac{dy}{dt}+\frac{\partial f}{\partial z}\frac{dz}{dt}$$

Rewriting this for a function $f$ of variables $x,y,z$, we get the chain-rule expression:

$$\frac{df}{dt}=\nabla f\cdot\vec{v}$$

where $\vec{v}=\left(\frac{dx}{dt},\frac{dy}{dt},\frac{dz}{dt}\right)$ is the velocity vector. Surprisingly, this is the dot product of the gradient vector and the velocity vector.

Now suppose this expression equals $0$. On the right, since the dot product is $0$, the gradient vector and the velocity vector are perpendicular. On the left, $df/dt=0$ means the value of $f$ does not change. Just like a contour line on a mountain, the points satisfying $df/dt=0$ are the locus of points sharing the same function value $f$, and on those points the gradient vector is perpendicular to the velocity vector.

For a 2-variable function, the tangent line to the curve is the velocity vector; for a 3-variable function, the tangent plane on the surface is the set of velocity vectors. The normal vector perpendicular to it is the gradient vector. Note there are two perpendicular directions, inward and outward, but the gradient points in the direction where the function value *increases* (if the point lies on $f(x,y,z)=c$, the gradient points toward $f(x,y,z)=c+1$). The figure below shows that the gradient vector at point $P$ (the blue arrow) is the normal vector to the tangent plane of the level set $f(x,y,z)=0$ (the ellipsoidal surface).

![The gradient vector (blue arrow) at point P is the normal vector to the tangent plane of the level set $f(x,y,z)=0$.](/assets/img/image.png)

This post covered partial derivatives and tangent planes. The material is vast and I'm still inexperienced, so there may be mistakes. If any part of my explanation is wrong, please let me know in the comments anytime, and feel free to ask questions. Thanks for reading this long piece.

---

*This post was written from my own perspective, so it may contain errors. Questions are always welcome — feel free to ask anytime.*
