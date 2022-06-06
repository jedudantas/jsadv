import { Car } from "./modules/car";
import { Bike } from "./modules/bike";

let carro = new Car();
carro.andar();
document.getElementById('main').innerHTML = 'carro diz: ${carro.velocidade} '

let bike = new Bike();
bike.andar();
document.getElementById('main').innerHTML = 'bike diz: ${bike.velocidade}'