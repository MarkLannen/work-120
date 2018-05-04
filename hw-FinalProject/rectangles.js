/*jshint esversion: 6 */

// create rectangle class

class Rectangle {
    constructor (r_tempX, r_tempY, r_tempW, r_tempH, r_tempColor) {
        this.rx = r_tempX;
        this.ry = r_tempY;
        this.rw = r_tempW;
        this.rh = r_tempH;
        this.r_color = r_tempColor;
        this.rx_Delta = random(-3, 3);
        this.ry_Delta = random(-3, 3);
        this.rangle = 0;
    }

    show() {

      fill(this.r_color);
      // push();
      // rotate(radians(this.rangle));
      // this.rangle += 1;
      rect(this.rx, this.ry, this.rw, this.rh);

    }
    disperse() {
        if(imgMove){
            this.rx += this.rx_Delta;
            this.ry += this.ry_Delta;

            if (this.rx >= width - this.rw || this.rx <= 0) {
                this.rx_Delta = this.rx_Delta * -1;
            }

            if (this.ry >= height - this.rh || this.ry <= 0) {
                this.ry_Delta = this.ry_Delta * -1;
            }
        }
    }
}
