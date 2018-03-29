# Homework 10 Overview
1. I wanted to create a generative sketch that pulled numbers from an array using a for loop. So I decided to use generate 10 lines for each frame of the draw loop, and after declaring x and y values for the beginning secion of the lines as global variable, I wrote the for loop in the draw function.
2. I then called two functions which I defined outside of the draw loop. O.ne function generated the lines, and the second function moved their starting point for the next frame so that they would 'grow' across the screen
3. After calling the draw functions I wrote an if statement to try and bounce the lines off the edge of the canvas.
4. I then set a constraint on the x and y values so that they would stay within the confines of the canvas.
5. 

## Issues

The biggest obstacle I encountered was a merge conflict in github. I asked for help on the github issues board, and despite a few useful suggestions I was not able to resolve it myself. So I went to the lab and spoke to Quinn who managed to solve the problem. I understand in general what causes these merge conflicts, but I didn't really understand the details of what he did to solve it. I will have to put some time in to really understanding git and github.

Another issue was trying to use variables for an rgba value. I couldn't get them to work, and spent some time with Emily in the lab but neither of us could figure it out. My guess is that something in the fact that rgba is a string in p5 is causing my attempts to pass variables to a fill that is causing the problem. When I get a chance I will talk to Stephanie and see if she can clear it up for me.

## Conclusions

I was pleased that I eventually managed to get the if else statements and nested for loops to work, even if it was only a relatively simple sketch. My next homework assignment I would like to try a piece of generative art, as I only have a tenuous understanding of how the examples in the course so far are working.

## Final sketch

[Final Sketch](https://marklannenum.github.io/work-120/hw-8/)
