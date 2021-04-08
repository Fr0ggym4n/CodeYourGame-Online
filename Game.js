class Game {
    constructor(turnLeft = 10){
      this.turnLeft = turnLeft
    }

    newTurn = () => {
      this.turnLeft -= 1;
    }

    gameIsOver = () => {
      if (this.turnLeft === 0) return true;
      else if (Character.getAlivedPlayers().length < 2) return true;
    }

    watchStats = () => {
      Character.getAlivedPlayers().map(player => console.log(`${player.name} still have ${player.hp} life_points.`));
      console.log("The other players are dead");
    }

    targetPlayer = (playersBatch = Character.instances, i, playerAttacked = ' ') => {
      if (playersBatch.filter(player => player.name.toLowerCase() 
        !== playersBatch[i].name.toLowerCase()).find(player => player.name.toLowerCase() === playerAttacked.toLowerCase()) === undefined) {
        return false;
      } else return true;
    }

    newPlayer = (playerClass, newPlayersName) => {
      if (playerClass === "fighter") {
        let newPlayer = new Fighter(`${newPlayersName}`);
        Character.instances.push(newPlayer);
      };
      if (playerClass === "paladin") {
        let newPlayer = new Paladin(`${newPlayersName}`);
        Character.instances.push(newPlayer);
      };
      if (playerClass === "monk") {
        let newPlayer = new Monk(`${newPlayersName}`);
        Character.instances.push(newPlayer)
      };
      if (playerClass === "berzerker") {
        let newPlayer = new Berzerker(`${newPlayersName}`);
        Character.instances.push(newPlayer)
      };
      if (playerClass === "assassin") {
        let newPlayer = new Assassin(`${newPlayersName}`);
        Character.instances.push(newPlayer)
      };
    }
    startGame = () => {
      let addAPlayerToTheGame = prompt("Would you like to add a player to the game? (y/n)");

      if (addAPlayerToTheGame === "y" || addAPlayerToTheGame === "yes") 
      {
        let newPlayersClass = prompt('Which class would you like between "fighter", "paladin", "monk", "berzerker", "assassin"?');
        newPlayersClass = newPlayersClass.toLowerCase();

        while(newPlayersClass !== "fighter" && newPlayersClass !== "paladin" 
                  && newPlayersClass !== "monk" && newPlayersClass !== "berzerker" 
                      && newPlayersClass !== "assassin") {
          newPlayersClass = prompt("Oops, we didn't find your class. Please try again. ('fighter', 'paladin', 'monk', 'berzerker', 'assassin')");
        }

        let newPlayersName = prompt("What would be your player's name?");
        this.newPlayer(newPlayersClass, newPlayersName);
      }
        
      while (!this.gameIsOver()) {
        const turn = new Turn();
        turn.startTurn();
      }
      console.log("Game Is Over");
      Character.instances.filter(player => player.status === "Playing").map(player => {
        player.status = "Winner";
        console.log(`${player.name} won!`);
      });
    }
}
let newGame = new Game;