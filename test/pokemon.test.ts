import { Pokemon } from '../src/class/pokemon.class';
import { Type } from '../src/class/type.enum';

test('pokemon name', () => {
  expect(new Pokemon("P1",Type.Dragon,10)._name).toBe("P1");
});
test('pokemon type', () => {
  expect(new Pokemon("P1",Type.Dragon,10)._type).toBe(Type.Dragon);
});
test('pokemon speed', () => {
  expect(new Pokemon("P1",Type.Dragon,10)._speed).toBe(10);
});