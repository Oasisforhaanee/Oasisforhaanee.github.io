---
layout: post
title: "The 3D Schrödinger Equation in the Hydrogen Atom"
date: 2026-07-31
categories: [quantum-mechanics]
tags: [Hydrogen Atom, Schrödinger Equation, Spherical Coordinates, Angular Equation, Radial Equation, Legendre Polynomials, Associated Laguerre Polynomials, Quantum Numbers]
description: Applying the 3D Schrödinger equation to the hydrogen atom — solving the angular and radial equations via separation of variables to derive the wave functions and the energy levels that depend only on the principal quantum number n.
canonicalURL: "https://blog.naver.com/kkul20235/224364088350"
usemathjax: true
comments: true

---

Please read the previous post first:

[Converting the Schrödinger Equation from Cartesian to Spherical Coordinates](https://oasisforhaanee.github.io/schrodinger-spherical-coordinates/)

This post examines what happens when the Schrödinger equation is applied to the hydrogen atom.

## The Schrödinger Equation in Spherical Coordinates

The previous post derived the Schrödinger equation in spherical coordinates:

$$-\frac{\hbar ^2}{2m}\left[\frac{1}{r^2}\frac{\partial }{\partial r}\left(r^2\frac{\partial \psi }{\partial r}\right)+\frac{1}{r^2\sin \theta }\frac{\partial }{\partial \theta }\left(\sin \theta \frac{\partial \psi }{\partial \theta }\right)+\frac{1}{r^2\sin ^2\theta }\frac{\partial ^2\psi }{\partial \phi ^2}\right]+V(r,\theta ,\phi )\psi =E\psi$$

For the hydrogen atom, the potential $V$ is

$$V(r,\theta ,\phi )=-\frac{e^2}{4\pi \epsilon _0r}$$

so the equation becomes

$$-\frac{\hbar ^2}{2m}\left[\frac{1}{r^2}\frac{\partial }{\partial r}\left(r^2\frac{\partial \psi }{\partial r}\right)+\frac{1}{r^2\sin \theta }\frac{\partial }{\partial \theta }\left(\sin \theta \frac{\partial \psi }{\partial \theta }\right)+\frac{1}{r^2\sin ^2\theta }\frac{\partial ^2\psi }{\partial \phi ^2}\right]-\frac{e^2}{4\pi \epsilon _0r}\psi =E\psi$$

This is again a stationary-state equation with definite energy $E$, so we may use separation of variables to find the solutions. (See the post on [stationary states](https://oasisforhaanee.github.io/stationary-state/) for a refresher.)

First, separate the wave function into a radial part and an angular part:

$$\psi (r,\theta ,\phi )=R(r)Y(\theta ,\phi )$$

Substituting this into the Schrödinger equation, the partial-derivative terms give

$$\frac{\partial \psi }{\partial r}=Y\frac{dR}{dr}\Rightarrow \frac{1}{r^2}\frac{\partial }{\partial r}\left(r^2\frac{\partial \psi }{\partial r}\right)=Y(\theta ,\phi )\cdot \frac{1}{r^2}\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)$$

$$\frac{\partial \psi }{\partial \theta }=R\frac{\partial Y}{\partial \theta }\Rightarrow \frac{1}{r^2\sin \theta }\frac{\partial }{\partial \theta }\left(\sin \theta \frac{\partial \psi }{\partial \theta }\right)=R(r)\cdot \frac{1}{r^2\sin \theta }\frac{\partial }{\partial \theta }\left(\sin \theta \frac{\partial Y}{\partial \theta }\right)$$

$$\frac{\partial ^2\psi }{\partial \phi ^2}=R\frac{\partial ^2Y}{\partial \phi ^2}\Rightarrow \frac{1}{r^2\sin ^2\theta }\frac{\partial ^2\psi }{\partial \phi ^2}=R(r)\cdot \frac{1}{r^2\sin ^2\theta }\frac{\partial ^2Y}{\partial \phi ^2}$$

$$-\frac{\hbar ^2}{2m}\left[Y\frac{1}{r^2}\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)+R\frac{1}{r^2\sin \theta }\frac{\partial }{\partial \theta }\left(\sin \theta \frac{\partial Y}{\partial \theta }\right)+R\frac{1}{r^2\sin ^2\theta }\frac{\partial ^2Y}{\partial \phi ^2}\right]+V(r)RY=ERY$$

Dividing both sides by $\psi=R(r)\,Y(\theta,\phi)$ and tidying up:

$$-\frac{\hbar ^2}{2m}\left[\frac{1}{R}\cdot \frac{1}{r^2}\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)+\frac{1}{Y}\cdot \frac{1}{r^2\sin \theta }\frac{\partial }{\partial \theta }\left(\sin \theta \frac{\partial Y}{\partial \theta }\right)+\frac{1}{Y}\cdot \frac{1}{r^2\sin ^2\theta }\frac{\partial ^2Y}{\partial \phi ^2}\right]+V(r)=E$$

$$\downarrow \times -\frac{2mr^2}{\hbar ^2}$$

$$\left\{\frac{1}{R}\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)+\frac{2mr^2}{\hbar ^2}[E-V(r)]\right\}+\frac{1}{Y}\left[\frac{1}{\sin \theta }\frac{\partial }{\partial \theta }\left(\sin \theta \frac{\partial Y}{\partial \theta }\right)+\frac{1}{\sin ^2\theta }\frac{\partial ^2Y}{\partial \phi ^2}\right]=0$$

$$\left\{\frac{1}{R}\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)+\frac{2mr^2}{\hbar ^2}[E-V(r)]\right\}=-\frac{1}{Y}\left[\frac{1}{\sin \theta }\frac{\partial }{\partial \theta }\left(\sin \theta \frac{\partial Y}{\partial \theta }\right)+\frac{1}{\sin ^2\theta }\frac{\partial ^2Y}{\partial \phi ^2}\right]$$

The left side is a function of $r$, the right side a function of $\theta$ and $\phi$. Since the two sides are equal and depend on different independent variables, their value must be a constant. Let that constant be $l(l+1)$ (knowing the answer in advance, this choice simplifies the algebra).

There are three equations to solve: the radial equation on the left, and the angular equation on the right (which, being a function of both $\theta$ and $\phi$, we split into separate $\Theta(\theta)$ and $\Phi(\phi)$ equations). Once all are solved, the three solutions

$$R(r), \Theta \left(\theta \right), \Phi \left(\phi \right)$$

multiply together to give the wave function satisfying the three-dimensional Schrödinger equation for the hydrogen atom. (Normalization constants are deferred to the end.)

$$\Psi \left(r, \theta , \phi \right)=R(r)\Theta \left(\theta \right)\Phi \left(\phi \right)$$

This wave function is a stationary state of definite energy. We now solve the equations.

## The Angular Equation

Take the angular terms on the right:

$$\frac{1}{Y}\left[\frac{1}{\sin \theta }\frac{\partial }{\partial \theta }\left(\sin \theta \frac{\partial Y}{\partial \theta }\right)+\frac{1}{\sin ^2\theta }\frac{\partial ^2Y}{\partial \phi ^2}\right]=-l(l+1)$$

$$Y(\theta ,\phi )=\Theta (\theta )\Phi (\phi )$$

Separating variables again, split $Y$ into $\Theta(\theta)\Phi(\phi)$ and substitute:

$$\frac{1}{\Theta (\theta )\Phi (\phi )}\left[\frac{1}{\sin \theta }\frac{d}{d\theta }\left(\sin \theta \frac{d\Theta (\theta )}{d\theta }\right)\Phi (\phi )+\frac{1}{\sin ^2\theta }\Theta (\theta )\frac{d^2\Phi (\phi )}{d\phi ^2}\right]=-l(l+1)$$

$$\frac{1}{\Theta (\theta )}\frac{1}{\sin \theta }\frac{d}{d\theta }\left(\sin \theta \frac{d\Theta (\theta )}{d\theta }\right)+\frac{1}{\Phi (\phi )}\frac{1}{\sin ^2\theta }\frac{d^2\Phi (\phi )}{d\phi ^2}=-l(l+1)$$

$$\downarrow \times \sin ^2\theta$$

$$\frac{\sin \theta }{\Theta (\theta )}\frac{d}{d\theta }\left(\sin \theta \frac{d\Theta (\theta )}{d\theta }\right)+\frac{1}{\Phi (\phi )}\frac{d^2\Phi (\phi )}{d\phi ^2}=-l(l+1)\sin ^2\theta$$

$$\frac{\sin \theta }{\Theta (\theta )}\frac{d}{d\theta }\left(\sin \theta \frac{d\Theta (\theta )}{d\theta }\right)+l(l+1)\sin ^2\theta =-\frac{1}{\Phi (\phi )}\frac{d^2\Phi (\phi )}{d\phi ^2}$$

The left side is a function of $\theta$, the right side a function of $\phi$. Both must equal a constant, which we take to be $-m^2$.

### The Azimuthal Equation

Rearranging the $\phi$ side gives

$$\frac{d^2\Phi }{d\phi ^2}+m^2\Phi =0$$

$$\Phi (\phi )=e^{im\phi }$$

In spherical coordinates $\phi$ is the azimuthal angle, which repeats with period $2\pi$, so $\Phi(\phi)$ must satisfy

$$\Phi (\phi +2\pi )=\Phi (\phi )$$

$$e^{im\phi }=e^{im(\phi +2\pi )}$$

By Euler's identity, $m$ must be an integer:

$$e^{i2\pi m}=1$$

$$m=0,\pm 1,\pm 2,\dots$$

### The Polar Equation

Rearranging the $\theta$ side gives

$$\sin \theta \frac{d}{d\theta }\left(\sin \theta \frac{d\Theta }{d\theta }\right)+\left[l(l+1)\sin ^2\theta -m^2\right]\Theta =0$$

To solve this, substitute $x=\cos \theta$:

$$x=\cos \theta \left(-1\le x\le 1\right)$$

$$\frac{dx}{d\theta }=-\sin \theta$$

$$\frac{d}{d\theta }=\frac{dx}{d\theta }\frac{d}{dx}=-\sin \theta \frac{d}{dx}$$

Using these, the equation becomes an equation in $x$:

$$\sin \theta \frac{d\Theta }{d\theta }=\sin \theta \left(-\sin \theta \frac{d\Theta }{dx}\right)=-\sin ^2\theta \frac{d\Theta }{dx}=-(1-x^2)\frac{d\Theta }{dx}$$

$$\sin \theta \frac{d}{d\theta }\left(\sin \theta \frac{d\Theta }{d\theta }\right)+\left[l(l+1)\sin ^2\theta -m^2\right]\Theta =0$$

$$=$$

$$-(1-x^2)\frac{d}{dx}\left[-(1-x^2)\frac{d\Theta }{dx}\right]+\left[l(l+1)(1-x^2)-m^2\right]\Theta =0$$

Dividing by $(1-x^2)$ and applying the product rule:

$$\frac{d}{dx}\left[(1-x^2)\frac{d\Theta }{dx}\right]+\left[l(l+1)-\frac{m^2}{1-x^2}\right]\Theta =0$$

$$(1-x^2)\frac{d^2\Theta }{dx^2}-2x\frac{d\Theta }{dx}+\left[l(l+1)-\frac{m^2}{1-x^2}\right]\Theta =0$$

This second-order differential equation arises. The solutions depend on $m$; consider first the case $m=0$:

$$(1-x^2)\frac{d^2\Theta }{dx^2}-2x\frac{d\Theta }{dx}+l(l+1)\Theta =0$$

This is the well-known Legendre differential equation, solved by a series. Writing $\Theta(x)$ as a power series,

$$\Theta (x)=\sum _{k=0}^{\infty }a_kx^k$$

its derivatives are

$$\frac{d\Theta }{dx}=\sum _{k=1}^{\infty }ka_kx^{k-1}$$

$$\frac{d^2\Theta }{dx^2}=\sum _{k=2}^{\infty }k(k-1)a_kx^{k-2}$$

Substituting into the equation and equating coefficients of like powers of $x$:

$$\sum _{k=0}^{\infty }\left[(k+2)(k+1)a_{k+2}-k(k-1)a_k-2ka_k+l(l+1)a_k\right]x^k=0$$

$$(k+2)(k+1)a_{k+2}-(l-k)(l+k+1)a_k=0$$

$$a_{k+2}=-\frac{(l-k)(l+k+1)}{(k+1)(k+2)}a_k$$

Since the recurrence relates $a_{k+2}$ to $a_k$, even-indexed and odd-indexed terms are decoupled:

$$\Theta (x)=a_0\left[1-\frac{l(l+1)}{2!}x^2+\frac{(l-2)l(l+1)(l+3)}{4!}x^4-\cdots \right]+a_1\left[x-\frac{(l-1)(l+2)}{3!}x^3+\cdots \right]$$

This polynomial converges within $-1<x<1$ but diverges at $x=\pm 1$ ($\theta=0,\pi$) if infinitely many terms remain. For convergence at $x=\pm 1$, some term must vanish so that the series terminates, which forces $l$ to be an integer. When this holds, $\Theta(x)$ can be written as $P_l(x)$:

$$P_l(x)=\frac{1}{2^ll!}\frac{d^l}{dx^l}(x^2-1)^l$$

For $m\neq 0$, the equation is

$$(1-x^2)\frac{d^2\Theta }{dx^2}-2x\frac{d\Theta }{dx}+\left[l(l+1)-\frac{m^2}{1-x^2}\right]\Theta =0$$

Substituting $\Theta (x)=(1-x^2)^{|m|/2}y(x)$ transforms it into an equation for $y(x)$:

$$(1-x^2)y''-2(|m|+1)xy'+[l(l+1)-|m|(|m|+1)]y=0$$

This is exactly the result of substituting

$$y(x)=\frac{d^{|m|}}{dx^{|m|}}P_l(x)$$

into the Legendre equation. Rearranging for $\Theta(x)$:

$$\Theta \left(x\right)=P_l^m(x)=(-1)^m(1-x^2)^{|m|/2}\frac{d^{|m|}}{dx^{|m|}}P_l(x)$$

Converting back to $\theta$ with $x=\cos\theta$:

$$P_l^m(\cos \theta )=\left[(-1)^m(1-\cos ^2\theta )^{m/2}\frac{d^m}{d(\cos \theta )^m}\right]P_l(\cos \theta )$$

$$P_l(\cos \theta )=\frac{1}{2^ll!}\left(\frac{d}{d(\cos \theta )}\right)^l(\cos ^2\theta -1)^l$$

$$P_l^m(\cos \theta )=\frac{(-1)^m}{2^ll!}(1-\cos ^2\theta )^{m/2}\frac{d^{l+m}}{d(\cos \theta )^{l+m}}(\cos ^2\theta -1)^l$$

Since $l+m$ cannot be negative in the last expression, $m$ is restricted to

$$-l\le m\le l$$

## The Radial Equation

Next, the radial equation in $r$:

$$\left\{\frac{1}{R}\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)+\frac{2mr^2}{\hbar ^2}[E-V(r)]\right\}=l\left(l+1\right)$$

For tidiness, set $R(r)=u(r)/r$:

$$R(r)=\frac{u(r)}{r}$$

$$\frac{dR}{dr}=\frac{u'}{r}-\frac{u}{r^2}\Rightarrow r^2\frac{dR}{dr}=ru'-u$$

$$\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)=ru''+u'-u'=ru''$$

Substituting, the radial equation transforms into

$$-\frac{\hbar ^2}{2m}\frac{d^2u}{dr^2}+\left[V(r)+\frac{\hbar ^2l(l+1)}{2mr^2}\right]u=Eu$$

$$\downarrow$$

$$\frac{d^2u}{dr^2}=\left[-\frac{2mE}{\hbar ^2}-\frac{me^2}{2\pi \epsilon _0\hbar ^2r}+\frac{l(l+1)}{r^2}\right]u$$

Introducing the variables $\kappa$ and $\rho$:

$$\kappa =\frac{\sqrt{-2mE}}{\hbar }\quad \Rightarrow \quad \kappa ^2=-\frac{2mE}{\hbar ^2}, \quad \rho =\kappa r, \quad \rho _0=\frac{me^2}{2\pi \epsilon _0\hbar ^2\kappa }$$

$$\frac{d^2u}{dr^2}=\left[-\frac{2mE}{\hbar ^2}-\frac{me^2}{2\pi \epsilon _0\hbar ^2r}+\frac{l(l+1)}{r^2}\right]u\to \frac{d^2u}{d\rho ^2}=\left[1-\frac{\rho _0}{\rho }+\frac{l(l+1)}{\rho ^2}\right]u$$

As $r\to\infty$, $\rho\to\infty$; as $r\to 0$, $\rho\to 0$. In each limit the equation for $u(\rho)$ approximates as follows.

For $\rho \to \infty$ ($r\to \infty$):

$$\frac{d^2u}{d\rho ^2}\approx u$$

$$u(\rho )\sim e^{-\rho }$$

For $\rho \to 0$ ($r\to 0$):

$$\frac{d^2u}{d\rho ^2}\approx \frac{l(l+1)}{\rho ^2}u$$

$$u(\rho )\sim \rho ^{l+1}$$

A function satisfying these boundary conditions has the form

$$u(\rho )=\rho ^{l+1}e^{-\rho }v(\rho )$$

Substituting into the earlier relation

$$\frac{d^2u}{d\rho ^2}=\left[1-\frac{\rho _0}{\rho }+\frac{l(l+1)}{\rho ^2}\right]u$$

$$\downarrow u(\rho )=\rho ^{l+1}e^{-\rho }v(\rho )$$

$$\rho \frac{d^2v}{d\rho ^2}+2(l+1-\rho )\frac{dv}{d\rho }+[\rho _0-2(l+1)]v=0$$

This is the associated Laguerre differential equation. As with the Legendre equation, its solutions are found by a series method. Writing $v(\rho)$ as a power series and equating coefficients gives the recurrence

$$v(\rho )=\sum _{j=0}^{\infty }c_j\rho ^j$$

$$c_{j+1}=\frac{2(j+l+1)-\rho _0}{(j+1)(j+2l+2)}c_j$$

If the series continued indefinitely, the coefficients would behave like

$$j\to \infty: \quad c_{j+1}\approx \frac{2}{j}c_j$$

so that

$$c_j\approx \frac{2^j}{j!}c_0$$

and

$$v(\rho )\approx \sum _{j=0}^{\infty }\left(\frac{2^j}{j!}c_0\right)\rho ^j=c_0\sum _{j=0}^{\infty }\frac{(2\rho )^j}{j!}$$

Since the Taylor expansion of $e^{2\rho}$ is

$$e^{2\rho }=\sum _{j=0}^{\infty }\frac{(2\rho )^j}{j!}$$

we see $v(\rho)\sim e^{2\rho}$. As $\rho\to\infty$ this diverges, so the series must terminate: $c_{N'+1}=0$ for some $N'$. The recurrence then requires

$$c_{N'+1}=0 \ \Rightarrow\ 2(N'+l+1)-\rho _0=0\Rightarrow \rho _0=2(N'+l+1)$$

Define $N'+l+1=n$; this $n$ is the principal quantum number. Since $N'\ge 0$, the ranges of $n$ and $l$ are

$$n\ge 1$$

$$l\le n-1$$

Since $\rho_0=2n$, expanding for $E$ using the definitions of $\rho_0$ and $\kappa$:

$$\rho _0=\frac{me^2}{2\pi \epsilon _0\hbar ^2\kappa }=2n$$

$$\kappa =\frac{me^2}{2\pi \epsilon _0\hbar ^2\rho _0}=\frac{me^2}{4\pi \epsilon _0\hbar ^2n}$$

$$\kappa ^2=-\frac{2mE}{\hbar ^2}\to E_n=-\frac{me^4}{32\pi ^2\epsilon _0^2\hbar ^2n^2}$$

The energy is inversely proportional to $n^2$—the energy of the wave function depends only on $n$. Substituting the series for $v(\rho)$ back through $u(\rho)$ and $R(r)$, the solution $R(r)$ is

$$R_{nl}(r)=-\sqrt{\left(\frac{2}{na_0}\right)^3\frac{(n-l-1)!}{2n[(n+l)!]^3}}e^{-\rho /2}\rho ^lL_{n-l-1}^{2l+1}(\rho )$$

$$L_p^k(x)=\frac{x^{-k}e^x}{p!}\frac{d^p}{dx^p}\left(e^{-x}x^{p+k}\right)$$

This is admittedly heavy. The essential point is that the solutions of the equation differ according to $n$, $l$, and $m$.

## The Full Wave Function

Multiplying the three solutions together and normalizing, the full wave function is

$$\psi _{nlm}(r,\theta ,\phi )=(-1)^m\sqrt{\left(\frac{2}{na_0}\right)^3\frac{(n-l-1)!}{2n[(n+l)!]^3}\cdot \frac{2l+1}{4\pi }\frac{(l-m)!}{(l+m)!}}e^{-\rho /2}\rho ^lL_{n-l-1}^{2l+1}(\rho )P_l^m(\cos \theta )e^{im\phi }$$

This expression looks complicated only because it is the general form for all $n$, $l$, and $m$. Drawing the wave functions for individual values of $n$, $l$, and $m$ makes their meaning far clearer. The next post visualizes these formulas and shows what roles $n$, $l$, and $m$ each play.

---

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
