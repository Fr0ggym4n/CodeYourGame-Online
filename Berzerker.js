class Berzerker extends Character{
    constructor(name, specialAtk = 'rage', status = 'Playing', hp, dmg, mana){
        super(hp = 8, dmg = 4, mana = 0);
        this.specialAtk = specialAtk;
        this.name = name;
        this.status = status;
    }

    rage = () => {
        if (this.isAlive()) {
            this.hp -= 1;
            this.dmg += 1;
        }
    }
}

let draven = new Berzerker("Draven");
Character.instances.push(draven);
console.log(draven.name);