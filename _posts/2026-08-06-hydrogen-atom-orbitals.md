---
layout: post
title: "Hydrogen Atom Orbitals"
date: 2026-08-06
categories: [quantum-mechanics]
tags: [Hydrogen Atom, Orbitals, Wave Function, Quantum Numbers, Probability Density, 1s Orbital, 2s Orbital, 2p Orbitals, Degeneracy]
description: Visualizing the hydrogen atom wave functions — plugging the quantum numbers n, l, m into the general solution and drawing the 1s, 2s, 2p orbitals, including how the complex 2p solutions combine into the familiar px and py orbitals.
canonicalURL: "https://blog.naver.com/kkul20235/224370369513"
usemathjax: true
comments: true

---

Please read the previous post before this one:

[The 3D Schrödinger Equation in the Hydrogen Atom](https://oasisforhaanee.github.io/hydrogen-atom-3d-schrodinger-equation/)

## Summary of the Previous Post

The three-dimensional time-independent Schrödinger equation in spherical coordinates is

$$-\frac{\hbar ^2}{2m}\left[\frac{1}{r^2}\frac{\partial }{\partial r}\left(r^2\frac{\partial \psi }{\partial r}\right)+\frac{1}{r^2\sin \theta }\frac{\partial }{\partial \theta }\left(\sin \theta \frac{\partial \psi }{\partial \theta }\right)+\frac{1}{r^2\sin ^2\theta }\frac{\partial ^2\psi }{\partial \phi ^2}\right]+V(r,\theta ,\phi )\psi =E\psi$$

Solving this equation yields three solutions:

$$R(r), \Theta \left(\theta \right), \Phi \left(\phi \right)$$

whose product is the wave function:

$$\Psi \left(r, \theta , \phi \right)=R(r)\Theta \left(\theta \right)\Phi \left(\phi \right)$$

This is a stationary state of energy $E$ (see the post on [stationary states](https://oasisforhaanee.github.io/stationary-state/)).

Each solution is given by

$$R_{n,l}(r)=-\sqrt{\left(\frac{2Z}{na_0}\right)^3\frac{(n-l-1)!}{2n[(n+l)!]^3}}e^{-\rho /2}\rho ^lL_{n+l}^{2l+1}(\rho )$$

$$\Theta _{l,m}(\theta )=\sqrt{\frac{(2l+1)}{2}\frac{(l-|m|)!}{(l+|m|)!}}P_l^m(\cos \theta )$$

$$\Phi _m(\phi )=\frac{1}{\sqrt{2\pi }}e^{im\phi }$$

The quantum numbers $n$, $l$, and $m$ are integers restricted as follows:

$$-l\le m\le l$$

$$l\le n-1$$

## Solutions for Specific Values of n, l, m

Plugging specific quantum numbers into the general solutions gives the wave function for each state. We begin with the simplest, $n=1, l=0, m=0$.

### 1. n=1, l=0, m=0

$$\Phi _0(\phi )=\frac{1}{\sqrt{2\pi }}$$

$$\Theta _{0,0}(\theta )=\frac{1}{\sqrt{2}}$$

$$R_{1,0}(r)=2\left(\frac{1}{a_0}\right)^{3/2}e^{-r/a_0}$$

$$\psi _{100}(r,\theta ,\phi )=\Phi _0(\phi )\Theta _{0,0}(\theta )R_{1,0}(r)=\frac{1}{\sqrt{\pi a_0^3}}e^{-r/a_0}$$

All the angular factors are constant, so the wave function depends only on the distance $r$ from the center—a perfectly spherically symmetric shape.

Drawing the radial function against $r$ gives

![Radial graph of the 1s state](/assets/img/radial-1s-graph.png)

The infinitesimal probability is

$$dP=|\psi (r,\theta ,\phi )|^2dV$$

Drawing the probability density (the squared magnitude of the wave function) gives

![1s probability density](/assets/img/1s-probability-density.png)

![1s orbital in 3D](/assets/img/1s-orbital-3d.png)

This probability density is exactly the 1s orbital taught in chemistry.

### 2. n=2, l=0, m=0

$$\Phi _0(\phi )=\frac{1}{\sqrt{2\pi }}$$

$$\Theta _{0,0}(\theta )=\frac{1}{\sqrt{2}}$$

$$R_{2,0}(r)=\frac{1}{2\sqrt{2}}\left(\frac{1}{a_0}\right)^{3/2}\left(2-\frac{r}{a_0}\right)e^{-r/(2a_0)}$$

$$\psi _{200}(r,\theta ,\phi )=\Phi _0(\phi )\Theta _{0,0}(\theta )R_{2,0}(r)=\frac{1}{4\sqrt{2\pi }}\left(\frac{1}{a_0}\right)^{3/2}\left(2-\frac{r}{a_0}\right)e^{-r/(2a_0)}$$

As with the 1s orbital, all angular factors are constant, so it is spherically symmetric.

Drawing the radial function gives

![Radial graph of the 2s state](/assets/img/radial-2s-graph.png)

The probability density

$$|\psi (r,\theta ,\phi )|^2$$

has the shape

![2s probability density](/assets/img/2s-probability-density.png)

and in 3D:

![2s orbital in 3D](/assets/img/2s-orbital-3d.png)

There is a nonzero probability density near the center, then a spherical shell of zero probability, and then nonzero probability again. This is the 2s orbital.

Points of zero probability density are called **nodes**; nodes arising from the radial equation are called **radial nodes**.

### 3. n=2, l=1, m=0

$$\Phi _0(\phi )=\frac{1}{\sqrt{2\pi }}$$

$$\Theta _{1,0}(\theta )=\sqrt{\frac{3}{2}}\cos \theta$$

$$R_{2,1}(r)=\frac{1}{2\sqrt{6}}\left(\frac{1}{a_0}\right)^{3/2}\left(\frac{r}{a_0}\right)e^{-r/(2a_0)}$$

$$\psi _{210}(r,\theta ,\phi )=\Phi _0(\phi )\Theta _{1,0}(\theta )R_{2,1}(r)=\frac{1}{4\sqrt{2\pi }}\left(\frac{1}{a_0}\right)^{3/2}\left(\frac{r}{a_0}\right)e^{-r/(2a_0)}\cos \theta$$

Now the polar part depends on $\theta$. Plotting $\Theta(\theta)$:

![Graph of the polar equation (cos θ)](/assets/img/polar-theta-graph.png)

Since $\Theta(\theta)$ is a cosine, it equals $1$ at $\theta=0$ (the $+z$ direction), $0$ at $\theta=\pi/2$ (the $xy$-plane), and $1$ again at $\theta=\pi$ (the $-z$ direction). In three dimensions this gives a dumbbell aligned with the $z$-axis.

![What θ means in spherical coordinates](/assets/img/spherical-theta-meaning.jpg)

This shape is familiar: it is the 2pz orbital.

![2pz orbital in 3D](/assets/img/2pz-orbital-3d.png)

### 4. n=2, l=1, m=+1

$$\Phi _1(\phi )=\frac{1}{\sqrt{2\pi }}e^{i\phi }$$

$$\Theta _{1, 1}(\theta )=\sqrt{\frac{3}{4}}\sin \theta$$

$$R_{2,1}(r)=\frac{1}{2\sqrt{6}}\left(\frac{1}{a_0}\right)^{3/2}\left(\frac{r}{a_0}\right)e^{-r/(2a_0)}$$

$$\psi _{211}(r,\theta ,\phi )=\Phi _1(\phi )\Theta _{1,1}(\theta )R_{2,1}(r)=-\frac{1}{8\sqrt{\pi }}\left(\frac{1}{a_0}\right)^{3/2}\left(\frac{r}{a_0}\right)e^{-r/(2a_0)}\sin \theta e^{i\phi }$$

Now both the polar and azimuthal parts are non-constant. Plotting the polar part first:

![Graph of the polar equation (sin θ)](/assets/img/theta-sine-graph.png)

$\Theta(\theta)$ is a sine, so it is $0$ at $\theta=0$, $1$ at $\theta=\pi/2$, and $0$ again at $\theta=\pi$. This gives a donut shape with rotational symmetry about the $z$-axis.

Next, the azimuthal part. The factor $e^{i\phi}$ lies on the unit circle in the complex plane: its magnitude is always $1$ for any $\phi$, but its phase changes with $\phi$. Representing the phase by color while keeping the magnitude fixed:

![e^{iφ} on the complex plane — magnitude 1, phase varies](/assets/img/phi-phase-complex-plane.png)

On the complex plane the magnitude (the radius of the cylinder) is always $1$, but as $\phi$ rotates the phase (the color) changes. Multiplying this phase variation by the $\Theta(\theta)$ donut gives

![Donut with phase multiplied in](/assets/img/donut-phase-multiplied.png)

Finally, multiplying by the radial function (which, like the 1s orbital, decays with distance) gives the graph of $\psi_{211}$.

One might expect that with $n=2$, $l=1$, $m=1$ we would obtain the 2px or 2py orbital, but instead a donut shape appears. This is resolved below.

### 5. n=2, l=1, m=-1

$$\Phi _{-1}(\phi )=\frac{1}{\sqrt{2\pi }}e^{-i\phi }$$

$$\Theta _{1, -1}(\theta )=\sqrt{\frac{3}{4}}\sin \theta$$

$$R_{2,1}(r)=\frac{1}{2\sqrt{6}}\left(\frac{1}{a_0}\right)^{3/2}\left(\frac{r}{a_0}\right)e^{-r/(2a_0)}$$

$$\psi _{21,-1}(r,\theta ,\phi )=\Phi _{-1}(\phi )\Theta _{1,-1}(\theta )R_{2,1}(r)=\frac{1}{8\sqrt{\pi }}\left(\frac{1}{a_0}\right)^{3/2}\left(\frac{r}{a_0}\right)e^{-r/(2a_0)}\sin \theta e^{-i\phi }$$

This graph is nearly identical to $\psi_{211}$, the only difference being the azimuthal factor $e^{-i\phi}$ instead of $e^{i\phi}$—the direction of the phase change is reversed:

![ψ_{21,-1} — phase change reversed](/assets/img/psi-21-1-phase.png)

Where, then, do the 2px and 2py orbitals come from? Their formulas are

$$\Psi _{2px}=\frac{1}{\sqrt{2}}\left(-\Psi _{2,1,1}+\Psi _{2,1,-1}\right)$$

$$\Psi _{2py}=\frac{i}{\sqrt{2}}\left(\Psi _{2,1,1}+\Psi _{2,1,-1}\right)$$

Solving the Schrödinger equation with the hydrogen-atom potential yields complex solutions such as $\psi_{211}$ and $\psi_{21,-1}$. Linear combinations of these solutions also satisfy the Schrödinger equation. In particular, since states with the same $n=2$ are degenerate (same energy), linear combinations of them also have the same energy and are stationary states.

The 2px and 2py orbitals built this way are not only visually intuitive but also very useful for describing the spatial overlap of wave functions in chemical bonding.

In short, 2px and 2py are physically equivalent to $\psi_{211}$ and $\psi_{21,-1}$, but express the probability density and its directionality with respect to the $x$- and $y$-axes, which is much more intuitive:

![The 2px and 2py orbitals](/assets/img/px-py-orbitals.jpg)

In this way, all solutions obtained by substituting an atom's potential into the three-dimensional Schrödinger equation are precisely the **orbitals**.

What this shows is that an orbital is a wave-function solution obtained by substituting an atom's potential into the three-dimensional Schrödinger equation; each solution is a stationary state of definite energy serving as a basis of the wave function; and the probability density of an electron in any atom can be expressed as a superposition of these wave functions.

Actually deriving the orbitals myself—rather than simply memorizing their shapes—was a great relief.

That is it for this post. Thank you for reading.

---

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
