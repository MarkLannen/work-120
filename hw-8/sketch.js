function setup() {
    createCanvas( windowWidth, 600 );
}

function draw() {
    background(150, 225, 150);
    frameRate(5);
    console.log(width);

    // if else statements that change the colors of the shapes depending on where the mouse is.

    //Changes color in top left quadrant
    if ( mouseX < width * 0.5 && mouseY < height * 0.5) {
        fill( 'rgba(250, 100, 50, 0.5)' );
    }
    // Changes color in top right quadrant
    else if (mouseX > width * 0.5 && mouseY < height * 0.5) {
        fill( 'rgba(50, 100, 250, 0.5)' );
    }
    // changes color in bottom left quadrant
    else if (mouseX < width * 0.5 && mouseY > height * 0.5) {
        fill( 'rgba(100, 150, 50, 0.5)');
    }
    // changes color in bottom right quadrant and if the mouse is off the canvas window
        else {
        fill( 'rgba(255, 50, 50, 0.5)');
    }


// Create arcs
// declare x and y variables and increment them
// set radions to random values based on x and y
// fill('rgba(250, 100, 50, 0.5)');
stroke( 200, 200, 200 )
    for (let x = 50; x <= width; x += 50) {
        for (let y = 50; y <= height-50; y += 50) {
            arc( x, y, 50, 50, radians(random(x, y)), radians(random(x, y)));
        }
    }


// Create ellipses that fill the top lef quarter of the screen
    for (let x = 50; x <= width/2; x += 50) {
        for (let y = 50; y <= height/2; y += 50) {
            ellipse( x, y, 50, 50);
        }
    }

// Create transparent rectangles that fill bottom right corner of screen
    for (let x = width/2 + 15; x <= width; x += 50 ) {
      for (let y = height/2 + 24; y <= height; y += 50) {
        rect( x, y, 50, 50);
      }
    }
}
