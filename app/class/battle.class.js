"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Battle {
    constructor(pokemon1, pokemon2) {
        this._Pokemon1 = pokemon1;
        this._Pokemon2 = pokemon2;
    }
    first() {
        return this._Pokemon1._speed > this._Pokemon2._speed ? this._Pokemon1 : this._Pokemon2;
    }
}
exports.Battle = Battle;
