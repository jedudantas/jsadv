class Player{
    hp;
    dmg;
    armor;
    spd;
    position;
    isAlive;
    job = "Adventurer";

    moveChar(){
        if(this.isAlive == true){
        this.position += this.spd;
        }
    }

}