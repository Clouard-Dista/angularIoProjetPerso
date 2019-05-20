import {Pokemon} from "./pokemon.class";
import {Type} from "./type.enum";

export class Attack {
    _name :string;
    _accuracy :number;
    _power :number;
    _type :Type;

	constructor(name:string, type :Type, accuracy :number, power :number) {
        this._name = name;
        this._accuracy = type;
        this._power = accuracy;
        this._type = power;
	}

	play(cible: Pokemon){
	    cible.pv(this._power);
	}
}