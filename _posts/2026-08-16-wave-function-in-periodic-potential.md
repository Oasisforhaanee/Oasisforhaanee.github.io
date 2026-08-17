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

Hello everyone. The weather has calmed down a bit. Everyone, please endure the hot weather a little longer and wait for the cool autumn that's coming.

Please read the post above first to understand this one:

[Bonding Orbital and Antibonding Orbital](https://oasisforhaanee.github.io/bonding-and-antibonding-orbitals/)

In the post above, we saw how E splits when two hydrogen atoms come close, and how the wave function forms. In this post, similar to that one, we'll look at how the wave function behaves in a system where many atoms are arranged periodically, and how E splits.

This content is closely related to Bloch's theorem, which we'll cover later, so if you're curious about Bloch's theorem, please read this post carefully first.

## A system with a periodic potential

![A periodic potential with wave functions distributed at regular intervals](/assets/img/periodic-potential-system.png)

A system with a periodic potential has the form shown in the figure above, with potentials and wave functions distributed at regular intervals. Let's number each potential and wave function, and focus on the j−1, j, j+1-th positions.

### Basic premises

The Hamiltonian describing this system is:

$$H=-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+\dots +V_{j-1}(r)+V_j(r)+V_{j+1}(r)+\dots$$

Also, the wave function of the whole system can be expressed as:

$$\Psi (r)=\sum _i^{\infty }a_i\psi _i(r)$$

This expression is possible because the assumption from the previous post (bonding and antibonding orbitals) extends and applies here as well. That is, if we approximate the inner product between wave functions at different positions as 0, we can view them as approximately orthogonal. So each wave function can act as a basis, and the total wave function can be constructed as a linear combination of them.

$$1.\ \int _{-\infty }^{\infty }\psi _n\psi _m\, dr=0\ \ \left(n\ne m\right)$$

$$2.\ \Psi (r)=\sum _i^{\infty }a_i\psi _i(r)$$

Also, applying the Schrödinger equation individually to each wave function gives:

$$\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_l(r)\right)\psi _l(r)=E_0\psi _l(r)$$

The explanation of the basic premises is done. Now let's substitute the Hamiltonian of the whole system and the total wave function into the Schrödinger equation.

### The Schrödinger equation for the whole system

$$H=-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+\dots +V_{j-1}(r)+V_j(r)+V_{j+1}(r)+\dots$$

$$\ \Psi (r)=\sum _i^{\infty }a_i\psi _i(r)$$

$$H\ \Psi =E\ \Psi$$

$$=\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+\sum _i^{\infty }V_i(r)\right)\sum _i^{\infty }a_i\psi _i(r)=E\sum _i^{\infty }a_i\psi _i(r)$$

Writing this out a bit so only the j−1, j, j+1-th terms are visible:

$$\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+\dots +V_{j-1}(r)+V_j(r)+V_{j+1}(r)+\dots \right)\left(\dots +a_{j-1}\psi _{j-1}(r)+a_j\psi _j(r)+a_{j+1}\psi _{j+1}(r)+\dots \right)$$

$$=E\left(\dots +a_{j-1}\psi _{j-1}(r)+a_j\psi _j(r)+a_{j+1}\psi _{j+1}(r)+\dots \right)$$

To use the individually applied Schrödinger equation:

$$\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_l(r)\right)\psi _l(r)=E_0\psi _l(r)$$

let's separate the total potential into Vj and the remaining terms.

$$\Delta V_j(r)==\dots +V_{j-1}(r)+V_{j+1}(r)+\dots$$

$$V_j+\Delta V_j=\sum _k^{\ \infty }V_k(r)$$

Then the whole equation can be expressed as follows. In this equation, we'll organize only the j−1, j, j+1-th terms.

$$\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_j(r)+\Delta V_j(r)\right)\left(\dots +a_{j-1}\psi _{j-1}(r)+a_j\psi _j(r)+a_{j+1}\psi _{j+1}(r)+\dots \right)$$

$$=\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_j(r)\right)\left(\dots +a_{j-1}\psi _{j-1}(r)+a_j\psi _j(r)+a_{j+1}\psi _{j+1}(r)+\dots \right)+\Delta V_j\left(r\right)\left(\dots +a_{j-1}\psi _{j-1}(r)+a_j\psi _j(r)+a_{j+1}\psi _{j+1}(r)+\dots \right)$$

$$=\dots +a_{j-1}\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_j(r)+\Delta V_j(r)\right)\psi _{j-1}(r)+a_j\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_j(r)+\Delta V_j(r)\right)\psi _j(r)+a_{j+1}\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_j(r)+\Delta V_j(r)\right)\psi _{j+1}(r)+\dots$$

For the term multiplied by a_{j−1}:

$$\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_j(r)+\Delta V_j(r)\right)\psi _{j-1}(r)=\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_{j-1}(r)+\Delta V_{j-1}(r)\right)\psi _{j-1}(r)=\left(E_0+\Delta V_{j-1}(r)\right)\psi _{j-1}(r)$$

For the term multiplied by a_j:

$$\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_j(r)+\Delta V_j(r)\right)\psi _j(r)=\left(E_0+\Delta V_j(r)\right)\psi _j(r)$$

For the term multiplied by a_{j+1}:

$$\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_j(r)+\Delta V_j(r)\right)\psi _{j+1}(r)=\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_{j+1}(r)+\Delta V_{j+1}(r)\right)\psi _{j+1}(r)=\left(E_0+\Delta V_{j+1}(r)\right)\psi _{j+1}(r)$$

Adding them all up, the Schrödinger equation for the whole system is finally organized as:

$$\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+\dots +V_{j-1}(r)+V_j(r)+V_{j+1}(r)+\dots \right)\left(\dots +a_{j-1}\psi _{j-1}(r)+a_j\psi _j(r)+a_{j+1}\psi _{j+1}(r)+\dots \right)$$

$$=\dots +a_{j-1}\left(E_0+\Delta V_{j-1}(r)\right)\psi _{j-1}(r)+a_j\left(E_0+\Delta V_j(r)\right)\psi _j(r)+a_{j+1}\left(E_0+\Delta V_{j+1}(r)\right)\psi _{j+1}(r)+\dots$$

$$=E\left(\dots +a_{j-1}\psi _{j-1}(r)+a_j\psi _j(r)+a_{j+1}\psi _{j+1}(r)+\dots \right)$$

Now let's do the projection using the orthogonality of each wave function.

This process uses bra-ket notation, so if you're not familiar with bra-ket notation, please refer to the post below first:

[Bra-Ket Notation](https://oasisforhaanee.github.io/bra-ket-notation/)

First, take the inner product of an arbitrary state ψl with the equation involving E0 and E.

$$\dots +a_{j-1}\langle \psi _l|E_0+\Delta V_{j-1}(r)|\psi _{j-1}\rangle+a_j\langle \psi _l|E_0+\Delta V_j(r)|\psi _j\rangle+a_{j+1}\langle \psi _l|E_0+\Delta V_{j+1}(r)|\psi _{j+1}\rangle+\dots$$

$$=E\left(\dots +a_{j-1}\langle \psi _l|\psi _{j-1}\rangle+a_j\langle \psi _l|\psi _j\rangle+a_{j+1}\langle \psi _l|\psi _{j+1}\rangle+\dots \right)$$

If l = j, the equation above organizes as:

$$\dots +a_{j-1}\langle \psi _j|E_0+\Delta V_{j-1}(r)|\psi _{j-1}\rangle+a_j\langle \psi _j|E_0+\Delta V_j(r)|\psi _j\rangle+a_{j+1}\langle \psi _j|E_0+\Delta V_{j+1}(r)|\psi _{j+1}\rangle+\dots$$

$$=E\left(\dots +a_{j-1}\langle \psi _j|\psi _{j-1}\rangle+a_j\langle \psi _j|\psi _j\rangle+a_{j+1}\langle \psi _j|\psi _{j+1}\rangle+\dots \right)$$

Earlier we decided to approximate the inner product between wave functions at different positions as 0. Expressing this in bra-ket notation:

$$\langle \psi _n|\psi _m\rangle=0\ \ \left(n\ne m\right)$$

Applying this orthogonality condition, we get the following left and right hand sides:

$$\dots +a_{j-1}\langle \psi _j|\Delta V_{j-1}(r)|\psi _{j-1}\rangle+a_j\left(E_0+\langle \psi _j|\Delta V_j(r)|\psi _j\rangle\right)+a_{j+1}\langle \psi _j|\Delta V_{j+1}(r)|\psi _{j+1}\rangle+\dots$$

$$=Ea_j$$

Do you remember ΔE0 and t from the bonding orbital post?

$$\int _{-\infty }^{\infty }\psi _2V_1\psi _2\, dr=\Delta E_0$$

$$\int _{-\infty }^{\infty }\psi _2V_2\psi _1\, dr=t$$

Back then, there were only two potentials, V1 and V2, so ΔV1 = V2 and ΔV2 = V1. In this case too, substituting j = 2 into the equation above:

$$\langle \psi _j|\Delta V_j(r)|\psi _j\rangle=\langle \psi _2|\Delta V_2(r)|\psi _2\rangle=\langle \psi _2|V_1(r)|\psi _2\rangle=\int _{-\infty }^{\infty }\psi _2V_1\psi _2\, dr=\Delta E_0$$

$$\langle \psi _j|\Delta V_{j-1}(r)|\psi _{j-1}\rangle=\langle \psi _2|\Delta V_1(r)|\psi _1\rangle=\langle \psi _2|V_2(r)|\psi _1\rangle=\int _{-\infty }^{\infty }\psi _2V_2\psi _1\, dr=t$$

It organizes like this. So we can see that the equation above is the generalized version of the system that had only two potentials V1, V2, and that ΔE0 and t play the same roles as before.

Using this, the equation organizes again as:

$$\dots +a_{j-1}\langle \psi _j|\Delta V_{j-1}(r)|\psi _{j-1}\rangle+a_j\left(E_0+\langle \psi _j|\Delta V_j(r)|\psi _j\rangle\right)+a_{j+1}\langle \psi _j|\Delta V_{j+1}(r)|\psi _{j+1}\rangle+\dots$$

$$=(E_0+\Delta E_0)a_j+t(a_{j-1}+a_{j+1})=Ea_j$$

This recurrence relation holds for every position j (j = 1, 2, 3... N). Expressing it as a matrix equation:

$$\begin{pmatrix}E_0+\Delta E_0&t&0&\dots &0\\t&E_0+\Delta E_0&t&\dots &0\\0&t&E_0+\Delta E_0&\dots &0\\\vdots &\vdots &\vdots &\ddots &t\\0&0&0&t&E_0+\Delta E_0\end{pmatrix}\begin{pmatrix}a_1\\a_2\\a_3\\\vdots \\a_N\end{pmatrix}=E\begin{pmatrix}a_1\\a_2\\a_3\\\vdots \\a_N\end{pmatrix}$$

Finding the eigenvalues E of this matrix tells us the E splitting that forms when a periodic potential exists. However, since this matrix is infinite-dimensional, actually solving it isn't easy, so we'll skip the solving process and directly substitute the following form of solution (it really is a solution):

$$a_j=Ae^{ikja}$$

Here, A is the normalization constant, a is the distance between the wave functions, and k is the wave number of the wave function. Substituting this into the generalized equation above:

$$(E_0+\Delta E_0)Ae^{ikja}+t\left(Ae^{ik(j-1)a}+Ae^{ik(j+1)a}\right)=EAe^{ikja}$$

$$(E_0+\Delta E_0)+t\left(e^{-ika}+e^{ika}\right)=E$$

$$e^{ika}+e^{-ika}=2\cos (ka)$$

Applying Euler's formula to convert the coefficient of t into a cosine term, we finally get the energy relation:

$$E(k)=E_0+\Delta E_0+2t\cos (ka)$$

In other words, the actual E distribution draws a sine waveform oscillating around E0 + ΔE0 depending on k, as shown below.

![The energy E(k) = E0 + ΔE0 + 2t·cos(ka) oscillating in a cosine wave](/assets/img/ek-cosine-band.png)

## What does this conclusion mean?

a_j = Ae^{ikja} is multiplied by each wave function ψ_j. In other words, each neighboring wave function gets a different phase multiplied sequentially.

The smaller k is, the smaller the phase change between neighboring wave functions.

### k = 0

![The whole wave function when k = 0](/assets/img/k0-static.png)

![Drawn on the complex plane for k = 0. Looking at it from the real-x axis plane gives the actual wave function.](/assets/img/k0-gif.gif)

The figure above shows the whole wave function when k = 0. Since the coefficient multiplied on the wave function, a_j = Ae^{ikja}, becomes 1, no phase difference arises between neighboring wave functions. At this point E(k) has the lowest value, and it becomes the most stable state.

### k = π/4a

![The whole wave function when k = π/4a](/assets/img/kpi4a-static.png)

![Drawn on the complex plane for k = π/4a. Looking at it from the real-x axis plane gives the actual wave function.](/assets/img/kpi4a-gif.gif)

The figure above shows the whole wave function when k = π/4a. Now the phase multiplied onto the neighboring wave functions is no longer 1, so you can see it rotating in a helix. The energy at this time is lower than the midpoint but higher than the lowest point.

### k = π/2a

![The whole wave function when k = π/2a](/assets/img/kpi2a-static.png)

![Drawn on the complex plane for k = π/2a. Looking at it from the real-x axis plane gives the actual wave function.](/assets/img/kpi2a-gif.gif)

The figure above shows the whole wave function when k = π/2a. At this time, the phase difference between neighboring wave functions is exactly 90 degrees (π/2). The energy at this time is exactly the midpoint value.

### k = π/a

![The whole wave function when k = π/a](/assets/img/kpia-static.png)

![Drawn on the complex plane for k = π/a. Looking at it from the real-x axis plane gives the actual wave function.](/assets/img/kpia-gif.gif)

The figure above shows the whole wave function when k = π/a. The phase difference between neighboring wave functions is exactly π, that is, 180 degrees. The energy is the highest in this state.

## Conclusion

All of the states above are stationary states of a system with a periodic potential. Just like the bonding orbital wave function and the antibonding orbital wave function, stationary states determined by the shape of the wave function form, along with new corresponding energies. And when electrons occupy those states, they occupy the stationary states with lower energy first because they're stable. Based on this, we can predict what wave function the electrons will have.

So where is this theoretical proof actually applied? The most representative system with a periodic potential is a crystal. In a solid crystal, atoms are arranged regularly, so electrons exist spread across the whole system. At this point, the electrons inside the solid fill the stationary states from the lowest energy upward, and through this electron distribution, we can clearly determine the electrical conductivity and thermal conductivity of the material.

This concept later developed one step further into energy band theory, and today it's used as the most core theory of semiconductor engineering.

In the next post, I'll cover Bloch's theorem, the basic premise before learning about energy bands.

Thanks for reading the long post. Have a good day, everyone!

※This post reflects my own understanding, so there may be errors.
