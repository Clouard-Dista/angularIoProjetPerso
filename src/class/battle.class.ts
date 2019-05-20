import {Pokemon} from "./pokemon.class";

export class Battle {
    _Pokemon1 :Pokemon;
    _Pokemon2 :Pokemon;

    constructor(pokemon1:Pokemon, pokemon2:Pokemon) {
        this._Pokemon1 = pokemon1;
        this._Pokemon2 = pokemon2;
    }
    first (){
        return this._Pokemon1._speed>this._Pokemon2._speed ? this._Pokemon1 : this._Pokemon2;
    }
    second (){
        return this._Pokemon1._speed<=this._Pokemon2._speed ? this._Pokemon1 : this._Pokemon2;
    }
    finish(){
        return this._Pokemon1.KO()||this._Pokemon2.KO()
    }
    win(){
        if(this.finish()){
            return this._Pokemon1.KO() ? this._Pokemon2 : this._Pokemon1
        }
        return null
    }
    start(){
        const first = this.first();
        const second = this.first();
        while(this.finish()!= true){
            first._attack.play(second);
            if(!second.KO()){
                second._attack.play(first);
            }
        }
    }
}