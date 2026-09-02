---
layout: post
title: "Wave Function in a Periodic Potential"
date: 2026-08-16
categories: [quantum-mechanics]
tags: [Periodic Potential, Bloch's Theorem, Energy Band, Wave Function, Linear Combination, Tight Binding, Wave Number, Stationary State]
description: "What happens to wave functions and energy when many atoms are arranged periodically — generalizing the two-atom bonding/antibonding split to a chain of potentials, deriving E(k) = E0 + ΔE0 + 2t·cos(ka), and how the phase between neighboring wave functions grows with the wave number k."
canonicalURL: "https://blog.naver.com/kkul20235/224380395249"
usemathjax: true
comments: true
permalink: /wave-function-in-periodic-potential/

---

Please read the following post first:

[Bonding Orbital and Antibonding Orbital](https://oasisforhaanee.github.io/bonding-and-antibonding-orbitals/)

That post showed how the energy splits when two hydrogen atoms come close, and how the wave function forms. This post generalizes that to a system of many atoms arranged periodically.

This material is closely related to Bloch's theorem, covered later, so it is worth reading carefully first.

## A system with a periodic potential

![A periodic potential with wave functions distributed at regular intervals](/assets/img/periodic-potential-system.png)

A system with a periodic potential has potentials and wave functions distributed at regular intervals. Numbering each potential and wave function, we focus on the $j-1$, $j$, $j+1$ positions.

### Basic premises

The Hamiltonian describing this system is

$$H=-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+\dots +V_{j-1}(r)+V_j(r)+V_{j+1}(r)+\dots$$

and the wave function of the whole system can be written as

$$\Psi (r)=\sum _i^{\infty }a_i\psi _i(r)$$

This is possible because the assumption from the bonding/antibonding post extends here: if the inner product between wave functions at different positions is approximated as zero, they are approximately orthogonal, so each can serve as a basis and the total wave function is a linear combination of them.

$$1.\ \int _{-\infty }^{\infty }\psi _n\psi _m\, dr=0\ \ \left(n\ne m\right)$$

$$2.\ \Psi (r)=\sum _i^{\infty }a_i\psi _i(r)$$

Applying the Schrödinger equation to each individual wave function:

$$\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_l(r)\right)\psi _l(r)=E_0\psi _l(r)$$

Now substitute the Hamiltonian of the whole system and the total wave function into the Schrödinger equation.

### The Schrödinger equation for the whole system

$$H\Psi=E\Psi$$

$$=\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+\sum _i^{\infty }V_i(r)\right)\sum _i^{\infty }a_i\psi _i(r)=E\sum _i^{\infty }a_i\psi _i(r)$$

Writing out only the $j-1$, $j$, $j+1$ terms:

$$\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+\dots +V_{j-1}(r)+V_j(r)+V_{j+1}(r)+\dots \right)\left(\dots +a_{j-1}\psi _{j-1}(r)+a_j\psi _j(r)+a_{j+1}\psi _{j+1}(r)+\dots \right)$$

$$=E\left(\dots +a_{j-1}\psi _{j-1}(r)+a_j\psi _j(r)+a_{j+1}\psi _{j+1}(r)+\dots \right)$$

To use the individually applied Schrödinger equation, separate the total potential into $V_j$ and the rest:

$$\Delta V_j(r)=\dots +V_{j-1}(r)+V_{j+1}(r)+\dots$$

$$V_j+\Delta V_j=\sum _k^{\infty }V_k(r)$$

The whole equation becomes

$$\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_j(r)+\Delta V_j(r)\right)\left(\dots +a_{j-1}\psi _{j-1}(r)+a_j\psi _j(r)+a_{j+1}\psi _{j+1}(r)+\dots \right)$$

$$=\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_j(r)\right)\left(\dots +a_{j-1}\psi _{j-1}(r)+a_j\psi _j(r)+a_{j+1}\psi _{j+1}(r)+\dots \right)+\Delta V_j\left(r\right)\left(\dots +a_{j-1}\psi _{j-1}(r)+a_j\psi _j(r)+a_{j+1}\psi _{j+1}(r)+\dots \right)$$

$$=\dots +a_{j-1}\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_j(r)+\Delta V_j(r)\right)\psi _{j-1}(r)+a_j\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_j(r)+\Delta V_j(r)\right)\psi _j(r)+a_{j+1}\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_j(r)+\Delta V_j(r)\right)\psi _{j+1}(r)+\dots$$

For the term multiplied by $a_{j-1}$:

$$\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_j(r)+\Delta V_j(r)\right)\psi _{j-1}(r)=\left(E_0+\Delta V_{j-1}(r)\right)\psi _{j-1}(r)$$

For the term multiplied by $a_j$:

$$\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_j(r)+\Delta V_j(r)\right)\psi _j(r)=\left(E_0+\Delta V_j(r)\right)\psi _j(r)$$

For the term multiplied by $a_{j+1}$:

$$\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_j(r)+\Delta V_j(r)\right)\psi _{j+1}(r)=\left(E_0+\Delta V_{j+1}(r)\right)\psi _{j+1}(r)$$

Adding these, the Schrödinger equation for the whole system becomes

$$=\dots +a_{j-1}\left(E_0+\Delta V_{j-1}(r)\right)\psi _{j-1}(r)+a_j\left(E_0+\Delta V_j(r)\right)\psi _j(r)+a_{j+1}\left(E_0+\Delta V_{j+1}(r)\right)\psi _{j+1}(r)+\dots$$

$$=E\left(\dots +a_{j-1}\psi _{j-1}(r)+a_j\psi _j(r)+a_{j+1}\psi _{j+1}(r)+\dots \right)$$

Now project using the orthogonality of each wave function. (This uses bra-ket notation; see the [Bra-Ket Notation](https://oasisforhaanee.github.io/bra-ket-notation/) post if needed.)

Taking the inner product of an arbitrary state $\psi_l$ with the equation:

$$\dots +a_{j-1}\langle \psi _l|E_0+\Delta V_{j-1}(r)|\psi _{j-1}\rangle+a_j\langle \psi _l|E_0+\Delta V_j(r)|\psi _j\rangle+a_{j+1}\langle \psi _l|E_0+\Delta V_{j+1}(r)|\psi _{j+1}\rangle+\dots$$

$$=E\left(\dots +a_{j-1}\langle \psi _l|\psi _{j-1}\rangle+a_j\langle \psi _l|\psi _j\rangle+a_{j+1}\langle \psi _l|\psi _{j+1}\rangle+\dots \right)$$

For $l=j$, using the orthogonality condition $\langle \psi_n|\psi_m\rangle=0$ for $n\ne m$:

$$\dots +a_{j-1}\langle \psi _j|\Delta V_{j-1}(r)|\psi _{j-1}\rangle+a_j\left(E_0+\langle \psi _j|\Delta V_j(r)|\psi _j\rangle\right)+a_{j+1}\langle \psi _j|\Delta V_{j+1}(r)|\psi _{j+1}\rangle+\dots$$

$$=Ea_j$$

Recall $\Delta E_0$ and $t$ from the bonding orbital post:

$$\int _{-\infty }^{\infty }\psi _2V_1\psi _2\, dr=\Delta E_0$$

$$\int _{-\infty }^{\infty }\psi _2V_2\psi _1\, dr=t$$

Back then there were only two potentials, so $\Delta V_1=V_2$ and $\Delta V_2=V_1$. Substituting $j=2$:

$$\langle \psi _j|\Delta V_j(r)|\psi _j\rangle=\langle \psi _2|V_1(r)|\psi _2\rangle=\Delta E_0$$

$$\langle \psi _j|\Delta V_{j-1}(r)|\psi _{j-1}\rangle=\langle \psi _2|V_2(r)|\psi _1\rangle=t$$

So the equation above is the generalization of the two-potential system, with $\Delta E_0$ and $t$ playing the same roles. Using this, the equation becomes

$$\dots +a_{j-1}\langle \psi _j|\Delta V_{j-1}(r)|\psi _{j-1}\rangle+a_j\left(E_0+\langle \psi _j|\Delta V_j(r)|\psi _j\rangle\right)+a_{j+1}\langle \psi _j|\Delta V_{j+1}(r)|\psi _{j+1}\rangle+\dots$$

$$=(E_0+\Delta E_0)a_j+t(a_{j-1}+a_{j+1})=Ea_j$$

This recurrence holds for every position $j=1,2,3,\dots,N$. As a matrix equation:

$$\begin{pmatrix}E_0+\Delta E_0&t&0&\dots &0\\t&E_0+\Delta E_0&t&\dots &0\\0&t&E_0+\Delta E_0&\dots &0\\\vdots &\vdots &\vdots &\ddots &t\\0&0&0&t&E_0+\Delta E_0\end{pmatrix}\begin{pmatrix}a_1\\a_2\\a_3\\\vdots \\a_N\end{pmatrix}=E\begin{pmatrix}a_1\\a_2\\a_3\\\vdots \\a_N\end{pmatrix}$$

Finding the eigenvalues $E$ of this matrix gives the energy splitting in a periodic potential. Since the matrix is effectively infinite-dimensional, rather than solve it directly, we substitute the ansatz

$$a_j=Ae^{ikja}$$

where $A$ is a normalization constant, $a$ is the distance between wave functions, and $k$ is the wave number. Substituting into the generalized equation:

$$(E_0+\Delta E_0)Ae^{ikja}+t\left(Ae^{ik(j-1)a}+Ae^{ik(j+1)a}\right)=EAe^{ikja}$$

$$(E_0+\Delta E_0)+t\left(e^{-ika}+e^{ika}\right)=E$$

$$e^{ika}+e^{-ika}=2\cos (ka)$$

Applying Euler's formula to convert the $t$ coefficient into a cosine, we obtain

$$E(k)=E_0+\Delta E_0+2t\cos (ka)$$

In other words, the energy distribution traces a cosine wave around $E_0+\Delta E_0$ as $k$ varies:

![The energy E(k) = E0 + ΔE0 + 2t·cos(ka) oscillating in a cosine wave](/assets/img/ek-cosine-band.png)

## What does this conclusion mean?

The factor $a_j = Ae^{ikja}$ multiplies each wave function $\psi_j$. Each neighboring wave function therefore acquires a different phase.

The smaller $k$, the smaller the phase change between neighboring wave functions.

### k = 0

![The whole wave function when k = 0](/assets/img/k0-static.png)

![Drawn on the complex plane for k = 0. Looking at it from the real-x axis plane gives the actual wave function.](/assets/img/k0-gif.gif)

At $k=0$ the coefficient $a_j=Ae^{ikja}$ equals $A$, so no phase difference arises between neighboring wave functions. Here $E(k)$ is lowest—the most stable state.

### k = π/4a

![The whole wave function when k = π/4a](/assets/img/kpi4a-static.png)

![Drawn on the complex plane for k = π/4a. Looking at it from the real-x axis plane gives the actual wave function.](/assets/img/kpi4a-gif.gif)

At $k=\pi/4a$ the phase is no longer uniform, and the wave function rotates in a helix. The energy is between the midpoint and the minimum.

### k = π/2a

![The whole wave function when k = π/2a](/assets/img/kpi2a-static.png)

![Drawn on the complex plane for k = π/2a. Looking at it from the real-x axis plane gives the actual wave function.](/assets/img/kpi2a-gif.gif)

At $k=\pi/2a$ the phase difference between neighboring wave functions is exactly 90° ($\pi/2$). The energy is exactly the midpoint value.

### k = π/a

![The whole wave function when k = π/a](/assets/img/kpia-static.png)

![Drawn on the complex plane for k = π/a. Looking at it from the real-x axis plane gives the actual wave function.](/assets/img/kpia-gif.gif)

At $k=\pi/a$ the phase difference is exactly $\pi$ (180°). The energy is highest.

## Conclusion

All of these states are stationary states of a system with a periodic potential. Just like the bonding and antibonding wave functions, stationary states determined by the wave function's shape form with their own energies. Electrons occupy the stationary states of lowest energy first, being most stable, which lets us predict the wave function the electrons will have.

Where is this applied? The most representative system with a periodic potential is a crystal. In a solid crystal, atoms are arranged regularly, so electrons spread across the whole system. Electrons fill the stationary states from lowest energy upward, and this electron distribution determines the material's electrical and thermal conductivity.

This concept later developed into energy band theory, now the core theory of semiconductor engineering.

The next post covers Bloch's theorem, the foundation before energy bands.

---

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
