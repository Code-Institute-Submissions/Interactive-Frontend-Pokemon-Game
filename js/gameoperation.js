//Game Operation will determine/manage layout of elements when clicked
//setting up character selection and pre-battle stage.
const GameOperation = {

    //This is the main method for gamestate setup
     setUpGame: function(pokemonName) {

    //When clicked will call upon these methods to select character + set battle.
       this.pokemonSelect(pokemonName);
       this.setUpBattle(pokemonName);

     },

     //method which takes Pokemon objects name a parameter for character select.
     pokemonSelect: function(pokemonName) {

       //Switch defining object data, depending on character selection.
       switch (pokemonName) {

         case 'bulbasaur':
           pokemon = new Pokemon(pokemonName, 100, 50, 50, 60, 50);
            break;
         case 'charmander':
           pokemon = new Pokemon(pokemonName, 100, 60, 40, 50, 60);
            break;
         case 'squirtle':
           pokemon = new Pokemon(pokemonName, 100, 50, 60, 50, 50);
            break;
         case 'pikachu':
           pokemon = new Pokemon(pokemonName, 100, 50, 30, 50, 90);
            break;
       }

       //I have used document.querySelector when dealing with the initial HTML page.
    const pokeBio = document.querySelector(".poke-bio");

    //Targeting 'poke-bio' section to replace with chosen character data
    pokeBio.innerHTML = '<img src="imgs/starter_sprites/' + pokemonName + '.gif" class="chosen-pokemon"><div><h3>' + pokemonName + '</h3><p class="pokemon-hitpoints">HP: ' + pokemon.hitPoints + '</p><p>ATK: ' + pokemon.attack + '</p><p>DEF: ' + pokemon.defense + '</p><p>SPEC: ' + pokemon.special + '</p><p>SPEED: ' + pokemon.speed + '</p></div>';

     },

     //this method will take the sections needed from the HTML file and assign
     //new data (paragraphs, buttons and images) for the pre-battle.
     setUpBattle: function() {

     const title = document.querySelector(".title");
     const search = document.querySelector(".opponent-search");
     const stadium = document.querySelector(".stadium");
     const rocketOpponent = document.querySelector(".rocket-opponent");

     title.innerHTML = '<p><h2>Find a Team Rocket opponent!</h2></p><p><h3>Click "Find Opponent" to battle!</h3></p>';
                                                              //for css styling
     search.innerHTML = '<a href="#"><div class="search-btn" onclick="GameOperation.battle()"><h3>Find Opponent!</h3></div></a>';
                                                            // for css styling
     stadium.innerHTML = '<img src="imgs/battle/rocket_logo.png" class="rocket-img">';

   }


}