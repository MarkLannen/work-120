/*jshint esversion: 6 */
// set global variable in array 'tails'
let tails = [];
let heads = [];

// create canvas
// set background color
function setup() {
    createCanvas( windowWidth, 600 );
    frameRate(10);
    background(221, 244, 251);
    // for loop that adds objects to array 'Tails'
    for (let i = 0; i < 10; i ++) {
    tails[i] = new Tails (0, 0, 50, 50, (color(random(255), random(255), random(255))));
    }

}
// draw function
function draw() {
    background(221, 244, 251, 150);
    // for loop to enacts all methods each draw loop
    // and create specified # of new tails each loop.
    for (let i = 0; i < tails.length; i ++) {
        // calls method to create tail
        tails[i].createLines();
        // calls method to move x and y coordinates of new tail to end of previous tail
        tails[i].moveLines();
        // calls method to redirect tails that go off-screen
        tails[i].edgeLines();
        // calls method that constrains tails to stay within specified window width and height
        tails[i].constrainLines();
    }
}
