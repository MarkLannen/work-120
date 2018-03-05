Your Name, Your Section Number

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

<!--
let ball = {};  // declares object called 'ball.'
ball.width = 40;  // sets the width of the ball to 40 pixels.
ball.x = 10;  // sets the starting x position of the ball to 10.
ball.y = 10; // sets the starting y position of the ball to 10.
ball.delta_x = 1;  //sets the direction of the balls trajectory on the x axis.
ball.delta_y = 1;  //sets the direction of the balls trajectory on the y axis.
ball.scale_x = 1;  //??
ball.scale_y = 1;  //??

function setup() {  // tells the browser that this is a p5.js document and to look for the p5 lib file
    createCanvas(windowWidth, 400);  // creates canvas that is the width of the browser window and 400 pixels high.
    background(255); // sets the background color to black.
}



function draw() {  // calls all code included in block in a continuous loop. 

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
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
