"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Attack {
    constructor(name, type, accuracy, power) {
        this._name = name;
        this._accuracy = type;
        this._power = accuracy;
        this._type = power;
    }
    play(cible) {
        cible.pv(this._power);
    }
}
exports.Attack = Attack;
