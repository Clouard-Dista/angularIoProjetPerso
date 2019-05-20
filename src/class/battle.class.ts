import {Pokemon} from "./pokemon.class";

export class Battle {
    _Pokemon1 :Pokemon;
    _Pokemon2 :Pokemon;

    constructor(pokemon1:Pokemon, pokemon2:Pokemon) {
        this._Pokemon1 = pokemon1;
        this._Pokemon2 = pokemon2;
    }
    first (){
        return this._Pokemon1._speed>this._Pokemon2._speed ? this._Pokemon1._speed : this._Pokemon2._speed;
    }
}