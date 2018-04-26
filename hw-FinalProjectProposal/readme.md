# Final Project Proposal - Title: Floating Kandinsky

## Overview

I would like to create a sketch in p5 loosely recreating an abstract painting of Russian artist Wassily Kandinsky. Many of his works could be considered 'geometric,' and I think would lend themselves well to being the inspiration for a sketch in p5.

What I want to do is write code that will manifest a new abstract work of art with each refresh of the browser, with different colors, geometric shapes and sizes, and some variation in where these elements are placed. Also, I want the sketch to evolve so that if the program is left to run, the elements will move about the canvas and interact with each other, continually creating new compositions.

I think it could randomly produce some interesting results, but what I am really interested in is seeing if through randomizing these elements' creation and movement, a new composition that 'works' as an abstract image will be manifest.

## Problems to solve

Even though abstract art often looks completely spontaneous and chaotic, it was often meticulously planned and executed. Kandinsky in particular planned his abstract works very carefully, so I will need to do the same when writing my code.

I think I will need to divide geometric elements into groups and code them as classes that I will then use to create a certain number of similar objects. It will be challenging for me to create a class that will be flexible enough to contain several similar but distinct objects.

A challenge I envision having is that I would prefer to not create elements that are made up of only one color. I would prefer to go at least some way towards creating fill and stroke colors that look something like what you would see in a painting on canvas, with it's textures and gradients. I don't know if that is possible and will have to research how it may be done.

Another challenge I see is coming up with an effective way of moving all the elements. Coding movement hasn't been easy for me, which is partly why I wanted to include a strong element of it in my final project so that I could finally get my head around how to do it. I'm wondering if I will have to move all the coordinates individually, or if there is a way of moving an entire object with just one computation.

## Work Plan

1. Create a background in photoshop and then add it to the p5 background using the loadImage function. I also might consider making several backgrounds and then calling them randomly, though I'm not sure if this is possible. **To be done by 4-26.**
2. Pick a Kandinsky picture to model my sketch after. I've selected two possibilities: ![Kandinsky - Composition VIII](https://github.com/MarkLannenUM/work-120/blob/master/hw-FinalProjectProposal/Kandinsky_2.jpg) and ![Kandinsky - Soft Hard](https://github.com/MarkLannenUM/work-120/blob/master/hw-FinalProjectProposal/Kandinsky_1.jpg). The latter will be easier as it is less complex, so I will probably start with that one and see how it goes. If it turns out to not be too difficult I may try the more complex composition. **To be done by 4-26.**
3. The next step will be to create all the visual elements using object oriented programming. So I think I will create a class for all groups of objects, and then code arrays that will produce a selected number of each object, with varied appearances, and place them on the canvas. I will want to come up with a way of adding colored stroke and fill that will have some randomness to it, but that is not completely random as I want the colors to loosely fit in to a coordinated palate. I'd like the fill and strokes to not be completely flat, but to have some texture to them, though I'm not sure yet if that is possible. This will be the first big 'phase' of the project. **To be started by 4-26 and finished by 4-30.**
4. Next step will be to create functions that will move all of the objects around the canvas to create a 'new' work of art. I'd like to work out a way for the viewer to 'freeze' the movement on a composition that they like, or even reverse the movement to go back to a previous composition. I don't know, but maybe this can be done with the slider function? **To be completed by 5-4.**
5. Will need to code a constraint to keep all the elements within the boundaries of the canvas. **To be completed by 5-4.**
5. Trouble shooting. I will proceed as methodically as possible, and try not to move on to the next step until the current step is working. **Continuous, and to be completed by 5-7.**

## Work completed as of 4-26

I have designed the background and set up the bones of the sketch. I used the preLoad and loadImage functions to 'load' the background image and it is working well. I also set up a local server using atoms live server functionality and that is working as well.

I will finish this readme proposal and upload to the submission site today.

## Conclusions

I chose this project as I think it could produce some interesting results and will utilize almost all, if not all, of the techniques we have been introduced to this semester. I'm hoping that by working through all those techniques and getting the whole project to 'work' that I will consolidate and 'digest' the contents of this semester's course. 
