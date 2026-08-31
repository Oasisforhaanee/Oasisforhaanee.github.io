---
layout: post
title: "Bloch's Theorem"
date: 2026-08-25
categories: [quantum-mechanics]
tags: [Bloch's Theorem, Periodic Potential, Wave Function, Complex Plane, Energy Band, Fourier Transform, Solid State Physics]
description: "Bloch's theorem: factoring the wave function in a periodic potential into a plane wave e^{ik·r} times a periodic function u_k(r), proving u_k(r) has the lattice period a, and why separating out the e^{ik·r} component matters — combining e^{ik·r} terms for different k builds new wave functions, just like a Fourier transform."
canonicalURL: "https://blog.naver.com/kkul20235/224389848433"
usemathjax: true
comments: true
permalink: /blochs-theorem/
---

Hello everyone. Hope you're all doing well. Lately I find myself thinking a lot about life. Someday I want to become a strong person whose beliefs are firmly rooted. Anyway, let's get started with the post.

In this post we'll look at Bloch's theorem, the theory that defines wave functions in solid-state physics.

Please read the previous post first to understand this one:

[Wave Function in a Periodic Potential](https://oasisforhaanee.github.io/wave-function-in-periodic-potential/)

## Bloch's theorem

In the previous post, we multiplied each atom's wave function ψ_j by a coefficient a_j = e^{ikja} that represents its phase, summed them all up, and expressed the wave function Ψ_k(r) for a particular value of k:

$$ \Psi _k(r)=\sum_{j}Ae^{ikja}\psi _j(r)=\sum_{j}Ae^{ikR_j}\psi _0(r-R_j) $$

In this case, each j-th wave function gets multiplied by a phase coefficient a_j, so the wave function forms by rotating discretely on the complex plane.

![The wave function drawn on the complex plane at k = π/4a. Each neighboring ψ is multiplied by a different phase coefficient.](/assets/img/bloch-3d-to-real.gif)

The appearance drawn on the complex plane at k = π/4a. You can see that each neighboring ψ is multiplied by a different phase coefficient.

Bloch's theorem expresses the Ψ_k(r) we wrote above in the following form:

$$ \Psi _k(r)=e^{i\mathbf{k}\cdot \mathbf{r}}u_{\mathbf{k}}(\mathbf{r}) $$

The equation above is the general form of Bloch's theorem. u_k(r) is a function with period a, and e^{ik·r} is the term that describes the helical rotation on the complex plane with position.

Since it shares the same Ψ_k(r) equation, let's look at what meaning u_k(r) carries.

$$ \Psi _k(r)=\sum_{j}Ae^{ikR_j}\psi _0(r-R_j)=e^{i\mathbf{k}\cdot \mathbf{r}}u_{\mathbf{k}}(\mathbf{r}) $$

Moving the e^{ik·r} term to the left-hand side and rearranging:

$$ e^{-ikr}\Psi _k(r)=u_k(r) $$

$$ u_k(r)=e^{-ikr}\sum_{j}Ae^{ikR_j}\psi _0(r-R_j)=\sum_{j}Ae^{-ik(r-R_j)}\psi _0(r-R_j) $$

The u_k(r) formula above is a periodic function with period a. The proof is as follows:

$$ u_k(r)=\sum_{j}Ae^{-ik(r-R_j)}\psi _0(r-R_j)=\sum_{j}Ae^{-ik(r-ja)}\psi _0(r-ja) $$

$$ u_k(r+a)=\sum_{j}Ae^{-ik(r+a-ja)}\psi _0(r+a-ja)=\sum_{j}Ae^{-ik(r-(j-1)a)}\psi _0(r-(j-1)a) $$

$$ m=j-1 $$

$$ u_k(r+a)=\sum_{m}Ae^{-ik(r-ma)}\psi _0(r-ma) $$

We can see that u_k(r) and u_k(r+a) are completely identical equations, just with the index symbol changed from j to m. Since both j and m range over all integers, the two equations are fully equivalent.

The reason we use Bloch's theorem is to extract the periodic component u_k(r) out of the original Ψ_k(r) function.

But don't mistake u_k(r) for a simple periodic function on the ordinary 2D plane.

u_k(r) is the sum of each ψ_0 multiplied by e^{-ik(r-R_j)}, and since the variable here is r, it's a function that carries a helical rotation as position changes.

![The appearance of Ψ_k(r) and u_k(r) at k = π/4a.](/assets/img/bloch-uk-phase-rotation.gif)

The appearance of Ψ_k(r) and u_k(r) at k = π/4a.

Looking at the graph above the function looks flat, but viewed from the complex plane's real–imaginary axis perspective, it's not flat — there's a subtle helical rotation hidden inside.

## The meaning of Bloch's theorem

Bloch's theorem might seem like nothing special mathematically beyond pulling the e^{ik·r} component out of the Ψ_k(r) wave function to extract the periodic u_k(r). But separating the e^{ik·r} component carries a very important mathematical and physical meaning. Because like a Fourier transform, by combining the e^{ik·r} terms for various k, we can construct new wave functions for position r:

$$ f(r)=A\int_{-\infty}^{\infty}F(k)e^{ikr}dk $$

But there are no infinite systems in the real world. As we'll cover later, continuous k values are only possible in a system made of an infinite number of atoms; in real finite-sized systems, k takes discrete values. A representative way to apply this discreteness physically and naturally is the Born–von Karman boundary condition. We'll continue with that in the next post.

[Born–von Karman Boundary Condition](https://oasisforhaanee.github.io/born-von-karman-boundary-condition/)

Thanks for reading the long post.

This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.
