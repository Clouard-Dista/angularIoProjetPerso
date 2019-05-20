class Pokemon {
	constructor(name) {
		this._name = name.charAt(0).toUpperCase() 
		+ name.slice(1).toLowerCase();
	}
	set name(newName) {
		this._name = newName;
	}
	get name () {
		return this.name;
	}
}
module.exports = Pokemon;