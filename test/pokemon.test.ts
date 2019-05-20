import { Pokemon } from '../src/class/pokemon.class';
import {Type} from "../src/class/type.class";
const type = new Type();

test('pokemon name', () => {
  expect(new Pokemon("Gatomon",type.dragon,10,100)._name).toBe("Gatomon");
});
test('pokemon type', () => {
  expect(new Pokemon("P1",type.dragon,10,100)._type).toBe(type.dragon);
});
test('pokemon speed', () => {
  expect(new Pokemon("P1",type.dragon,10,100)._speed).toBe(10);
});
