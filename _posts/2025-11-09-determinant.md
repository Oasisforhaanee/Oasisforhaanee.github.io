---
layout: post
title: "Determinant"
date: 2025-11-09T21:37:00+09:00
categories: [linear-algebra, calculus]
tags: [Determinant, Linear Algebra, Area, Volume]
description: "Geometric interpretation of determinants and how to compute them for 2x2 and 3x3 matrices."
canonicalURL: "https://blog.naver.com/kkul20235/224070231552"
usemathjax: true
comments: true
permalink: /2025-11-09-determinant/
---

The determinant measures how much a matrix expands or contracts space.

## 2x2 Determinant

$$A=\begin{pmatrix}a&b\\ c&d\end{pmatrix},\quad \det(A)=ad-bc$$

## 3x3 Determinant

$$A=\begin{pmatrix}a&b&c\\ d&e&f\\ g&h&i\end{pmatrix}$$

One convenient computation is cofactor expansion:

$$\det(A)=a\begin{vmatrix}e&f\\ h&i\end{vmatrix}
-b\begin{vmatrix}d&f\\ g&i\end{vmatrix}
+c\begin{vmatrix}d&e\\ g&h\end{vmatrix}$$

## Geometric Meaning

`|det(A)|` gives the area/volume scaling factor. If `det(A)=0`, the columns are linearly dependent and the transformation collapses space.

This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.