import {Type} from "./type.enum";

export class Pokemon {
	_name :string;
	_type :Type;

	constructor(name:string, type :Type) {
		this._name = name.charAt(0).toUpperCase() 
		+ name.slice(1).toLowerCase();
        this._type = type;
	}
    set name(newName : string) {
        this._name = newName;
    }
    get name () : string{
        return this.name;
    }
    set type(newType : Type) {
        this._type = newType;
    }
    get type () : Type{
        return this.type;
    }
}