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

## Energy Band Theory

If there is a single most important concept in solid-state physics, it is the energy band. Understanding the energy band is necessary to understand the properties of electrons in solids, and through it one can explain material properties such as electrical and thermal conductivity. It is unintuitive and often confusing, but this post attempts to explain it as clearly as possible.

If you have not read the following posts, please do so first:

[Wave Function in a Periodic Potential](https://oasisforhaanee.github.io/wave-function-in-periodic-potential/)

[Bloch's Theorem](https://oasisforhaanee.github.io/blochs-theorem/)

[Born – von Karman Boundary Condition](https://oasisforhaanee.github.io/born-von-karman-boundary-condition/)

## Solids

Solids are periodic arrangements of atoms. (There are solids without periodicity, but the scope here is periodic solids such as elements and alloys.) Substituting a system with such a periodic potential into the Schrödinger equation yields numerous wave-function bases as solutions, each with a different energy.

Solids also contain a huge number of electrons, which occupy these wave-function bases in order of increasing energy. Let us analyze the $k$–$E$ states in a periodic potential one by one.

### Wave-function bases (1s orbital)

![A single 1s orbital with no interference](/assets/img/orbital-1s-single.png)

A single 1s orbital with no interference.

When 1s orbitals are placed in a periodic potential, the wave functions interfere and form new bases. The graph below shows the energies of these new bases:

![The k–E graph obtained by solving the Schrödinger equation in a periodic potential](/assets/img/kE-graph-1s.png)

Each point on this graph is one wave-function basis, just as the 1s and 2s orbitals are bases in the hydrogen atom. Since the wave function assumed in the periodic-potential post was the 1s orbital, the bases here are the wave-function bases formed by 1s orbitals interfering with one another.

#### 1. k = 0

![The energy at k = 0. It has the lowest value.](/assets/img/k0-energy.png)

The energy at $k=0$ has the lowest value.

![The wave-function basis from 1s orbital interference at k = 0](/assets/img/k0-1s-wavefunction.gif)

This is the basis at $k=0$—the lowest-energy basis wave function. There is no phase change at all.

#### 2. k = very small

![The energy at k = π/20a](/assets/img/kpi20a-energy.png)

The energy at $k=\pi/20a$.

![The wave-function basis from 1s orbital interference at k = π/20a](/assets/img/kpi20a-1s-wavefunction.gif)

Unlike $k=0$, there is a slight phase change, so when projected onto the real axis the wave function changes slightly in phase. The energy is a bit higher than at $k=0$.

#### 3. k = π/2a

![The energy at k = π/2a](/assets/img/kpi2a-energy.png)

The energy at $k=\pi/2a$.

![The wave-function basis from 1s orbital interference at k = π/2a](/assets/img/kpi2a-1s-wavefunction.gif)

The basis wave function from 1s orbital interference at $k=\pi/2a$.

#### 4. k = π/a

![The energy at k = π/a. It has the highest value.](/assets/img/kpi-a-energy.png)

The energy at $k=\pi/a$ has the highest value.

![The wave-function basis from 1s orbital interference at k = π/a](/assets/img/kpi-a-1s-wavefunction.gif)

The basis at $k=\pi/a$—the highest-energy state—is an extension of the antibonding orbital from the bonding–antibonding picture. Its electron probability density between atoms is small, so it is high-energy and unstable.

#### 5. k = 2π/a

Beyond $k=\pi/a$ something interesting happens. In the periodic-potential post, each wave function $\psi_j$ was multiplied by a phase coefficient $a_j=e^{ikja}$. Since $e^{i\cdot 2\pi}=1$, $a_j$ has period $2\pi/a$ in $k$. Plugging $k=2\pi/a$ into $a_j$ gives $e^{2\pi i}=1$, the same value as at $k=0$. The state at $k=2\pi/a$ is therefore equivalent to that at $k=0$, and the $k$–$E$ graph has period $2\pi/a$.

![The energy at k = 2π/a. It looks exactly the same as k = 0.](/assets/img/k2pi-a-energy.png)

The energy at $k=2\pi/a$ looks identical to $k=0$.

![The wave-function basis from 1s orbital interference at k = 2π/a. It looks exactly the same as k = 0.](/assets/img/k2pi-a-1s-wavefunction.gif)

The wave-function basis at $k=2\pi/a$ looks identical to $k=0$.

### 1st Brillouin Zone

Since $k$ has period $2\pi/a$, the region of the $k$–$E$ graph can be reduced. The reduced region is the **1st Brillouin Zone**, spanning $-\pi/a$ to $\pi/a$. From now on we describe the $k$–$E$ graph using only this zone.

![The k–E graph of the 1s orbital's 1st Brillouin Zone](/assets/img/brillouin-zone-1s.png)

This is the most basic 1s energy band shape in solid-state physics. This energy band is the bases formed by 1s orbitals interfering with each other. In addition, there will be bases formed by 2s orbitals interfering, by 2p orbitals interfering, and so on, each with its own energy. The graph that draws all of these is the energy band. Now consider 2s orbitals.

### Wave-function bases (2s orbital)

Just as with 1s, 2s orbitals also interfere with each other.

![A single 2s orbital wave function](/assets/img/orbital-2s-single.png)

A single 2s orbital wave function.

As with 1s, the energy splits according to the basis, forming an energy band:

![The 2s and 1s energy bands. Blue graph – 2s orbital energy band, black graph – 1s orbital energy band.](/assets/img/energy-band-1s-2s.png)

Blue graph – 2s orbital energy band, black graph – 1s orbital energy band.

#### 1. k = 0

![The energy at k = 0. It has the lowest energy.](/assets/img/2s-k0-energy.png)

At $k=0$ the energy is lowest.

![The wave-function basis from 2s orbital interference at k = 0](/assets/img/2s-k0-wavefunction.gif)

At $k=0$ the probability density between atoms is high, so the energy is low and the state is most stable.

#### 2. k = π/2a

![The energy at k = π/2a](/assets/img/2s-kpi2a-energy.png)

The energy at $k=\pi/2a$.

![The wave-function basis from 2s orbital interference at k = π/2a](/assets/img/2s-kpi2a-wavefunction.gif)

#### 3. k = π/a

![The energy at k = π/a. You can see the highest point.](/assets/img/2s-kpi-a-energy.png)

The energy at $k=\pi/a$.

![The wave-function basis from 2s orbital interference at k = π/a](/assets/img/2s-kpi-a-wavefunction.gif)

There is a node (zero of the wave function) between atoms. The probability density between atoms is low, and the state is unstable.

This is nearly the same as the 1s case. The difference is that the 2s orbital's wave function extends farther from the atom than the 1s, so it has higher energy, and accordingly the 2s band lies higher than the 1s band.

### Wave-function bases (2p orbital)

Now the 2p orbital. The 2p orbital is dumbbell-shaped, aligned along the $x$, $y$, or $z$ axis. Since we assume a 1D crystal, we consider only the case where the symmetry axes align in a row (σ bonding only).

![A single 2p orbital wave function with no interference](/assets/img/orbital-2p-single.png)

A single 2p orbital wave function with no interference.

When 2p orbitals interfere, the following energy band forms:

![The 2p energy band along with the 2s and 1s bands. Blue graph – 2p orbital energy band, black graph above – 2s orbital energy band, black graph below – 1s orbital energy band.](/assets/img/energy-band-1s-2s-2p.png)

Blue graph – 2p orbital energy band, black graph above – 2s orbital energy band, black graph below – 1s orbital energy band.

The shape differs from the previous bands. For 1s and 2s, the energy minimum is at $k=0$ and the maximum near $k=\pi/a$, but the 2p band is inverted. Let us see why.

#### 1. k = 0

![The energy at k = 0. It is the highest.](/assets/img/2p-k0-energy.png)

At $k=0$ the energy is highest.

Each 2p orbital has point-symmetric shape. At $k=0$ the phase coefficient $a_j=1$, so neighboring wave functions have the same phase. But because the 2p orbital is point-symmetric, superimposing identical wave functions produces destructive interference between atoms, raising the energy and making the state unstable.

![ψ1 and ψ2 have the same phase. Superimposing them, Ψ undergoes destructive interference between the two atoms, taking on an antibonding-orbital character instead.](/assets/img/2p-k0-antibonding.png)

$\psi_1$ and $\psi_2$ have the same phase; their superposition undergoes destructive interference between the atoms, taking on antibonding character.

![The wave-function basis from 2p orbital interference at k = 0](/assets/img/2p-k0-wavefunction.gif)

There is a node between atoms; the electron probability density there is low, the energy high, and the state unstable.

#### 2. k = π/2a

![The energy of the wave-function basis at k = π/2a](/assets/img/2p-kpi2a-energy.png)

The energy at $k=\pi/2a$.

![The wave-function basis from 2p orbital interference at k = π/2a. The function gets complicated and increasingly bizarre.](/assets/img/2p-kpi2a-wavefunction.gif)

The wave-function basis at $k=\pi/2a$; the function grows increasingly complicated.

#### 3. k = π/a

![The energy of the wave-function basis at k = π/a](/assets/img/2p-kpi-a-energy.png)

The energy at $k=\pi/a$.

Unlike $k=0$, at $k=\pi/a$ the phase coefficient $a_j=-1$, so neighboring wave functions differ by $\pi$ in phase. The point-symmetric 2p orbitals therefore interfere constructively between atoms, giving the lowest energy and most stable state.

![ψ1 and ψ2 have opposite phases. Superimposing them, Ψ undergoes constructive interference between the two atoms, taking on a bonding-orbital character, the opposite of the k = 0 case.](/assets/img/2p-kpi-a-bonding.png)

$\psi_1$ and $\psi_2$ have opposite phases; the superposition undergoes constructive interference between the atoms, taking on bonding character.

![The wave-function basis from 2p orbital interference at k = π/a](/assets/img/2p-kpi-a-wavefunction.gif)

Constructive interference raises the electron probability density between atoms, so the energy is low and the state stable.

## Born – von Karman Boundary Condition

The periodic-potential system above assumed a potential stretching endlessly, but no real system has infinitely many atoms. The Born–von Karman boundary condition assumes a system of $N$ potentials. Applying it to the $k$–$E$ graph turns the continuous curve into $N$ discrete points. The graph below assumes $N=100$:

![The energy band assuming N = 100](/assets/img/energy-band-N100.png)

Each band (1s, 2s, 2p) has 100 states.

## Electron State Occupation

So what is the energy band used for? Its meaning comes from electrons occupying each basis.

Suppose there are 100 electrons. Electrons fill the low-energy states first, one by one. By the Pauli exclusion principle, at most two electrons (with opposite spins) can occupy a single basis. Thus $N$ electrons occupy $N/2$ bases. With 100 electrons, they occupy 50 bases, so the 1s band is exactly half-filled.

![Occupied bases (blue points) and empty bases (red points)](/assets/img/electron-occupation.png)

Occupied bases (blue points), empty bases (red points).

Surprisingly, these electrons can move very freely. Because the energy difference between an occupied basis and the adjacent empty basis is close to zero, electrons can easily move to another basis (more precisely, when an electric field is applied, they can easily transition to a nearby empty basis). This is the real nature of "free electrons": it is not that the electron particle flies freely through space, but that it can easily transition to nearby empty states.

Materials with this property are called metals. Under an external electric field, electrons in a metal easily transition to other empty bases, changing the electron distribution and producing high electrical conductivity.

The example above had 100 electrons with $N=100$—a crystal of 100 hydrogen atoms, with one electron per atom. Real hydrogen atoms strongly prefer to form H₂ molecules, so a monatomic hydrogen crystal is unrealistic, but theoretically such a crystal would be metallic. Similarly, Li (half-filled 2s) and Na (half-filled 3s) are metals.

## Hybridization

One might ask: if 1s orbitals interfere with each other and 2s orbitals interfere with each other, why not consider a basis where 1s and 2s interfere? Because the energy difference between them is large. In quantum-mechanical perturbation theory, the smaller the energy difference between two states, the more strongly they interact. For different orbitals with a large energy gap, the interaction is negligible.

If, however, different orbitals have similar energy and their energy regions overlap, they can mix to form a new basis. In the 2p band graph above, note the region where the 2s and 2p orbital energies become similar. Because their energies are close, in certain situations the 2s and 2p orbitals mix to create a new orbital—**hybridization**. Depending on how they mix, various hybrid orbitals form: sp, sp², sp³, and so on.

As another example, the 3d and 4s orbitals also have very similar energy, so hybridization occurs between them. Elements with this property show unique behavior—these are the transition metals. (Transition metals will be covered in more depth later.)

---

*This post reflects my own understanding, so there may be errors. Questions are always welcome, so feel free to ask.*
