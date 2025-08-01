+++
authors = ["Lallyx"]
title = "Inventory"
description = "Somewhere to store items, collect them and use them. Not too shabby, but in need of proper architecture"
date = 2025-08-01
[taxonomies]
tags = ["Devlog"]

[extra]

+++

# Inventory

We've now got an inventory that allows for 2 types of items:
- Usable
- Collectable

Each item is setup as a resource in Godot with its related template, so that for any new ones I need to create I just need to reuse the template.

The template supports 2 types of interactions:
- Use: press in the inventory and call a function to be executed
- Collect: used upon collection, without getting stored in the inventory itself.

To end up in the inventory, items (pickups) just need to enter in the player's collision box.

There are currently infinite inventory slots and infinite stacks as I first want to figure out what kind of items and how many do I want to put in the game.

The save system has been updated to transform the inventory resources into a structured JSON array that can be stored in a file and that can be loaded back in.

I banged my head on the wall for a few hours because when loading the game from the save file the button slots references got missed.
Who knew that emptying an array and using .clear() would have different results? :/ 
Also, the more I look at this, the more this architecture is just poor.

Can I be bothered to redo it, not even knowing what my game will look like? 
Nope.

The UI will need to be refined, as it's just a grid for the time being (still looking fresh though!)

When clicking around I found out that when adding buttons inside a grid you need to specify the minimum size, otherwise the icons get all funky.

The big disappointment in this development came from chatGPT, who insisted to use the remove() method for array slots, which doesn't exist anymore in Godot4.
I felt stupid for a while, before it went off "thinking" and came back apologising.

Gaslit by an AI, that must be something new.

<figure>

![Inventory](/devlog-resources/recordings/inventory.gif)
<figcaption>Show me what you got</figcaption>
</figure>