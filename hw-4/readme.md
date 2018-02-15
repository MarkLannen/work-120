# Mark Lannen hw-4, section 50

## Overall Experience
I found this to be a *very* challenging and time consuming project. Like I assume most in the class, I am on quite a steep learning curve and my brain had to work hard to think through every step of every graphic element that I wanted to include in the image. I found myself using a lot of trial and error to achieve the result I was looking for. The console window in the Chrome Developer Tools was very useful in snooping out errors. I'm generally pleased with the final product, though there are a couple of issues, that I will mention below, that I would like to learn how to solve or avoid in the future.

### Process
#### Background
I started the project by drawing out a rough sketch on photoshop just to give myself a reference in the beginning. As a first step, and in order to get myself accustomed to creating images by writing code, I started with what I thought would be the easy part and began by coding out the mountain, the clouds and the 'M.' It was good to give myself something relatively straightforward to begin with, though it turned out to not be particularly easy. Just getting the top of Mt Sentinel, which I drew by coding an arc, took quite a bit of trial and error to line up. There was a bit of a mismatch between the ending of the arc and the slope of the saddle, but I eventually fixed that by covering the join of the arc and the line with clouds. Speaking of clouds, I drew those by coding one white circle, and then copying and pasting that code and reshaping and relocating it. I drew the 'M' line by line, only to discover that there are actually functions for letters. In the future I will probably save myself time by experimenting with those. I got practice using scale and rotate on the 'M' as I needed to give it a slant and shrink it down from the original size I had drawn.

#### Self-portrait
I spent the bulk of my time writing the code for this part of the image. There were lots of challenges as basically everything was new. The first thing I did was write a translate function to put the reference point in the center of the canvas. I don't know if I'll do this again as it was easy for some things, but I often found myself having to use negative coordinates, which I found to be counter intuitive and a bit time-consuming. My usual approach was to make a rough guess as to coordinates and size, etc... and then tweak the numbers from there until I got what I was looking for.

The hair was the most fun as I wrote one arc function for each side of my head, split by a part, and then just copied and pasted that arc and tweaked the coordinates and size to fill out the hair.

I used a stroke on most of my objects throughout as I like that look, but ran into the issue of the stroke appearing between the joins of different shapes, such as the face and the chin. I don't know how to remove the stroke from just one side of a shape, so as a workaround I put a line the same color as the fill of the shape over the stroke. It's not a perfect solution as it can still be slightly seen, but I think it works well enough for now.

### Issues

I had several issues/problems come up that I will bring to the Media Arts Lab (hopefully) on Thursday this week.

1. Arcs: These seemed to work exactly the opposite of how I expected. When I enter in the starting and end points, the arc seems to be upside down from what I expect. Not sure what I'm misunderstanding.
2. Quads: It's not clear to me if the coordinates that I put in are going to be read in a clockwise or counter clockwise direction. It seemed to happen both ways in my sketch, and I'm not sure why it is doing that.
3. Corner radiuses: In the eyeglasses, I wanted to round the bottom radius more than the top and entered a larger number for the bottom parameters, but all 4 parameters are displaying the same. I have pasted the relevant code in to github issues to see if anyone can spot what I am doing wrong. No answers yet.
4. I used jshint a lot to tidy up my code and learned that it is better to write '0.5' rather than '.5'

### Conclusions

My main takeaway is that it really is best practice to sketch out a project first in something like Illustrator or Photoshop, and then build each section as a discrete unit. Also, I learned that too many comments are much better than too few.  :)

## Final sketch

![Final sketch](images/hw4-sketch.png)
