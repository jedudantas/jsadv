class Player{
    hp;
    dmg;
    armor;
    spd;
    position;
    isAlive;
    job = "Adventurer";


    constructor(hpc,dmgc,armorc,spdc,positionc,isAlivec){
        this.hp = hpc;
        this.dmg = dmgc;
        this.armor = armorc;
        this.spd = spdc;
        this.position = positionc;
        this.isAlive = isAlivec;


    }

    moveChar(){
        if(this.isAlive == true){
        this.position += this.spd;
        } else {
            console.log("Morto não anda");
        };
    }

    damage(){
        if(this.hp==0){
            this.isAlive=false;
        } else {
            this.isAlive=true;
        }
    }
}



let fighter = new Player(10,2,1,6,0,true);

console.log(fighter);
fighter.moveChar();
console.log(fighter.position);