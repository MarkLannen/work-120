# Mark Lannen HW-5 Recap

## Overview
As usual, this week's project was both interesting and challenging. I made an initial decision when setting up my canvas that came back to cause problems, which I will discuss below. The bulk of my time was spent getting my animations to work. I gained a decent understanding of the core concepts, and found the most challenging aspect in getting the eyes in my sketch to spin around their own axis.

## Process
1. I first set up the canvas using the windowWidth property for the x axis, but then used a static pixel dimension for the y axis. This worked fine as I built my project on my laptop, but when I looked at it on a different sized screen all of the elements on the x axis were out of alignment and I had to spend one evening fixing all of them after setting the x property on createCanvas to a static pixel dimension. I'm sure there is a way to use the windowWidth property without running in to this problem, but I don't think we've learned it yet.

I then set the background color to transform over time by creating a variable for each color channel and then incrementing them over time. I enjoyed experimenting with the values and rate of change to see how they effected the final project.

I then drew out a self portrait of myself, just my head, and set about animating various parts of it.

2. I created variables for parts of the x and y axes of the hair, using the line function, and then incremented their end points so as to create an illusion of the hair and goatee growing. I was more or less satisfied with the result, but am looking forward to learning how to do it more realistically and with less code. I especially want to learn how to make it appear as if curled hair is growing.

3. The most challenging element to animate was the eyes. I liked what Dr Musick had done with the head of his spinning man, and wanted to do the same thing with my character's eyes. So I used his code as a starting point and changed the names of the variables to accurately reflect what they referred to in my project. However, it took me quite a long time to get my eyes to spin as I wanted them to as initially they were spinning around the wrong axes, and then they weren't spinning based on mouseX, which is what I wanted. Through a lot of trial and error and really thinking through the logic of exactly what each element of the code was doing, I was able to get the effect I wanted.

The key bit of code in the draw function is here:
`translate(width * 0.4, height * 0.4);
rotate(radians(eyeAngle))`

The most complicated part was setting up the variables up so that the rotate function would cause the eye to spin around it's own center point rather than some other part of the canvas. Also, I had to understand how to set up the variable called eyeRotationRate to equal the position of the mouse on the Y axis. That part of the code is here:

`// eye rotation variables
var eyeAngle = 0;
var eyeRotationRate = 0;`

`/* change to eye rotation variable */
eyeRotationRate = (mouseY * 0.1) - 20;
eyeAngle = eyeAngle + eyeRotationRate;`



I've found that it's almost more frustrating when something unexpectedly starts working, rather than when it unexpectedly does not work. It seems more straightforward to debug something that is now working rather than understand why something all of a sudden works and I'm not sure what I did to make it work.




## Issues
1. The biggest issue I had was that I set the original canvas size to windowWidth, which meant that my project looked fine as long as I was viewing it on a screen with the same resolution as the one I had designed it on. However, when I had a look at it on my larger moniter all the elements on the X axis were out of place. I eventually set the canvas to a fixed pixel width and basically redrew all the elements. Seems to be working now on different display resolutions, though for some reason html preview in atom displays incorrectly. I've googled for an answer but haven't found any references online that seem to relate to my issue.
2. I also had an issue with github. I am working on 2 different machines, one mac and one PC, and up until this week syncing between the two machines worked fine. But this week I started encountering errors when I tried to 'pull' the project on my mac after pushing updates on my PC. Not sure why I am suddenly encountering this problem, but if it persists next week I'll bring my laptop in to the lab and see if anyone can help clarify.
3. I read through all the issues on the gihub issues board, but couldn't really be of any help to those who posted issues there this week. I tried googling what I thought there issue was but even if I did find what looked like an answer, I didn't really understand it enough to be of help.

## Conclusions
Interesting project and I think I've got a good handle on the fundamental logic of how animation in p5.js works. Looking forward to learning how to do more than just simple animations.

## Live sketch
[Homework 5 live sketch](https://marklannenum.github.io/work-120/hw-5/)
