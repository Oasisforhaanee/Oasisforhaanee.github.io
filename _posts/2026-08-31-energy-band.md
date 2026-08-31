---
layout: post
title: "Energy Band"
date: 2026-08-31
categories: [quantum-mechanics]
tags: [Energy Band, Bloch's Theorem, Born-von Karman Boundary Condition, Periodic Potential, Orbital, Hybridization, Brillouin Zone, Solid State Physics]
description: "Why metals conduct: how 1s, 2s, and 2p orbitals in a periodic potential split into energy bands, how each k point in the 1st Brillouin zone corresponds to a different wave-function basis (bonding or antibonding), how electrons fill the bands and jump to nearby empty states under an electric field, and why similar-energy orbitals hybridize (sp, sp2, sp3) in transition metals."
canonicalURL: "https://blog.naver.com/kkul20235/224396075311"
usemathjax: true
comments: true
permalink: /energy-band/
---

Hello everyone. Hope you're all doing well. School's about to start for me, so I'm half excited and half worried. Will I survive as a returning student... I'm scared. I already piled up a lot of karmic debt in my first and second years that I need to clear, haha... well, what can I do, I just have to work hard. The weather's starting to cool off a bit too. I hope everyone wraps up August well and greets the coming September with energy. Anyway, let's start the post.

## Energy Band Theory

If there's one concept that's most important in solid-state physics, I'd dare say it's the energy band. To understand what properties electrons have in solids, you need to understand the energy band concept, and through that you can explain material properties of solids like electrical conductivity and thermal conductivity. It's unfamiliar and not intuitive to understand, so I struggled a lot with it too, but in this post I'll try to explain it as well as I can.

If you haven't read the posts below, please read them first:

[Wave Function in a Periodic Potential](https://oasisforhaanee.github.io/wave-function-in-periodic-potential/)

[Bloch's Theorem](https://oasisforhaanee.github.io/blochs-theorem/)

[Born – von Karman Boundary Condition](https://oasisforhaanee.github.io/born-von-karman-boundary-condition/)

## Solids

As explained several times, solids are made of periodic arrangements of atoms. There are solids that aren't like that, of course, but the scope we're thinking about is solids with periodicity like elements (Fe, Mg...) or alloys. When you plug a system with this kind of periodic potential into the Schrödinger equation, numerous wave-function bases come out as solutions. And each of those wave functions has a different energy.

Solids also contain a huge number of electrons. Each electron occupies these wave-function bases in order of increasing energy. Let's look into that more later, and first analyze the k–E states sitting in a periodic potential one by one.

### Wave-function bases (1s orbital)

![A single 1s orbital with no interference](/assets/img/orbital-1s-single.png)

A single 1s orbital with no interference.

When a 1s orbital is placed in a periodic potential, wave functions like the ones above interfere with each other and form new wave-function bases. The graph below shows the energy changes of these new wave-function bases:

![The k–E graph obtained by solving the Schrödinger equation in a periodic potential](/assets/img/kE-graph-1s.png)

The graph above is the k–E graph obtained by solving the Schrödinger equation in a periodic potential. When I first learned this, I had no idea what this graph meant. Each point on this graph is one wave-function basis. Just like how the 1s and 2s orbitals act as wave-function bases in hydrogen atomic orbitals. Since the wave function we assumed in the periodic potential post was the 1s orbital, the bases we're analyzing now are wave-function bases obtained by 1s orbitals interfering with each other.

#### 1. k = 0

![The energy at k = 0. It has the lowest value.](/assets/img/k0-energy.png)

The energy at k = 0. It has the lowest value.

![The wave-function basis from 1s orbital interference at k = 0](/assets/img/k0-1s-wavefunction.gif)

This is the wave-function basis at k = 0 in a periodic potential, i.e., the basis wave function with the lowest energy. You can see no phase change at all.

#### 2. k = very small

![The energy at k = π/20a](/assets/img/kpi20a-energy.png)

The energy at k = π/20a.

![The wave-function basis from 1s orbital interference at k = π/20a](/assets/img/kpi20a-1s-wavefunction.gif)

The next graph is the wave-function basis at k = π/20a. Unlike k = 0, there's a little phase change, so when projected onto the real axis there's a slight phase change in the wave function. The energy here is a bit higher than at k = 0.

#### 3. k = π/2a

![The energy at k = π/2a](/assets/img/kpi2a-energy.png)

The energy at k = π/2a.

![The wave-function basis from 1s orbital interference at k = π/2a](/assets/img/kpi2a-1s-wavefunction.gif)

The graph above is the wave-function basis from 1s orbital interference at k = π/2a.

#### 4. k = π/a

![The energy at k = π/a. It has the highest value.](/assets/img/kpi-a-energy.png)

The energy at k = π/a. It has the highest value.

![The wave-function basis from 1s orbital interference at k = π/a](/assets/img/kpi-a-1s-wavefunction.gif)

The wave-function basis at k = π/a. This is the basis state with the highest energy, and it feels like an extension of the antibonding orbital out of the bonding–antibonding orbitals. If you compute the electron probability density of this state, the electron probability density between atoms is small, so the energy is high and it's unstable.

#### 5. k = 2π/a

Beyond k = π/a, something interesting happens. In the periodic potential post, we multiplied the wave function ψ_j at each atom by a phase coefficient a_j = e^{ikja} to express the phase change. Since e^{i·2π} = 1, a_j has a period of 2π/a with respect to k. If you actually plug k = 2π/a into the phase coefficient a_j, you get e^{2πi}, which is a_j = 1, the same value as at k = 0. In other words, the state at k = 2π/a is completely equivalent to the state at k = 0, and the k–E graph has a period of 2π/a.

![The energy at k = 2π/a. It looks exactly the same as k = 0.](/assets/img/k2pi-a-energy.png)

The energy at k = 2π/a. It looks completely identical to k = 0.

![The wave-function basis from 1s orbital interference at k = 2π/a. It looks exactly the same as k = 0.](/assets/img/k2pi-a-1s-wavefunction.gif)

The wave-function basis from 1s orbital interference at k = 2π/a. It looks exactly the same as k = 0.

### 1st Brillouin Zone

Since k has a period of 2π/a, we can reduce the region of the k–E graph above. The reduced region is called the 1st Brillouin Zone, and k can be reduced to the range from −π/a to π/a. Since the k–E graph has a period of 2π/a anyway, from now on we'll explain the k–E graph using only the 1st Brillouin Zone.

![The k–E graph of the 1s orbital's 1st Brillouin Zone](/assets/img/brillouin-zone-1s.png)

This is the most basic 1s energy band shape you learn in solid-state physics. As explained earlier, this energy band is the bases created by the atoms' 1s orbitals interfering with each other. Besides this, there will be bases created by each atom's 2s orbitals interfering with each other, 2p orbitals interfering with each other... and each of those bases will have its own energy. The graph that draws all of this is the energy band. Now let's look at the interference of 2s orbitals rather than 1s orbitals.

### Wave-function bases (2s orbital)

Just like the 1s orbital, the 2s orbital also interferes with each other.

![A single 2s orbital wave function](/assets/img/orbital-2s-single.png)

A single 2s orbital wave function.

As a result, just like the 1s orbital, the energy splits according to the basis, forming an energy band as in the graph below:

![The 2s and 1s energy bands. Blue graph – 2s orbital energy band, black graph – 1s orbital energy band.](/assets/img/energy-band-1s-2s.png)

Blue graph – 2s orbital energy band, black graph – 1s orbital energy band.

Let's look at what the wave-function basis looks like at each k point.

#### 1. k = 0

![The energy at k = 0. It has the lowest energy.](/assets/img/2s-k0-energy.png)

At k = 0 it has the lowest energy.

![The wave-function basis from 2s orbital interference at k = 0](/assets/img/2s-k0-wavefunction.gif)

At k = 0 the probability density between two atoms is high, so the energy is low and it's the most stable state.

#### 2. k = π/2a

![The energy at k = π/2a](/assets/img/2s-kpi2a-energy.png)

The energy at k = π/2a.

![The wave-function basis from 2s orbital interference at k = π/2a](/assets/img/2s-kpi2a-wavefunction.gif)

#### 3. k = π/a

![The energy at k = π/a. You can see the highest point.](/assets/img/2s-kpi-a-energy.png)

The energy at k = π/a. You can see the highest point.

![The wave-function basis from 2s orbital interference at k = π/a](/assets/img/2s-kpi-a-wavefunction.gif)

You can find a node where the wave function is 0 between atoms. In other words, the probability density between atoms is low, and it's an unstable state.

It's almost the same as the 1s orbital case. The only difference is that the 2s orbital's electron wave function extends farther from the atom than the 1s orbital, so it has a higher energy, and accordingly the 2s energy band also has a higher energy than the 1s orbital.

### Wave-function bases (2p orbital)

Now the 2p orbital. We said the 2p orbital looks like a dumbbell aligned along the x, y, z axes. Since we're assuming a 1D crystal, to keep it simple we'll only consider the form where the wave-function symmetry axes are aligned in a row (that is, only σ bonding).

![A single 2p orbital wave function with no interference](/assets/img/orbital-2p-single.png)

A single 2p orbital wave function with no interference.

When 2p orbitals interfere with each other, the following energy band also forms:

![The 2p energy band along with the 2s and 1s bands. Blue graph – 2p orbital energy band, black graph above – 2s orbital energy band, black graph below – 1s orbital energy band.](/assets/img/energy-band-1s-2s-2p.png)

Blue graph – 2p orbital energy band, black graph above – 2s orbital energy band, black graph below – 1s orbital energy band.

But the shape is a bit different from the previous energy bands, right? For 1s and 2s orbitals, the energy minimum is at k = 0 and the highest energy is near k = π/a, but the 2p energy band is the opposite. Let's see why by looking at what the wave-function basis looks like at each k point.

#### 1. k = 0

![The energy at k = 0. It is the highest.](/assets/img/2p-k0-energy.png)

At k = 0 the energy is the highest.

Let's look in more detail at why it's unstable at k = 0, unlike the 1s and 2s orbitals we saw before. Each 2p orbital has the point-symmetric shape seen above. If k = 0, the phase coefficient a_j = 1, so neighboring wave functions have the same phase. But since the 2p orbital is point-symmetric, when we superimpose the same wave functions, destructive interference occurs between atoms, and because of this the energy rises and the state becomes unstable.

![ψ1 and ψ2 have the same phase. Superimposing them, Ψ undergoes destructive interference between the two atoms, taking on an antibonding-orbital character instead.](/assets/img/2p-k0-antibonding.png)

ψ1 and ψ2 have the same phase. The superimposed Ψ undergoes destructive interference between the two atoms, and instead takes on antibonding-orbital character.

Putting this all together, the graph below is the basis at k = 0 in a periodic potential:

![The wave-function basis from 2p orbital interference at k = 0](/assets/img/2p-k0-wavefunction.gif)

There's a node where the wave function is 0 between atoms. So the electron probability density between atoms is low, the energy is high, and it's unstable.

#### 2. k = π/2a

![The energy of the wave-function basis at k = π/2a](/assets/img/2p-kpi2a-energy.png)

The energy of the wave-function basis at k = π/2a.

![The wave-function basis from 2p orbital interference at k = π/2a. The function gets complicated and increasingly bizarre.](/assets/img/2p-kpi2a-wavefunction.gif)

The wave-function basis from 2p orbital interference at k = π/2a. The function is getting complicated and more and more bizarre.

#### 3. k = π/a

![The energy of the wave-function basis at k = π/a](/assets/img/2p-kpi-a-energy.png)

The energy of the wave-function basis at k = π/a.

Unlike the k = 0 case, at k = π/a the phase coefficient a_j = −1, so neighboring wave functions differ in phase by π each. So the point-symmetric 2p orbital undergoes constructive interference between atoms at k = π/a, giving it the lowest energy and the most stable state.

![ψ1 and ψ2 have opposite phases. Superimposing them, Ψ undergoes constructive interference between the two atoms, taking on a bonding-orbital character, the opposite of the k = 0 case.](/assets/img/2p-kpi-a-bonding.png)

ψ1 and ψ2 have opposite phases. The superimposed Ψ undergoes constructive interference between the two atoms, and takes on bonding-orbital character, the opposite of the k = 0 case.

![The wave-function basis from 2p orbital interference at k = π/a](/assets/img/2p-kpi-a-wavefunction.gif)

Constructive interference occurs between atoms, raising the electron probability density between atoms, so the energy is low and it's stable.

## Born – von Karman Boundary Condition

In the periodic potential system we assumed, we assumed a potential stretching endlessly. But there is no system in the world made of an infinite number of atoms. So we assumed the Born – von Karman boundary condition, assuming a system of N potentials. Applying the boundary condition to the k–E graph above, the continuous k–E graph becomes N discrete points. The graph below is the energy band drawn assuming N = 100:

![The energy band assuming N = 100](/assets/img/energy-band-N100.png)

Each band (1s, 2s, 2p) has 100 states.

## Electron State Occupation

So what do we use this energy band for? Its meaning comes from electrons occupying each basis.

In the situation above, let's say there are 100 electrons. Electrons fill up from the low-energy states at the bottom, one by one. And although we didn't cover it, by the Pauli exclusion principle, at most 2 electrons with different spins can occupy one basis. So if there are N electrons, they occupy N/2 bases. That is, in this situation with 100 electrons, they occupy 50 bases. As a result, the occupied state of the energy band looks exactly half-filled for the 1s energy band.

![Occupied bases (blue points) and empty bases (red points)](/assets/img/electron-occupation.png)

Occupied bases (blue points), empty bases (red points).

Surprisingly, electrons here can move very freely. Because the energy difference between an occupied basis and the adjacent empty basis is close to 0, they can easily move to another basis (strictly speaking, "when an electric field is applied, they can easily transition to a nearby empty basis" is more accurate). This is what's commonly called the real nature of "free electrons." Rather than the electron particle flying around freely in space, it's a "free" electron because it can easily transition to nearby empty states.

Materials with this property are called metals. When an external electric field is applied, electrons in a metal easily transition to other empty bases, and accordingly the electron distribution changes, producing the effect of electrons moving and giving high electrical conductivity.

The example above dealt with 100 electrons when N = 100, which is really a crystal of 100 hydrogen atoms. A crystal with 100 atoms arranged has 100 electrons, so each atom has 1 electron. Real hydrogen atoms have a strong tendency to form hydrogen molecules (H₂), so a monatomic hydrogen crystal is unrealistic, but theoretically, if such a hydrogen crystal could be made, hydrogen would also show metallic properties. Similarly, Li with a half-filled 2s orbital, or Na with a half-filled 3s orbital, both have metallic properties.

## Hybridization

At this point you might wonder: "if the 1s orbitals interfere with each other and the 2s orbitals interfere with each other to make bases, why don't we consider a basis where 1s and 2s orbitals interfere?" That's because the energy difference between the two orbitals is large. According to perturbation theory in quantum mechanics, the smaller the energy difference between two different states, the more strongly they affect each other. So even for different orbitals, if the energy difference is large, the interaction barely happens.

However, if different orbitals have similar energy levels and a region where their energies overlap appears, the two orbitals can mix and form a new basis. In the 2p energy band graph above, can you see the region where the 2s and 2p orbital energies get similar? Because their energies are similar, in certain situations the 2s and 2p orbitals mix to create a new orbital — this is hybridization. Depending on how the 2s and 2p orbitals mix, various hybrid orbitals are made: sp hybridization, sp² hybridization, sp³ hybridization, and so on.

As another example, the 3d and 4s orbitals also have very similar energy levels, so hybridization occurs between the two orbitals. Elements with this characteristic show unique properties, and that's exactly what transition metals are. We'll cover transition metals in more depth later (I'm still studying them too, haha).

That's it for the post. Thanks for reading the long post.

This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.
