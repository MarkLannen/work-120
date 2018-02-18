//**********************//
//global variables
//**********************//

// background color variables
var rChannel = 1;
var gChannel = 255;
var bChannel = 150;

function setup() {
createCanvas(windowWidth, 800);
}

function draw() {
//background color will change from green to reddish-purple
// background(rChannel, gChannel, bChannel);
    // background color change animation
    rChannel = rChannel + 1;
    gChannel = gChannel - 1;
    rChannel = rChannel % 255;
    gChannel = gChannel % 255;

//**********************//
//Face
//**********************//

//head
push();
stroke('rgb(120)');
strokeWeight(0.5);
fill('rgb(175, 146, 115)');
ellipse(width * 0.5, height * 0.5, width * 0.6, height * 0.75);
pop();

/*eyes*/
//left eye
push();
stroke('rgb(80)');
strokeWeight(1);
fill('rgb(225, 225, 225)');
ellipse(width * 0.37, height * 0.40, 100, 60);

//iris
fill('rgb(50, 50, 255)');
ellipse(width * 0.37, height * 0.40, 60, 60);

//pupil
stroke('rgb(40, 40, 40)');
fill('rgb(80, 80, 80)');
ellipse(width * 0.37, height * 0.40, 20, 20);

//right eye
stroke('rgb(80)');
strokeWeight(1);
fill('rgb(225, 225, 225)');
ellipse(width * 0.60, height * 0.40, 100, 60);

//iris
fill('rgb(50, 50, 255)');
ellipse(width * 0.60, height * 0.40, 60, 60);

//pupil
stroke('rgb(40, 40, 40)');
fill('rgb(80, 80, 80)');
ellipse(width * 0.60, height * 0.40, 20, 20);











}
