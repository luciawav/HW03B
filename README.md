#day 1
At first i was trying to create something based on what we learned in class so my first code was like this
![first idea](https://imgpile.com/images/D9Gbb2.png)

the first try makes an animation, after I move the draw part into setup
I noticed that the spacing , number of ellipse and sizes may need a change if i want to make as close as the second pic shows
![picture](https://imgpile.com/images/D9GdmG.png)

then I tried to add a spacing variation but this is what shows
![tried on p5js web](https://imgpile.com/images/D9GDYh.png)
so the i think the spacing need a true false function to solve

then I consider that the density also need a setup
![sketch](https://imgpile.com/images/D9GhQa.jpg)

#day 2
then I did several tries but they all failed. it's hard to control
the overlapping of the circles. my first idea seems work but I found 
that it is actually because of the spacing, as I make the spacing denser then some circles overlapped. so I give up this idea.though it works
![tried on p5js web](https://imgpile.com/images/D9God8.png)

#day 3
I searched some tutorials and some of my old proccesing notes
and ask some friends who knows coding to find some ideas that I could set a spacing to avoid overlapping

and make it as close as it could, could set twice smallest 
size of circle(but it takes longer to run than set the spacing
into largest circle) but I like the density in this version
**hope to learn some way make it run faster**

I searched that there is a "for..of loop (circle as cricles)"
that I could define my array so I could set properties inside

By itself I used “else if”, but found“!“ 's function allowed me to chase down the details of each circle position. But I realized that my drawing positions were never saved, so I searched the web and found the ”push（）“ function to save the style of the circle I had drawn
![sketch](https://imgpile.com/images/D9KlYa.jpg)


just noticed we should work in full screen so I REMOVED the canvas