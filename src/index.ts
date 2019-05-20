import {Battle} from "./class/battle.class";
import {Pokemon} from "./class/pokemon.class";
import {Type} from "./class/type.enum";

const p1 = new Pokemon("P1",Type.Dragon,10,100);
const p2 = new Pokemon("P2",Type.Ice,7,50);
console.log(p1.name)

const  b1 = new Battle(p1,p2);
b1.first();