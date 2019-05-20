class Pokemon {
	constructor(name) {
		this.name = name || "";
	}
	set name (name) {
		this.name = name.charAt(0).toUpperCase() 
		+ name.slice(1).toLowerCase();
	}
	get name () {
		return this.name;
	}
}
module.exports = Pokemon;