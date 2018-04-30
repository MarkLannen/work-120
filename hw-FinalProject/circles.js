/*jshint esversion: 6 */

// create circles class
class Circle {
    constructor(c_tempX, c_tempY, c_tempR, c_tempColor) {
        this.x = c_tempX;
        this.y = c_tempY;
        this.r = c_tempR;
        this.c_Color = c_tempColor;
        this.x_Delta = random(-3, 3);
        this.y_Delta = random(-3, 3);


    }

    show() {
      //fill(this.c_Color);
      ellipse(this.x, this.y, this.r);
    }



    disperse() {
      this.x += this.x_Delta;
      this.y += this.y_Delta;

      if (this.x >= width || this.x <= 0) {
        this.x = this.x * -1;
    }
      if (this.y >= height || this.y <= 0) {
        this.y = this.y * -1;
      }
  }

}
