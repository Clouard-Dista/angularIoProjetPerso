"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ElmentType {
    constructor(id, name, resistance) {
        this._id = id;
        this._name = name;
        this._resistance = resistance;
    }
    get id() {
        return this.id;
    }
    get name() {
        return this.name;
    }
    get resistance() {
        return this.resistance;
    }
}
exports.ElmentType = ElmentType;
