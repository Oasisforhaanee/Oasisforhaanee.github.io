---
layout: post
title: "Bonding Orbital and Antibonding Orbital"
date: 2026-08-11
categories: [quantum-mechanics]
tags: [Bonding Orbital, Antibonding Orbital, Molecular Orbital, Schrödinger Equation, Linear Combination, Interference, Energy Splitting]
description: "Why bonding and antibonding orbitals exist — solving the time-independent Schrödinger equation for two overlapping hydrogen 1s wave functions, and how constructive/destructive interference splits the energy into bonding E+ and antibonding E− states."
canonicalURL: "https://blog.naver.com/kkul20235/224375274200"
usemathjax: true
comments: true
permalink: /bonding-and-antibonding-orbitals/

---

General chemistry introduces bonding and antibonding orbitals, but usually only as concepts to be applied immediately, without explaining why they exist or what they mean. This post explains their meaning using the Schrödinger equation.

Reading the following posts first will help:

- [Eigenvalue & Eigenvector](https://oasisforhaanee.github.io/eigenvalue-and-eigenvector/)
- [The Inner Product and Orthogonality of Functions](https://oasisforhaanee.github.io/inner-product-and-orthogonality-of-functions/)
- [Schrödinger Equation](https://oasisforhaanee.github.io/schrodinger-equation/)
- [Stationary State](https://oasisforhaanee.github.io/stationary-state/)
- [Hydrogen Atom Orbitals](https://oasisforhaanee.github.io/hydrogen-atom-orbitals/)

## Bonding

Earlier posts showed how to find an electron's wave function using the Schrödinger equation. For stationary states, the energy can be computed directly from the time-independent Schrödinger equation.

This works well for a single electron, but when two or more wave functions overlap and interfere, a new approach is needed.

Chemical bonding is a representative example of such interference. A bond forms for a simple reason: it is more stable. If the state becomes more stable as two atoms approach, the bond forms spontaneously; if it becomes less stable, no bond forms.

The key measure of stability is energy. If the energy after bonding is higher than before, the bond is unstable; if lower, it is stable.

We therefore need to examine how energy changes when a bond forms. The simplest case is the hydrogen molecule (H₂).

### The state where the hydrogen atoms are far apart

![Two hydrogen atoms drawn in 3D. The more points, the higher the probability of finding the electron.](/assets/img/h2-far-3d.png)

The figure shows two hydrogen atoms far apart. Each electron can occupy orbitals such as 1s, 2s, 2px, and so on; since the 1s orbital is most stable, assume all electrons are in 1s. The electron probability density is then centered on each nucleus, and the wave function has energy $E_{1s}$.

For a more intuitive picture, slice the 3D wave function into a 2D cross-section.

![A cross-section of two hydrogen atoms separated by an infinite distance](/assets/img/h2-far-cross-section.png)

The vertical dashed lines mark the nuclei, and the potential energy $V$ (blue) decreases inversely with distance $r$ from each nucleus.

The 1s orbital wave function (orange) spreads from each atom's center, and each has energy $E_{1s}$.

When the atoms are far apart, the interaction between them is negligible, so the Schrödinger equation applies to each wave function independently:

$$H_1\psi _1=E_{1s}\psi _1$$

$$-\frac{\hbar ^2}{2m}\frac{d^2\psi _1}{dr^2}+V_1\psi _1=E_{1s}\psi _1$$

$$H_2\psi _2=E_{1s}\psi _2$$

$$-\frac{\hbar ^2}{2m}\frac{d^2\psi _2}{dr^2}+V_2\psi _2=E_{1s}\psi _2$$

### The state where the hydrogen atoms are close together

![Two hydrogen atoms with overlapping wave functions](/assets/img/h2-close-overlap.png)

Now bring the atoms closer. As the two wave functions begin to overlap, the time-independent Schrödinger equation for the whole system is

$$-\frac{\hbar ^2}{2m}\frac{d^2\Psi }{dr^2}+(V_1+V_2)\Psi =E\Psi$$

The overlapping wave functions form a new wave function $\Psi$, and the energy is written as an unknown $E$ rather than $E_{1s}$.

To solve this, two assumptions are needed:

$$1.\ \int _{-\infty }^{\infty }\psi _1\psi _2\, dr=0$$

$$2.\ \Psi =a\psi _1+b\psi _2$$

Assumption 1 may seem odd: if the wave functions overlap, why is their inner product zero? It is an approximation to simplify the equations—even though the wave functions are close enough to overlap, their inner product is close to zero (as in the graph below). Rather than strict mathematical orthogonality, it is better understood physically: the two orbitals are still far enough apart outside the interaction region that the inner product converges to zero.

![Try taking the inner product of the two functions (ψ1, ψ2). You'll get a value close to 0.](/assets/img/psi1-psi2-inner-product.png)

Assumption 2 is then justified: if assumption 1 holds, $\psi_1$ and $\psi_2$ are orthogonal, so any wave function can be expressed as a linear combination of them.

Substituting assumption 2 into the Schrödinger equation and expanding:

$$H=-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_1+V_2$$

$$\Psi =a\psi _1+b\psi _2$$

$$H\Psi =E\Psi$$

$$H(a\psi _1+b\psi _2)=E(a\psi _1+b\psi _2)$$

$$\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_1+V_2\right)(a\psi _1+b\psi _2)=E(a\psi _1+b\psi _2)$$

Expanding by the distributive law:

$$H(a\psi _1+b\psi _2)=a\left(-\frac{\hbar ^2}{2m}\frac{d^2\psi _1}{dr^2}+V_1\psi _1\right)+aV_2\psi _1+b\left(-\frac{\hbar ^2}{2m}\frac{d^2\psi _2}{dr^2}+V_2\psi _2\right)+bV_1\psi _2$$

$$=E(a\psi _1+b\psi _2)$$

Each parenthesized term matches the left-hand side of the time-independent Schrödinger equation for an isolated hydrogen atom, so they can be rewritten as $E_{1s}\psi_1$ and $E_{1s}\psi_2$:

$$a(E_{1s}\psi _1)+aV_2\psi _1+b(E_{1s}\psi _2)+bV_1\psi _2=E(a\psi _1+b\psi _2)$$

To solve, we multiply by $\psi_1$ and integrate, and separately by $\psi_2$ and integrate, using assumption 1 to simplify.

**1. Multiply both sides by ψ1 and integrate**

$$\int _{-\infty }^{\infty }\psi _1\left[aE_{1s}\psi _1+aV_2\psi _1+bE_{1s}\psi _2+bV_1\psi _2\right]dr=\int _{-\infty }^{\infty }\psi _1\left[E(a\psi _1+b\psi _2)\right]dr$$

$$=aE_{1s}\int _{-\infty }^{\infty }\psi _1\psi _1\, dr+a\int _{-\infty }^{\infty }\psi _1V_2\psi _1\, dr+bE_{1s}\int _{-\infty }^{\infty }\psi _1\psi _2\, dr+b\int _{-\infty }^{\infty }\psi _1V_1\psi _2\, dr=Ea\int _{-\infty }^{\infty }\psi _1\psi _1\, dr+Eb\int _{-\infty }^{\infty }\psi _1\psi _2\, dr$$

The integrals simplify as follows ($\Delta E$ and $t$ are convenient abbreviations):

$$\int _{-\infty }^{\infty }\psi _1\psi _1\, dr=1$$

$$\int _{-\infty }^{\infty }\psi _1\psi _2\, dr=0$$

$$\int _{-\infty }^{\infty }\psi _1V_2\psi _1\, dr=\Delta E$$

$$\int _{-\infty }^{\infty }\psi _1V_1\psi _2\, dr=t$$

Substituting:

$$aE_{1s}(1)+a(\Delta E)+bE_{1s}(0)+b(t)=Ea(1)+Eb(0)$$

$$a(E_{1s}+\Delta E)+bt=Ea$$

**2. Multiply both sides by ψ2 and integrate**

Similarly,

$$\int _{-\infty }^{\infty }\psi _2\left[aE_{1s}\psi _1+aV_2\psi _1+bE_{1s}\psi _2+bV_1\psi _2\right]dr=\int _{-\infty }^{\infty }\psi _2\left[E(a\psi _1+b\psi _2)\right]dr$$

$$=aE_{1s}\int _{-\infty }^{\infty }\psi _2\psi _1\, dr+a\int _{-\infty }^{\infty }\psi _2V_2\psi _1\, dr+bE_{1s}\int _{-\infty }^{\infty }\psi _2\psi _2\, dr+b\int _{-\infty }^{\infty }\psi _2V_1\psi _2\, dr=Ea\int _{-\infty }^{\infty }\psi _2\psi _1\, dr+Eb\int _{-\infty }^{\infty }\psi _2\psi _2\, dr$$

By symmetry, the integrals are the same $\Delta E$ and $t$ as before:

$$\int _{-\infty }^{\infty }\psi _2\psi _2\, dr=1$$

$$\int _{-\infty }^{\infty }\psi _2\psi _1\, dr=0$$

$$\int _{-\infty }^{\infty }\psi _2V_1\psi _2\, dr=\Delta E$$

$$\int _{-\infty }^{\infty }\psi _2V_2\psi _1\, dr=t$$

giving

$$aE_{1s}(0)+a(t)+bE_{1s}(1)+b(\Delta E)=Ea(0)+Eb(1)$$

$$at+b(E_{1s}+\Delta E)=Eb$$

The two equations can be solved as an eigenvalue problem:

$$\begin{pmatrix}E_{1s}+\Delta E&t\\t&E_{1s}+\Delta E\end{pmatrix}\begin{pmatrix}a\\b\end{pmatrix}=E\begin{pmatrix}a\\b\end{pmatrix}$$

The eigenvalues are

$$E_+=E_{1s}+\Delta E+t$$

$$E_-=E_{1s}+\Delta E-t$$

with eigenvectors

$$E_+:\ \begin{pmatrix}a\\b\end{pmatrix}=\frac{1}{\sqrt{2}}\begin{pmatrix}1\\1\end{pmatrix}$$

$$E_-:\ \begin{pmatrix}a\\b\end{pmatrix}=\frac{1}{\sqrt{2}}\begin{pmatrix}1\\-1\end{pmatrix}$$

Substituting these coefficients back into $\Psi=a\psi_1+b\psi_2$:

$$\Psi _+=\frac{1}{\sqrt{2}}(\psi _1+\psi _2)$$

$$\Psi _-=\frac{1}{\sqrt{2}}(\psi _1-\psi _2)$$

## Conclusion

Plotting $E_+$, $E_-$ and $\Psi_+$, $\Psi_-$:

![The energy levels E+ and E− split around E1s + ΔE, with the bonding orbital below and antibonding orbital above](/assets/img/eplus-eminus-energy-levels.png)

The energies are centered on $E_{1s}+\Delta E$, shifted by $\pm t$. Since

$$\int _{-\infty }^{\infty }\psi _1V_2\psi _1\, dr=\Delta E$$

involves the attractive potential $V_2$ (negative), $\Delta E$ is negative; for the same reason $t$ is negative.

When the two wave functions overlap, the total energy ($=2E_{1s}+2\Delta E$) is lower than the non-interacting total ($=2E_{1s}$). We can therefore predict that forming a bond is energetically favorable for the hydrogen molecule and occurs spontaneously.

For a single non-overlapping wave function the energy stays at $E_{1s}$. As the two atoms approach, the wave functions overlap, and new stationary states and energy levels form. (This energy-splitting phenomenon later gives rise to energy bands, as covered in solid-state physics.)

For the higher-energy wave function $E_-$, $\psi_1$ and $\psi_2$ have opposite signs (destructive interference); for the lower-energy $E_+$, they have the same sign (constructive interference). In other words, a high-energy orbital and a low-energy orbital split off. Electrons occupy these orbitals in order of increasing energy (per the Pauli exclusion principle). The low-energy orbital is the bonding orbital and the high-energy one the antibonding orbital.

The antibonding orbital, with wave functions of opposite sign, lowers the charge density between the nuclei and weakens the bond; the bonding orbital raises the charge density between the nuclei and strengthens it.

In the end, bonding and antibonding orbitals are solutions that emerge naturally from solving the Schrödinger equation in a situation where electron wave functions interfere.

That is it for this post. Thank you for reading.

---

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
