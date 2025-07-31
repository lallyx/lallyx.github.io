+++
authors = ["Lallyx"]
title = "Progress before the logs"
description = "Everything accomplished, discovered, tried and failed so far, before publishing this devlog."
date = 2025-07-30
[taxonomies]
tags = ["Summary"]

[extra]

toc = true
toc_inline = true
toc_ordered = true
+++

# Tooling

Let's start from the tooling and resources chosen for the project.

The following is intended to give a sense of what I've selected and used so far.
Future entries will detail additional tools and discoveries.

Maybe at some point I can compile a comprehensive list, but for the time being this is pretty much everything I'm using.


## Game engine
Godot4 - open source, touted to be easy and configurable and perfect for 2D games.

No unity bloat, no hidden fees.

I dabbled a bit with Pico8 as well, but I want to end up having something more polished and commercially viable by the end of this, so it seemed the next best step up without going down a bigger rabbit hole.

I will get back to Pico8 at some point as I really enjoyed working with it and the retro feel that comes with it.


## AI Assistant (just for the code)
our trusted advisor will be chatGPT, with a splash of Claude if we can't come to an agreement. 

I will use these boys mostly for prototyping and code validation, so that I know I'm on the right path and to get inspired on how to build functionalities that I don't have the knowledge to understand yet.

## Graphics
I picked up a few free packages from itch.io. I really wanted to do it all myself to begin with, but that would have prevented any real progress for too long.

I plan to upgrade the resources taken and modify them as a I go, to give them my personal touch and to learn from how they were originally created. Also, most free resources don't come with all angles and perspectives, so I've already done quite a few modifications.

## Pixel-art making
I bit the bullet and bought Aseprite.

I wanted to be cheap (not that it's that expensive anyway), but I figured that if I want to do this properly I should invest a bit in it.

I've used to edit quite a few sprites already and it's straightforward enough.

I haven't used any advanced features beyond layers to check animation timelines, but I'm planning to explore some pluging to see where those can take my lack of knowledge.

## Tutorials
I'm following [this channel](https://www.youtube.com/watch?v=QPeycNt29tY&list=PLfcCiyd_V9GH8M9xd_QKlyU8jryGcy3Xa&ab_channel=MichaelGames) which I find extremely informative, direct to the point and well laid out.

The programming patterns used are very viable for production-ready code (at least when compared to my web deb experience) and the methods used are easily transferable to any game mechanic I want to implement.

So far - I just got to the inventory building - I can see how his approach can be transfered to any other game.
Props to you, Michael!

# Yeah, but what have you actually built so far?

## Player

My first hero character - a dragon, lizard, crocodile friend.
He can:
- move
- aim in the direction he's facing (and look at the mouse, I have the function ready)
- perform a 'shouting' attack in front of him
- deal damage
- take damage
- animate in all faced directions
- idle like a boss

All powered by an extendable state machine.

<figure>

![Front animation](/devlog-resources/recordings/drero-front.gif)
<figcaption>Front animation, with front view created from 0</figcaption>
</figure>
<figure>

![Side animation](/devlog-resources/recordings/drero-side.gif)
<figcaption>Taken from free resources and tweaked</figcaption>
</figure>
<figure>

![Attack animation](/devlog-resources/recordings/attack-animation.gif)
<figcaption>Attack 'shout' animation, on all sides</figcaption>
</figure>

## Enemies
My first enemy character - a derpy snail
He can:
- Move randomly, with its own state machine
- Hurt when collided with
- Animate in all directions
- Look at you from behind 

<figure>

![Snails roaming around](/devlog-resources/recordings/roaming-snails.gif)
<figcaption>Roam, my fiends</figcaption>
</figure>

## Scene transitions and a map to explore

A few level scenes staged with a free tileset I plan to adopt throughout most of the game.

it's quite comprehensive and includes a lot of fitting assets that would be easy to further tweak.
Bonus points because I **love the palette**.

I've also implemented the scene transition logic, which can pretty much be reused throughout the whole game moving forward.


<figure>

![Show me the way](/devlog-resources/recordings/exploration.gif)
<figcaption>Show me the way, my friend</figcaption>
</figure>

## Load / Save
Very basic, json file with scene location and health amount.

Can be easily expanded and doesn't require much maintenance.

Not even comparable to a full backend implementation or needing a DB to query.

<figure>

![Load / Save](/devlog-resources/recordings/saving.gif)
<figcaption>Where was I?</figcaption>
</figure>

## Overworld concept
I'm really pleased with this one, as it was "vibe coded" with chatGPT and the results are really solid.

I've got a reusable logic that only requires to manually position the locations, select which directions are allowed and draw the path to follow.

Everything else is handled automatically, the animations swap based on the turn angle and it's basically endlessly extendable.

Once I know how to plug it and what do with it I'll add events to unlock/show new locations and then different markers for each of them.

Really, really happy about this one.
<figure>

![Overworld](/devlog-resources/recordings/overworld.gif)
<figcaption>Where was I?</figcaption>
</figure>

Yeah, I know it's a different tileset.

I wanted to quickly prototype something that would still look good, so I bought it for like 2$ or something and went with it.