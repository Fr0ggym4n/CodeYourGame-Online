class Turn extends Game {
    constructor(nbTurn = 1, turnLeft){
        super(turnLeft);
        this.nbTurn = nbTurn;
        
    }

    nbTurn = () => {
        this.nbLeft += 1;
    }

    startTurn = () => {
        let playersBatch = Character.shufflePlayer();
  
        alert(`Round ${this.nbTurn}`);
  
        for (let i = playersBatch.length - 1; i >= 0; i--) {
            let playerAttacked = prompt(`It's time for ${playersBatch[i].name} to play. Who do you want to attack?`);
  
            while (!this.targetPlayer(playersBatch, i, playerAttacked)) {
                playerAttacked = prompt(`The player ${playerAttacked} is not playing, please enter a new player name.`);
            }
            playerAttacked = playersBatch.find(player => player.name.toLowerCase() === playerAttacked.toLowerCase());
  
            let atkType = prompt("Do you want to use your special attack ? (y/n)");
  
            if (atkType === "y" || atkType === "yes") {
                let nbDmg = playersBatch[i].specialAtk(playerAttacked);
            } else {
                let nbDmg = playersBatch[i].dealDamage(playerAttacked);
            }
            console.log(`${playersBatch[i].name} attacking ${playerAttacked.name}.\n 
                         ${playersBatch[i].name} gives ${nbDmg} dammages to ${playerAttacked.name}.\n 
                         ${playerAttacked.name} have ${playerAttacked.hp} life_points.`);
        }
        let stillAlive = playersBatch.filter(player => player.isAlive());
        stillAlive.map(player => 
            console.log(`\n ${player.name} is still alive with ${player.hp} life_points and ${player.mana} mana_points.`)
        );
        this.newTurn();
        this.nbTurn();
        return stillAlive;
    }
}