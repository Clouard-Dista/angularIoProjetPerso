import {Type} from "./type.enum";

export class Pokemon {
	_name :string;
    _type :Type;
    _speed :number;
    _hpMax :number;
    _hp :number;
    _KO :boolean;

	constructor(name:string, type :Type, speed :number,pv :number) {
		this._name = name.charAt(0).toUpperCase() 
		+ name.slice(1).toLowerCase();
        this._type = type;
        this._speed = speed;
        this._hp = pv;
        this._hpMax = pv;
        this._KO = false;
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
    set speed(newSpeed : number) {
        this._speed = newSpeed;
    }
    get speed () : number{
        return this.type;
    }
    get KO () : number{
        return this.KO;
    }
    get hp () : number{
        return this._hp;
    }
    get hpMax () : number{
        return this._hpMax;
    }
    pv(value : number) {
        this._hp += value;
        if(this._hp>this._hpMax){
            this._hp = this._hpMax;
        }else if(this._hp <= 0){
            this._KO = true;
        }
    }
}