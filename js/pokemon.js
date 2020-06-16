//Pokemon variable declared globally for reuse.
let pokemon;

function Pokemon(pokemonName, hitPoints, attack, defense, special, speed) {

  this.pokemonName = pokemonName;
  this.hitPoints = hitPoints;
  this.attack = attack;
  this.defense = defense;
  this.special = special;
  this.speed = speed;

}

let PokemonAbilities = {

  attackCalculation: function() { // we need to determine who will attack first

    const pokemonSpeed = pokemon.speed;
    const rocketSpeed = rocketPokemon.speed;

    //Attack calculations for Pokemon based on Pokemons stats
    //these statistics are base on real pokemon stats from the games
    //and damage calculations based more on my methods rather than
    //methods used in GameBoy games.
    const pokemonAttack = function() {

      let dmgCalc;

      //Traditionally in Pokemon a character will attack if their speed is greater
      //than their opponents, i wanted to change this slighty due to some speed being the
      //same among my characters.
      if (pokemon.special > 50) {

        dmgCalc = pokemon.attack * pokemon.special / 1000 * 3;

      } else {

        dmgCalc = pokemon.attack * pokemon.speed / 1000 * 3;
      }

      const outputDamage = dmgCalc;

     //So that we don't hit the same damage every turn the number of hits will vary.
     //Random Number Generator (RNG) to select number of hits.
     //the math.floor math.random equation for working out a random number was taken from w3Schools.
      const timesHit = Math.floor(Math.random() * Math.floor(4)  + 1);
      //console.log
      const attackValues = [outputDamage, timesHit];

      return attackValues;

    }

    const rocketAttack = function() {

      let dmgCalc;

      if (rocketPokemon.special > 50) {
        dmgCalc = rocketPokemon.attack * rocketPokemon.special / 1000 * 3;
      } else {
        dmgCalc = rocketPokemon.attack * rocketPokemon.speed / 1000 * 3;
      }

      const outputDamage = Math.floor(dmgCalc);

      const timesHit = Math.floor(Math.random() * Math.floor(4)) + 1;

      //Assigning the Pokemon attack values to an array to call upon later.
      const attackValues = [outputDamage, timesHit];

      return attackValues;

    }

      //The hitpoints will display current health of either pokemon during the battle.
    let pokemonHp = document.querySelector(".pokemon-hitpoints");
    let rocketPokemonHp = document.querySelector(".rocketPokemon-hitpoints");

    if (pokemonSpeed >= rocketSpeed) {

      // PokemonAttack will be the total of outputDamage + timesHit.
      const pokemonAttackValues = pokemonAttack();
      const dmgTotal = pokemonAttackValues[0] * pokemonAttackValues[1];
      //console.log
      //The hitpoints will display current health of either pokemon during the battle.
      rocketPokemon.hitPoints = rocketPokemon.hitPoints - dmgTotal;

      //I chose alerts to display battle data
      alert("Your Pokemon hit " + pokemonAttackValues[0] + " damage " + pokemonAttackValues[1] + " times!");

      if (rocketPokemon.hitPoints <= 0) {
        alert("You win! Refresh browser to play again.");
        pokemonHp.innerHTML = 'HP: ' + pokemon.hitPoints;
        rocketPokemonHp.innerHTML = 'HP: 0';
      } else {
        rocketPokemonHp.innerHTML = 'HP: ' + rocketPokemon.hitPoints;

        // RocketAttack will be the total of outputDamage + timesHit.
        const rocketAttackValues = rocketAttack();
        const dmgTotal = rocketAttackValues[0] * rocketAttackValues[1];

        pokemon.hitPoints = pokemon.hitPoints - dmgTotal;
        alert("Rocket's Pokemon attacked with " + rocketAttackValues[0] + " damage " + rocketAttackValues[1] + " times!");

        //This if, else, else if statement determines what to display if the player loses or wins the battle
        if (pokemon.hitPoints <= 0) {
          alert("You lost the battle :( Refresh the page to try again!");

          // set HP to 0 to stop minus numbers incase of overkill turn
          pokemonHp.innerHTML = 'HP: 0';
          rocketPokemonHp.innerHTML = 'HP: ' + rocketPokemon.hitPoints;
        } else {
          pokemonHp.innerHTML = 'HP: 0' + pokemon.hitPoints;
        }
      }
    } else if (rocketSpeed >= pokemonSpeed) {   //if the opponent attacks first.

      const rocketAttackValues = rocketAttack();
      const dmgTotal = rocketAttackValues[0] * rocketAttackValues[1];

      pokemon.hitPoints = pokemon.hitPoints - dmgTotal;
      alert("Rocket's Pokemon attacked with " + rocketAttackValues[0] + " damage " + rocketAttackValues[1] + " times!");

      if (pokemon.hitPoints <= 0) {
        alert("You lost the battle :( Refresh the page to try again!");

        rocketPokemonHp.innerHTML = 'HP: ' + rocketPokemon.hitPoints;
        pokemonHp.innerHTML = 'HP: 0';
      } else {
        pokemonHp.innerHTML = 'HP: ' + pokemon.hitPoints;
                                                              // pokemon attacks
        const pokemonAttackValues = pokemonAttack();
        const dmgTotal = pokemonAttackValues[0] * pokemonAttackValues[1];

        rocketPokemon.hitPoints = rocketPokemon.hitPoints - dmgTotal;

        alert("You hit " + pokemonAttackValues[0] + " damage " + pokemonAttackValues[1] + " times!");

        if (rocketPokemon.hitPoints <= 0) {
          alert("You won the battle! To play again please refresh the page!");
          rocketPokemonHp.innerHTML = 'HP: 0';
          pokemonHp.innerHTML = 'HP: ' + pokemon.hitPoints;
        } else {
          rocketPokemonHp.innerHTML = 'HP: ' + rocketPokemon.hitPoints;
        }
      }
    }
  }

}