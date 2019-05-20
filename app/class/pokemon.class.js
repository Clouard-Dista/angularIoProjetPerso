"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pokemon {
    constructor(name, type, speed, pv) {
        this._name = name.charAt(0).toUpperCase()
            + name.slice(1).toLowerCase();
        this._type = type;
        this._speed = speed;
        this._hp = pv;
        this._hpMax = pv;
        this._KO = false;
    }
    set name(newName) {
        this._name = newName;
    }
    get name() {
        return this.name;
    }
    set type(newType) {
        this._type = newType;
    }
    get type() {
        return this.type;
    }
    set speed(newSpeed) {
        this._speed = newSpeed;
    }
    get speed() {
        return this.type;
    }
    pv(value) {
        this._hp += value;
        if (this._hp > this._hpMax) {
            this._hp = this._hpMax;
        }
        else if (this._hp <= 0) {
            this._KO = true;
        }
    }
    get KO() {
        return this.KO;
    }
    get hp() {
        return this._hp;
    }
    get hpMax() {
        return this._hpMax;
    }
}
exports.Pokemon = Pokemon;
