This is the tile color trailer.
The idea is simple, click on the button, populate the screen with tiles, then whenever the mouse hovers over a tile, the color of the tile will change until it is done hovering over that tile.

Currently, it populates the screen with 52 x 52 squares, then as you move your mouse over them they change to a random color.
When you move your mouse out of the square it returns to white.
When I say random color, I mean random, it generates a random hexidecimal string everytime.

Fun tidbit about populating the screen with squares. The way I have it set up, it generates these squares until the it reaches the 
wrapper height and width, unfortunately it does not finish generating the last row of squares, it only does the first two squares.
I created an algorithm that takes the width of the wrapper (which is as large as the screen) and divide that by the width of a square.
I round that result down and subtract it by 2, then I take that final number and generate the remaining squares.

Currently working on javascript promises so that I can create a delay on the returning to white background color to give off the 
illusion of a trail.

requirements:
Django (1.11.2)
pip (9.0.1)
pytz (2017.2)
setuptools (36.0.1)
wheel (0.29.0)
