function setup() {
    createCanvas( windowWidth, 600 );

}

function draw() {
    background(150, 225, 150);
    frameRate(1);
    console.log(width);

// declare variable for individual fill colors r, g, b and declare fColor for all fill colors
    let r = 250;
    let g = 100;
    let b = 50;
    let a = 0.5;
    let fColor = ( 'rgba(r, g, b, a)' );



// Create arcs
// declare x and y variables and increment them
// set radions to random values based on x and y
    for (let x = 50; x <= width; x += 50) {
        for (let y = 50; y <= height-50; y += 50) {
            arc( x, y, 50, 50, radians(random(x, y)), radians(random(x, y)));
        }
    }



// if ()

    fill('rgba( 200, 50, 100, 0.2)');
    for (let x = 50; x <= width; x += 50) {
        for (let y = 50; y <= height-50; y += 50) {
            ellipse( x, y, 50, 50);
        }
    }

}
