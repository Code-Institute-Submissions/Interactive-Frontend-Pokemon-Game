//Game Operation will determine/manage layout of elements when clicked
//setting up character selection and pre-battle stage.
const GameOperation = {

    //This is the main method for gamestate setup
     setUpGame: function() {

    //When clicked will call upon these methods to select character + set battle.
       this.pokemonSelect();
       this.setUpBattle();

     }

     
}