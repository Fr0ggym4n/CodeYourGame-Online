class Fighter extends Character {
    constructor(name, specialAtk = 'darkVision', status = 'Playing', hp, dmg, mana){
        super(hp = 12, dmg = 4, mana = 40);
        this.specialAtk = specialAtk;
        this.name = name;
        this.status = status;
    }

    darkVision = (victim) => {
        if (this.mana >= 20 && victim.isAlive()) {
            this.mana -= 20;
            victim.takeDamage(5);
            this.hp += 2;
            return 5;
        } else {
            console.log("Mana\'s required for using that spell.")
        }
    }
}

let grace = new Fighter("Grace");
Character.instances.push(grace);
console.log(grace.name);