---
layout: post
title: "Converting the Schrödinger Equation from Cartesian to Spherical Coordinates"
date: 2026-07-16
categories: [quantum-mechanics, physics]
tags: [Schrödinger Equation, Spherical Coordinates, Laplacian, Chain Rule]
description: How to convert the 3D Schrödinger equation from Cartesian to spherical coordinates — including the full chain-rule derivation of the Laplacian.
canonicalURL: "https://blog.naver.com/kkul20235/224348646713"
usemathjax: true
---

In this post I'll walk through the process of converting the coordinate system of the 3D Schrödinger equation from Cartesian coordinates to spherical coordinates.

The most fundamental equation describing wave mechanics, the time-independent Schrödinger equation, looks like this:

$$-\frac{\hbar^2}{2m}\frac{d^2\psi(x)}{dx^2}+V(x)\psi(x)=E\psi(x)$$

(If you're not familiar with the Schrödinger equation, please take a look at the previous post, ["The Schrödinger Equation (Time-Independent & Time-Dependent)"](https://oasisforhaanee.github.io/schrodinger-equation/).)

However, this equation can only describe a wave propagating in one dimension — that is, only along the $x$-axis. To generalize the Schrödinger equation to the three-dimensional space we live in, we need an expression that accounts for all three variables $x$, $y$, and $z$, not just a second derivative with respect to $x$.

$$-\frac{\hbar^2}{2m}\nabla^2\psi(x,y,z)+V(x,y,z)\psi(x,y,z)=E\psi(x,y,z)$$

$$=-\frac{\hbar^2}{2m}\left(\frac{\partial^2\psi}{\partial x^2}+\frac{\partial^2\psi}{\partial y^2}+\frac{\partial^2\psi}{\partial z^2}\right)+V(x,y,z)\psi=E\psi$$

This is the 3D Schrödinger equation that describes the wave function in three-dimensional space. The differences are that the potential $V$ and the wave function $\psi$ are now written as $V(x,y,z)$ and $\psi(x,y,z)$, and that the $y$ and $z$ terms have been added to the second derivative out front. But a new symbol shaped like an inverted triangle has appeared in the equation:

$$\nabla^2=\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2}+\frac{\partial^2}{\partial z^2}$$

When applied to a function, this operator takes the second partial derivative of the function with respect to each of the variables $x$, $y$, and $z$ and then adds them together. Called the **Laplacian** operator, when applied to $\psi$ it adds up the second partial derivatives of $\psi$ with respect to $x$, $y$, and $z$.

Now, once we use this Schrödinger equation and apply it to an electron bound in an atom, we can find out what the electron's wave function looks like.

But a problem arises in this process. The potential that the atom exerts on the electron has the following form (I'll use the most basic example, the hydrogen atom):

$$V(r)=-\frac{1}{4\pi\varepsilon_0}\frac{e^2}{r}$$

In the earlier equations we used $V(x,y,z)$ — that is, Cartesian coordinates — but $V$ has a form that is inversely proportional to $r$. To solve this, we need to unify $x$, $y$, $z$, and $r$ into a single coordinate system. As a result, in order to solve the 3D Schrödinger equation, we must convert the $xyz$ Cartesian coordinate system into a spherical coordinate system expressed in terms of $r$.

So let's first look at what the spherical coordinate system is.

## The Spherical Coordinate System

Unlike the Cartesian coordinate system we know well, which uses $x$, $y$, $z$, the spherical coordinate system uses $r$, $\theta$, $\phi$ to describe three-dimensional space.

![Spherical coordinate system axes](/assets/img/sph_coord_axes.jpg)

The distance from the origin is $r$, the angle measured down from the $z$-axis direction is $\theta$, and the angle made in the $xy$-plane measured from the $x$-axis direction is $\phi$. Describing three-dimensional space originally requires three independent variables, and in the spherical coordinate system that role is played by $r$, $\theta$, $\phi$. What's distinctive is that whereas $x$, $y$, $z$ were coordinates in space, the spherical coordinate system expresses the location of a point using the distance $r$ from the center and two angles made with the axes.

For example, the point $(x,y,z)=(1,1,1)$ is exactly identical to the spherical-coordinate point $(r,\theta,\phi)=(1.73,\ 54.7^\circ,\ 45^\circ)$.

![Spherical coordinate example](/assets/img/sph_coord_example.png)

So why bother converting like this? The potential $V$ of the hydrogen atom we're dealing with has spherical symmetry — it depends only on $r$ — so if we express the existing $x$, $y$, $z$ Cartesian coordinate system using the spherical coordinate system, which best captures that spherical symmetry, it becomes much easier to find the solutions of the wave function.

## Converting Between Spherical and Cartesian Coordinates

Now let's look at the formulas we need for the conversion. These formulas always hold when converting from the $xyz$ Cartesian coordinate system to the spherical coordinate system.

![Spherical coordinate projections onto the axes](/assets/img/sph_coord_projection.png)

In the figure above, you can see what happens when we drop perpendiculars in the $x$, $y$, $z$ directions from a point that is a distance $r$ from the origin, making an angle $\theta$ with the $z$-axis and $\phi$ with the $x$-axis. Dropping a perpendicular onto the $z$-axis gives $z$ using $\theta$ and $r$; dropping a perpendicular onto the $xy$-plane and then onto the $x$- and $y$-axes gives $x$ and $y$, as follows:

$$\begin{cases}x=r\sin\theta\cos\phi \ \ ...(1)\\y=r\sin\theta\sin\phi \ \ ...(2)\\z=r\cos\theta \ \ ...(3)\end{cases}$$

Using these, with a little more manipulation we also get the following equations:

$$x=r\sin\theta\cos\phi \ \ ...(1)$$
$$y=r\sin\theta\sin\phi \ \ ...(2)$$
$$z=r\cos\theta \ \ ...(3)$$
$$\tan\phi=\frac{y}{x} \ ...(4)$$
$$\cos\theta=\frac{z}{r} \ ...(5)$$
$$x^2+y^2+z^2=r^2 \ ...(6)$$

## Converting the Laplacian Operator from Cartesian to Spherical Coordinates

Now the calculation hell begins. To express the Laplacian in spherical coordinates, we need to use the chain rule. (If you're not comfortable with the chain rule, take a look at my earlier post ["Partial Derivatives and the Gradient (plus the Chain Rule)"](https://oasisforhaanee.github.io/partial-derivatives-and-gradient/).) Before applying the chain rule, using equations (1) through (6) above we can establish the following relations:

$$\frac{\partial r}{\partial x}=\sin\theta\cos\phi \qquad \frac{\partial r}{\partial y}=\sin\theta\sin\phi \qquad \frac{\partial r}{\partial z}=\cos\theta$$

$$\frac{\partial\theta}{\partial x}=\frac{1}{r}\cos\theta\cos\phi \qquad \frac{\partial\theta}{\partial y}=\frac{1}{r}\cos\theta\sin\phi \qquad \frac{\partial\theta}{\partial z}=-\frac{\sin\theta}{r}$$

$$\frac{\partial\phi}{\partial x}=-\frac{\sin\phi}{r\sin\theta} \qquad \frac{\partial\phi}{\partial y}=\frac{\cos\phi}{r\sin\theta} \qquad \frac{\partial\phi}{\partial z}=0$$

Now let's apply the chain rule:

$$\frac{\partial^2f}{\partial x^2}=\frac{\partial}{\partial x}\left(\frac{\partial f}{\partial x}\right)=\frac{\partial}{\partial x}\left(\frac{\partial r}{\partial x}\frac{\partial f}{\partial r}\right)+\frac{\partial}{\partial x}\left(\frac{\partial\theta}{\partial x}\frac{\partial f}{\partial\theta}\right)+\frac{\partial}{\partial x}\left(\frac{\partial\phi}{\partial x}\frac{\partial f}{\partial\phi}\right)$$

$$\frac{\partial^2f}{\partial y^2}=\frac{\partial}{\partial y}\left(\frac{\partial f}{\partial y}\right)=\frac{\partial}{\partial y}\left(\frac{\partial r}{\partial y}\frac{\partial f}{\partial r}\right)+\frac{\partial}{\partial y}\left(\frac{\partial\theta}{\partial y}\frac{\partial f}{\partial\theta}\right)+\frac{\partial}{\partial y}\left(\frac{\partial\phi}{\partial y}\frac{\partial f}{\partial\phi}\right)$$

$$\frac{\partial^2f}{\partial z^2}=\frac{\partial}{\partial z}\left(\frac{\partial f}{\partial z}\right)=\frac{\partial}{\partial z}\left(\frac{\partial r}{\partial z}\frac{\partial f}{\partial r}\right)+\frac{\partial}{\partial z}\left(\frac{\partial\theta}{\partial z}\frac{\partial f}{\partial\theta}\right)+\frac{\partial}{\partial z}\left(\frac{\partial\phi}{\partial z}\frac{\partial f}{\partial\phi}\right)$$

Pulling out just the terms involving $r$, we get the following:

$$\frac{\partial}{\partial x}\left(\frac{\partial r}{\partial x}\frac{\partial f}{\partial r}\right)=\left[\frac{\partial^2r}{\partial x^2}\right]\frac{\partial f}{\partial r}+\left(\frac{\partial r}{\partial x}\right)^2\frac{\partial^2f}{\partial r^2}+\left(\frac{\partial r}{\partial x}\frac{\partial\theta}{\partial x}\right)\frac{\partial^2f}{\partial r\partial\theta}+\left(\frac{\partial r}{\partial x}\frac{\partial\phi}{\partial x}\right)\frac{\partial^2f}{\partial r\partial\phi}$$

$$\frac{\partial^2r}{\partial x^2}=\frac{\partial}{\partial x}\left(\frac{\partial r}{\partial x}\right)=\frac{\partial r}{\partial x}\frac{\partial}{\partial r}\left(\frac{\partial r}{\partial x}\right)+\frac{\partial\theta}{\partial x}\frac{\partial}{\partial\theta}\left(\frac{\partial r}{\partial x}\right)+\frac{\partial\phi}{\partial x}\frac{\partial}{\partial\phi}\left(\frac{\partial r}{\partial x}\right) \quad \text{(substitute)}$$

$$\frac{\partial}{\partial y}\left(\frac{\partial r}{\partial y}\frac{\partial f}{\partial r}\right)=\left[\frac{\partial^2r}{\partial y^2}\right]\frac{\partial f}{\partial r}+\left(\frac{\partial r}{\partial y}\right)^2\frac{\partial^2f}{\partial r^2}+\left(\frac{\partial r}{\partial y}\frac{\partial\theta}{\partial y}\right)\frac{\partial^2f}{\partial r\partial\theta}+\left(\frac{\partial r}{\partial y}\frac{\partial\phi}{\partial y}\right)\frac{\partial^2f}{\partial r\partial\phi}$$

$$\frac{\partial^2r}{\partial y^2}=\frac{\partial r}{\partial y}\frac{\partial}{\partial r}\left(\frac{\partial r}{\partial y}\right)+\frac{\partial\theta}{\partial y}\frac{\partial}{\partial\theta}\left(\frac{\partial r}{\partial y}\right)+\frac{\partial\phi}{\partial y}\frac{\partial}{\partial\phi}\left(\frac{\partial r}{\partial y}\right) \quad \text{(substitute)}$$

$$\frac{\partial}{\partial z}\left(\frac{\partial r}{\partial z}\frac{\partial f}{\partial r}\right)=\left[\frac{\partial^2r}{\partial z^2}\right]\frac{\partial f}{\partial r}+\left(\frac{\partial r}{\partial z}\right)^2\frac{\partial^2f}{\partial r^2}+\left(\frac{\partial r}{\partial z}\frac{\partial\theta}{\partial z}\right)\frac{\partial^2f}{\partial r\partial\theta}+\left(\frac{\partial r}{\partial z}\frac{\partial\phi}{\partial z}\right)\frac{\partial^2f}{\partial r\partial\phi}$$

$$\frac{\partial^2r}{\partial z^2}=\frac{\partial r}{\partial z}\frac{\partial}{\partial r}\left(\frac{\partial r}{\partial z}\right)+\frac{\partial\theta}{\partial z}\frac{\partial}{\partial\theta}\left(\frac{\partial r}{\partial z}\right)+\frac{\partial\phi}{\partial z}\frac{\partial}{\partial\phi}\left(\frac{\partial r}{\partial z}\right) \quad \text{(substitute)}$$

Substituting all of the relations found above into each of these terms, the $r$-related terms come out as follows:

$$\frac{\partial}{\partial x}\left(\frac{\partial r}{\partial x}\frac{\partial f}{\partial r}\right)=\left(\frac{\cos^2\theta\cos^2\phi+\sin^2\phi}{r}\right)\frac{\partial f}{\partial r}+\left(\sin^2\theta\cos^2\phi\right)\frac{\partial^2f}{\partial r^2}+\left(\frac{\sin\theta\cos\theta\cos^2\phi}{r}\right)\frac{\partial^2f}{\partial r\partial\theta}-\left(\frac{\sin\phi\cos\phi}{r}\right)\frac{\partial^2f}{\partial r\partial\phi}$$

$$+\frac{\partial}{\partial y}\left(\frac{\partial r}{\partial y}\frac{\partial f}{\partial r}\right)=\left(\frac{\cos^2\theta\sin^2\phi+\cos^2\phi}{r}\right)\frac{\partial f}{\partial r}+\left(\sin^2\theta\sin^2\phi\right)\frac{\partial^2f}{\partial r^2}+\left(\frac{\sin\theta\cos\theta\sin^2\phi}{r}\right)\frac{\partial^2f}{\partial r\partial\theta}+\left(\frac{\sin\phi\cos\phi}{r}\right)\frac{\partial^2f}{\partial r\partial\phi}$$

$$+\frac{\partial}{\partial z}\left(\frac{\partial r}{\partial z}\frac{\partial f}{\partial r}\right)=\left(\frac{\sin^2\theta}{r}\right)\frac{\partial f}{\partial r}+\left(\cos^2\theta\right)\frac{\partial^2f}{\partial r^2}-\left(\frac{\sin\theta\cos\theta}{r}\right)\frac{\partial^2f}{\partial r\partial\theta}+0$$

$$=\text{Sum}_R=\frac{2}{r}\frac{\partial f}{\partial r}+\frac{\partial^2f}{\partial r^2}$$

In the same way, applying the chain rule for $\theta$ and $\phi$ and substituting all the relations found above, we get the following:

$$\text{Sum}_{\theta}=\frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial f}{\partial\theta}\right)$$

$$\text{Sum}_{\phi}=\frac{1}{r^2\sin^2\theta}\frac{\partial^2f}{\partial\phi^2}$$

So the Laplacian comes out as:

$$\nabla^2f=\text{Sum}_R+\text{Sum}_{\theta}+\text{Sum}_{\phi}=\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial f}{\partial r}\right)+\frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial f}{\partial\theta}\right)+\frac{1}{r^2\sin^2\theta}\frac{\partial^2f}{\partial\phi^2}$$

Finally, when we express the 3D Schrödinger equation in spherical coordinates, it can be written as follows:

$$-\frac{\hbar^2}{2m}\left[\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial\psi}{\partial r}\right)+\frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial\psi}{\partial\theta}\right)+\frac{1}{r^2\sin^2\theta}\frac{\partial^2\psi}{\partial\phi^2}\right]+V(r,\theta,\phi)\psi=E\psi$$

The calculation really is quite involved. To be honest, I only worked out the equations for $r$ and skipped the ones for $\theta$ and $\phi$, haha... For those who'd like to prove it, I recommend working through the equations by hand yourself. Once I did it myself, it really clicked. Though I don't think I'll ever do it a second time...

Anyway, that's it for this post. Thank you for reading all the way through.

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
