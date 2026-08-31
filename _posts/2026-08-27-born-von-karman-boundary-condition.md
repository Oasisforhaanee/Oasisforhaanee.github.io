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

In this post we'll look at the Born – von Karman boundary condition.

## Born – von Karman boundary condition

The Born – von Karman boundary condition builds a finite system by assuming a finite number of atoms from the start.

Let's think of a finite 1D crystal made of N atoms. Many potentials are lined up, but it's a system that has a beginning and an end.

![A finite 1D crystal of N atoms.](/assets/img/bvk-system.png)

The premise of the Born – von Karman boundary condition is simply this: the first atom is assumed to be the same as the atom right after the last one, the (N+1)-th atom. For this assumption to hold, the following equation must be satisfied:

$$ \Psi _k(0)=\Psi _k(L) $$

$$ L=na $$

Let's substitute this condition into the wave function we defined, Bloch's theorem.

$$ \Psi _k(L)=e^{ikL}u_k(L)=e^{ikL}u_k(na) $$

$$ \Psi _k(0)=u_k(0) $$

In Bloch's theorem, the u_k(r) function is a periodic function with period a. That is, u_k(na) = u_k(0). Putting all the above together using this, we get the following condition on k:

$$ \Psi _k(L)=e^{ikL}u_k(na)=\Psi _k(0)=u_k(0) $$

$$ e^{ikL}=1 $$

$$ kL=2n\pi \quad (n=0,\pm 1,\pm 2,\dots ) $$

$$ k=\frac{2\pi n}{L}=\frac{2\pi n}{Na}\quad (n=0,\pm 1,\pm 2,\dots ) $$

We can see that k is broken into discrete values for any integer n. What does this mean?

## Wave function in an infinite periodic potential

[Wave Function in a Periodic Potential](https://oasisforhaanee.github.io/wave-function-in-periodic-potential/)

In a periodic potential, wave functions interfere with each other and form a basis. When infinitely many wave functions interfere, they form infinitely many bases. When there are infinitely many bases, the k–energy graph has a continuous spectrum, as in the figure below.

![k takes continuous values like the graph above.](/assets/img/bvk-continuous.png)

k takes continuous values, like in the graph above.

But there is no solid in the world made of an infinite number of atoms. It always has a finite size. That's why we imitate a finite system with the Born – von Karman boundary condition. When the boundary condition is applied, the continuous k–energy graph changes as follows:

![The k–energy state graph when the boundary condition is applied, with N = 40.](/assets/img/bvk-discrete.png)

The k–energy state graph when the boundary condition is applied, with N = 40.

With the boundary condition set, we can see that k is discretized and can be expressed as a finite number of points. Each point represents one basis and has a different energy.

The Born – von Karman boundary condition takes the original infinite system and sets a condition so it can be applied realistically. Through this, we can clearly analyze the electronic structure of real solids theoretically.

Thanks for reading the long post.

This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.
