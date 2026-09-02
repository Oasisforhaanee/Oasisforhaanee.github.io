---
layout: post
title: "Born – von Karman Boundary Condition"
date: 2026-08-27
categories: [quantum-mechanics]
tags: [Born-von Karman Boundary Condition, Bloch's Theorem, Periodic Potential, Wave Function, Energy Band, Solid State Physics]
description: "How a finite crystal of N atoms is made tractable: the Born–von Karman boundary condition assumes the first atom equals the (N+1)-th, which forces the wave number k into discrete values k = 2πn/Na and turns the continuous k–energy spectrum into a finite set of states."
canonicalURL: "https://blog.naver.com/kkul20235/224391932456"
usemathjax: true
comments: true
permalink: /born-von-karman-boundary-condition/

---

This post covers the Born–von Karman boundary condition.

## Born – von Karman boundary condition

The Born–von Karman boundary condition makes a finite system tractable by assuming a finite number of atoms from the outset.

Consider a finite one-dimensional crystal of $N$ atoms: many potentials lined up, but with a beginning and an end.

![A finite 1D crystal of N atoms.](/assets/img/bvk-system.png)

The premise is simply this: the first atom is assumed identical to the atom immediately after the last—the $(N+1)$-th atom. For this to hold, the following equation must be satisfied:

$$\Psi _k(0)=\Psi _k(L)$$

$$L=Na$$

Substituting this condition into the Bloch-theorem wave function:

$$\Psi _k(L)=e^{ikL}u_k(L)=e^{ikL}u_k(Na)$$

$$\Psi _k(0)=u_k(0)$$

In Bloch's theorem, $u_k(r)$ has period $a$, so $u_k(Na)=u_k(0)$. Combining these gives the condition on $k$:

$$\Psi _k(L)=e^{ikL}u_k(Na)=\Psi _k(0)=u_k(0)$$

$$e^{ikL}=1$$

$$kL=2n\pi \quad (n=0,\pm 1,\pm 2,\dots )$$

$$k=\frac{2\pi n}{L}=\frac{2\pi n}{Na}\quad (n=0,\pm 1,\pm 2,\dots )$$

Thus $k$ takes discrete values for each integer $n$. What does this mean?

## Wave function in an infinite periodic potential

[Wave Function in a Periodic Potential](https://oasisforhaanee.github.io/wave-function-in-periodic-potential/)

In a periodic potential, wave functions interfere and form a basis. With infinitely many wave functions interfering, there are infinitely many basis states, and the $k$–energy graph has a continuous spectrum:

![k takes continuous values like the graph above.](/assets/img/bvk-continuous.png)

$k$ takes continuous values, as in the graph above.

But no real solid consists of infinitely many atoms; it always has finite size. The Born–von Karman boundary condition imitates a finite system. When applied, the continuous $k$–energy graph becomes:

![The k–energy state graph when the boundary condition is applied, with N = 40.](/assets/img/bvk-discrete.png)

The $k$–energy state graph when the boundary condition is applied, with $N=40$.

With the boundary condition, $k$ is discretized into a finite set of points. Each point represents one basis state with a distinct energy.

The Born–von Karman boundary condition takes the original infinite system and imposes a condition that makes it realistically applicable. Through it, we can analyze the electronic structure of real solids theoretically.

---

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
