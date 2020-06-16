# Interactive Frontend Pokemon Starter Battle Game
-------------------------------------------------------------------------------------------
This turn based game was designed to have fun and best your opponent in a simple Pokemon 
battle.

Pokemon trainers will choose your favourite starter from the Kanto region 
(Bulbasaur, Charmander Squirtle, Pikachu) and battle against other starter Pokemon from 
the enemy Team Rocket (Ekans, Koffing, Meowth).

The goal is to beat your opponent in a 1v1 pokemon battle with single attacks!

## UX
-------------------------------------------------------------------------------------------
This application is intended for gamers. The user will by the end of the game achive a win 
or loss status against their opponent in a single click per turn battle. The game is intended
to be light hearted and fun.

The wireframes for this project are saved in the game files in the 'wireframes' folder. 
The application does not match the wireframes due to time but the functionality of the app by
the end of development was the priority. In the future i wish to impliment more interaction
for user experience. 

## Features
-------------------------------------------------------------------------------------------
### Existing Features
The user will select 1 of 4 starter Pokemon at the begining of the game based on personal
favourites or skills listed in the Pokmeons bio. The user will then search for an opponent 
to battle against.

Random number generator (RNG) will determine an opponent from the pool of (3) Team Rocket
Pokemon implimemted into the game. Users will then attack their opponent with the input 
button displayed to initiate the battle. To decide who will attack first, the Pokemons speed
and special stats will be compared and the higher tier will attack first. 

Attacks are calculated depending on the characters statistics so Pokemon attack values can 
vary. To cobat this and not make the game too unbalanced, RNG is again used here to determine
the amount of times a Pokemon will hit per turn. 

At the end of the battle the user will be alerted whether they won or lost the battle and 
will be prompted to refresh the page to play again if they wish.

### Future Features
- Impliment more attack moves/options and option to defend that turn
- Add option to heal Pokemon for a certain amount of HP
- Sort out some balancing issues among pokemon statistics
- The game is not styled to the standard that I had hoped for in the timeframe of this 
  project because of this the game will likely undergo a complete CSS styling change in the
  near future

## Technologies Used
-------------------------------------------------------------------------------------------
### Languages
- HTML
- CSS
- Javascript

### Editors
- Atom
- Gitpod IDE 

## Testing
-------------------------------------------------------------------------------------------
Earlier stages of development I was constantly testing the "onclick=" event handlers which 
are the main interaction point of the app. These where initailly testeed with undefined 
parameters and failed.

Once defined these were tested throughout the development stages when the same elements were
being changed with js.  were tested on a my desktop and a Samsung Galaxy tablet as
mobile is where I mostly expected the users to be. Initial problems came from errors stating 
undefined functions/methods still within the gameoperation.js file. These were eventally 
found by using the js debugger; mehthod and Chrome developer tools, Sources, breakpoints.   

towards the end of current development the link to my previewed game was send to members of
my gaming/stream community to test as I do with the majority of my projects. These test gave
me valuble information on what was and wasnt working correctly at the end point. 

The results of the final user test were successful with only critisisms stated in the future
features section of the readme.md, but with no errors in code. 

## Deployment
-------------------------------------------------------------------------------------------
https://oatsrx.github.io/Interactive-Frontend-Pokemon-Game/
^^^^^^This project has been deployed to GitHub Pages^^^^^^^

## Credits
-------------------------------------------------------------------------------------------
### Content
Pokemon bio's - https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_base_stats_(Generation_I)

### Media
Pokemon sprite .gifs were obtained from - https://pokemondb.net/sprites
