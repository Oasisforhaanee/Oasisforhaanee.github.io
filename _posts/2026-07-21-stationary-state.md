---
layout: post
title: "Stationary States"
date: 2026-07-21
categories: [quantum-mechanics, physics]
tags: [Stationary State, Schrödinger Equation, Superposition, Wave Function]
description: What a stationary state is — why the time-independent Schrödinger equation holds only for eigenstates of definite energy, and why superpositions of them still satisfy the time-dependent equation.
canonicalURL: "https://blog.naver.com/kkul20235/224353189556"
usemathjax: true
comments: true
---

Reading the post below first will help your understanding:
["The Schrödinger Equation (Time-Independent & Time-Dependent)"](https://oasisforhaanee.github.io/schrodinger-equation/).

We previously said that a wave function that changes with time can be expressed as the following:

$$\Psi (x,t)=\psi (x)\phi (t)$$

And we explained that this produces a time part and a space part each with a specific energy $E$.

**Time part →**

$$\phi (t)=e^{-iEt/\hbar }$$

**Space part →**

$$-\frac{\hbar ^2}{2m}\frac{d^2\psi (x)}{dx^2}+V(x)\psi (x)=E\psi (x)$$

But this equation doesn't hold for every wave function the way the time-dependent Schrödinger equation does. Let's go back to the time-dependent Schrödinger equation.

$$i\hbar \frac{\partial \psi (x,t)}{\partial t}=-\frac{\hbar ^2}{2m}\frac{\partial ^2\psi (x,t)}{\partial x^2}+V(x,t)\psi (x,t)$$

This is the time-dependent Schrödinger equation, and it holds for *any* wave function. Just as we said the Schrödinger equation is like $F=ma$, the equation of motion applied to waves, this equation holds for all waves.

And when we derived the time-independent Schrödinger equation from this equation, we made one important assumption.

Namely,

$$\Psi (x,t)=\psi (x)\phi (t)$$

— the assumption that the wave function can be split into a time part and a space part multiplied together. And when we assumed this, we got the equation for a wave function with a specific energy:

$$i\hbar \frac{1}{\phi (t)}\frac{d\phi (t)}{dt}=\frac{1}{\psi (x)}\left[-\frac{\hbar ^2}{2m}\frac{d^2\psi (x)}{dx^2}+V(x)\psi (x)\right]=E$$

$$-\frac{\hbar ^2}{2m}\frac{d^2\psi (x)}{dx^2}+V(x)\psi (x)=E\psi (x)$$

$$\phi (t)=e^{-iEt/\hbar }$$

So for example, what if we have a wave function $\psi_1$ with energy $E_1$ and a wave function $\psi_2$ with energy $E_2$? With $E_1<E_2$, the wave functions would be:

$$\Psi _1(x,t)=\psi _1(x)\cdot e^{-iE_1t/\hbar }$$

$$\Psi _2(x,t)=\psi _2(x)\cdot e^{-iE_2t/\hbar }$$

For a wave function that is a superposition of these, we can no longer use separation of variables.

$$\Psi (x,t)=\psi _1(x)e^{-iE_1t/\hbar }+\psi _2(x)e^{-iE_2t/\hbar }\quad \to \quad \Psi (x,t)\ne \psi (x)\phi (t)$$

In other words, separation of variables works only for wave functions with a *specific* energy, and its result — the time-independent Schrödinger equation — holds only for wave functions with a specific energy. We call this wave function with a specific energy a wave function in a **stationary state**.

So how is it that the time-dependent Schrödinger equation holds for *all* wave functions? It's because the time-dependent Schrödinger equation is a *linear* equation. Let's suppose $\psi_1(x,t)$ and $\psi_2(x,t)$ each satisfy the Schrödinger equation.

$$i\hbar \frac{\partial }{\partial t}\psi _1(x,t)=-\frac{\hbar ^2}{2m}\frac{\partial ^2\psi _1(x,t)}{\partial x^2}+V(x,t)\psi _1(x,t)\quad \text{--- (1)}$$

$$i\hbar \frac{\partial }{\partial t}\psi _2(x,t)=-\frac{\hbar ^2}{2m}\frac{\partial ^2\psi _2(x,t)}{\partial x^2}+V(x,t)\psi _2(x,t)\quad \text{--- (2)}$$

Substituting the superposition state $\psi_1(x,t)+\psi_2(x,t)$ into the Schrödinger equation, the left-hand side becomes:

$$i\hbar \frac{\partial }{\partial t}\left(\psi _1(x,t)+\psi _2(x,t)\right)=i\hbar \frac{\partial }{\partial t}\psi _1(x,t)+i\hbar \frac{\partial }{\partial t}\psi _2(x,t)$$

The right-hand side becomes:

$$=-\frac{\hbar ^2}{2m}\frac{\partial ^2}{\partial x^2}\left(\psi _1+\psi _2\right)+V(x,t)\left(\psi _1+\psi _2\right)$$

$$=\left(-\frac{\hbar ^2}{2m}\frac{\partial ^2\psi _1}{\partial x^2}+V(x,t)\psi _1\right)+\left(-\frac{\hbar ^2}{2m}\frac{\partial ^2\psi _2}{\partial x^2}+V(x,t)\psi _2\right)$$

So plugging the superimposed $\psi(x,t)=\psi_1(x,t)+\psi_2(x,t)$ into the time-dependent Schrödinger equation gives the same result as adding equations (1) and (2), so it holds just the same.

What this means is that if there's a wave function that is a superposition of many stationary states of various energies, since each individual stationary state is a solution of the Schrödinger equation, the superimposed wave function is also a solution of the Schrödinger equation.

This explanation got a bit ambiguous, so let me give an example with the free-electron case, $V(x)=0$. A wave with wave number $k$ has the following energy:

$$E_k=\frac{\hbar ^2k^2}{2m}$$

This means only a wave with a constant wave number — that is, a constant wavelength — has a specific energy. A wave function that is a superposition of them has an energy that varies depending on the degree of superposition. I'll cover this content more later, so I'll stop here.

To summarize:

- The time-independent Schrödinger equation holds only for wave functions with a specific energy — that is, stationary states.
- A wave function that is a superposition of stationary states also satisfies the time-dependent Schrödinger equation.
- A superimposed wave function has an energy that varies with the degree of superposition.

To understand what point 3 means, you need to learn about the Fourier transform.

That's it for this post. Thank you for reading all the way through.

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
