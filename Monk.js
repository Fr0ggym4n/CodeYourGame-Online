class Monk extends Character{
    constructor(name, specialAtk = 'heal', status = 'Playing', hp, dmg, mana){
        super(hp = 8, dmg = 2, mana = 200);
        this.specialAtk = specialAtk;
        this.name = name;
        this.status = status;
    }
    heal = () => {
        if (this.mana >= 25 && this.isAlive()) {
            this.mana -= 25;
            this.hp += 8;
            if (this.hp >= 8) this.hp = 8;
            return -8;
        } else {
            console.log("Mana\'s required for using that spell.");
        }
    }
}
let moana = new Monk("Moana");
Character.instances.push(moana);
console.log(moana.name);