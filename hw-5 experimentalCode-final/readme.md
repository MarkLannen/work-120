# Mark Lannen HW-5 Recap

## Overview
As usual, this week's project was both interesting and challenging. I made an initial decision when setting up my canvas that came back to cause problems, which I will discuss below. The bulk of my time was spent getting my animations to work. I gained a decent understanding of the core concepts, and found the most challenging aspect in getting the eyes in my sketch to spin around their own axis.

## Process
I first set up the canvas using the windowWidth property for the x axis, but then used a static pixel dimension for the y axis. This worked fine as I built my project on my laptop, but when I looked at it on a different sized screen all of the elements on the x axis were out of alignment and I had to spend one evening fixing all of them after setting the x property on createCanvas to a static pixel dimension. I'm sure there is a way to use the windowWidth property without running in to this problem, but I don't think we've learned it yet.

I then set the background color to transform over time by creating a variable for each color channel and then incrementing them over time. I enjoyed experimenting with the values and rate of change to see how they effected the final project.

I then drew out a self portrait of myself, just my head, and set about animating various parts of it.

### hair
I created variables for parts of the x and y axes of the hair, using the line function, and then incremented their end points so as to create an illusion of the hair and goatee growing. I was more or less satisfied with the result, but am looking forward to learning how to do it more realistically and with less code. I especially want to learn how to make it appear as if curled hair is growing.

### 
