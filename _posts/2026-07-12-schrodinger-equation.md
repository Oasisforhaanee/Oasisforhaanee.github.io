---
layout: post
title: "The Schrödinger Equation (Time-Independent & Time-Dependent)"
date: 2026-07-12
categories: [quantum-mechanics]
tags: [Schrödinger Equation, Wave Function, Matter Wave]
description: "What the time-independent and time-dependent Schrödinger equations mean, where they come from, and why wave-like matter in the microscopic world needs them."
canonicalURL: "https://blog.naver.com/kkul20235/224343743129"
usemathjax: true
comments: true

---

The Schrödinger equation is the fundamental equation of quantum mechanics. This post explains what it means, where it comes from, and why it is needed.

$$-\frac{\hbar ^2}{2m}\frac{d^2\psi (x)}{dx^2}+V(x)\psi (x)=E\psi (x)$$

This is the **time-independent Schrödinger equation**—probably the form most familiar to anyone who has studied the subject.

$$i\hbar \frac{\partial \psi (x,t)}{\partial t}=-\frac{\hbar ^2}{2m}\frac{\partial ^2\psi (x,t)}{\partial x^2}+V(x,t)\psi (x,t)$$

This is the **time-dependent Schrödinger equation**.

What do these equations mean, and why should we care about them? Before addressing the equation itself, we need to understand the **matter wave**, defined as

$$\lambda =\frac{h}{p}=\frac{h}{mv}\qquad \left(h=6.626\times 10^{-34}\ \text{J}\cdot \text{s}\right)$$

The wavelength of a matter wave is Planck's constant $h$ divided by the momentum $mv$.

Any object with momentum carries a wave of this wavelength. Yet no one perceives matter waves in everyday life, because their wavelength is extraordinarily small. For example, for a 150 g baseball moving at 40 m/s, the matter wave is

$$\lambda =\frac{6.626\times 10^{-34}\ \text{kg}\cdot \text{m}^2/\text{s}}{(0.15\ \text{kg})\times (40\ \text{m/s})}\approx 1.104\times 10^{-34}\ \text{m}$$

Because the wavelength is so incredibly short, it cannot interfere with our bodies or surroundings in any noticeable way, so we simply do not feel this wave.

Moving from the macroscopic to the microscopic world changes the situation entirely. In the world of very small particles, momentum is smaller and the matter-wave wavelength becomes much longer. For a typical electron the matter-wave wavelength is around $0.1$–$0.2\ \text{nm}$, comparable to the distance between atoms in a solid. With this wavelength, electrons can interfere directly with bonding, reactions, and structural properties inside solids, and as a result they play a key role in determining properties such as thermal and electrical conductivity.

Microscopic particles therefore possess both particle-like properties (mass) *and* wave-like properties (an appropriate wavelength). To describe such matter accurately, we need a new equation of motion that includes wave-like behavior, beyond classical mechanics. That is exactly what the Schrödinger equation is. Just as $F=ma$ played its role in classical mechanics, the Schrödinger equation plays that role in quantum mechanics.

The most basic form of the Schrödinger equation is

$$-\frac{\hbar ^2}{2m}\frac{\partial ^2\Psi (x,t)}{\partial x^2}+V(x,t)\Psi (x,t)=i\hbar \frac{\partial \Psi (x,t)}{\partial t}$$

The barred $h$ is read **hbar** ($\hbar$), equal to Planck's constant $h$ divided by $2\pi$. Since $h/2\pi$ appears so often, the new symbol $\hbar$ keeps the notation concise.

What the equation means is straightforward. Given a time-dependent wave function $\psi(x,t)$ inside a potential field $V(x,t)$, it tells us how that wave function **propagates** over time.

At a specific time $t_1$, the second derivative of the wave function together with $V(x,t_1)\Psi(x,t_1)$ produces a single value. That value is linked to the time derivative on the right-hand side, determining how the wave function evolves as time passes.

![Wave packet in a well potential](/assets/img/schrodinger_well_wave.gif)

What about the time-*independent* Schrödinger equation? If the potential $V(x,t)$ does *not* change with time—that is, if it depends only on position, $V(x)$—then we may assume the wave function $\Psi(x,t)$ takes the separated form

$$\Psi (x,t)=\psi (x)\,\phi (t)$$

Strictly speaking, this assumption requires $\Psi(x,t)$ to be a **stationary state**, which is covered in the next post.

Why can we separate the time and space parts in this way? Because when we actually solve the equation, we end up with separate solutions for $\psi(x)$ and $\phi(t)$. One important property of linear equations is that any linear combination of known solutions is again a solution. Since the Schrödinger equation is a linear partial differential equation, a linear combination of its solutions is still a solution.

The process of finding the solution has a slightly hand-wavy feel: one essentially guesses the form and then verifies that it works. But this is generally how linear differential equations are solved—assume a tractable form, transform the equation, and build the general solution as a superposition of the individual solutions found. The technique of assuming the function is a product of terms, each depending on a single independent variable, is called **separation of variables**.

Substituting the separated form $\Psi(x,t)=\psi(x)\phi(t)$ into the time-dependent Schrödinger equation gives

$$i\hbar \psi (x)\frac{d\phi (t)}{dt}=\left[-\frac{\hbar ^2}{2m}\frac{d^2\psi (x)}{dx^2}+V(x)\psi (x)\right]\phi (t)$$

$$\downarrow \ \div \ \psi (x)\phi (t)$$

$$i\hbar \frac{1}{\phi (t)}\frac{d\phi (t)}{dt}=\frac{1}{\psi (x)}\left[-\frac{\hbar ^2}{2m}\frac{d^2\psi (x)}{dx^2}+V(x)\psi (x)\right]$$

The left side is a function of $t$, the right side a function of $x$. Since $x$ and $t$ are independent variables, for the equality to hold for all $x$ and $t$, each side must equal a constant. Denote that constant by $C$. Solving the differential equations for the general solutions gives

$$i\hbar \frac{1}{\phi (t)}\frac{d\phi (t)}{dt}=C\quad\Rightarrow\quad \phi (t)=e^{-iCt/\hbar}$$

$$\frac{1}{\psi (x)}\left[-\frac{\hbar ^2}{2m}\frac{d^2\psi (x)}{dx^2}+V(x)\psi (x)\right]=E$$

The time part takes the form $e^{-iEt/\hbar}$, while $\psi(x)$ is determined by the potential $V(x)$.

The time term of a wave is generally written as $e^{-i\omega t}$ (see the [Complex Plane post](https://oasisforhaanee.github.io/complex-plane/)).

![Traveling wave](/assets/img/schrodinger_traveling_wave.gif)

Also, for a wave of energy $E$, the relation between energy and angular frequency is

$$E=h\nu =\hbar \omega \quad\Rightarrow\quad \omega =\frac{E}{\hbar }$$

So the time-dependent factor for an energy-carrying wave can be written as

$$e^{-i\omega t}=e^{-i\frac{E}{\hbar }t}$$

This matches the expression obtained for the time part above. The constant $C$ turns out to be essentially the energy $E$ of the wave.

Putting it all together:

$$\phi (t)=e^{-iEt/\hbar }$$

$$\Psi (x,t)=\psi (x)\,\phi (t)=\psi (x)\,e^{-iEt/\hbar }$$

This means that if we have a spatial wave function $\psi(x)$ of definite energy $E$, multiplying it by the time factor $e^{-iEt/\hbar}$ makes the overall wave function rotate in the complex plane as time advances, with the rotation speed determined by the energy.

![Wave function rotating in the complex plane](/assets/img/schrodinger_wavefunction_3d.gif)

That is it for this post. Thank you for reading.

---

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
