import { Pokemon } from '../src/class/pokemon.class';
import { Battle } from '../src/class/battle.class';
import {Type} from "../src/class/type.class";
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