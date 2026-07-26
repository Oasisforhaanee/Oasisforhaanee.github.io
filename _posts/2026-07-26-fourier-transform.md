---
layout: post
title: "Fourier Transform"
date: 2026-07-26
categories: [mathematical-methods, quantum-mechanics]
tags: [Fourier Transform, Orthogonality, Quantum Mechanics]
description: "Derivation of the Fourier transform from orthogonality of complex exponentials."
canonicalURL: "https://blog.naver.com/kkul20235/224358309175"
usemathjax: true
comments: true
permalink: /fourier-transform/
---

## The Transform Pair

$$f(x)=\frac{1}{2\pi}\int_{-\infty}^{\infty}F(k)\,e^{ikx}\,dk$$

$$F(k)=\int_{-\infty}^{\infty}f(x)\,e^{-ikx}\,dx$$

## Orthogonality

The prerequisites are covered here: [Orthogonality](https://oasisforhaanee.github.io/orthogonality/).

For complex exponentials,

$$\langle e^{ik_1x},e^{ik_2x}\rangle
=\int_{-\infty}^{\infty}e^{-ik_1x}e^{ik_2x}\,dx
=\int_{-\infty}^{\infty}e^{i(k_2-k_1)x}\,dx$$

For `k1 != k2` this integral vanishes.

This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.