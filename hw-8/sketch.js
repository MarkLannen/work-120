function setup() {
    createCanvas( windowWidth, 600 );

}

function draw() {
    background(150, 225, 150);
    console.log(width);

    for (let x = 50; x <= width; x += 50) {
     for (let y = 50; y <= height-50; y+=50) {
       ellipse(x, y, 40, 40);
     }
   }
}
