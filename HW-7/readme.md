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

    ball.x += ball.delta_x * ball.scale_x;  // moves the ball 1 pixel to the right along the x axis each loop.
    ball.y += ball.delta_y * ball.scale_y;  // moves the ball 1 pixel down along the y axis each loop.


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;  // reverses the direction of the ball along the x axis when the ball reaches the edge of the canvas.
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y; // reverses the direction of the ball along the y axis when the ball reaches the edge of the canvas.
    }

    fill(255);
    ellipse(ball.x, ball.y, ball.width, ball.width);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}

-->


## How did you alter the sketch?

<!--
Please describe how and why you changed the sketch?
-->
