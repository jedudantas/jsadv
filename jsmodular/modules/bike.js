class Bike{
    velocidade = 0;

    andar(){
        if(this.velocidade > 0){
            console.log("Já tá rodando")
        } else {
            this.velocidade = 5;
            console.log("Tacale pau marcos");
        }
    }
}

export {Bike};