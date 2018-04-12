## Overview
I built this week's assignment partly off of last week's. I again created several lines that moved around the screen independently of each other and changed color with each refresh of the browser window.

## Steps
1. Because of the complexity of working with classes and objects, I built up the sketch step by step and did not move on to the next step until I was sure the current step was working. I fixed any errors and bugs before moving on.
2. I created the class for 'Lines' and added variables for the beginning and ending coordinates and a variable for color. I then wrote the methods that would:
    a. Create each line.
    b. Move the beginning coordinates of the next line to the ending coordinates of the previous line so as to make it look as if the lines were growing by sections.
    c. Check to see if the line had gone off the edge and then move it back in to the window.
    d. Created a constrain method to keep the line from moving off the edge. Still not entirely sure why I have to do both c. and d., but it only works if I include both functions.
3. Called all the methods in the draw function.
4. Built an array using a variable.
5. Created a for loop to add objects in to the array in the setup function.
6. Created a for loop in the draw function that added the parameters I put in the 'Lines' class in to all the methods.

## Issues

The code sort of 'worked,' but was not doing exactly what I wanted it to do. I took it in to Michael Musick and he talked me through where I had written some inefficient code as well as helped me think through why I wasn't getting the functionality that I wanted. The main issue was that I couldn't get the lines to stay in bounds, and so we changed the edgeLines method to do a different mathematical computation on the lines and that finally worked. that part of the process still confuses me at times and I need to make sure I really understand what is going wrong, and how to fix it, so that I can build the sketch I have in mind for next week.

## Conclusions

I enjoyed this project and am starting to see some of the possibilities of working with Object Oriented Programming. I still need to more deeply understand the mechanics of it but am looking forward to learning more how to structure code this way. 
