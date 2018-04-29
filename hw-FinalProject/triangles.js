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

    }

    show() {
      fill(this.t_Color);
      triangle(this.tx1, this.ty1, this.tx2, this.ty2, this.tx3, this.ty3);
    }

}
