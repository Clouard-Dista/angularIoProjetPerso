import { Pokemon } from '../src/class/pokemon.class';
import {Type} from "../src/class/type.class";
import {Attack} from "../src/class/attack.class";
const type = new Type();

test('Attack battle ', () => {
    const p1 = new Pokemon("Gatomon",type.dragon,10,100,new Attack("Trempette",type.eau,100,0));
    const p2 = new Pokemon("Agumon",type.sol,10,100,new Attack("Seisme",type.sol,100,-100));
    p2._attack.play(p1)
    expect(p1.KO()).toBe(true);
});