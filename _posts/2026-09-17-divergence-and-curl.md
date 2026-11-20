---
layout: post
title: "Divergence and Curl: Divergence Theorem and Stokes' Theorem"
date: 2026-09-17
categories: [mathematics]
tags: ["Vector Calculus", "Gradient", "Divergence", "Curl"]
description: "Building intuition for fields, gradients, divergence, curl, the divergence theorem, and Stokes' theorem through formulas and diagrams."

usemathjax: true
comments: true
---

Hi everyone! It's been a week since I returned to university. I've joined a new club, and the weather is getting cooler, so it feels good to be back. Besides my own courses, I'm auditing an electromagnetism class in another department. I think it will be important for my future studies, so I'd like to organize what I learn into posts. Let's begin!

## Fields

We hear the word **field** all the time in physics: electric fields, magnetic fields, gravitational fields, and so on. What does it mean?

Think of a field as a function that assigns a value to every point in space. That value may be a scalar or a vector. A scalar at each point gives a **scalar field**; a vector at each point gives a **vector field**.

A contour map is a good scalar-field example. Each point in a two-dimensional map is assigned a height.

![Divergence and Curl — figure 1](/assets/img/divergence-and-curl-01.png)

Each position is assigned a height, represented here by color.

Electric and magnetic fields are familiar vector-field examples. Each position is assigned a vector.

![Divergence and Curl — figure 2](/assets/img/divergence-and-curl-02.png)

The two-dimensional field $(x,y)$: the point $(x,y)$ is assigned that vector.

![Divergence and Curl — figure 3](/assets/img/divergence-and-curl-03.png)

The three-dimensional field $(x,y,z)$: each point is assigned its corresponding three-component vector.

Electric and magnetic fields assign vectors to points in this way. Does the idea of a field feel a little clearer now?

Once we have a field, we need tools to extract information from it. Those tools are **operators**.

## Gradient

I discussed gradients in my [partial derivatives and gradient post](https://oasisforhaanee.github.io/partial-derivatives-and-gradient/).

Please refer to that post for the details of gradients and partial derivatives. Here, applying a gradient to a scalar field gives:

$$
\nabla f=\frac{\partial f}{\partial x}\hat{\mathbf{i}}+\frac{\partial f}{\partial y}\hat{\mathbf{j}}+\frac{\partial f}{\partial z}\hat{\mathbf{k}}
$$

The gradient points in the direction in which the scalar field increases most rapidly. On a height map, it is the steepest uphill direction. For a small displacement vector $v$, the change in the function is approximately its dot product with the gradient:

$$
\Delta f\approx \mathbf{v}\cdot \nabla f=\begin{pmatrix}v_x&v_y&v_z\end{pmatrix}\begin{pmatrix}\frac{\partial f}{\partial x}\\\frac{\partial f}{\partial y}\\\frac{\partial f}{\partial z}\end{pmatrix}
$$

$$
=v_x\frac{\partial f}{\partial x}+v_y\frac{\partial f}{\partial y}+v_z\frac{\partial f}{\partial z}
$$

For a vector field, every point already has several components, so its spatial derivatives have a different form:

$$
J_{\mathbf{F}}=\begin{pmatrix}\frac{\partial F_x}{\partial x}&\frac{\partial F_x}{\partial y}&\frac{\partial F_x}{\partial z}\\\frac{\partial F_y}{\partial x}&\frac{\partial F_y}{\partial y}&\frac{\partial F_y}{\partial z}\\\frac{\partial F_z}{\partial x}&\frac{\partial F_z}{\partial y}&\frac{\partial F_z}{\partial z}\end{pmatrix}
$$

Each row contains the gradient of one scalar component: $F_x$, $F_y$, or $F_z$. Here we use the Jacobian convention $(J_{\mathbf{F}})_{ij}=\partial F_i/\partial x_j$, with field components indexing rows and spatial coordinates indexing columns. These derivatives form a matrix representing a second-order tensor in Cartesian coordinates. For a small displacement written as a column vector, the first-order change is the Jacobian multiplied by that displacement, equivalently the directional derivative $(\mathbf{v}\cdot\nabla)\mathbf{F}$:

$$
\Delta \mathbf{F}\approx J_{\mathbf{F}}\mathbf{v}=(\mathbf{v}\cdot\nabla)\mathbf{F}=\begin{pmatrix}\frac{\partial F_x}{\partial x}&\frac{\partial F_x}{\partial y}&\frac{\partial F_x}{\partial z}\\\frac{\partial F_y}{\partial x}&\frac{\partial F_y}{\partial y}&\frac{\partial F_y}{\partial z}\\\frac{\partial F_z}{\partial x}&\frac{\partial F_z}{\partial y}&\frac{\partial F_z}{\partial z}\end{pmatrix}\begin{pmatrix}v_x\\v_y\\v_z\end{pmatrix}
$$

$$
=\begin{pmatrix}v_x\frac{\partial F_x}{\partial x}+v_y\frac{\partial F_x}{\partial y}+v_z\frac{\partial F_x}{\partial z}\\v_x\frac{\partial F_y}{\partial x}+v_y\frac{\partial F_y}{\partial y}+v_z\frac{\partial F_y}{\partial z}\\v_x\frac{\partial F_z}{\partial x}+v_y\frac{\partial F_z}{\partial y}+v_z\frac{\partial F_z}{\partial z}\end{pmatrix}
$$

## Divergence

The divergence of a vector field $A$ is defined by:

$$
\text{div}\, \mathbf{A}=\nabla \cdot \mathbf{A}=\begin{pmatrix}\frac{\partial }{\partial x}&\frac{\partial }{\partial y}&\frac{\partial }{\partial z}\end{pmatrix}\begin{pmatrix}A_x\\A_y\\A_z\end{pmatrix}=\frac{\partial A_x}{\partial x}+\frac{\partial A_y}{\partial y}+\frac{\partial A_z}{\partial z}
$$

Notice the dot product between the differential operator and the field. Applying it at each position gives a scalar divergence value. What does that value mean?

![Divergence and Curl — figure 4](/assets/img/divergence-and-curl-04.png)

The derivative of $A_x$ with respect to $x$ measures how the field's $x$ component changes as we move a little in the $x$ direction. In the diagram, the long red arrow is the original component and the small red arrow represents its change. The other two directions work in the same way.

Adding these three derivatives measures local net outflow, like water spreading out from a fountain. The sign makes the interpretation clearer:

![Divergence and Curl — figure 5](/assets/img/divergence-and-curl-05.png)

The left picture has positive divergence and looks like a source, spreading outward. The right has negative divergence and looks like a sink, drawing inward.

## Gauss's divergence theorem

The mathematical definition of divergence is:

$$
\nabla \cdot \mathbf{F}=\lim _{V\to 0}^{ }\frac{1}{V}\iint _{\ S}^{\ }\mathbf{F}\cdot \hat{\mathbf{n}}\, dS
$$

Take a small volume V enclosed by a closed surface S. Integrate the dot product of the vector field F and the outward unit normal over S, divide by V, and take the limit as the volume approaches zero. This defines a value at each point in the vector field.

Thinking about this more broadly, the net flux leaving an entire volume V equals the integral of the divergence throughout that volume. Mathematically:

$$
\iint_{\partial V}\mathbf{F}\cdot\hat{\mathbf{n}}\,dS=\iiint_V\left(\nabla\cdot\mathbf{F}\right)\,dV
$$

![The divergence theorem: adding local outward fluxes and integrating over the outer boundary](/assets/img/divergence-and-curl-divergence-theorem.png)

The left diagram adds the divergence contributions throughout the volume; the right diagram integrates the outward flux over the enclosing surface. The divergence theorem says that these totals are equal.

For an intuitive picture, the fluxes through shared faces of neighboring volume elements cancel each other. Only the contribution at the outer boundary remains.

## Curl

The curl of a vector field is defined by:

$$
\nabla \times \mathbf{A}=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\\frac{\partial }{\partial x}&\frac{\partial }{\partial y}&\frac{\partial }{\partial z}\\A_x&A_y&A_z\end{vmatrix}=\left(\frac{\partial A_z}{\partial y}-\frac{\partial A_y}{\partial z}\right)\mathbf{i}+\left(\frac{\partial A_x}{\partial z}-\frac{\partial A_z}{\partial x}\right)\mathbf{j}+\left(\frac{\partial A_y}{\partial x}-\frac{\partial A_x}{\partial y}\right)\mathbf{k}
$$

Unlike divergence, we now use the cross-product form. Looking only at the $x$ component:

$$
\left(\nabla \times \mathbf{A}\right)_x=\frac{\partial A_z}{\partial y}-\frac{\partial A_y}{\partial z}
$$

The corresponding diagram is:

![Divergence and Curl — figure 6](/assets/img/divergence-and-curl-06.png)

This component involves how $A_z$ changes along $y$ and how $A_y$ changes along $z$. The latter enters with a minus sign. Together, the arrows illustrate circulation about the $x$ axis. Repeating the reasoning for the other axes shows that each curl component describes local rotation about its corresponding axis.

The sign of the component indicates the rotational sense:

![Divergence and Curl — figure 7](/assets/img/divergence-and-curl-07.png)

With the orientation shown, a positive curl component along the chosen normal corresponds to counterclockwise circulation when viewed from the tip of that normal toward the surface; a negative component corresponds to clockwise circulation. Curl itself is a vector, so the sign refers to a component, not to the whole vector.

## Stokes' theorem

The mathematical definition of the normal component of curl is:

$$
(\nabla \times \mathbf{F})\cdot \hat{\mathbf{n}}=\lim _{S\to 0}^{ }\frac{1}{S}\oint _{\ C}^{\ }\mathbf{F}\cdot d\mathbf{l}
$$

Take an infinitesimal area S with boundary C. Integrate the vector field F along C, divide by S, and take the limit as the area approaches zero. Extending this idea to a surface S and its boundary C, the surface integral of the dot product between curl F and the unit normal equals the line integral of F around the boundary.

![Curl and circulation around a closed curve](/assets/img/divergence-and-curl-curl-circulation-definition.png)

By the definition of curl, the circulation of F around the closed curve C corresponds to the magnitude represented by the orange line.

This definition gives us an intuitive way to understand Stokes' theorem:

$$
\iint _{S\ }^{\ }(\nabla \times \mathbf{F})\cdot \hat{\mathbf{n}}\, dS=\oint _{\ C}^{\ }\mathbf{F}\cdot d\mathbf{l}
$$

The surface integral of the normal component of curl over an oriented surface S equals the line integral of F around its closed boundary curve C. The direction around C and the chosen normal must agree by the right-hand rule. Here S is a surface with boundary, not a closed surface enclosing a volume. Both this theorem and the divergence theorem assume a sufficiently smooth field and piecewise-smooth boundaries.

![Stokes' theorem: summing local circulation and integrating around the outer boundary](/assets/img/divergence-and-curl-stokes-theorem.png)

The left diagram adds the curl contributions over all the surface elements. The right diagram takes the line integral of F around the boundary of the whole surface. Stokes' theorem says these give the same result.

As with the divergence theorem, contributions along the shared boundaries of neighboring surface elements cancel. Only the outer boundary contribution remains.

Divergence and curl are so important in electromagnetism that I wanted to examine their calculus meaning carefully. Remember that gradients can describe spatial derivatives of both scalar and vector fields, although their results have different types. Divergence and curl here act on vector fields. The familiar gradient that points toward the fastest increase is specifically the gradient of a **scalar** field.

Thank you for reading this long explanation!

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
