/*jshint esversion: 6 */

// create circles class
class Circles {
    constructor(c_tempX, c_tempY, c_tempR, c_tempColor) {
        this.x = c_tempX;
        this.y = c_tempY;
        this.r = c_tempR;
        this.x_Delta = random([-1, 1]);
        this.y_Delta = random([-1, 1]);
        this.r_Delta = random([-1, 1]);
        this.c_Color = c_tempColor;
        


    }

}
