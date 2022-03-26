# odin-etch-a-sketch

## Introduction
And here I am again, eager to continue with the Odin course.
The little hand holding this time is almost gone. It's scary, but I'll learn to research what I want to do by myself, so this is scary and exciting at the same time.

## What is it

This time I'm going to make an _etch-a-sketch_, something like the good old MS-Paint (I hope). Want to draw something in big pixels? Just wait a little until I start making magic, or open the paint application that comes with any operating system, your call, heh!

## Live version

### https://hectorvilas.github.io/odin-etch-a-sketch/

# roadmap

Things to do to complete this exercise:
- ✅ color picker
- ✅ a way to clear the toy's screen
- ✅ random colors
- ✅ screen resolution (grid size)
- ✅ eraser tool

~~And some personal things I want to add, but not promised:~~
- ~~❌ `"mousedrag"` must be able to draw too~~
- ~~❌ a filling tool~~
- ~~❌ different brush sizes and shapes~~
- ~~❌ a fake dynamic shadow using the mouse position on the window~~
- ~~❌ replacing the toy's html+css with images for better performance (too much box-shadows)~~
- ~~❌ save/load system~~
- ~~❌ zoom levels for the screen~~
- ~~❌ toggle button to change toy's visibility~~
- ~~❌ frame by frame animation~~
- ~~✅ toggle button for grid visibility~~

_Update:_ I want to make a new project with all that extra stuff, something bigger. It won't be just an etch-a-sketch anymore, so I'm scratching it from the roadmap.


# How it's going

## Update 1
It's working now! Still needs more work, but I managed to make it show a screen with "pixels" that change color to black once clicked. I'm surprised how I managed to do it, I barely had to search for a few DOM methods. Now it's time to make it more interesting.

## update 2
Now it's possible to restart the toy's screen. Screen resolution can also be adjusted.

## update 3
Now the grid visibility can be toggled. It keeps it's setting enabled or disabled after cleaning the screen or changing resolution. This wasn't part of the roadmap, but now it is, with a check mark of complete!

## update 4
After making minor changes to the code, now it's possible to use the _eraser_ tool. The buttons _Pencil_ and _Eraser_ are now functional, and will change it's color to show witch one is the active tool.

## update 5
Color picker now working. You choose the red, green and blue values for your pencil. There's a little preview over those values so you can see the color before using it. Refreshing the page keeps those value active, I'm not sure why, but still want to keep it this way. Happy little accident, I guess.

## update 6
Probably the last update. Random colors are working now. Once you click in the _rainbow_ button, a random color will be selected and shown in the color picker. Every time you click on a pixel, a new color will be randomized.

# Final thoughts
This project has been a lot of fun. I can't believe all the things I accomplished with very few functions and methods. The thought process has been the hardest part, but now I feel like I can do something similar way more faster.

I need to get used to problem solving and pseudocode before starting. It's not the most fun part, but now I get why it's important. I Should plan before getting in action.

Now I'm ready to expand my knowledge. I'll continue with The Odin Project's course, but now I also have a personal project to look foward: a more complex etch-a-sketch.