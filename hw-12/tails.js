/*jshint esversion: 6 */
class Tails {
    constructor(temp_x, temp_y, temp_head_x, temp_head_y, temp_color) {
        this.x = temp_x + (random(1200));
        this.y = temp_y + (random(600));
        this.head_x = temp_head_x + (random(1200));
        this.head_y = temp_head_y + (random(600));
        this.x_delta = random([-1, 1]);
        this.y_delta = random([-1, 1]);
        this.color = temp_color;
        this.tail_len = 50;
        this.stroke = color('white');
        this.strokeWeight = 0;
    }

    // method for creating first tails
    createLines() {
        stroke(this.stroke);
        strokeWeight(this.strokeWeight);
        fill(this.color);
        ellipse(this.head_x, this.head_y, 50);
        line(this.x, this.y, this.head_x, this.head_y);

    }
    // method for moving tails
    moveLines() {
        stroke(this.color);
        this.x = this.head_x + (-1 * this.x_delta * this.tail_len);
        this.y = this.head_y + (-1 * this.y_delta * this.tail_len);

        this.head_x += this.x_delta;
        this.head_y += this.y_delta;
    }

    // method for keeping lines in view window
    edgeLines() {
        if( this.head_x < 0){
            this.head_x = abs(this.head_x);
            this.x_delta *= -1;
        }
        if( this.head_x > width ){
            this.head_x  = width - abs(width - this.head_x);
            this.x_delta *= -1;
        }
        if( this.head_y < 0){
            this.head_y = abs(this.head_y);
            this.y_delta *= -1;
        }
        if( this.head_y > height ){
            this.head_y  = height - abs(height - this.head_y);
            this.y_delta *= -1;
        }
    }

    //method checking whether heads are intersecting
    collisionCheck( otherHeads, myIdx ) {
        for (let j = 0; j < otherHeads.length; j++) {
            if (j != myIdx) {
                let d = dist(tails[j].head_x, tails[j].head_y, this.head_x, this.head_y);
                if (d <= 50) {
                    this.x_delta *= -1;
                    this.y_delta *= -1;
                    this.color = ('red');
                    this.strokeWeight = 5;
                }
                  else {
                  this.color = color(50, 200, 100);
                  }

            }
        }
    }

    constrainLines() {
        this.x = constrain(this.x, 0, windowWidth);
        this.y = constrain(this.y, 0, 600);
    }
}
