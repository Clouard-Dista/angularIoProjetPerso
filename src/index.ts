import {Battle} from "./class/battle.class";
import {Pokemon} from "./class/pokemon.class";
import {Type} from "./class/type.class";
const type = new Type();
const p1 = new Pokemon("P1",type.dragon,10,100);
const p2 = new Pokemon("P2",type.glace,7,50);
console.log(p1._name)

const  b1 = new Battle(p1,p2);
b1.first();