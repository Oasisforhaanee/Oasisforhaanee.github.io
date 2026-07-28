---
layout: post
title: "The Schrödinger Equation (Time-Independent & Time-Dependent)"
date: 2026-07-12
categories: [quantum-mechanics, physics]
tags: [Schrödinger Equation, Wave Function, Matter Wave]
description: "What the time-independent and time-dependent Schrödinger equations mean, where they come from, and why wave-like matter in the microscopic world needs them."
canonicalURL: "https://blog.naver.com/kkul20235/224343743129"
usemathjax: true
comments: true
---

Hi everyone. It's been a while. Surprisingly, I'm already a month past my military discharge. Life after service is honestly amazing — yahoo!

Anyway, I've been consistently self-studying quantum mechanics since getting out, but it's not easy. I'm not always sure whether I actually understand something or just look like I do. So I'm starting to write these posts to check what I really understand. This time, let's talk about the Schrödinger equation.

$$-\frac{\hbar ^2}{2m}\frac{d^2\psi (x)}{dx^2}+V(x)\psi (x)=E\psi (x)$$

If you've ever studied the Schrödinger equation, this form is probably the most familiar. This is the **time-independent Schrödinger equation**.

$$i\hbar \frac{\partial \psi (x,t)}{\partial t}=-\frac{\hbar ^2}{2m}\frac{\partial ^2\psi (x,t)}{\partial x^2}+V(x,t)\psi (x,t)$$

This one is also a Schrödinger equation; it is called the **time-dependent Schrödinger equation**.

So what does this equation mean, and why should we know it? Before we look at the Schrödinger equation itself, we need to know what a **matter wave** is. The matter-wave formula is defined as follows:

$$\lambda =\frac{h}{p}=\frac{h}{mv}\qquad \left(h=6.626\times 10^{-34}\ \text{J}\cdot \text{s}\right)$$

The wavelength of a matter wave is given by Planck's constant $h$ divided by the momentum $mv$.

Any object with momentum carries a wave with that wavelength. But no one can perceive matter waves in daily life. This is because the matter-wave wavelength is extremely small. For example, for a 150 g baseball flying at 40 m/s, the matter wave is:

$$\lambda =\frac{6.626\times 10^{-34}\ \text{kg}\cdot \text{m}^2/\text{s}}{(0.15\ \text{kg})\times (40\ \text{m/s})}\approx 1.104\times 10^{-34}\ \text{m}$$

Because the wavelength is so incredibly short, it can't interfere with our bodies or surroundings in any noticeable way, so we simply cannot feel this wave.

But as we move from the macroscopic world into the microscopic world, the situation changes completely. In the world of very small particles, momentum becomes smaller and the matter-wave wavelength becomes much longer. For a typical electron, the matter-wave wavelength is around $0.1$–$0.2\ \text{nm}$, which is comparable to the distance between atoms in a solid. Thanks to this appropriate wavelength, electrons can directly interfere with bonding, reactions, and structural properties inside solids, and as a result they play a key role in determining properties like thermal and electrical conductivity.

So microscopic particles have both the properties of particles with mass *and* the wave properties of an appropriate wavelength. Therefore, to describe such microscopic matter accurately, we need a new equation of motion that includes wave-like behavior, not just classical mechanics. That is exactly what the Schrödinger equation is. Just as $F=ma$ played its role in classical mechanics, the Schrödinger equation plays that role in quantum mechanics.

The most basic form of the Schrödinger equation is:

$$-\frac{\hbar ^2}{2m}\frac{\partial ^2\Psi (x,t)}{\partial x^2}+V(x,t)\Psi (x,t)=i\hbar \frac{\partial \Psi (x,t)}{\partial t}$$

The $h$ with a bar on top is read **hbar** ($\hbar$), and it equals Planck's constant $h$ divided by $2\pi$. Since $h/2\pi$ appears so often, we introduce the new symbol $\hbar$ to keep things concise.

What this equation means is straightforward. Given a time-dependent wave function $\psi(x,t)$ inside a potential field $V(x,t)$, it tells us how that wave function **propagates** over time.

If we look at the left-hand side at a specific time $t_1$, the second derivative of the wave function together with $V(x,t_1)\Psi(x,t_1)$ produces a single result. That result connects with the time derivative on the right-hand side, telling us how the wave function evolves as time passes.

The motion of the wave in this video is also obtained by solving the Schrödinger equation at each time step and plotting the wave's position.

![Wave packet in a well potential](/assets/img/schrodinger_well_wave.gif)

So what about the time-*independent* Schrödinger equation? If the potential $V(x,t)$ does *not* change with time — that is, if it only depends on position, $V(x)$ — then we may assume the wave function $\Psi(x,t)$ takes the separated form:

$$\Psi (x,t)=\psi (x)\,\phi (t)$$

Strictly speaking, this assumption requires $\Psi(x,t)$ to be a **stationary state**, but I'll cover that in the next post.

Why *can* we separate the time and space parts like this? Well, if we actually solve the equation, we end up with separate solutions for $\psi(x)$ and $\phi(t)$ anyway. One important property of linear equations is that any linear combination of already-known solutions is again a new solution. Since the Schrödinger equation is also a linear partial differential equation, a linear combination of its solutions is still a solution.

The process of finding the solution feels a bit hand-wavy, honestly. It's almost like we're guessing the form and then checking that it works. But that's generally how solving linear differential equations goes. You assume a form that's easy to solve, transform the equation, and then build the general solution as a superposition of the individual solutions you found. The method of assuming the function is a product of terms each depending on a single independent variable — like the wave function above — is called **separation of variables**.

Anyway, substituting the separated form $\Psi(x,t)=\psi(x)\phi(t)$ into the time-dependent Schrödinger equation gives:

$$i\hbar \psi (x)\frac{d\phi (t)}{dt}=\left[-\frac{\hbar ^2}{2m}\frac{d^2\psi (x)}{dx^2}+V(x)\psi (x)\right]\phi (t)$$

$$\downarrow \ \div \ \psi (x)\phi (t)$$

$$i\hbar \frac{1}{\phi (t)}\frac{d\phi (t)}{dt}=\frac{1}{\psi (x)}\left[-\frac{\hbar ^2}{2m}\frac{d^2\psi (x)}{dx^2}+V(x)\psi (x)\right]$$

The left side is an equation in $t$, the right side an equation in $x$. Since $x$ and $t$ are independent variables, for this equality to hold for all $x$ and $t$, each side must equal a constant. Let's call that constant $C$. Solving these differential equations for the general solutions gives:

$$i\hbar \frac{1}{\phi (t)}\frac{d\phi (t)}{dt}=C\quad\Rightarrow\quad \phi (t)=e^{-iCt/\hbar}$$

$$\frac{1}{\psi (x)}\left[-\frac{\hbar ^2}{2m}\frac{d^2\psi (x)}{dx^2}+V(x)\psi (x)\right]=E$$

The result is that the time part takes the form $e^{-iEt/\hbar}$, while $\psi(x)$ is determined by the potential $V(x)$.

The time term of a wave is generally written as $e^{-i\omega t}$ (see the Complex Plane post).

![Traveling wave](/assets/img/schrodinger_traveling_wave.gif)

Also, for a wave with energy $E$, the relation between energy and angular frequency is:

$$E=h\nu =\hbar \omega \quad\Rightarrow\quad \omega =\frac{E}{\hbar }$$

So the time-dependent term for an energy-carrying wave can be written as:

$$e^{-i\omega t}=e^{-i\frac{E}{\hbar }t}$$

Does the similarity to the expression we obtained for the time part make sense? That constant $C$ turns out to be essentially the energy $E$ of the wave.

Putting it all together:

$$\phi (t)=e^{-iEt/\hbar }$$

$$\Psi (x,t)=\psi (x)\,\phi (t)=\psi (x)\,e^{-iEt/\hbar }$$

This means that if we have a spatial wave function $\psi(x)$ with definite energy $E$, multiplying it by the time factor $e^{-iEt/\hbar}$ makes the overall wave function rotate in the complex plane as time advances, with the rotation speed depending on the energy.

![Wave function rotating in the complex plane](/assets/img/schrodinger_wavefunction_3d.gif)

That's it for this post. Thank you for reading all the way through.

---

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
