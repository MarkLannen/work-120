# Mark Lannen HW-6 Recap

## Overview
I found this the most challenging project to date. The main issue for me was that with no particular form to work on drawing, I found it hard to know where to begin. I eventually decided to just start creating some shapes and animations at random and then start using the math functions to manipulate them and actively develop the piece as I went on. I struggled particularly with the map and % requirements of the assignment.

## Process
1. I first created 2 sets of ellipses, declared variables for all their attributes, including color. I then did the same thing for a smaller group of ellipses and 2 groups of rectangles. Lastly, I divided the canvas in quarters and filled each quarter with one set of shapes.
2. I then set random animations to distribute ellipses of various sizes, shapes and colors around the screen using as many of the math operators and functions as possible.
3. I added a single column of triangles to move up and down the open center of the sketch and used modulo to keep it within the bounds of the canvas.
4. Lastly, I used the map function to increase and decrease the size of the elements based on how near or far they were from the centre of the canvas.
5. The map function turned out to be the most complicated part of the sketch and I had to consult with Stephanie and Dr. Musick to finally get it to work.  Below is the code:

`
bub1.x1 = random(0, (width * 0.5) - 50);
bub1.y1 = random(0, (height * 0.5) - 50);
bub1.w = map(bub1.x1, 0, width/2, 50, 7);
bub1.h = map(bub1.y1, 0, width/1.8, 35, 1);`


## issues
The biggest issue I encountered, apart from making effective use of the more complicated math functions, was that I used some p5 functions in my global variables (declared before draw and setup) and could not understand why they weren't working. I took the issue to Quinn in the lab and he pointed out that draw or setup needed to be declared before the computer knew that it was p5 code. This meant that if those p5 functions were declared outside of draw or setup that the computer would not 'know' to look in the p5_lib folder, which is where it would get the code to make the p5 functions work.

I posted what I had learned on the github issues board. I'm hoping that I explained it correctly.  :)

[Live sketch link](https://marklannenum.github.io/work-120/hw-6/)

## Below is a capture of the sketch after it has been running for several minutes.

!(Capture.JPG)
