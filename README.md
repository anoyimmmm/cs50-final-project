## CS50x final project - Web based snake game - SnakeChase
 #### Video Demo: https://youtu.be/UkC2d_D_4mc?si=6Hv6qSzFr9RWJkij
 #### This is a simple snake game made using HTML, CSS and JavaScript. Here you move the snakes using the arrows key in the respective direction to eat the food without hitting the walls or yourself.

 # How to play
 This is a simple snake game. To start the game you have  to press any key after running index.html file. Then the snake starts moving and you have to control the movement of the snake with the motive of eating the food in red trying to eat as much as food you can.With each food eaten your snake gets bigger by one unit. Meanwhile, if you bump into the walls or the body of snake then the game ends and you need to press the play again button of the pop-up to restart the game.


 # purpose of choosing this
 The main reason I got into coding was to make the game, however the webdev part of the lecture was the most exciting for me as i am a big fan of designing stuffs. So, for my final project i wanted to blend the idea of making game as well as doing it in the web in order to provide me knowledge to get into the web development path. so after completing the lectures and psets i learned JavaScript and styling css for more then a week and jumped into making this project.

#### Files in this project.

# index.html
Firstly index.html file. This is the main file where i have written the html to declare a board and other initialize other functionality of the game.

# css directory
This directory contains a css file, namely, style.css which contains all the designs and decorations. I have used various css tags to make the game look more attractive. For desining I took help from google search to find the tags appropriate to style my document. The game theme is based in the theme of cyborg space kind of stuff 

# js directory
This directory contains a JavaScript file called script.js which is the brain of the game. The logics and entire game is based in this section. I have used various JS predefined functions such as: window.requestAnimationFrame() document.getElementById() Math.round() window.addEventListener(), and also used user-defined function to implement my own logic. The logic started in css by adding grid of 18. Here i applied various concepts i learned in cs50x course such as: loops, conditionals, variabls, functions along with the logic building skill that the  problem sets of the course helped me develop. 

# background.png 
This file contains the background i have used for the game. The theme was recommended by gemini to make it look alluring and the image was generated using nano banana. The css of was completely based on this backgrond f

# main logic
Initially i started the code with a input direction declaration as (0,0) cordinates which basically means that the snake is not moving at the start of the game. Then it is followed by linking other documents and declaring the variable and constants used throughtout the code. I decided to put the snake in the {x: 13, y: 15} space as it looks more in the middle and easily visible. Similarly, i put the food {x: 6, y: 7} space to make it distant from the snake head.I seperated the snake head and body function to apply my logic for eating food and increasing the body each time the snake eats the food. Also, i used window.requestAnimationFrame() function instead of looping the game because it makes the browser run at optimal refresh rate and browser pauses the callback when the tab is not visible making it more efficient.The game engine function is the main part of the code as it is responsible for most significant stuffs dictating the game such as: movement of the snake, collision check, randomly sprawning the food when snake eats the food and also renders the snake and food most importantly. I have also used window event listener function to detect the keystroke and change the direction of the snake head followed by snake body. Whenever the current co-ordinates of the food matched that of the head the snake, program is so implemented that the snake body in increased by one unit and the food is moved to another location. When the head of the snake bumps in the walls or its own body then the gameover pop-up is displayed with the option of restart.

# credit
1. Google gemini for theme idea and background image
2. Google search for perfect CSS visuals
3. CS50x team for providing with great free course 


