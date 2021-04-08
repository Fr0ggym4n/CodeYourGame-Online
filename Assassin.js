class Assassin extends Character{
    constructor(name, specialAtk = 'shadowHit', status = 'Playing', hp, dmg, mana){
        super(hp = 6, dmg = 6, mana = 20);
        this.specialAtk = specialAtk;
        this.name = name;
        this.status = status;
    }

    shadowHit = (victim) => {
        if (this.mana >= 20 && victim.isAlive()) {
            this.mana -= 20;
            victim.takeDamage(7);
            this.specialAtk.targetPlayer = victim;

            if (this.specialAtk.targetPlayer.status === 'Playing') {
                this.takeDamage(7);
                console.log(`${this.name} gets -7 life_points because his opponent was not dead.`);
            }
            return 7;
        } else {
            console.log("Mana\'s required for using that spell.");
        }
    }
}

let carl = new Assassin("Carl");
Character.instances.push(carl);
console.log(carl.name);