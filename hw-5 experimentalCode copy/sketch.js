
function setup() {
createCanvas(800, 600);
}

//**********************//
//global variables
//**********************//

// background color variables
var rChannel = 1;
var gChannel = 255;
var bChannel = 150;

//pupil width and height variables
var pupilWidth = 1;
var pupilHeight = 1;

// mouth width and heigh variables
var mouthWidth = 5;
var mouthHeight = 5;

// goatee variables
var goateeYEnd = 590;
var goateeX = 579;

// hair variables
var hairXstart = 380;
var hairYstart = 190;
var hairXEnd = 380;
var hairYEnd = 170;

// eye rotation variables
var eyeAngle = 0;
var eyeRotationRate = 0;

//line(width/3.25, 190, width/3.35, 175);


function draw() {
//background color will change from green to reddish-purple
// background(rChannel, gChannel, bChannel);
    // background color change animation
    rChannel = rChannel + 1;
    gChannel = gChannel - 1;
    rChannel = rChannel % 255;
    gChannel = gChannel % 255;

/* change to eye rotation variable */
eyeRotationRate = (mouseY * 0.1) - 20;
eyeAngle = eyeAngle + eyeRotationRate;

//**********************//
//Face
//**********************//

/* head */
push();
noStroke();
// strokeWeight(0.5);
fill('rgb(175, 146, 115)');
// top of head
quad(width * 0.28, height * 0.25, width * 0.72, height * 0.25, width * 0.68, height * 0.65, width * 0.33, height * 0.65);
//chin
quad(width * 0.33, height * 0.65, width * 0.68, height * 0.65, width * 0.55, height * 0.75, width * 0.45, height * 0.75);
//forehead
arc(width/2, 150, width/2.27, height/4.27, PI, TWO_PI);
pop();
/* end head */

/* hair */
// right side hair
push();
stroke('rgb(74, 54, 48)');
strokeWeight(10);
line(hairXstart, hairYstart, hairXEnd, hairYEnd);
line(hairXstart + 15, hairYstart - 5, hairXEnd + 15, hairYEnd);
line(hairXstart + 30, hairYstart - 10, hairXEnd + 30, hairYEnd);
line(hairXstart + 45, hairYstart - 15, hairXEnd + 45, hairYEnd);
line(hairXstart + 60, hairYstart - 20, hairXEnd + 60, hairYEnd);
line(hairXstart + 75, hairYstart - 25, hairXEnd + 75, hairYEnd);
line(hairXstart + 90, hairYstart - 30, hairXEnd + 90, hairYEnd - 15);
line(hairXstart + 105, hairYstart - 35, hairXEnd + 105, hairYEnd - 20);
line(hairXstart + 120, hairYstart - 40, hairXEnd + 120, hairYEnd - 25);
line(hairXstart + 135, hairYstart - 45, hairXEnd + 135, hairYEnd - 30);
line(hairXstart + 150, hairYstart - 50, hairXEnd + 150, hairYEnd - 35);
line(hairXstart + 165, hairYstart - 55, hairXEnd + 165, hairYEnd - 40);
line(hairXstart + 180, hairYstart - 60, hairXEnd + 180, hairYEnd - 45);
line(hairXstart + 195, hairYstart - 65, hairXEnd + 195, hairYEnd - 60);
line(hairXstart + 210, hairYstart - 70, hairXEnd + 210, hairYEnd - 65);
line(hairXstart + 225, hairYstart - 75, hairXEnd + 225, hairYEnd - 70);
pop();

// left side hairXEnd

push();
translate( windowWidth/1.02, 0);
scale( -1, 1 );
stroke('rgb(74, 54, 48)');
strokeWeight(10);
line(hairXstart, hairYstart, hairXEnd, hairYEnd);
line(hairXstart + 15, hairYstart - 5, hairXEnd + 15, hairYEnd);
line(hairXstart + 30, hairYstart - 10, hairXEnd + 30, hairYEnd);
line(hairXstart + 45, hairYstart - 15, hairXEnd + 45, hairYEnd);
line(hairXstart + 60, hairYstart - 20, hairXEnd + 60, hairYEnd);
line(hairXstart + 75, hairYstart - 25, hairXEnd + 75, hairYEnd);
line(hairXstart + 90, hairYstart - 30, hairXEnd + 90, hairYEnd - 15);
line(hairXstart + 105, hairYstart - 35, hairXEnd + 105, hairYEnd - 20);
line(hairXstart + 120, hairYstart - 40, hairXEnd + 120, hairYEnd - 25);
line(hairXstart + 135, hairYstart - 45, hairXEnd + 135, hairYEnd - 30);
line(hairXstart + 150, hairYstart - 50, hairXEnd + 150, hairYEnd - 35);
line(hairXstart + 165, hairYstart - 55, hairXEnd + 165, hairYEnd - 40);
line(hairXstart + 180, hairYstart - 60, hairXEnd + 180, hairYEnd - 45);
line(hairXstart + 195, hairYstart - 65, hairXEnd + 195, hairYEnd - 60);
line(hairXstart + 210, hairYstart - 70, hairXEnd + 210, hairYEnd - 65);
line(hairXstart + 225, hairYstart - 75, hairXEnd + 225, hairYEnd - 70);


// growing hair code
hairYEnd = hairYEnd - 0.1;


pop();

/* end hair */

/*eyes*/
//left eye
push();
translate(width * 0.4, height * 0.4);
// rotate(radians(eyeAngle));
stroke('rgb(80)');
strokeWeight(2);
fill('rgb(225, 225, 225)');
ellipse(0, 0, 100, 60);
pop();

//iris
fill('rgb(50, 50, 255)');
ellipse(width * 0.4, height * 0.40, 60, 60);

//pupil
push();
strokeWeight(2);
stroke('rgb(240, 240, 240)');
fill('rgb(80, 80, 80)');
ellipse(width * 0.4, height * 0.40, pupilWidth, pupilHeight);

//right eye
push();
translate(width * 0.6, height * 0.4);
// rotate(radians(eyeAngle));
stroke('rgb(80)');
strokeWeight(2);
fill('rgb(225, 225, 225)');
ellipse(0, 0, 100, 60);
pop();

//iris
fill('rgb(50, 50, 255)');
ellipse(width * 0.60, height * 0.40, 60, 60);

//pupil
stroke('rgb(240, 240, 240)');
fill('rgb(80, 80, 80)');
ellipse(width * 0.60, height * 0.40, pupilWidth, pupilHeight);
// dilates pupil to max 60 px width and height
// pupilWidth = pupilWidth + 0.2;
// pupilHeight = pupilHeight + 0.2;
pupilWidth = pupilWidth % 60;
pupilHeight = pupilHeight % 60;
pop();

/* nose */
stroke('rgb(40, 40, 40)');
fill('rgb(80, 80, 80)');
ellipse(width * 0.48, height * 0.55, 15, 15);
ellipse(width * 0.525, height * 0.55, 15, 15);
/* end nose */

/* mouth */
push();
stroke('rgb(200, 40, 40)');
strokeWeight(5);
fill('rgb(80, 80, 80)');
ellipse(400, 390, mouthWidth, mouthHeight);

// mouthWidth = mouthWidth + 0.5;
// mouthHeight = mouthHeight + 0.5;
// mouthWidth = mouthWidth % 100;
// mouthHeight = mouthHeight % 100;
pop();
/* end mouth */


// glasses
// right frame
push();
noFill();
stroke('rgb(80, 80, 80)');
strokeWeight(7);
rect(width * 0.32, height * 0.30, 120, 120, 5, 5, 30, 30);
// left frame
push();
translate(282, 0);
noFill();
stroke('rgb(80, 80, 80)');
strokeWeight(7);
rect(width * 0.175, height * 0.30, 120, 120, 5, 5, 30, 30);
pop();
// bridge
stroke('rgb(80, 80, 80)');
strokeWeight(6);
arc(windowWidth/3.2, 230, 70, 30, radians(195), radians(345));
//handles
stroke('rgb(80, 80, 80)');
strokeWeight(6);
line(windowWidth/5.75, 200, windowWidth/5, 220);
push();
// translate(515, 0);
stroke('rgb(80, 80, 80)');
strokeWeight(6);
line(windowWidth/2.35, 220, windowWidth/2.21, 200);
pop();
pop();
/* end eyes */

/* goatee */
push();
stroke('rgb(74, 54, 48)');
strokeWeight(5);
line(goateeX, height * 0.74, goateeX, goateeYEnd);
line(goateeX + 7, height * 0.74, goateeX + 7, goateeYEnd);
line(goateeX + 14, height * 0.74, goateeX + 14, goateeYEnd);
line(goateeX + 21, height * 0.74, goateeX + 21, goateeYEnd);
line(goateeX + 28, height * 0.74, goateeX + 28, goateeYEnd);
line(goateeX + 35, height * 0.74, goateeX + 35, goateeYEnd);
line(goateeX + 42, height * 0.74, goateeX + 42, goateeYEnd);
line(goateeX + 49, height * 0.74, goateeX + 49, goateeYEnd);
line(goateeX + 56, height * 0.74, goateeX + 56, goateeYEnd);
line(goateeX + 63, height * 0.74, goateeX + 63, goateeYEnd);
line(goateeX + 70, height * 0.74, goateeX + 70, goateeYEnd);
line(goateeX + 77, height * 0.74, goateeX + 77, goateeYEnd);
line(goateeX + 84, height * 0.74, goateeX + 84, goateeYEnd);
line(goateeX + 91, height * 0.74, goateeX + 91, goateeYEnd);
line(goateeX + 98, height * 0.74, goateeX + 98, goateeYEnd);

goateeYEnd = goateeYEnd + 0.1;
pop();
/* end goatee */





}
