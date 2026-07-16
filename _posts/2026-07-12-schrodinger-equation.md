---
layout: post
title: "The Schrödinger Equation (Time-Independent & Time-Dependent)"
date: 2026-07-12
categories: [quantum-mechanics, physics]
tags: [Schrödinger Equation, Wave Function, Matter Wave]
canonicalURL: "https://blog.naver.com/kkul20235/224343743129"
usemathjax: true
comments: true

---

Anyone who has studied the Schrödinger equation will be most familiar with this one. This is the **time-independent Schrödinger equation**:

$$-\frac{\hbar^2}{2m}\frac{d^2\psi(x)}{dx^2}+V(x)\psi(x)=E\psi(x)$$

This equation is also a Schrödinger equation; it's called the **time-dependent Schrödinger equation**:

$$i\hbar \frac{\partial \psi(x,t)}{\partial t}=-\frac{\hbar^2}{2m}\frac{\partial^2\psi(x,t)}{\partial x^2}+V(x,t)\psi(x,t)$$

So what does this equation mean, and why should we know it? Before looking at the Schrödinger equation, we need to know what a **matter wave** is. The matter-wave formula is defined as follows:

$$\lambda = \frac{h}{p} = \frac{h}{mv}$$

The wavelength of this matter wave is given by Planck's constant $h$ divided by the momentum $mv$.

Every object with momentum carries a wave of that wavelength. Yet no one perceives matter waves in everyday life. This is because the matter-wave wavelength is extremely small. For a 150 g baseball flying at 40 m/s, the matter wave is as follows:

$$\lambda \approx \frac{6.63\times 10^{-34}}{0.15 \times 40} \approx 1.1\times 10^{-34}\ \text{m}$$

The wavelength is so short that we can't perceive this wave. The wavelength is simply too short for the wave to cause any interference with our bodies.

But as we move from the macroscopic world into the microscopic world, the matter-wave wavelength becomes very large. For a moving electron, the matter-wave wavelength is on the order of 0.1–0.2 nm because its momentum is small, which is comparable to the interatomic spacing in solids. Because the wavelength is of this scale, the wave can interfere with bonding and reactions, and electrons in solids play a key role in determining properties such as thermal and electrical conductivity.

These microscopic particles have the properties of both mass-bearing particles *and* waves of an appropriate wavelength. Therefore, to handle matter in the microscopic world we need an equation of motion that takes wave nature into account, not just classical mechanics. This is the Schrödinger equation. Just as $F = ma$ plays its role in classical mechanics, the Schrödinger equation plays that role in quantum mechanics.

The most basic form of the Schrödinger equation is as follows:

$$i\hbar \frac{\partial \psi(x,t)}{\partial t}=-\frac{\hbar^2}{2m}\frac{\partial^2\psi(x,t)}{\partial x^2}+V(x,t)\psi(x,t)$$

The $h$ with a bar on top is read "h-bar" ($\hbar$) and equals Planck's constant $h$ divided by $2\pi$. Since $h/2\pi$ comes up so often, we give it the new symbol $\hbar$. What this equation means is: given a time-dependent wave function $\psi(x,t)$ placed in a potential field $V(x,t)$, it tells us how the wave function **propagates** over time.

If we consider the left-hand side at a specific time $t_1$, we get the second derivative of the wave function together with $V(x,t_1)\cdot\psi(x,t_1)$, and combined with the time derivative on the right-hand side this tells us how the state changes as time goes on.
<img width="875" height="562" alt="wave_packet_well_reflection" src="https://github.com/user-attachments/assets/76545313-ca8a-4470-9656-9628d143d12f" />

The motion of the wave in this video is also obtained by solving the Schrödinger equation at each time step and plotting the wave's position.

So what about the time-*independent* Schrödinger equation? If the potential $V(x,t)$ does not change with time — that is, it is just $V(x)$ — then we may assume the wave function $\psi(x,t)$ takes a separated form:

$$\psi(x,t) = \psi(x)\,T(t)$$

(Strictly speaking, we'd also need the condition that $\psi(x,t)$ is a *stationary state*, but I'll cover that next time.)

Why? How do we know we can separate the time and space parts and solve like that? Well, if we actually solve the equation, we end up with solutions for $\psi(x)$ and $T(t)$ as a result. The general solution of linear equations can be expressed as a linear combination of already-found solutions. Since the Schrödinger equation is also a linear partial differential equation, a linear combination of its solutions is again a solution.

The process of finding the solution feels a bit… unsatisfying. It's like we're forcing it to work. But that's generally how solving linear differential equations goes. You assume a form that's easy to solve, transform the equation, and then build the general solution as a superposition of the solutions you found. The method of assuming the function is a product of terms each depending on a single independent variable — like the wave function above — is called **separation of variables**.

Anyway, substituting the separated $\psi(x,t) = \psi(x)T(t)$ into the time-dependent Schrödinger equation gives the following. After dividing by $\psi(x)T(t)$:

$$i\hbar \frac{1}{T(t)}\frac{dT(t)}{dt} = -\frac{\hbar^2}{2m}\frac{1}{\psi(x)}\frac{d^2\psi(x)}{dx^2} + V(x)$$

The left side is an equation in $t$, the right side an equation in $x$. Since $x$ and $t$ are independent variables, for this equality to hold for *all* $x$ and $t$, each side must equal a constant. Surprisingly, that constant is the energy $E$ of the wave.

Solving this differential equation for the general solution gives the following. As a result, the time part takes the form $e^{-iEt/\hbar}$, and $\psi(x)$ is determined by $V(x)$:

$$T(t) = e^{-iEt/\hbar}$$

This means that for a wave function $\psi(x)$ with a definite energy $E$, the wave function rotates in the complex plane according to its energy.
<img width="1188" height="563" alt="wavefunction_ground_state" src="https://github.com/user-attachments/assets/c7634c03-64cb-4a97-bbab-cc67ba2a937a" />

<img width="1000" height="750" alt="wavefunction_3d_spiral" src="https://github.com/user-attachments/assets/9280a4c6-ff78-4523-855c-ce61179c54f2" />


To fully supplement the latter part, I'd need to explain stationary states and the superposition of wave functions in detail. I'll write about that when I get the chance.

That's it for this post. Thank you for reading this long article.

---

*※ This post was written based on my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*


