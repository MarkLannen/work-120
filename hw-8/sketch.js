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
    let fColor = ( r, g, b );



// Create arcs
// declare x and y variables and increment them
// set radions to random values based on x and y
    // if (x <= width * 0.5 && y <= height * 0.5) {
        for (let x = 50; x <= width; x += 50) {
            for (let y = 50; y <= height-50; y+=50) {
                arc( x, y, 50, 50, radians(random(x, y)), radians(random(x, y)));
            }
        }
    // }
}
