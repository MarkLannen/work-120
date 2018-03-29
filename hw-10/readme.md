# Homework 10 Overview
1. I wanted to create a generative sketch that pulled numbers from an array using a for loop. So I decided to use generate 10 lines for each frame of the draw loop, and after declaring x and y values for the beginning secion of the lines as global variable, I wrote the for loop in the draw function.
2. I then called two functions which I defined outside of the draw loop. O.ne function generated the lines, and the second function moved their starting point for the next frame so that they would 'grow' across the screen
3. After calling the draw functions I wrote an if statement to try and bounce the lines off the edge of the canvas.
4. I then set a constraint on the x and y values so that they would stay within the confines of the canvas.
5. Lastly, I defined the two functions outside of the draw function. I randomized both the colors of the lines and the x1 and y1 values.

## Issues

I had another issue with a github merge conflict that Quinn helped me with several times. We 'might' have gotten the problem solved, but I may need to take it to Dr. Musick for final resolution.

The biggest frustration I had was trying to get the lines to bounce off the edge of the screens with my if statement. As far as I can tell it should work, but all that it does is start a new series of lines from the top of the window after they reach the bottom of the window. I put the issue on the github issues board, and did get one helpful response, but that did not entirely solve my problem. I did not receive any other suggestions from the class or instructors, and in spite of my best efforts to find a solution online I was unable to get the sketch to behave exactly as I wanted.


## Conclusions

I was pleased that I eventually managed to get the if else statements and nested for loops to work, even if it was only a relatively simple sketch. My next homework assignment I would like to try a piece of generative art, as I only have a tenuous understanding of how the examples in the course so far are working.

## Final sketch

[Final Sketch](https://marklannenum.github.io/work-120/hw-8/)
