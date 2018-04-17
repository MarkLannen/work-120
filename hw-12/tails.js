/*jshint esversion: 6 */
class Tails {
    constructor(temp_x, temp_y, temp_end_x, temp_end_y, temp_color) {
        this.x = temp_x + (random(1200));
        this.y = temp_y + (random(600));
        this.end_x = temp_end_x + (random(1200));
        this.end_y = temp_end_y + (random(600));
        this.color = temp_color;
    }

    // method for creating first tails
    createLines() {
        stroke(this.color);
        strokeWeight(random(1,8));
        fill(this.color);
        ellipse(this.end_x, this.end_y, 50);
        line(this.x, this.y, this.end_x, this.end_y);

    }
    // method for moving tails
    moveLines() {
        stroke(this.color);
        this.x = this.end_x;
        this.y = this.end_y;
        this.end_x += random(-100, 100);
        this.end_y += random(-100, 100);
    }

    // method for keeping lines in view window
    edgeLines() {
        if( this.end_x < 0){
            this.end_x = abs(this.end_x);
        }
        if( this.end_x > width ){
            this.end_x  = width - abs(width - this.end_x);
        }
        if( this.end_y < 0){
            this.end_y = abs(this.end_y);
        }
        if( this.end_y > height ){
            this.end_y  = height - abs(height - this.end_y);
        }

    // method checking whether heads are intersecting
    collisionCheck(); {
        for (let i = 0; i < tails.length; i++) {
          for (let j = 0; j < tails.length; j++) {
            if (i != j) {
               let d = dist(tails[i].end_x, tails[i].end_y, this.end_x, this.end_y);
               if (d <= 50) {

                   this.end_x *= -1;
                   this.end_y *= -1;
                   this.color = (white);
               }


            }
          }
      }
    }

}
    constrainLines() {
    this.x = constrain(this.x, 0, windowWidth);
    this.y = constrain(this.y, 0, 600);
    }
}
