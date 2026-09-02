---
layout: post
title: "Converting the Schrödinger Equation from Cartesian to Spherical Coordinates"
date: 2026-07-16
categories: [quantum-mechanics]
tags: [Schrödinger Equation, Spherical Coordinates, Laplacian, Chain Rule]
description: How to convert the 3D Schrödinger equation from Cartesian to spherical coordinates — including the full chain-rule derivation of the Laplacian.
canonicalURL: "https://blog.naver.com/kkul20235/224348646713"
usemathjax: true
comments: true

---

This post walks through the conversion of the three-dimensional Schrödinger equation from Cartesian to spherical coordinates.

The most fundamental equation of wave mechanics, the time-independent Schrödinger equation, has the form

$$-\frac{\hbar^2}{2m}\frac{d^2\psi(x)}{dx^2}+V(x)\psi(x)=E\psi(x)$$

(If you are not yet familiar with the Schrödinger equation, see the earlier post ["The Schrödinger Equation (Time-Independent & Time-Dependent)"](https://oasisforhaanee.github.io/schrodinger-equation/).)

This equation, however, describes a wave propagating in only one dimension—along the $x$-axis. To generalize it to three-dimensional space, we need an expression involving all three variables $x$, $y$, and $z$, not merely a second derivative with respect to $x$:

$$-\frac{\hbar^2}{2m}\nabla^2\psi(x,y,z)+V(x,y,z)\psi(x,y,z)=E\psi(x,y,z)$$

$$=-\frac{\hbar^2}{2m}\left(\frac{\partial^2\psi}{\partial x^2}+\frac{\partial^2\psi}{\partial y^2}+\frac{\partial^2\psi}{\partial z^2}\right)+V(x,y,z)\psi=E\psi$$

This is the three-dimensional Schrödinger equation. The changes are that the potential $V$ and wave function $\psi$ are now written as $V(x,y,z)$ and $\psi(x,y,z)$, and the $y$ and $z$ terms have been added to the second derivative. A new symbol, an inverted triangle, has appeared:

$$\nabla^2=\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2}+\frac{\partial^2}{\partial z^2}$$

Applied to a function, this operator takes the second partial derivative with respect to each variable and adds the results. It is called the **Laplacian**.

Using this Schrödinger equation, we could in principle find the wave function of an electron bound to an atom. A problem arises, however. The potential an atom exerts on an electron (for the simplest case, the hydrogen atom) has the form

$$V(r)=-\frac{1}{4\pi\varepsilon_0}\frac{e^2}{r}$$

The earlier equations used Cartesian coordinates $V(x,y,z)$, but this potential depends on $r$ alone. To proceed, we must unify $x$, $y$, $z$, and $r$ into a single coordinate system. Solving the three-dimensional Schrödinger equation therefore requires converting the Cartesian system into a spherical coordinate system expressed in terms of $r$.

## The Spherical Coordinate System

Unlike the familiar Cartesian coordinates $x, y, z$, the spherical coordinate system describes three-dimensional space using $r$, $\theta$, and $\phi$.

![Spherical coordinate system axes](/assets/img/sph_coord_axes.jpg)

The distance from the origin is $r$; the angle measured down from the $z$-axis is $\theta$; and the angle in the $xy$-plane measured from the $x$-axis is $\phi$. Describing three-dimensional space requires three independent variables, and in spherical coordinates that role is played by $r$, $\theta$, and $\phi$. Whereas $x$, $y$, $z$ are Cartesian coordinates, the spherical system locates a point by its distance $r$ from the center and two angles relative to the axes.

For example, the point $(x,y,z)=(1,1,1)$ corresponds to the spherical-coordinate point $(r,\theta,\phi)=(1.73,\ 54.7^\circ,\ 45^\circ)$.

![Spherical coordinate example](/assets/img/sph_coord_example.png)

Why convert? The hydrogen-atom potential is spherically symmetric—it depends only on $r$. Expressing the Cartesian coordinates in the spherical system that best captures this symmetry makes the solutions of the wave function far easier to find.

## Converting Between Spherical and Cartesian Coordinates

The conversion formulas always hold when moving from Cartesian to spherical coordinates.

![Spherical coordinate projections onto the axes](/assets/img/sph_coord_projection.png)

In the figure, perpendiculars are dropped from a point at distance $r$ from the origin, making angle $\theta$ with the $z$-axis and $\phi$ with the $x$-axis. Projecting onto the $z$-axis gives $z$ in terms of $\theta$ and $r$; projecting onto the $xy$-plane and then onto the $x$- and $y$-axes gives $x$ and $y$:

$$\begin{cases}x=r\sin\theta\cos\phi \ \ ...(1)\\y=r\sin\theta\sin\phi \ \ ...(2)\\z=r\cos\theta \ \ ...(3)\end{cases}$$

With a little manipulation, we also obtain

$$\tan\phi=\frac{y}{x} \ ...(4)$$

$$\cos\theta=\frac{z}{r} \ ...(5)$$

$$x^2+y^2+z^2=r^2 \ ...(6)$$

## Converting the Laplacian Operator from Cartesian to Spherical Coordinates

Now the calculation becomes involved. To express the Laplacian in spherical coordinates, we use the chain rule. (If you are not comfortable with the chain rule, see the earlier post ["Partial Derivatives and the Gradient (plus the Chain Rule)"](https://oasisforhaanee.github.io/partial-derivatives-and-gradient/#chain-rule).) From equations (1)–(6) we first establish the relations

$$\frac{\partial r}{\partial x}=\sin\theta\cos\phi \qquad \frac{\partial r}{\partial y}=\sin\theta\sin\phi \qquad \frac{\partial r}{\partial z}=\cos\theta$$

$$\frac{\partial\theta}{\partial x}=\frac{1}{r}\cos\theta\cos\phi \qquad \frac{\partial\theta}{\partial y}=\frac{1}{r}\cos\theta\sin\phi \qquad \frac{\partial\theta}{\partial z}=-\frac{\sin\theta}{r}$$

$$\frac{\partial\phi}{\partial x}=-\frac{\sin\phi}{r\sin\theta} \qquad \frac{\partial\phi}{\partial y}=\frac{\cos\phi}{r\sin\theta} \qquad \frac{\partial\phi}{\partial z}=0$$

Applying the chain rule:

$$\frac{\partial^2f}{\partial x^2}=\frac{\partial}{\partial x}\left(\frac{\partial f}{\partial x}\right)=\frac{\partial}{\partial x}\left(\frac{\partial r}{\partial x}\frac{\partial f}{\partial r}\right)+\frac{\partial}{\partial x}\left(\frac{\partial\theta}{\partial x}\frac{\partial f}{\partial\theta}\right)+\frac{\partial}{\partial x}\left(\frac{\partial\phi}{\partial x}\frac{\partial f}{\partial\phi}\right)$$

$$\frac{\partial^2f}{\partial y^2}=\frac{\partial}{\partial y}\left(\frac{\partial f}{\partial y}\right)=\frac{\partial}{\partial y}\left(\frac{\partial r}{\partial y}\frac{\partial f}{\partial r}\right)+\frac{\partial}{\partial y}\left(\frac{\partial\theta}{\partial y}\frac{\partial f}{\partial\theta}\right)+\frac{\partial}{\partial y}\left(\frac{\partial\phi}{\partial y}\frac{\partial f}{\partial\phi}\right)$$

$$\frac{\partial^2f}{\partial z^2}=\frac{\partial}{\partial z}\left(\frac{\partial f}{\partial z}\right)=\frac{\partial}{\partial z}\left(\frac{\partial r}{\partial z}\frac{\partial f}{\partial r}\right)+\frac{\partial}{\partial z}\left(\frac{\partial\theta}{\partial z}\frac{\partial f}{\partial\theta}\right)+\frac{\partial}{\partial z}\left(\frac{\partial\phi}{\partial z}\frac{\partial f}{\partial\phi}\right)$$

Extracting only the terms involving $r$:

$$\frac{\partial}{\partial x}\left(\frac{\partial r}{\partial x}\frac{\partial f}{\partial r}\right)=\left[\frac{\partial^2r}{\partial x^2}\right]\frac{\partial f}{\partial r}+\left(\frac{\partial r}{\partial x}\right)^2\frac{\partial^2f}{\partial r^2}+\left(\frac{\partial r}{\partial x}\frac{\partial\theta}{\partial x}\right)\frac{\partial^2f}{\partial r\partial\theta}+\left(\frac{\partial r}{\partial x}\frac{\partial\phi}{\partial x}\right)\frac{\partial^2f}{\partial r\partial\phi}$$

$$\frac{\partial^2r}{\partial x^2}=\frac{\partial}{\partial x}\left(\frac{\partial r}{\partial x}\right)=\frac{\partial r}{\partial x}\frac{\partial}{\partial r}\left(\frac{\partial r}{\partial x}\right)+\frac{\partial\theta}{\partial x}\frac{\partial}{\partial\theta}\left(\frac{\partial r}{\partial x}\right)+\frac{\partial\phi}{\partial x}\frac{\partial}{\partial\phi}\left(\frac{\partial r}{\partial x}\right) \quad \text{(substitute)}$$

$$\frac{\partial}{\partial y}\left(\frac{\partial r}{\partial y}\frac{\partial f}{\partial r}\right)=\left[\frac{\partial^2r}{\partial y^2}\right]\frac{\partial f}{\partial r}+\left(\frac{\partial r}{\partial y}\right)^2\frac{\partial^2f}{\partial r^2}+\left(\frac{\partial r}{\partial y}\frac{\partial\theta}{\partial y}\right)\frac{\partial^2f}{\partial r\partial\theta}+\left(\frac{\partial r}{\partial y}\frac{\partial\phi}{\partial y}\right)\frac{\partial^2f}{\partial r\partial\phi}$$

$$\frac{\partial^2r}{\partial y^2}=\frac{\partial r}{\partial y}\frac{\partial}{\partial r}\left(\frac{\partial r}{\partial y}\right)+\frac{\partial\theta}{\partial y}\frac{\partial}{\partial\theta}\left(\frac{\partial r}{\partial y}\right)+\frac{\partial\phi}{\partial y}\frac{\partial}{\partial\phi}\left(\frac{\partial r}{\partial y}\right) \quad \text{(substitute)}$$

$$\frac{\partial}{\partial z}\left(\frac{\partial r}{\partial z}\frac{\partial f}{\partial r}\right)=\left[\frac{\partial^2r}{\partial z^2}\right]\frac{\partial f}{\partial r}+\left(\frac{\partial r}{\partial z}\right)^2\frac{\partial^2f}{\partial r^2}+\left(\frac{\partial r}{\partial z}\frac{\partial\theta}{\partial z}\right)\frac{\partial^2f}{\partial r\partial\theta}+\left(\frac{\partial r}{\partial z}\frac{\partial\phi}{\partial z}\right)\frac{\partial^2f}{\partial r\partial\phi}$$

$$\frac{\partial^2r}{\partial z^2}=\frac{\partial r}{\partial z}\frac{\partial}{\partial r}\left(\frac{\partial r}{\partial z}\right)+\frac{\partial\theta}{\partial z}\frac{\partial}{\partial\theta}\left(\frac{\partial r}{\partial z}\right)+\frac{\partial\phi}{\partial z}\frac{\partial}{\partial\phi}\left(\frac{\partial r}{\partial z}\right) \quad \text{(substitute)}$$

Substituting all of the relations above into these terms, the $r$-related terms become

$$\frac{\partial}{\partial x}\left(\frac{\partial r}{\partial x}\frac{\partial f}{\partial r}\right)=\left(\frac{\cos^2\theta\cos^2\phi+\sin^2\phi}{r}\right)\frac{\partial f}{\partial r}+\left(\sin^2\theta\cos^2\phi\right)\frac{\partial^2f}{\partial r^2}+\left(\frac{\sin\theta\cos\theta\cos^2\phi}{r}\right)\frac{\partial^2f}{\partial r\partial\theta}-\left(\frac{\sin\phi\cos\phi}{r}\right)\frac{\partial^2f}{\partial r\partial\phi}$$

$$+\frac{\partial}{\partial y}\left(\frac{\partial r}{\partial y}\frac{\partial f}{\partial r}\right)=\left(\frac{\cos^2\theta\sin^2\phi+\cos^2\phi}{r}\right)\frac{\partial f}{\partial r}+\left(\sin^2\theta\sin^2\phi\right)\frac{\partial^2f}{\partial r^2}+\left(\frac{\sin\theta\cos\theta\sin^2\phi}{r}\right)\frac{\partial^2f}{\partial r\partial\theta}+\left(\frac{\sin\phi\cos\phi}{r}\right)\frac{\partial^2f}{\partial r\partial\phi}$$

$$+\frac{\partial}{\partial z}\left(\frac{\partial r}{\partial z}\frac{\partial f}{\partial r}\right)=\left(\frac{\sin^2\theta}{r}\right)\frac{\partial f}{\partial r}+\left(\cos^2\theta\right)\frac{\partial^2f}{\partial r^2}-\left(\frac{\sin\theta\cos\theta}{r}\right)\frac{\partial^2f}{\partial r\partial\theta}+0$$

$$=\text{Sum}_R=\frac{2}{r}\frac{\partial f}{\partial r}+\frac{\partial^2f}{\partial r^2}$$

In the same way, applying the chain rule for $\theta$ and $\phi$ and substituting the relations above gives

$$\text{Sum}_{\theta}=\frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial f}{\partial\theta}\right)$$

$$\text{Sum}_{\phi}=\frac{1}{r^2\sin^2\theta}\frac{\partial^2f}{\partial\phi^2}$$

So the Laplacian becomes

$$\nabla^2f=\text{Sum}_R+\text{Sum}_{\theta}+\text{Sum}_{\phi}=\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial f}{\partial r}\right)+\frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial f}{\partial\theta}\right)+\frac{1}{r^2\sin^2\theta}\frac{\partial^2f}{\partial\phi^2}$$

Finally, the three-dimensional Schrödinger equation in spherical coordinates is

$$-\frac{\hbar^2}{2m}\left[\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial\psi}{\partial r}\right)+\frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial\psi}{\partial\theta}\right)+\frac{1}{r^2\sin^2\theta}\frac{\partial^2\psi}{\partial\phi^2}\right]+V(r,\theta,\phi)\psi=E\psi$$

The calculation is genuinely laborious. To be honest, I only worked through the $r$ terms in full and left the $\theta$ and $\phi$ terms to be verified, haha. For anyone who wants to prove it, I recommend working through the equations by hand—doing so once makes the structure clear, even if one never wants to repeat it.

That is it for this post. Thank you for reading.

---

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
