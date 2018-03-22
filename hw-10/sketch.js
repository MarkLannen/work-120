/*jshint esversion: 6 */
function setup() {
    createCanvas( windowWidth, 600 );
    // define array for line (growth) parameters
    let growth = [x1, y1, x2, y2];



}

function draw() {
    background(150, 225, 150);

    // function that creates growing plant
    function growingPlant() {
    line(x1, y1, x2, y2);

    growingPlant();

    }

}
