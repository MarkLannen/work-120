let change = true;
var col1 = 255;
var col2 = 255;
var col3 = 0;
var col4 = 50;

function setup() {
    createCanvas(windowWidth, 700);
    background(0);

    frameRate(2);
  }

function draw() {
  // var col1 = 255;
  // var col2 = 255;
  // var col3 = 0;
  // var col4 = 50;

  let bulbWidth = 20;
  let bulbHeight = 30;
  let moveY = 150;





  for (let h = 165; h < 700; h += 304){
    fill (50, 50, 50);
    rect (90, h, windowWidth - 205, 15);

    }

  for (let i = 100; i < windowWidth - 100; i += 30) {



    fill(col1, col1, 0);
    if (col1 == 255){
      fill('red');
    }
    else {
      fill('blue');
    }

    ellipse(i, moveY, bulbWidth, bulbHeight);

    col1 =+ 255;


    }

moveY += 350;

  for (let i = 100; i < windowWidth - 100; i += 30) {


        fill(col1, col1, 0);
        if (col1 == 255){
          col1 = 50;
        }
        else {
          col1 = 255;
        }
        ellipse(i, moveY, bulbWidth, bulbHeight);

          }


}
