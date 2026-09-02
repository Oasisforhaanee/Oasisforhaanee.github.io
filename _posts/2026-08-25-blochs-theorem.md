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

This post covers Bloch's theorem, the theory that defines wave functions in solid-state physics.

Please read the previous post first:

[Wave Function in a Periodic Potential](https://oasisforhaanee.github.io/wave-function-in-periodic-potential/)

## Bloch's theorem

In the previous post, we multiplied each atom's wave function $\psi_j$ by a phase coefficient $a_j = e^{ikja}$, summed them, and expressed the wave function $\Psi_k(r)$ for a given $k$:

$$\Psi _k(r)=\sum_{j}Ae^{ikja}\psi _j(r)=\sum_{j}Ae^{ikR_j}\psi _0(r-R_j)$$

Each $j$-th wave function is multiplied by a phase coefficient $a_j$, so the wave function forms by rotating discretely on the complex plane.

![The wave function drawn on the complex plane at k = π/4a. Each neighboring ψ is multiplied by a different phase coefficient.](/assets/img/bloch-3d-to-real.gif)

The appearance on the complex plane at $k=\pi/4a$; each neighboring $\psi$ is multiplied by a different phase coefficient.

Bloch's theorem expresses $\Psi_k(r)$ in the form

$$\Psi _k(r)=e^{i\mathbf{k}\cdot \mathbf{r}}u_{\mathbf{k}}(\mathbf{r})$$

This is the general form of Bloch's theorem. Here $u_k(r)$ is a function of period $a$, and $e^{ik\cdot r}$ describes the helical rotation on the complex plane with position.

Since it shares the same $\Psi_k(r)$, let us see what $u_k(r)$ means.

$$\Psi _k(r)=\sum_{j}Ae^{ikR_j}\psi _0(r-R_j)=e^{i\mathbf{k}\cdot \mathbf{r}}u_{\mathbf{k}}(\mathbf{r})$$

Moving the $e^{ik\cdot r}$ factor to the left-hand side and rearranging:

$$e^{-ikr}\Psi _k(r)=u_k(r)$$

$$u_k(r)=e^{-ikr}\sum_{j}Ae^{ikR_j}\psi _0(r-R_j)=\sum_{j}Ae^{-ik(r-R_j)}\psi _0(r-R_j)$$

This $u_k(r)$ is a periodic function of period $a$. The proof is as follows. Using $R_j=ja$:

$$u_k(r)=\sum_{j}Ae^{-ik(r-ja)}\psi _0(r-ja)$$

$$u_k(r+a)=\sum_{j}Ae^{-ik(r+a-ja)}\psi _0(r+a-ja)=\sum_{j}Ae^{-ik(r-(j-1)a)}\psi _0(r-(j-1)a)$$

Letting $m=j-1$:

$$u_k(r+a)=\sum_{m}Ae^{-ik(r-ma)}\psi _0(r-ma)$$

The two expressions are identical, just with the index relabeled from $j$ to $m$. Since both $j$ and $m$ range over all integers, $u_k(r)=u_k(r+a)$.

The reason for using Bloch's theorem is to extract the periodic component $u_k(r)$ from the original $\Psi_k(r)$.

However, $u_k(r)$ is not a simple periodic function on the ordinary 2D plane. It is the sum of each $\psi_0$ multiplied by $e^{-ik(r-R_j)}$, and—since the variable is $r$—it carries a helical rotation as position changes.

![The appearance of Ψ_k(r) and u_k(r) at k = π/4a.](/assets/img/bloch-uk-phase-rotation.gif)

The appearance of $\Psi_k(r)$ and $u_k(r)$ at $k=\pi/4a$.

The graph above looks flat, but viewed from the real–imaginary perspective of the complex plane there is a subtle helical rotation hidden inside.

## The meaning of Bloch's theorem

Mathematically, Bloch's theorem may seem to do nothing more than pull the $e^{ik\cdot r}$ factor out of $\Psi_k(r)$ to extract the periodic $u_k(r)$. But separating out $e^{ik\cdot r}$ carries real mathematical and physical meaning. Exactly like a Fourier transform, combining the $e^{ik\cdot r}$ terms for various $k$ constructs new wave functions of position $r$:

$$f(r)=A\int_{-\infty}^{\infty}F(k)e^{ikr}dk$$

There are no truly infinite systems in the real world, however. As we will see, continuous $k$ values are possible only for a system of infinitely many atoms; in a real finite system, $k$ takes discrete values. A natural way to impose this discreteness is the Born–von Karman boundary condition, the subject of the next post.

[Born–von Karman Boundary Condition](https://oasisforhaanee.github.io/born-von-karman-boundary-condition/)

---

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
