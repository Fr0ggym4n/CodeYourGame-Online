const LOSER = 'Loser';
const WINNER = 'Winner';
const PLAYING = 'Playing';

class Character {
    constructor(hp, dmg, mana, status = PLAYING){
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.status = status;
    }

    isAlive = () => {
        if (this.hp > 0) return true;
        else {
            this.status = LOSER;
            return false;
        }
    }

    takeDamage = (dmgReceived) => {
        if (this.isAlive()) this.hp -= dmgReceived;
        else this.status = LOSER;
    }

    dealDamage = (victim) => {
        if (victim.isAlive()) {
            victim.hp -= this.dmg;

            if(victim.hp < 1){
                victim.status = LOSER;
                console.log(`${this.name} kill ${victim.name}, ${this.name} win 20 mana`);
                this.winMana();
            }
            return this.dmg;
        } else return console.log("Can't attack a dead player, sorry");
    }
    
    winMana = () => {
        this.mana += 20;
        let playerClass;

        if (playerClass === 'Assassin') {
            if (this.mana >= 20){
                this.mana = 20;
            }
        }
        if (playerClass === 'Berzerker') {
            if (this.mana > 0){
                this.mana = 0;
            }
        }
        if (playerClass === 'Fighter') {
            if (this.mana >= 40){
                this.mana = 40;
            }
        }
        if (playerClass === 'Monk') {
            if (this.mana >= 200){
                this.mana = 200;
            }
        }
        if (playerClass === 'Paladin') { 
            if (this.mana > 160){
                this.mana = 160;
            }
        }
        return this.mana;
    }
}

Character.instances = [];

Character.getAlivedPlayers = () => {
    return Character.instances.filter(player => player.status === 'Playing');
}

Character.shufflePlayer = () => {
    let newBatch = Character.instances.filter(player => player.status != LOSER);
    return newBatch.sort(() => Math.random() - 0.5);
}