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

   },

     battle: function() {

     const title = document.querySelector(".title");
     const search = document.querySelector(".opponent-search");
     const stadium = document.querySelector(".stadium");
     const rocketOpponent = document.querySelector(".rocket-opponent");

     let rocketPokemonOne = new RocketPokemon("ekans", 100, 60, 50, 50, 50);
     let rocketPokemonTwo = new RocketPokemon("koffing", 100, 60, 100, 50, 40);
     let rocketPokemonThree = new RocketPokemon("meowth", 100, 50, 40, 40, 50);

     //Random Number Generator (RNG) to select 1 of 3 opponents
     //the math.floor math.random equation for working out a random number was taken from w3Schools.
     let rocketPokemonSelection = Math.floor(Math.random() * Math.floor(3));

     switch (rocketPokemonSelection) {

     case 0:
         rocketPokemon = rocketPokemonOne;
     break;
     case 1:
         rocketPokemon = rocketPokemonTwo;
     break;
     case 2:
         rocketPokemon = rocketPokemonThree;
     break;

     }

     title.innerHTML = '<p><h1>Fight!</h1></p>';
                                          //for css styling
     search.innerHTML = '<a href="#"><div class="attack-btn" onclick="PokemonAbilities.attackCalculation()"><h2>Attack!</h2></div></a>';

     stadium.innerHTML = '<img src="imgs/battle/stadium.png" class="stadium-img">';

     rocketOpponent.innerHTML = '<img src="imgs/rocket_sprites/' + rocketPokemon.rocketName + '.gif" class="chosen-rocket-pokemon"><div><h3>' + rocketPokemon.rocketName + '</h3><p class="rocketPokemon-hitpoints">HP: ' + rocketPokemon.hitPoints + '</p><p>ATK: ' + rocketPokemon.attack + '</p><p>DEF: ' + rocketPokemon.defense + '</p><p>SPEC: ' + rocketPokemon.special + '</p><p>SPEED: ' + rocketPokemon.speed + '</p></div>';

  }
}