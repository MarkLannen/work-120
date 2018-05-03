/*jshint esversion: 6 */

// create circles class
class Circle {
    constructor(c_tempX, c_tempY, c_tempR, c_tempColor) {
        this.x = c_tempX;
        this.y = c_tempY;
        this.d = c_tempR;
        this.c_Color = c_tempColor;
        this.x_Delta = random(-3, 3);
        this.y_Delta = random(-3, 3);


    }

    show() {
      fill(this.c_Color);
      ellipse(this.x, this.y, this.d);
    }



    disperse() {
      this.x += this.x_Delta;
      this.y += this.y_Delta;

      if (this.x >= width - this.d/2 || this.x <= 0 + this.d/2) {
        this.x_Delta = this.x_Delta * -1;
      }
      if (this.y >= height - this.d/2 || this.y <= 0 + this.d/2) {
        this.y_Delta = this.y_Delta * -1;
      }
    }

}
