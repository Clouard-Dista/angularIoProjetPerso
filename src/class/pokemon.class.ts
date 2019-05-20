import {ElementType} from "./ElementType.class";
import {Attack} from "./attack.class";

export class Pokemon {
	_name :string;
    _type :ElementType;
    _speed :number;
    _hpMax :number;
    _hp :number;
    _KO :boolean;
    _attack :Attack;

	constructor(name:string, type :ElementType, speed :number,pv :number,attack? :Attack) {
		this._name = name.charAt(0).toUpperCase() 
		+ name.slice(1).toLowerCase();
        this._type = type;
        this._speed = speed;
        this._hp = pv;
        this._hpMax = pv;
        this._KO = false;
        this._attack = attack || new Attack("Charge",new ElementType(9, "normal",[1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1]),100,10);
	}
	KO(){
	    return this._hp == 0;
	}
    pv(value : number) {
        this._hp += value;
        if(this._hp>this._hpMax){
            this._hp = this._hpMax;
        }else if(this._hp <= 0){
            this._hp = 0;
        }
    }
}