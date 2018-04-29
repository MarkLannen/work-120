/*jshint esversion: 6 */

//create arc class

class Arc {
    constructor (a_tempX1, a_tempY1, a_tempX2, a_tempY2, a_tempX3, a_tempY3, a_tempX4, a_tempY4,
        a_tempX5, a_tempY5, a_tempX6, a_tempY6, a_tempX7, a_tempY7, a_tempColor) {
        this.x1 = a_tempX1;
        this.y1 = a_tempY1;
        this.x2 = a_tempX2;
        this.y2 = a_tempY2;
        this.x3 = a_tempX3;
        this.y3 = a_tempY3;
        this.x4 = a_tempX4;
        this.y4 = a_tempY4;
        this.x5 = a_tempX5;
        this.y5 = a_tempY5;
        this.x6 = a_tempX6;
        this.y6 = a_tempY6;
        this.x7 = a_tempX7;
        this.y7 = a_tempY7;
        this.a_color = a_tempColor;
    }

    show() {
        fill(this.a_color);
        beginShape();
        curveVertex(this.x1, this.y1);
        curveVertex(this.x2, this.y2);
        curveVertex(this.x3, this.y3);
        curveVertex(this.x4, this.y4);
        curveVertex(this.x5, this.y5);
        curveVertex(this.x6, this.y6);
        curveVertex(this.x7, this.y7);
        endShape();

    }


}
