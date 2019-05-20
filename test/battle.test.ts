import { Pokemon } from '../src/class/pokemon.class';
import { Battle } from '../src/class/battle.class';
import {Type} from "../src/class/type.class";
import {Attack} from "../src/class/attack.class";
const type = new Type();

test('battle first p1 > p2', () => {
    const p1 = new Pokemon("Gatomon",type.dragon,10,100);
    const p2 = new Pokemon("Agumon",type.sol,5,100);
    expect(new Battle(p1,p2).first()._name).toBe("Gatomon");
});

test('battle first  p1 < p2', () => {
    const p1 = new Pokemon("Gatomon",type.dragon,2,100);
    const p2 = new Pokemon("Agumon",type.sol,5,100);
    expect(new Battle(p1,p2).first()._name).toBe("Agumon");
});

test('battle first with same speed', () => {
    const p1 = new Pokemon("Gatomon",type.dragon,10,100);
    const p2 = new Pokemon("Agumon",type.sol,10,100);
    expect(new Battle(p1,p2).first()._name).toBe("Agumon");
});

test('total battle ', () => {
    const p1 = new Pokemon("Gatomon",type.dragon,10,100,new Attack("Trempette",type.eau,100,0));
    const p2 = new Pokemon("Agumon",type.sol,10,100,new Attack("Seisme",type.sol,100,-100));
    new Battle(p1,p2).start();
    console.log(p1._hp,p2._hp)
    expect(new Battle(p1,p2).win()._name).toBe("Agumon");
});