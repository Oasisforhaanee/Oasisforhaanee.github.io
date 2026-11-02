---
layout: post
title: "Group Velocity"
date: 2026-10-19
categories: [solid-state-physics]
tags: ["Group Velocity", "Phase Velocity", "Waves"]
description: "Deriving phase and group velocities from plane waves and their superposition, with an animation of beats."
canonicalURL: "https://blog.naver.com/kkul20235/224447121386"
usemathjax: true
comments: true
---

I wrote this post while studying solid-state physics and wondering what group velocity means in a crystal. The plane-wave discussion in my [complex-plane post](https://oasisforhaanee.github.io/complex-plane/) should help you follow along.

## Definition of group velocity

Group velocity is defined by:

$$
v_g=\left(\frac{dw}{dk}\right)
$$

What does this mean? Here, $w$ denotes angular frequency and $k$ denotes wavevector. Angular frequency belongs to the time-dependent term, whereas wavevector belongs to the spatial term.

## Plane waves

A plane wave propagates as follows:

$$
e^{i\left(kx-wt\right)}
$$

The spatial exponential describes the wave at $t=0$, while the time-dependent exponential describes how the wave oscillates at the fixed position $x=0$. Combining the two terms describes propagation through space over time.

## Phase velocity

Let's rewrite the plane wave as:

$$
e^{ik\left(x-\frac{w}{k}t\right)}
$$

We want the speed at which a point of fixed phase moves. To calculate it, hold the phase constant:

$$
k\left(x-\frac{w}{k}t\right)=const
$$

$$
x=\frac{w}{k}t+\text{constant}
$$

Velocity is $dx/dt$. We have just found the position $x$ that preserves a fixed phase, so differentiating that position with respect to time gives:

$$
v_p=\frac{dx}{dt}=\frac{w}{k}
$$

This is the **phase velocity**: the speed of a point of fixed phase. Think of following a particular crest as a wave ripples along.

## Group velocity

Now, unlike the phase-velocity calculation, let's superpose two waves. Adding two cosine waves with slightly different wavevectors and angular frequencies lets us use a trigonometric identity to express the result as a product:

$$
\cos (k_1x-w_1t)+\cos (k_2x-w_2t)=2\cos \left(\left(\frac{k_1-k_2}{2}\right)x-\left(\frac{w_1-w_2}{2}\right)t\right)\cos \left(\left(\frac{k_1+k_2}{2}\right)x-\left(\frac{w_1+w_2}{2}\right)t\right)
$$

$$
=2\cos \left(\frac{\Delta k\cdot x-\Delta w\cdot t}{2}\right)\cos (k_{avg}x-w_{avg}t)
$$

The second factor is the rapidly oscillating **carrier wave**. The first factor is the **envelope**, which wraps around the overall oscillation amplitude. In the animation below, you can see little bundles(?) moving along. Their outline is the envelope, and their speed is the group velocity. This amplitude-modulation effect is also called **beating**.

<video controls autoplay loop muted playsinline style="max-width:100%;" src="/assets/img/group-velocity-beats.mp4">Your browser does not support embedded video.</video>

To maintain a fixed phase of the envelope, the expression inside its cosine must be constant:

$$
\left(\frac{\Delta k\cdot x-\Delta w\cdot t}{2}\right)=const
$$

$$
x=\left(\frac{\Delta w}{\Delta k}\right)t+\text{constant}
$$

Taking the limit as the wavevector difference tends to zero and calculating $dx/dt$ again gives:

$$
v_g=\frac{dw}{dk}
$$

Group velocity is defined through the superposition of two or more waves. An electron's motion in a crystal can likewise be described using superposed wave components and Bloch states. Since probability density is related to wavefunction amplitude, the speed of these bundles—the group velocity of an electron wavepacket—is what we interpret as the electron's actual transport velocity.

That's all for this post. Thank you for reading!

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
