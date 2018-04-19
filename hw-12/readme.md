## Overview
As always this was a challenging assignment. I used some of the functionality from last week, but instead of lines moving across the screen, I wanted to make a very simple 'tadpole' that 'swam' across the screen and changed direction when it encountered another tadpole.

## Steps
1. My first step was to move my class to a seperate js file, which was easy enough.
2. Then I had to work through how to add a head to the tails that I had already created. After some experimenting I managed to make the tail trail behind the head.
2. Next I Next I created a new method to control what happens when the tadpoles collided. This turned out to be the most challenging aspect of the project. I tried several methods to get it to work, none of them successful.
    a. if statement that checked distance between tadpoles
    b. Making a new array called heads that checked distance based on the examples from the Shiffman videos.
    c. Many others that I can no longer remember.  :)

3. I finally went in and talked through some of the logic with Dr. Musick and he set me in the right direction. I think the main issue for me was not creating a seperate variable to control movement.
4. After getting the collisionCheck method to work, I wanted to have two eyes that would move from one side of the tadpole to the other to give the impression that it was always facing the way it was swimming. In the end, I could only get one eye to work, but I did manage to have it move from one side to the other based on the direction.

## Issues
CollisionCheck - I really struggled getting this to work. I understand the general concept, but struggled when I tried to make it work with my particular sketch.

Eye - I got one eye to work, but it only work if it the tadpole is going from top left to bottom right and vice versa. If going from top right to bottom left then it doesn't work. I'm sure given enough time, and a bit of help, I could get it done but I just ran out of time this week.

## Conclusions

I enjoyed this project and am starting to see some of the possibilities of working with Object Oriented Programming. I still need to more deeply understand the mechanics of it but am looking forward to learning more how to structure code this way.
