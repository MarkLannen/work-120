function setup() {
    createCanvas( windowWidth, 600 );

}

function draw() {
    background(150, 225, 150);

    for (let x = 1; x <= width; x++) {
        for (let y = 1; y<= height; y++) {
        }
    arc(x, y, 50, 50, radians(160), radians(280));
}
}
