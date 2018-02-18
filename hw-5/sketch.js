//**********************//
//global variables
//**********************//






function setup() {
createCanvas(windowWidth, 800);
}

// background color variables
var rChannel = 1;
var gChannel = 255;
var bChannel = 150;

//pupil width and height variables
var pupilWidth = 1;
var pupilHeight = 1;


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
noStroke();
// strokeWeight(0.5);
fill('rgb(175, 146, 115)');
// top of head
quad(width * 0.28, height * 0.25, width * 0.72, height * 0.25, width * 0.68, height * 0.65, width * 0.33, height * 0.65);
//chin
quad(width * 0.33, height * 0.65, width * 0.68, height * 0.65, width * 0.6, height * 0.75, width * 0.4, height * 0.75);
pop();

/*eyes*/
//left eye
push();
stroke('rgb(80)');
strokeWeight(1);
fill('rgb(225, 225, 225)');
ellipse(width * 0.4, height * 0.4, 100, 60);
pop();

//iris
fill('rgb(50, 50, 255)');
ellipse(width * 0.4, height * 0.40, 60, 60);

//pupil
push();
stroke('rgb(40, 40, 40)');
fill('rgb(80, 80, 80)');
ellipse(width * 0.4, height * 0.40, pupilWidth, pupilHeight);

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
ellipse(width * 0.60, height * 0.40, pupilWidth, pupilHeight);
//dilates pupil to max 60 px width and height
pupilWidth = pupilWidth + 0.2;
pupilHeight = pupilHeight + 0.2;
pupilWidth = pupilWidth % 60;
pupilHeight = pupilHeight % 60;
pop();

// glasses
// right frame
push();
noFill();
stroke('rgb(80, 80, 80)');
strokeWeight(15);
rect(width * 0.32, height * 0.30, 175, 175, 5, 5, 30, 30);
// left frame
push();
translate(282, 0);
noFill();
stroke('rgb(80, 80, 80)');
strokeWeight(15);
rect(width * 0.32, height * 0.30, 175, 175, 5, 5, 30, 30);
pop();
// bridge
stroke('rgb(80, 80, 80)');
strokeWeight(15);
arc(windowWidth/1.989, 320, 110, 60, radians(195), radians(345));







pop();
/* end eyes */

/* nose */



}
