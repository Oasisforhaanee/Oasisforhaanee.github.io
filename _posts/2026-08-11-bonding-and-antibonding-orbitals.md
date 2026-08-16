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

Hello. The weather these days is insane. The moment I step outside I'm sweating like I just took a shower, so I can't wear anything but white clothes. Everyone, please be careful in this heat.

When you study general chemistry, you learn about bonding orbitals and antibonding orbitals. But most people just learn the concept and immediately move on to applications. I took general chemistry too, and I never once learned why bonding orbitals and antibonding orbitals exist, or what meaning they carry.

I remember being told, "oh there's this thing" as a freshman, and then having to memorize all the details of the concept without understanding it. Teaching someone who doesn't even know what it means and telling them to use it... yeah. I crammed it all for exams, but as time passed I forgot everything.

So in this post, I'll try to explain the meaning of bonding orbitals and antibonding orbitals using the Schrödinger equation, as thoroughly as I can based on my understanding. You'll need to read the posts below first to understand this one:

- [Eigenvalue & Eigenvector](https://blog.naver.com/kkul20235/224221436871)
- [Orthogonality](https://oasisforhaanee.github.io/orthogonality/) — linear algebra concept
- [Schrödinger Equation](https://oasisforhaanee.github.io/schrodinger-equation/) — the concept of the Schrödinger equation
- [Stationary State](https://oasisforhaanee.github.io/stationary-state/)
- [Hydrogen Atom Orbitals](https://oasisforhaanee.github.io/hydrogen-atom-orbitals/) — the concept of orbitals

Then let's begin.

## Bonding

In the previous posts, we looked at how to find an electron's wave function using the Schrödinger equation. In particular, for stationary states, we could directly calculate the energy of the wave function with the time-independent Schrödinger equation.

This approach works well for a single electron's wave function, but when two or more wave functions overlap and interfere with each other, a new approach is needed.

Chemical bonding is a representative example of this interference between wave functions. The reason a chemical bond forms is simple: it's more stable. If the state becomes more stable as two atoms get closer, the chemical bond happens spontaneously. Conversely, if the state becomes unstable as the atoms get closer, no bond forms.

The key measure of bond stability is energy. If the energy after bonding is higher than before, the bond is unstable; if it's lower than before, the bond is stable. If you refer to the [Gibbs energy post](https://blog.naver.com/kkul20235/223500159864) I wrote long ago, it'll help you understand spontaneity.

So we need to look at how energy changes when a bond forms. Let's do it with the simplest case: the hydrogen molecule (H2).

### The state where the hydrogen atoms are far apart

![Two hydrogen atoms drawn in 3D. The more points, the higher the probability of finding the electron.](/assets/img/h2-far-3d.png)

The figure above shows two hydrogen atoms placed very far apart, side by side. Each hydrogen atom's electron can occupy one of the orbitals like 1s, 2s, 2px..., but since the probability of occupying the most stable 1s orbital is very high, let's assume all the electrons are in the 1s orbital. Then the electron probability density spreads out centered on each nucleus, and the wave function has energy E1s.

To make the graph a bit more intuitive, let's slice the 3D wave function into a cross-section and simplify it to 2D.

![A cross-section of two hydrogen atoms separated by an infinite distance](/assets/img/h2-far-cross-section.png)

The graph above is the 3D graph sliced into a 2D cross-section.

The actual positions of the nuclei are marked with vertical dashed lines, and the potential energy V (the blue graph) decreases in inverse proportion to the distance r from the nucleus.

The 1s orbital wave function (the orange graph) spreads out from the center of the atom, and each wave function has the same energy E1s.

If the two atoms are very far apart, we can apply the Schrödinger equation to each wave function independently, since the interaction or interference between the atoms can be ignored. The time-independent Schrödinger equation at this point can be written as:

$$H_1\psi _1=E_{1s}\psi _1$$

$$-\frac{\hbar ^2}{2m}\frac{d^2\psi _1}{dr^2}+V_1\psi _1=E_{1s}\psi _1$$

$$H_2\psi _2=E_{1s}\psi _2$$

$$-\frac{\hbar ^2}{2m}\frac{d^2\psi _2}{dr^2}+V_2\psi _2=E_{1s}\psi _2$$

### The state where the hydrogen atoms are close together

![Two hydrogen atoms with overlapping wave functions](/assets/img/h2-close-overlap.png)

Now imagine narrowing the distance between the two atoms a little. As the two wave functions begin to overlap, the time-independent Schrödinger equation for the whole system can be written as:

$$-\frac{\hbar ^2}{2m}\frac{d^2\Psi }{dr^2}+(V_1+V_2)\Psi =E\Psi$$

Since the wave functions overlap and form a completely new wave function Ψ, the corresponding energy is also written as an unknown E rather than E1s.

To solve this equation, we need two assumptions.

$$1.\ \int _{-\infty }^{\infty }\psi _1\psi _2\, dr=0$$

$$2.\ \Psi =a\psi _1+b\psi _2$$

First, assumption 1 seems odd. We said the two wave functions are close enough to overlap, so why is the inner product of the two wave functions 0? This assumption is an approximation for simplifying the equations — even though the wave functions are close enough to overlap and we introduced a new Hamiltonian, let's treat the inner product as 0 to make the calculation simpler. And in fact, the inner product of ψ1 and ψ2 has a value close to 0, as in the graph below. So rather than strict mathematical orthogonality, it's better to understand it physically: the two orbitals are still far enough apart outside the interaction region that the inner product converges to 0.

![Try taking the inner product of the two functions (ψ1, ψ2). You'll get a value close to 0.](/assets/img/psi1-psi2-inner-product.png)

Assumption 2 is a valid assumption: if assumption 1 holds, ψ1 and ψ2 are orthogonal to each other, so we can use the two wave functions as a basis and express any wave function as a linear combination.

Now let's substitute assumption 2 directly into the Schrödinger equation and expand.

$$H=-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_1+V_2$$

$$\Psi =a\psi _1+b\psi _2$$

$$H\Psi =E\Psi$$

Substituting this in, it organizes as follows:

$$H(a\psi _1+b\psi _2)=E(a\psi _1+b\psi _2)$$

$$\left(-\frac{\hbar ^2}{2m}\frac{d^2}{dr^2}+V_1+V_2\right)(a\psi _1+b\psi _2)=E(a\psi _1+b\psi _2)$$

We calculate this using the distributive law.

$$H(a\psi _1+b\psi _2)=a\left(-\frac{\hbar ^2}{2m}\frac{d^2\psi _1}{dr^2}+V_1\psi _1\right)+aV_2\psi _1+b\left(-\frac{\hbar ^2}{2m}\frac{d^2\psi _2}{dr^2}+V_2\psi _2\right)+bV_1\psi _2$$

$$=E(a\psi _1+b\psi _2)$$

Here, each term in parentheses exactly matches the left-hand side structure of the time-independent Schrödinger equation for an isolated single hydrogen atom.

So the first parentheses can be rewritten as E1s·ψ1, and the second as E1s·ψ2.

$$a(E_{1s}\psi _1)+aV_2\psi _1+b(E_{1s}\psi _2)+bV_1\psi _2=E(a\psi _1+b\psi _2)$$

To solve this equation, we'll organize the equation multiplied by ψ1 and integrated, and the equation multiplied by ψ2 and integrated. The reason is to simplify using assumption 1 from earlier.

**1. Multiply both sides by ψ1 and integrate**

$$\int _{-\infty }^{\infty }\psi _1\left[aE_{1s}\psi _1+aV_2\psi _1+bE_{1s}\psi _2+bV_1\psi _2\right]dr=\int _{-\infty }^{\infty }\psi _1\left[E(a\psi _1+b\psi _2)\right]dr$$

$$=aE_{1s}\int _{-\infty }^{\infty }\psi _1\psi _1\, dr+a\int _{-\infty }^{\infty }\psi _1V_2\psi _1\, dr+bE_{1s}\int _{-\infty }^{\infty }\psi _1\psi _2\, dr+b\int _{-\infty }^{\infty }\psi _1V_1\psi _2\, dr=Ea\int _{-\infty }^{\infty }\psi _1\psi _1\, dr+Eb\int _{-\infty }^{\infty }\psi _1\psi _2\, dr$$

At this point, each integral in the equation above can be organized as follows. ΔE and t are symbols I made up arbitrarily.

$$\int _{-\infty }^{\infty }\psi _1\psi _1\, dr=1$$

$$\int _{-\infty }^{\infty }\psi _1\psi _2\, dr=0$$

$$\int _{-\infty }^{\infty }\psi _1V_2\psi _1\, dr=\Delta E$$

$$\int _{-\infty }^{\infty }\psi _1V_1\psi _2\, dr=t$$

Using the equations above, the following equation is derived:

$$aE_{1s}(1)+a(\Delta E)+bE_{1s}(0)+b(t)=Ea(1)+Eb(0)$$

$$a(E_{1s}+\Delta E)+bt=Ea$$

**2. Multiply both sides by ψ2 and integrate**

In the same way as with ψ1, multiplying both sides by ψ2 and integrating over the whole range gives:

$$\int _{-\infty }^{\infty }\psi _2\left[aE_{1s}\psi _1+aV_2\psi _1+bE_{1s}\psi _2+bV_1\psi _2\right]dr=\int _{-\infty }^{\infty }\psi _2\left[E(a\psi _1+b\psi _2)\right]dr$$

$$=aE_{1s}\int _{-\infty }^{\infty }\psi _2\psi _1\, dr+a\int _{-\infty }^{\infty }\psi _2V_2\psi _1\, dr+bE_{1s}\int _{-\infty }^{\infty }\psi _2\psi _2\, dr+b\int _{-\infty }^{\infty }\psi _2V_1\psi _2\, dr=Ea\int _{-\infty }^{\infty }\psi _2\psi _1\, dr+Eb\int _{-\infty }^{\infty }\psi _2\psi _2\, dr$$

Just like ψ1, the following holds for ψ2. The fun part is that ψ1 and ψ2, and V1 and V2, are completely symmetric, so even though it's a different equation from the ψ1 case, the integral values come out as the same ΔE and t.

$$\int _{-\infty }^{\infty }\psi _2\psi _2\, dr=1$$

$$\int _{-\infty }^{\infty }\psi _2\psi _1\, dr=0$$

$$\int _{-\infty }^{\infty }\psi _2V_1\psi _2\, dr=\Delta E$$

$$\int _{-\infty }^{\infty }\psi _2V_2\psi _1\, dr=t$$

Using this, the equation organizes into the following result:

$$aE_{1s}(0)+a(t)+bE_{1s}(1)+b(\Delta E)=Ea(0)+Eb(1)$$

$$at+b(E_{1s}+\Delta E)=Eb$$

E that satisfies these two equations can be found using a system of equations. To solve it more linearly-algebraically, you can find it through eigenvalues using a matrix.

$$\begin{pmatrix}E_{1s}+\Delta E&t\\t&E_{1s}+\Delta E\end{pmatrix}\begin{pmatrix}a\\b\end{pmatrix}=E\begin{pmatrix}a\\b\end{pmatrix}$$

Finding the eigenvalues E that satisfy the equation above:

$$E_+=E_{1s}+\Delta E+t$$

$$E_-=E_{1s}+\Delta E-t$$

And the eigenvectors for each energy are:

$$E_+:\ \begin{pmatrix}a\\b\end{pmatrix}=\frac{1}{\sqrt{2}}\begin{pmatrix}1\\1\end{pmatrix}$$

$$E_-:\ \begin{pmatrix}a\\b\end{pmatrix}=\frac{1}{\sqrt{2}}\begin{pmatrix}1\\-1\end{pmatrix}$$

Substituting the final coefficients a, b into the linear combination state Ψ = a·ψ1 + b·ψ2, the total wave function organizes as:

$$\Psi _+=\frac{1}{\sqrt{2}}(\psi _1+\psi _2)$$

$$\Psi _-=\frac{1}{\sqrt{2}}(\psi _1-\psi _2)$$

## Conclusion

So what does this result mean?

If we plot the approximate values of E+, E− and Ψ+, Ψ− on a graph, it looks like this:

![The energy levels E+ and E− split around E1s + ΔE, with the bonding orbital below and antibonding orbital above](/assets/img/eplus-eminus-energy-levels.png)

Looking at the graph, the energy values are centered on E1s + ΔE, shifted by +t and −t, and since

$$\int _{-\infty }^{\infty }\psi _1V_2\psi _1\, dr=\Delta E$$

has V2 as a negative attractive potential, the sign of ΔE is also negative. For the same reason, t is also negative.

In other words, when the two wave functions overlap, the total energy (= 2E1s + 2ΔE) is lower than the total when the two wave functions don't interfere (= 2E1s). So we can predict that for the hydrogen molecule, forming a bond is energetically more stable and happens spontaneously.

Also, for a single wave function without overlap, the energy stayed the same E1s. But as the two hydrogen atoms got closer, the wave functions overlapped, and new stationary states and their energy levels formed (as I'll cover later, this energy splitting phenomenon creates energy bands. I'll explain that again when we cover solid-state physics later).

For the high-energy wave function E−, ψ1 and ψ2 have opposite signs (destructive interference), and for the low-energy wave function E+, ψ1 and ψ2 have the same sign (constructive interference). In other words, a high-energy orbital and a low-energy orbital split off newly. Each electron occupies these orbitals in order of increasing energy according to the Pauli exclusion principle. The low-energy orbital is called the bonding orbital, and the high-energy orbital is called the antibonding orbital.

The high-energy antibonding orbital has wave functions with opposite signs, so it lowers the charge density between the nuclei and weakens the bond; the bonding orbital, conversely, raises the charge density between the nuclei and strengthens the bond.

In the end, we can see that the concepts of bonding orbitals and antibonding orbitals are also solutions that emerge naturally when you solve the Schrödinger equation in a situation where electron wave functions interfere with each other.

That's it for this post. Thanks for reading the long post.

※This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.
