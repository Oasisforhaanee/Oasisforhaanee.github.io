---
layout: post
title: "Stationary States"
date: 2026-07-21
categories: [quantum-mechanics]
tags: [Stationary State, Schrödinger Equation, Superposition, Wave Function]
description: What a stationary state is — why the time-independent Schrödinger equation holds only for eigenstates of definite energy, and why superpositions of them still satisfy the time-dependent equation.
canonicalURL: "https://blog.naver.com/kkul20235/224353189556"
usemathjax: true
comments: true

---

Reading the post below first will help your understanding:

["The Schrödinger Equation (Time-Independent & Time-Dependent)"](https://oasisforhaanee.github.io/schrodinger-equation/)

Previously we said that a time-dependent wave function can be written as

$$\Psi (x,t)=\psi (x)\phi (t)$$

and that this produces a time part and a space part, each with a specific energy $E$.

**Time part →**

$$\phi (t)=e^{-iEt/\hbar }$$

**Space part →**

$$-\frac{\hbar ^2}{2m}\frac{d^2\psi (x)}{dx^2}+V(x)\psi (x)=E\psi (x)$$

But this equation does not hold for every wave function the way the time-dependent Schrödinger equation does. Let us return to the time-dependent Schrödinger equation.

$$i\hbar \frac{\partial \psi (x,t)}{\partial t}=-\frac{\hbar ^2}{2m}\frac{\partial ^2\psi (x,t)}{\partial x^2}+V(x,t)\psi (x,t)$$

This equation holds for *any* wave function. Just as the Schrödinger equation is the analogue of $F=ma$ for waves, this equation applies to all waves.

In deriving the time-independent Schrödinger equation from it, we made one important assumption:

$$\Psi (x,t)=\psi (x)\phi (t)$$

—the assumption that the wave function separates into a product of a time part and a space part. With this assumption, we obtained the equation for a wave function of definite energy:

$$i\hbar \frac{1}{\phi (t)}\frac{d\phi (t)}{dt}=\frac{1}{\psi (x)}\left[-\frac{\hbar ^2}{2m}\frac{d^2\psi (x)}{dx^2}+V(x)\psi (x)\right]=E$$

$$-\frac{\hbar ^2}{2m}\frac{d^2\psi (x)}{dx^2}+V(x)\psi (x)=E\psi (x)$$

$$\phi (t)=e^{-iEt/\hbar }$$

Consider, then, a wave function $\psi_1$ of energy $E_1$ and a wave function $\psi_2$ of energy $E_2$, with $E_1<E_2$. They are

$$\Psi _1(x,t)=\psi _1(x)\cdot e^{-iE_1t/\hbar }$$

$$\Psi _2(x,t)=\psi _2(x)\cdot e^{-iE_2t/\hbar }$$

For a wave function that is a superposition of these, separation of variables no longer applies:

$$\Psi (x,t)=\psi _1(x)e^{-iE_1t/\hbar }+\psi _2(x)e^{-iE_2t/\hbar }\quad \to \quad \Psi (x,t)\ne \psi (x)\phi (t)$$

In other words, separation of variables works only for wave functions of *definite* energy, and its result—the time-independent Schrödinger equation—holds only for wave functions of definite energy. Such a wave function is said to describe a **stationary state**.

How, then, does the time-dependent Schrödinger equation hold for *all* wave functions? Because it is a *linear* equation. Suppose $\psi_1(x,t)$ and $\psi_2(x,t)$ each satisfy the Schrödinger equation.

$$i\hbar \frac{\partial }{\partial t}\psi _1(x,t)=-\frac{\hbar ^2}{2m}\frac{\partial ^2\psi _1(x,t)}{\partial x^2}+V(x,t)\psi _1(x,t)\quad \text{--- (1)}$$

$$i\hbar \frac{\partial }{\partial t}\psi _2(x,t)=-\frac{\hbar ^2}{2m}\frac{\partial ^2\psi _2(x,t)}{\partial x^2}+V(x,t)\psi _2(x,t)\quad \text{--- (2)}$$

Substituting the superposition $\psi_1(x,t)+\psi_2(x,t)$ into the Schrödinger equation, the left-hand side becomes

$$i\hbar \frac{\partial }{\partial t}\left(\psi _1(x,t)+\psi _2(x,t)\right)=i\hbar \frac{\partial }{\partial t}\psi _1(x,t)+i\hbar \frac{\partial }{\partial t}\psi _2(x,t)$$

and the right-hand side becomes

$$=-\frac{\hbar ^2}{2m}\frac{\partial ^2}{\partial x^2}\left(\psi _1+\psi _2\right)+V(x,t)\left(\psi _1+\psi _2\right)$$

$$=\left(-\frac{\hbar ^2}{2m}\frac{\partial ^2\psi _1}{\partial x^2}+V(x,t)\psi _1\right)+\left(-\frac{\hbar ^2}{2m}\frac{\partial ^2\psi _2}{\partial x^2}+V(x,t)\psi _2\right)$$

So substituting the superposition $\psi(x,t)=\psi_1(x,t)+\psi_2(x,t)$ into the time-dependent Schrödinger equation gives the same result as adding equations (1) and (2); the superposition is therefore itself a solution.

The conclusion is that if a wave function is a superposition of many stationary states of various energies, then—since each stationary state is a solution of the Schrödinger equation—the superposition is also a solution.

To make this concrete, consider the free-electron case, $V(x)=0$. A wave of wave number $k$ has energy

$$E_k=\frac{\hbar ^2k^2}{2m}$$

This means that only a wave of constant wave number—that is, constant wavelength—has a definite energy. A superposition of such waves has an energy that varies with the degree of superposition. (This will be revisited later.)

To summarize:

- The time-independent Schrödinger equation holds only for wave functions of definite energy—that is, stationary states.
- A wave function that is a superposition of stationary states still satisfies the time-dependent Schrödinger equation.
- A superimposed wave function has an energy that varies with the degree of superposition.

Understanding the third point requires the Fourier transform, which is the subject of a later post.

That is it for this post. Thank you for reading.

---

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
