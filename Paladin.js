class Paladin extends Character{
    constructor(name, specialAtk = 'healingLightning', status = 'Playing', hp, dmg, mana){
        super(hp = 16, dmg = 3, mana = 160);
        this.specialAtk = specialAtk;
        this.name = name;
        this.status = status;
    }
    healingLighting = (victim) => {
        if (this.mana >= 40 && victim.isAlive()) {
            this.mana -= 40;
            victim.takeDamage(4);
            this.hp += 5;
            if (this.hp >= 16) this.hp = 16;
            return 4;
        } else {
            console.log("Mana\'s required for using that spell.");
        }
    }
}
let ulder = new Paladin("Ulder");
Character.instances.push(ulder);
console.log(ulder.name);