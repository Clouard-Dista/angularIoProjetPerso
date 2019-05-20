import {Battle} from "./class/battle.class";
import {Pokemon} from "./class/pokemon.class";
import {Type} from "./class/type.class";
import {Attack} from "./class/attack.class";
const type = new Type();

const p1 = new Pokemon("Gatomon",type.dragon,10,100,new Attack("Trempette",type.eau,0,0));
const p2 = new Pokemon("Agumon",type.sol,10,100,new Attack("Seisme",type.sol,100,-50));
new Battle(p1,p2).start();
new Battle(p1,p2).win();