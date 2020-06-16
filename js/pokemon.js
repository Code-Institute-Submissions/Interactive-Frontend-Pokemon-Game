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