Your Name, Your Section Number

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

<!--
let ball = {};  // declares object called 'ball.'
ball.width = 40;  // sets the width of the ball to 40 pixels.
ball.x = 10;  // sets the starting x position of the ball to 10.
ball.y = 10; // sets the starting y position of the ball to 10.
ball.delta_x = 1;  // sets the direction of the balls trajectory on the x axis.
ball.delta_y = 1;  // sets the direction of the balls trajectory on the y axis.
ball.scale_x = 1;  // sets the new trajectory of the ball along the x axis once the mouse is clicked inside the canvas.
ball.scale_y = 1;  // sets the new trajectory of the ball along the y axis once the mouse is clicked inside the canvas.

function setup() {  // tells the browser that this is a p5.js document and to look for the p5 lib file
    createCanvas(windowWidth, 400);  // creates canvas that is the width of the browser window and 400 pixels high.
    background(255); // sets the background color to black.
}



function draw() {  // calls all code included in block in a continuous loop.

    ball.x += ball.delta_x * ball.scale_x;  //  sets the new x location on each loop by multiplying the current x location represented by the variable:'ball.delta_x' by the
         variable: 'ball.scale_x'.
    ball.y += ball.delta_y * ball.scale_y;  // sets the new y location on each loop by multiplying the current y location represented by the variable:'ball.delta_y' by the
         variable: 'ball.scale_y'.


    if (ball.x >= width || ball.x <= 0) { // function that sets parameters as x coordinates between the left and right edge of the canvas.
        ball.delta_x = -1 * ball.delta_x;  // reverses the direction of the ball along the x axis when the ball reaches the edge of the canvas.
    }
    if (ball.y >= height || ball.y <= 0) { // function that sets parameters as y coordinates between the top and bottom edge of the canvas.
        ball.delta_y = -1 * ball.delta_y; // reverses the direction of the ball along the y axis when the ball reaches the edge of the canvas.
    }

    fill(255); // sets fill color of ball to black.
    ellipse(ball.x, ball.y, ball.width, ball.width); // creates an ellipse x position at pixel 10, y position at pixel 10, and width and height at 40 pixels.
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10); // changes the direction of the ball along the x axis with a mouse click. Maps MouseX coordinate from 0 to width of the canvas on to the range 0.5 and 10.

    ball.scale_y = map(mouseY, 0, height, 0.5, 10); changes the direction of the ball along the y axis with a mouse click. Maps MouseY coordinate from 0 to width of the canvas on to the range 0.5 and 10.
}

-->


## How did you alter the sketch?

<!--
Please describe how and why you changed the sketch?
1. Declared variables for r, g and b and set them to 0 so that I can randomly change the colors in the shape(s) and background randomly and when the mouse is clicked.
2. set stroke color of the ellipse to variables r, g and b and then randomized them for each loop.
3. set variable for stroke weight and then randomized it using the mapping function. The closer one clicks the mouse on the right side of the canvas, the larger the strok will be.
4. Created an if else statement to increment and decrement the size of the ball based on it's position along the x axis.
5. Wrote a constrain function that constrains the dimension of the ball between 5 and 50 pixels.
6. Changed ball.x assignment on line 38 and 39. Miltiplied ball.scale_x by 1.5

1.
-->
