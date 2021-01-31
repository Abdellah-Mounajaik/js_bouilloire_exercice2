import Bouillir from "./class/bouillir.js"
import {chauffer} from './function/chauffer.js'
import remplire from "./function/remplir.js"

let eau = new Bouillir("vide", 0)
console.log(`La bouilloire est ${eau.etat}`);
remplire(eau)
console.log(`la bouilloire a ${eau.temperature} degré`);

chauffer(eau.temperature)