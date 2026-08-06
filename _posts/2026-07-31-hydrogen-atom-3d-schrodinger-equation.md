---
layout: post
title: "The 3D Schrödinger Equation in the Hydrogen Atom"
date: 2026-07-31
categories: [quantum-mechanics, physics]
tags: [Hydrogen Atom, Schrödinger Equation, Spherical Coordinates, Angular Equation, Radial Equation, Legendre Polynomials, Associated Laguerre Polynomials, Quantum Numbers]
description: Applying the 3D Schrödinger equation to the hydrogen atom — solving the angular and radial equations via separation of variables to derive the wave functions and the energy levels that depend only on the principal quantum number n.
canonicalURL: "https://blog.naver.com/kkul20235/224364088350"
usemathjax: true
comments: true

---

Please read the previous post first before reading this one:

[Converting the Schrödinger Equation from Cartesian to Spherical Coordinates](https://oasisforhaanee.github.io/schrodinger-spherical-coordinates/)

In this post we'll look at what happens when we apply the Schrödinger equation to the hydrogen atom.

## The Schrödinger Equation in Spherical Coordinates

In the previous post we dealt with the equation that transforms the Schrödinger equation from Cartesian coordinates to spherical coordinates. Below is the Schrödinger equation expressed using spherical coordinates:

$$-\frac{\hbar ^2}{2m}\left[\frac{1}{r^2}\frac{\partial }{\partial r}\left(r^2\frac{\partial \psi }{\partial r}\right)+\frac{1}{r^2\sin \theta }\frac{\partial }{\partial \theta }\left(\sin \theta \frac{\partial \psi }{\partial \theta }\right)+\frac{1}{r^2\sin ^2\theta }\frac{\partial ^2\psi }{\partial \phi ^2}\right]+V(r,\theta ,\phi )\psi =E\psi$$

Since we're dealing with the hydrogen atom, the potential $V$ is as follows:

$$V(r,\theta ,\phi )=-\frac{e^2}{4\pi \epsilon _0r}$$

$$-\frac{\hbar ^2}{2m}\left[\frac{1}{r^2}\frac{\partial }{\partial r}\left(r^2\frac{\partial \psi }{\partial r}\right)+\frac{1}{r^2\sin \theta }\frac{\partial }{\partial \theta }\left(\sin \theta \frac{\partial \psi }{\partial \theta }\right)+\frac{1}{r^2\sin ^2\theta }\frac{\partial ^2\psi }{\partial \phi ^2}\right]-\frac{e^2}{4\pi \epsilon _0r}\psi =E\psi$$

We can see that this Schrödinger equation is also expressed as a stationary state with a specific energy. If it's a stationary state with a specific energy, we can find the solutions of the wave function using separation of variables. (See my post on [stationary states](https://oasisforhaanee.github.io/stationary-state/) if you need a refresher.)

First, let's separate the wave function into an $r$-dependent part and an angular part:

$$\psi (r,\theta ,\phi )=R(r)Y(\theta ,\phi )$$

Substituting this into the Schrödinger equation above, the partial derivative terms give us the following:

$$\frac{\partial \psi }{\partial r}=Y\frac{dR}{dr}\Rightarrow \frac{1}{r^2}\frac{\partial }{\partial r}\left(r^2\frac{\partial \psi }{\partial r}\right)=Y(\theta ,\phi )\cdot \frac{1}{r^2}\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)$$

$$\frac{\partial \psi }{\partial \theta }=R\frac{\partial Y}{\partial \theta }\Rightarrow \frac{1}{r^2\sin \theta }\frac{\partial }{\partial \theta }\left(\sin \theta \frac{\partial \psi }{\partial \theta }\right)=R(r)\cdot \frac{1}{r^2\sin \theta }\frac{\partial }{\partial \theta }\left(\sin \theta \frac{\partial Y}{\partial \theta }\right)$$

$$\frac{\partial ^2\psi }{\partial \phi ^2}=R\frac{\partial ^2Y}{\partial \phi ^2}\Rightarrow \frac{1}{r^2\sin ^2\theta }\frac{\partial ^2\psi }{\partial \phi ^2}=R(r)\cdot \frac{1}{r^2\sin ^2\theta }\frac{\partial ^2Y}{\partial \phi ^2}$$

$$-\frac{\hbar ^2}{2m}\left[Y\frac{1}{r^2}\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)+R\frac{1}{r^2\sin \theta }\frac{\partial }{\partial \theta }\left(\sin \theta \frac{\partial Y}{\partial \theta }\right)+R\frac{1}{r^2\sin ^2\theta }\frac{\partial ^2Y}{\partial \phi ^2}\right]+V(r)RY=ERY$$

Now let's divide both sides of this equation by $\psi$, i.e. by $R(r)\cdot Y(\theta,\phi)$, and tidy things up:

$$-\frac{\hbar ^2}{2m}\left[\frac{1}{R}\cdot \frac{1}{r^2}\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)+\frac{1}{Y}\cdot \frac{1}{r^2\sin \theta }\frac{\partial }{\partial \theta }\left(\sin \theta \frac{\partial Y}{\partial \theta }\right)+\frac{1}{Y}\cdot \frac{1}{r^2\sin ^2\theta }\frac{\partial ^2Y}{\partial \phi ^2}\right]+V(r)=E$$

$$\downarrow \times -\frac{2mr^2}{\hbar ^2}$$

$$\left\{\frac{1}{R}\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)+\frac{2mr^2}{\hbar ^2}[E-V(r)]\right\}+\frac{1}{Y}\left[\frac{1}{\sin \theta }\frac{\partial }{\partial \theta }\left(\sin \theta \frac{\partial Y}{\partial \theta }\right)+\frac{1}{\sin ^2\theta }\frac{\partial ^2Y}{\partial \phi ^2}\right]=0$$

$$\left\{\frac{1}{R}\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)+\frac{2mr^2}{\hbar ^2}[E-V(r)]\right\}=-\frac{1}{Y}\left[\frac{1}{\sin \theta }\frac{\partial }{\partial \theta }\left(\sin \theta \frac{\partial Y}{\partial \theta }\right)+\frac{1}{\sin ^2\theta }\frac{\partial ^2Y}{\partial \phi ^2}\right]$$

The left side is an expression in $r$, and the right side is an expression in $\theta$ and $\phi$. Since the two sides are equal, and they're made of different independent variables, their value must be a constant. Let's assume that constant is $l(l+1)$ (honestly, since we already know the answer, assuming this makes the calculation simpler).

Before diving into solving the equations, there are three equations we need to solve: one equation on the left side, the $r$-dependent term, and two equations on the right side, the $\theta,\phi$ terms. The right-side equation is written in terms of a single $Y$, but since $Y$ is a function of $\theta$ and $\phi$, we'll split it into the product of two equations for $\Theta(\theta)$ and $\Phi(\phi)$ and solve them. Once all of these equations are solved and we have the three solutions:

$$R(r), \Theta \left(\theta \right), \Phi \left(\phi \right)$$

multiplying them all together gives the wave function that satisfies the 3D Schrödinger equation in the hydrogen atom. (I'll omit the normalization constants for now and add them at the very end.)

$$\Psi \left(r, \theta , \phi \right)=R(r)\Theta \left(\theta \right)\Phi \left(\phi \right)$$

This wave function is a stationary state with a specific energy. Now let's solve the equations.

## The Angular Equation

Let's solve only the angular terms on the right side first:

$$\frac{1}{Y}\left[\frac{1}{\sin \theta }\frac{\partial }{\partial \theta }\left(\sin \theta \frac{\partial Y}{\partial \theta }\right)+\frac{1}{\sin ^2\theta }\frac{\partial ^2Y}{\partial \phi ^2}\right]=-l(l+1)$$

$$Y(\theta ,\phi )=\Theta (\theta )\Phi (\phi )$$

Using separation of variables again, we split $Y$ into $\Theta(\theta)\Phi(\phi)$ and substitute:

$$\frac{1}{\Theta (\theta )\Phi (\phi )}\left[\frac{1}{\sin \theta }\frac{d}{d\theta }\left(\sin \theta \frac{d\Theta (\theta )}{d\theta }\right)\Phi (\phi )+\frac{1}{\sin ^2\theta }\Theta (\theta )\frac{d^2\Phi (\phi )}{d\phi ^2}\right]=-l(l+1)$$

$$\frac{1}{\Theta (\theta )}\frac{1}{\sin \theta }\frac{d}{d\theta }\left(\sin \theta \frac{d\Theta (\theta )}{d\theta }\right)+\frac{1}{\Phi (\phi )}\frac{1}{\sin ^2\theta }\frac{d^2\Phi (\phi )}{d\phi ^2}=-l(l+1)$$

$$\downarrow \times \sin ^2\theta$$

$$\frac{\sin \theta }{\Theta (\theta )}\frac{d}{d\theta }\left(\sin \theta \frac{d\Theta (\theta )}{d\theta }\right)+\frac{1}{\Phi (\phi )}\frac{d^2\Phi (\phi )}{d\phi ^2}=-l(l+1)\sin ^2\theta$$

$$\frac{\sin \theta }{\Theta (\theta )}\frac{d}{d\theta }\left(\sin \theta \frac{d\Theta (\theta )}{d\Theta }\right)+l(l+1)\sin ^2\theta =-\frac{1}{\Phi (\phi )}\frac{d^2\Phi (\phi )}{d\phi ^2}$$

The left side is an expression in $\theta$ and the right side is an expression in $\phi$, and they're equal. Again, this means they must both equal a constant. Let's assume this constant is $-m^2$.

### The Azimuthal Equation

Rearranging the right side of the angular equation gives the following. Finding the general solution of this equation is very easy:

$$\frac{d^2\Phi }{d\phi ^2}+m^2\Phi =0$$

$$\Phi (\phi )=e^{im\phi }$$

But in spherical coordinates, $\phi$ denotes the azimuthal angle. The azimuthal angle repeats with a period of $2\pi$, so the expression for $\Phi(\phi)$ must satisfy the following condition:

$$\Phi (\phi +2\pi )=\Phi (\phi )$$

$$e^{im\phi }=e^{im(\phi +2\pi )}$$

By Euler's identity, $m$ must be an integer:

$$e^{i2\pi m}=1$$

$$m=0,\pm 1,\pm 2,\dots$$

### The Polar Equation

Rearranging the left side of the angular equation gives the following:

$$\sin \theta \frac{d}{d\theta }\left(\sin \theta \frac{d\Theta }{d\theta }\right)+\left[l(l+1)\sin ^2\theta -m^2\right]\Theta =0$$

To find the solutions of this equation, we substitute $x=\cos \theta$ and find the relation with $\theta$:

$$x=\cos \theta \left(-1\le x\le 1\right)$$

$$\frac{dx}{d\theta }=-\sin \theta$$

$$\frac{d}{d\theta }=\frac{dx}{d\theta }\frac{d}{dx}=-\sin \theta \frac{d}{dx}$$

Using these relations, we can convert the equation into an equation in $x$:

$$\sin \theta \frac{d\Theta }{d\theta }=\sin \theta \left(-\sin \theta \frac{d\Theta }{dx}\right)=-\sin ^2\theta \frac{d\Theta }{dx}=-(1-x^2)\frac{d\Theta }{dx}$$

$$\downarrow$$

$$\sin \theta \frac{d}{d\theta }\left(\sin \theta \frac{d\Theta }{d\theta }\right)+\left[l(l+1)\sin ^2\theta -m^2\right]\Theta =0$$

$$=$$

$$-(1-x^2)\frac{d}{dx}\left[-(1-x^2)\frac{d\Theta }{dx}\right]+\left[l(l+1)(1-x^2)-m^2\right]\Theta =0$$

After dividing both sides by $(1-x^2)$ and applying the product rule for $x$, we get:

$$\frac{d}{dx}\left[(1-x^2)\frac{d\Theta }{dx}\right]+\left[l(l+1)-\frac{m^2}{1-x^2}\right]\Theta =0$$

$$(1-x^2)\frac{d^2\Theta }{dx^2}-2x\frac{d\Theta }{dx}+\left[l(l+1)-\frac{m^2}{1-x^2}\right]\Theta =0$$

This second-order differential equation comes out. The solutions differ depending on the value of $m$; let's only look at the case $m=0$. For $m=0$, the equation is:

$$(1-x^2)\frac{d^2\Theta }{dx^2}-2x\frac{d\Theta }{dx}+l(l+1)\Theta =0$$

This equation is in the form of the well-known Legendre differential equation, and its solutions are found in series form. First, we express $\Theta(x)$ as a series:

$$\Theta (x)=\sum _{k=0}^{\infty }a_kx^k$$

The corresponding derivative and second derivative of $\Theta(x)$ are:

$$\Theta (x)=\sum _{k=0}^{\infty }a_kx^k$$

$$\frac{d\Theta }{dx}=\sum _{k=1}^{\infty }ka_kx^{k-1}$$

$$\frac{d^2\Theta }{dx^2}=\sum _{k=2}^{\infty }k(k-1)a_kx^{k-2}$$

Substituting these into the equation and comparing the coefficients of like terms gives the following result:

$$\sum _{k=0}^{\infty }\left[(k+2)(k+1)a_{k+2}-k(k-1)a_k-2ka_k+l(l+1)a_k\right]x^k=0$$

$$(k+2)(k+1)a_{k+2}-(l-k)(l+k+1)a_k=0$$

$$a_{k+2}=-\frac{(l-k)(l+k+1)}{(k+1)(k+2)}a_k$$

Since there's a recurrence relation between $a_{k+2}$ and $a_k$, the odd terms are only related to the odd terms, and the even terms are only related to the even terms:

$$\Theta (x)=a_0\left[1-\frac{l(l+1)}{2!}x^2+\frac{(l-2)l(l+1)(l+3)}{4!}x^4-\cdots \right]+a_1\left[x-\frac{(l-1)(l+2)}{3!}x^3+\cdots \right]$$

The polynomial above always converges within $-1<x<1$, but diverges at $x=1$ and $x=-1$ ($\theta=0, \pi$) if there are infinitely many terms. For convergence at $x=-1$ and $x=1$, some term must become zero so that the series is cut off into a finite polynomial, which gives us the result that $l$ must be an integer value. When the convergence condition is satisfied, $\Theta(x)$ can be written like $P_l(x)$:

$$P_l(x)=\frac{1}{2^ll!}\frac{d^l}{dx^l}(x^2-1)^l$$

So far we've looked at the case $m=0$; now let's look at the case where $m$ is nonzero. For $m\neq 0$, the equation is:

$$(1-x^2)\frac{d^2\Theta }{dx^2}-2x\frac{d\Theta }{dx}+\left[l(l+1)-\frac{m^2}{1-x^2}\right]\Theta =0$$

Substituting $\Theta(x)$ with an expression in $m$ and $y(x)$ and rearranging, we can transform it into an equation in $y(x)$:

$$\Theta (x)=(1-x^2)^{|m|/2}y(x)$$

$$(1-x^2)y''-2(|m|+1)xy'+[l(l+1)-|m|(|m|+1)]y=0$$

This equation:

$$(1-x^2)P_l''(x)-2xP_l'(x)+l(l+1)P_l(x)=0$$

is exactly the result of substituting:

$$y(x)=\frac{d^{|m|}}{dx^{|m|}}P_l(x)$$

into the $P_l(x)$ position. Rearranging $\Theta(x)$:

$$\Theta \left(x\right)=P_l^m(x)=(-1)^m(1-x^2)^{|m|/2}\frac{d^{|m|}}{dx^{|m|}}P_l(x)$$

Expressed this way, and finally converting back to $\theta$ using $x=\cos\theta$, the $P_l^m$ terms are arranged as follows depending on $m$ and $l$:

$$P_l^m(\cos \theta )=\left[(-1)^m(1-\cos ^2\theta )^{m/2}\frac{d^m}{d(\cos \theta )^m}\right]P_l(\cos \theta )$$

$$P_l(\cos \theta )=\frac{1}{2^ll!}\left(\frac{d}{d(\cos \theta )}\right)^l(\cos ^2\theta -1)^l$$

$$P_l^m(\cos \theta )=\frac{(-1)^m}{2^ll!}(1-\cos ^2\theta )^{m/2}\frac{d^{l+m}}{d(\cos \theta )^{l+m}}(\cos ^2\theta -1)^l$$

Since $l+m$ cannot be negative in the last expression, $m$ exists only within the range:

$$-l\le m\le l$$

## The Radial Equation

Next, let's find the solution of the radial equation in $r$. It's the equation we brought over from above:

$$\left\{\frac{1}{R}\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)+\frac{2mr^2}{\hbar ^2}[E-V(r)]\right\}=l\left(l+1\right)$$

For tidiness, let's assume $R(r)=u(r)/r$:

$$R(r)=\frac{u(r)}{r}$$

$$\frac{dR}{dr}=\frac{u'}{r}-\frac{u}{r^2}\Rightarrow r^2\frac{dR}{dr}=ru'-u$$

$$\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)=ru''+u'-u'=ru''$$

Substituting this in, the radial equation is transformed as follows:

$$-\frac{\hbar ^2}{2m}\frac{d^2u}{dr^2}+\left[V(r)+\frac{\hbar ^2l(l+1)}{2mr^2}\right]u=Eu$$

$$\downarrow$$

$$\frac{d^2u}{dr^2}=\left[-\frac{2mE}{\hbar ^2}-\frac{me^2}{2\pi \epsilon _0\hbar ^2r}+\frac{l(l+1)}{r^2}\right]u$$

Let's expand the equation using the $E$-dependent variables $\kappa$ and $\rho$:

$$\kappa =\frac{\sqrt{-2mE}}{\hbar }\quad \Rightarrow \quad \kappa ^2=-\frac{2mE}{\hbar ^2} \rho =\kappa r \rho _0=\frac{me^2}{2\pi \epsilon _0\hbar ^2\kappa }$$

$$\frac{d^2u}{dr^2}=\left[-\frac{2mE}{\hbar ^2}-\frac{me^2}{2\pi \epsilon _0\hbar ^2r}+\frac{l(l+1)}{r^2}\right]u\to \frac{d^2u}{d\rho ^2}=\left[1-\frac{\rho _0}{\rho }+\frac{l(l+1)}{\rho ^2}\right]u$$

In the equation above, when $r$ diverges to infinity, $\rho$ diverges to infinity, and when $r$ converges to 0, $\rho$ converges to 0. In each case, the expression for $u(\rho)$ is approximated as follows:

$$\rho \to \infty (r\to \infty )$$

$$\frac{d^2u}{d\rho ^2}\approx u$$

$$u(\rho )\sim e^{-\rho }$$

$$\rho \to 0(r\to 0)$$

$$\frac{d^2u}{d\rho ^2}\approx \frac{l(l+1)}{\rho ^2}u$$

$$u(\rho )\sim \rho ^{l+1}$$

The $u(\rho)$ satisfying these boundary conditions can be written as follows:

$$u(\rho )=\rho ^{l+1}e^{-\rho }v(\rho )$$

Substituting this into the relation we found earlier:

$$\frac{d^2u}{d\rho ^2}=\left[1-\frac{\rho _0}{\rho }+\frac{l(l+1)}{\rho ^2}\right]u$$

$$\downarrow u(\rho )=\rho ^{l+1}e^{-\rho }v(\rho )$$

$$\rho \frac{d^2v}{d\rho ^2}+2(l+1-\rho )\frac{dv}{d\rho }+[\rho _0-2(l+1)]v=0$$

A differential equation similar in form to the Legendre differential equation came out. This form of differential equation is the associated Laguerre differential equation, and just like the Legendre differential equation, its solutions can be found with a series method. After expressing $v(\rho)$ in series form, substituting it into the equation above and comparing coefficients, we get the following recurrence relation:

$$v(\rho )=\sum _{j=0}^{\infty }c_j\rho ^j$$

$$c_{j+1}=\frac{2(j+l+1)-\rho _0}{(j+1)(j+2l+2)}c_j$$

However, if the series continues infinitely, the value of $c_j$ converges to:

$$j\to \infty$$

$$c_{j+1}\approx \frac{2}{j}c_j$$

and the series for $v(\rho)$ can be rearranged as:

$$c_{j+1}\approx \frac{2}{j}c_j$$

$$c_1\approx \frac{2}{1}c_0$$

$$c_2\approx \frac{2}{2}c_1\approx \frac{2}{2}\cdot \left(\frac{2}{1}c_0\right)=\frac{2^2}{2\cdot 1}c_0$$

$$c_3\approx \frac{2}{3}c_2\approx \frac{2}{3}\cdot \left(\frac{2^2}{2!}c_0\right)=\frac{2^3}{3\cdot 2\cdot 1}c_0$$

$$.$$

$$.$$

$$.$$

$$c_j\approx \frac{2^j}{j!}c_0$$

$$v(\rho )=\sum _{j=0}^{\infty }c_j\rho ^j$$

$$v(\rho )\approx \sum _{j=0}^{\infty }\left(\frac{2^j}{j!}c_0\right)\rho ^j=c_0\sum _{j=0}^{\infty }\frac{(2\rho )^j}{j!}$$

Here, the Taylor expansion of $e^{2\rho}$ is:

$$e^{2\rho }=\sum _{j=0}^{\infty }\frac{(2\rho )^j}{j!}$$

so $v(\rho)$ is approximately $e^{2\rho}$:

$$v(\rho )\sim e^{2\rho }$$

As $\rho \to \infty$, the solution of the radial equation has the problem of diverging. To prevent this, $c_j$ must become 0 at some point so that the series is finite. The condition for $c_{N'}$ to be nonzero up to $c_{N'}$ and then $c_{N'+1}=0$ is given by the earlier relation as:

$$c_{j+1}=\frac{2(j+l+1)-\rho _0}{(j+1)(j+2l+2)}c_j$$

$$c_{N'+1}=0$$

$$2(N'+l+1)-\rho _0=0\Rightarrow \rho _0=2(N'+l+1)$$

Here we define $N'+l+1=n$. This $n$ is the principal quantum number. Since $N'$ is a number meaning the $N'$-th term, it's always greater than or equal to 0, so the ranges of $n$ and $l$ are defined as:

$$N'+l+1=n\ge 1$$

$$l\le n-1$$

Since $2(N'+l+1)=\rho_0$, we get $\rho_0=2n$. Bringing back the concepts of $\rho_0$ and $\rho$ defined earlier and expanding for $E$:

$$\rho _0=\frac{me^2}{2\pi \epsilon _0\hbar ^2\kappa }=2n$$

$$\kappa =\frac{me^2}{2\pi \epsilon _0\hbar ^2\rho _0}=\frac{me^2}{4\pi \epsilon _0\hbar ^2n}$$

$$\kappa ^2=-\frac{2mE}{\hbar ^2}\to E_n=-\frac{me^4}{32\pi ^2\epsilon _0^2\hbar ^2n^2}$$

We can see that the energy is inversely proportional to the square of $n$. In other words, this proves that the energy of the wave function depends only on $n$. Next, substituting the series expression for $v(\rho)$ from earlier into the equation for $u(\rho)$, and then rearranging that expression for $u(\rho)$ back into an expression for $R(r)$, the solution $R(r)$ is:

$$R_{nl}(r)=-\sqrt{\left(\frac{2}{na_0}\right)^3\frac{(n-l-1)!}{2n[(n+l)!]^3}}e^{-\rho /2}\rho ^lL_{n-l-1}^{2l+1}(\rho )$$

$$L_p^k(x)=\frac{x^{-k}e^x}{p!}\frac{d^p}{dx^p}\left(e^{-x}x^{p+k}\right)$$

No joke, right? Just think of it as "oh, the solution of that equation is expressed like that, and the solutions of the equation differ depending on $n$, $l$, and $m$."

## The Full Wave Function

Now, multiplying these three solutions together and normalizing, the full wave function has the following form:

$$\psi _{nlm}(r,\theta ,\phi )=(-1)^m\sqrt{\left(\frac{2}{na_0}\right)^3\frac{(n-l-1)!}{2n[(n+l)!]^3}\cdot \frac{2l+1}{4\pi }\frac{(l-m)!}{(l+m)!}}e^{-\rho /2}\rho ^lL_{n-l-1}^{2l+1}(\rho )P_l^m(\cos \theta )e^{im\phi }$$

The content is quite complicated. But this equation looks complicated because it's a generalized form for all values of $n$, $l$, and $m$. If you draw the wave functions one by one for different values of $n$, $l$, and $m$, it'll be much easier to understand what the equation above means. In the next post, we'll visualize the formulas we found here and intuitively see what roles $n$, $l$, and $m$ each play. Thanks for reading this long post.

---

This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.
