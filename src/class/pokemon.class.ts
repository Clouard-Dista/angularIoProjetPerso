
export class Pokemon {
	_name :string;

	constructor(name:string) {
		this._name = name.charAt(0).toUpperCase() 
		+ name.slice(1).toLowerCase();
	}
    set name(newName : string) {
        this._name = newName;
    }
    get name () : string{
        return this.name;
    }
}