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

Please read the previous post before reading this one:

[The 3D Schrödinger Equation in the Hydrogen Atom](https://oasisforhaanee.github.io/hydrogen-atom-3d-schrodinger-equation/)

## Summary of the Previous Posts

The 3D time-independent Schrödinger equation in spherical coordinates is expressed as follows:

$$-\frac{\hbar ^2}{2m}\left[\frac{1}{r^2}\frac{\partial }{\partial r}\left(r^2\frac{\partial \psi }{\partial r}\right)+\frac{1}{r^2\sin \theta }\frac{\partial }{\partial \theta }\left(\sin \theta \frac{\partial \psi }{\partial \theta }\right)+\frac{1}{r^2\sin ^2\theta }\frac{\partial ^2\psi }{\partial \phi ^2}\right]+V(r,\theta ,\phi )\psi =E\psi$$

This equation is time-independent — an equation that finds the wave function with a specific energy $E$. Solving this equation gives three solutions:

$$R(r), \Theta \left(\theta \right), \Phi \left(\phi \right)$$

And multiplying these three solutions together gives the wave function:

$$\Psi \left(r, \theta , \phi \right)=R(r)\Theta \left(\theta \right)\Phi \left(\phi \right)$$

This wave function is a wave function in a stationary state with energy $E$. (See my post on [stationary states](https://oasisforhaanee.github.io/stationary-state/) for details.)

Each solution is expressed by the following formulas:

$$R_{n,l}(r)=-\sqrt{\left(\frac{2Z}{na_0}\right)^3\frac{(n-l-1)!}{2n[(n+l)!]^3}}e^{-\rho /2}\rho ^lL_{n+l}^{2l+1}(\rho )$$

$$\Theta _{l,m}(\theta )=\sqrt{\frac{(2l+1)}{2}\frac{(l-|m|)!}{(l+|m|)!}}P_l^m(\cos \theta )$$

$$\Phi _m(\phi )=\frac{1}{\sqrt{2\pi }}e^{im\phi }$$

Also, $n$, $l$, and $m$ are all integers, defined only within the following ranges. $l$ is an integer greater than or equal to 0, and $n$ is a positive integer greater than or equal to 1.

$$-l\le m\le l$$

$$l\le n-1$$

## Solutions for Specific Values of n, l, m

Plugging the values of the quantum numbers $n$, $l$, $m$ into the general solutions derived above gives the specific wave function for each state. Let's start with the simplest state, $n=1, l=0, m=0$.

### 1. n=1, l=0, m=0

$$\Phi _0(\phi )=\frac{1}{\sqrt{2\pi }}$$

$$\Theta _{0,0}(\theta )=\frac{1}{\sqrt{2}}$$

$$R_{1,0}(r)=2\left(\frac{1}{a_0}\right)^{3/2}e^{-r/a_0}$$

$$\psi _{100}(r,\theta ,\phi )=\Phi _0(\phi )\Theta _{0,0}(\theta )R_{1,0}(r)=\frac{1}{\sqrt{\pi a_0^3}}e^{-r/a_0}$$

As you can see from the equations, all the components related to the angles $\theta$ and $\phi$ are constants. This means the value of the wave function is determined only by the distance $r$ from the center, regardless of direction — physically, it has a perfectly spherical symmetric shape.

Drawing the graph of the radial equation with respect to the distance $r$ in this state gives the following:

![Radial graph of the 1s state](/assets/img/radial-1s-graph.png)

The infinitesimal probability of the wave function is determined by:

$$dP=|\psi (r,\theta ,\phi )|^2dV$$

Drawing the probability density function, which is the square of the wave function times the unit volume, gives the following:

![1s probability density](/assets/img/1s-probability-density.png)

![1s orbital in 3D](/assets/img/1s-orbital-3d.png)

This probability density function is exactly the 1s orbital we learn about in high school chemistry.

### 2. n=2, l=0, m=0

$$\Phi _0(\phi )=\frac{1}{\sqrt{2\pi }}$$

$$\Theta _{0,0}(\theta )=\frac{1}{\sqrt{2}}$$

$$R_{2,0}(r)=\frac{1}{2\sqrt{2}}\left(\frac{1}{a_0}\right)^{3/2}\left(2-\frac{r}{a_0}\right)e^{-r/(2a_0)}$$

$$\psi _{200}(r,\theta ,\phi )=\Phi _0(\phi )\Theta _{0,0}(\theta )R_{2,0}(r)=\frac{1}{4\sqrt{2\pi }}\left(\frac{1}{a_0}\right)^{3/2}\left(2-\frac{r}{a_0}\right)e^{-r/(2a_0)}$$

Just like the 1s orbital, all the angular expressions are constants, so it has a spherically symmetric shape.

Drawing the graph of the radial equation gives the following:

![Radial graph of the 2s state](/assets/img/radial-2s-graph.png)

Based on this, drawing the probability density of the wave function:

$$|\psi (r,\theta ,\phi )|^2$$

gives a shape like the following:

![2s probability density](/assets/img/2s-probability-density.png)

Drawing this in 3D:

![2s orbital in 3D](/assets/img/2s-orbital-3d.png)

gives the probability density distribution like the figure above. The probability density exists in the middle, then a ring-shaped region of zero probability appears, and then the probability density exists again. This is the 2s orbital.

The points where the probability density is zero are called **nodes**, and the nodes created by the radial equation are called **radial nodes**.

### 3. n=2, l=1, m=0

$$\Phi _0(\phi )=\frac{1}{\sqrt{2\pi }}$$

$$\Theta _{1,0}(\theta )=\sqrt{\frac{3}{2}}\cos \theta$$

$$R_{2,1}(r)=\frac{1}{2\sqrt{6}}\left(\frac{1}{a_0}\right)^{3/2}\left(\frac{r}{a_0}\right)e^{-r/(2a_0)}$$

$$\psi _{210}(r,\theta ,\phi )=\Phi _0(\phi )\Theta _{1,0}(\theta )R_{2,1}(r)=\frac{1}{4\sqrt{2\pi }}\left(\frac{1}{a_0}\right)^{3/2}\left(\frac{r}{a_0}\right)e^{-r/(2a_0)}\cos \theta$$

This time it's a bit different from before. The azimuthal equation is still constant, but the polar equation now depends on $\theta$. Plotting the polar equation on a graph:

![Graph of the polar equation (cos θ)](/assets/img/polar-theta-graph.png)

$\Theta(\theta)$ is a cosine function, so it has the value 1 at $\theta=0$ (the $+z$ axis direction), 0 at $\theta=\pi/2$ (the $xy$-plane), and 1 again at $\theta=\pi$ (the $-z$ axis direction). Expressing this in 3D gives a dumbbell shape aligned with the $z$-axis, as shown above. Thinking about what $\theta$ means in the figure below should help you understand:

![What θ means in spherical coordinates](/assets/img/spherical-theta-meaning.jpg)

It looks familiar, right? The probability density distribution below is the 2pz orbital:

![2pz orbital in 3D](/assets/img/2pz-orbital-3d.png)

### 4. n=2, l=1, m=+1

$$\Phi _1(\phi )=\frac{1}{\sqrt{2\pi }}e^{i\phi }$$

$$\Theta _{1, 1}(\theta )=\sqrt{\frac{3}{4}}\sin \theta$$

$$R_{2,1}(r)=\frac{1}{2\sqrt{6}}\left(\frac{1}{a_0}\right)^{3/2}\left(\frac{r}{a_0}\right)e^{-r/(2a_0)}$$

$$\psi _{211}(r,\theta ,\phi )=\Phi _1(\phi )\Theta _{1,1}(\theta )R_{2,1}(r)=-\frac{1}{8\sqrt{\pi }}\left(\frac{1}{a_0}\right)^{3/2}\left(\frac{r}{a_0}\right)e^{-r/(2a_0)}\sin \theta e^{i\phi }$$

This time it's a tough one. Not only the polar equation, but the azimuthal equation has also stopped being a constant. First, let's plot the polar equation on a graph:

![Graph of the polar equation (sin θ)](/assets/img/theta-sine-graph.png)

$\Theta(\theta)$ is in the form of a sine, so it has the value 0 at $\theta=0$ (the $+z$ axis direction), 1 at $\theta=\pi/2$ (the $xy$-plane), and 0 again at $\theta=\pi$ (the $-z$ axis direction). In other words, we get a donut shape with rotational symmetry around the $z$-axis.

Now let's look at the azimuthal equation. The expression $e^{i\phi}$ is represented on the complex plane — its magnitude is always 1 no matter what $\phi$ is. However, the phase differs as $\phi$ changes. We can express the phase difference with colors while keeping the magnitude the same, like this:

![e^{iφ} on the complex plane — magnitude 1, phase varies](/assets/img/phi-phase-complex-plane.png)

You can see that on the complex plane, the magnitude (= the radius of the cylinder) is always 1, but as $\phi$ rotates, the phase (= the color) changes. Multiplying this phase change by the $\Theta(\theta)$ donut we found above gives the following:

![Donut with phase multiplied in](/assets/img/donut-phase-multiplied.png)

Finally, multiplying in the radial equation, which gets smaller with distance just like the 1s orbital, gives the graph of $\psi_{211}$.

Hmm — if the principal quantum number $n$ is 2, the azimuthal quantum number $l$ is 1, and the magnetic quantum number $m$ is 1, I thought we learned it was the 2px or 2py orbital, but it ends up as a weird donut shape. We'll deal with that later.

### 5. n=2, l=1, m=-1

$$\Phi _{-1}(\phi )=\frac{1}{\sqrt{2\pi }}e^{-i\phi }$$

$$\Theta _{1, -1}(\theta )=\sqrt{\frac{3}{4}}\sin \theta$$

$$R_{2,1}(r)=\frac{1}{2\sqrt{6}}\left(\frac{1}{a_0}\right)^{3/2}\left(\frac{r}{a_0}\right)e^{-r/(2a_0)}$$

$$\psi _{21,-1}(r,\theta ,\phi )=\Phi _{-1}(\phi )\Theta _{1,-1}(\theta )R_{2,1}(r)=\frac{1}{8\sqrt{\pi }}\left(\frac{1}{a_0}\right)^{3/2}\left(\frac{r}{a_0}\right)e^{-r/(2a_0)}\sin \theta e^{-i\phi }$$

This graph is almost identical to $\psi_{211}$. The only difference is that the azimuthal equation is $e^{-i\phi}$ instead of $e^{i\phi}$. This graph is nearly the same as $\psi_{211}$, but the direction of the phase (= color) change is reversed:

![ψ_{21,-1} — phase change reversed](/assets/img/psi-21-1-phase.png)

So where do the 2px and 2py orbitals come from? The actual formulas for $\psi_{2px}$ and $\psi_{2py}$ are as follows:

$$\Psi _{2px}=\frac{1}{\sqrt{2}}\left(-\Psi _{2,1,1}+\Psi _{2,1,-1}\right)$$

$$\Psi _{2py}=\frac{i}{\sqrt{2}}\left(\Psi _{2,1,1}+\Psi _{2,1,-1}\right)$$

Solving the Schrödinger equation with the hydrogen atom's potential gives complex solutions like $\psi_{211}$ and $\psi_{21,-1}$. However, linear combinations of these solutions also satisfy the Schrödinger equation. In particular, since solutions with the same principal quantum number $n=2$ are degenerate states with the same energy, the solutions obtained by linearly combining them also have the same energy and form stationary states.

The 2px and 2py orbitals constructed this way are not only visually intuitive, but also very useful for explaining the spatial overlap of wave functions in chemical bonding.

In summary, the 2px and 2py orbitals play physically completely equivalent roles to the $\psi_{211}$ and $\psi_{21,-1}$ orbitals, while expressing the probability density distribution and directionality with respect to the $x$- and $y$-axes, which is much more intuitive and useful — so they were introduced and used for that reason:

![The 2px and 2py orbitals](/assets/img/px-py-orbitals.jpg)

In this way, all the solutions obtained by substituting into the 3D Schrödinger equation with the atom's potential are precisely the **orbitals**.

What we can learn from this is that an orbital is a wave function solution that comes out when we substitute an atom's potential into Schrödinger's 3D equation, each solution is a stationary state with a specific energy that serves as a basis of the wave function, and the probability density of an electron belonging to any atom can be expressed as a superposition of these wave functions.

I always wondered when studying orbitals, "why do they have these shapes?" Actually deriving the orbitals myself was a huge relief — it felt amazing.

That's it for this post. Thanks for reading the long post.

---

This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.
