/*jshint esversion: 6 */

// create Triangle class

class Triangle {
    constructor (t_tempX1, t_tempY1, t_tempX2, t_tempY2, t_tempX3, t_tempY3, t_tempColor) {
        this.x1 = t_tempX1;
        this.y1 = t_tempY1;
        this.x2 = t_tempX2;
        this.x2 = t_tempX2;
        this.x3 = t_tempX3;
        this.x3 = t_tempX3;
        this.t_Color =t_tempColor;

    }

    show() {
      fill(this.t_Color);
      triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    }

}
