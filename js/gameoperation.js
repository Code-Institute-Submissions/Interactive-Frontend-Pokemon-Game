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

     }


}