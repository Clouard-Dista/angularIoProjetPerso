import { Pokemon } from '../src/class/pokemon.class';
import { Type } from '../src/class/type.enum';
import { Battle } from '../src/class/battle.class';

test('battle first p1 > p2', () => {
    const p1 = new Pokemon("Gatomon",Type.Dragon,10,100);
    const p2 = new Pokemon("Agumon",Type.Ground,5,100);
    expect(new Battle(p1,p2).first()._name).toBe("Gatomon");
});

test('battle first  p1 < p2', () => {
    const p1 = new Pokemon("Gatomon",Type.Dragon,2,100);
    const p2 = new Pokemon("Agumon",Type.Ground,5,100);
    expect(new Battle(p1,p2).first()._name).toBe("Agumon");
});

test('battle first with same speed', () => {
    const p1 = new Pokemon("Gatomon",Type.Dragon,10,100);
    const p2 = new Pokemon("Agumon",Type.Ground,10,100);
    expect(new Battle(p1,p2).first()._name).toBe("Agumon");
});