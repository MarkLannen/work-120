/*jshint esversion: 6 */

// create Triangle class

class Triangle {
    constructor (t_tempX1, t_tempY1, t_tempX2, t_tempY2, t_tempX3, t_tempY3, t_tempColor) {
        this.tx1 = t_tempX1;
        this.ty1 = t_tempY1;
        this.tx2 = t_tempX2;
        this.ty2 = t_tempY2;
        this.tx3 = t_tempX3;
        this.ty3 = t_tempY3;
        this.t_Color =t_tempColor;
        this.tx_Delta = random(-3, 3);
        this.ty_Delta = random(-3, 3);

    }

    show() {
      fill(this.t_Color);
      triangle(this.tx1, this.ty1, this.tx2, this.ty2, this.tx3, this.ty3);
    }
    disperse() {
      this.tx1 += this.tx_Delta;
      this.ty1 += this.ty_Delta;
      this.tx2 += this.tx_Delta;
      this.ty2 += this.ty_Delta;
      this.tx3 += this.tx_Delta;
      this.ty3 += this.ty_Delta;


      // edge detection on x axis
      if (this.tx1 >= width || this.tx1 <= 0) {
        this.tx_Delta = this.tx_Delta * -1;
      }

      if (this.tx2 >= width || this.tx2 <= 0) {
        this.tx_Delta = this.tx_Delta * -1;
      }

      if (this.tx3 >= width || this.tx3 <= 0) {
        this.tx_Delta = this.tx_Delta * -1;
      }

      // edge detection on y axis
      if (this.ty1 >= height || this.ty1 <= 0) {
        this.ty_Delta = this.ty_Delta * -1;
      }

      if (this.ty2 >= height || this.ty2 <= 0) {
        this.ty_Delta = this.ty_Delta * -1;
      }

      if (this.ty3 >= height || this.ty3 <= 0) {
        this.ty_Delta = this.ty_Delta * -1;
      }

    }


}
