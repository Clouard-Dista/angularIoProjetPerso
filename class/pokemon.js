class Pokemon {
	constructor(name) {
		this.name = name || "";
	}
	set name = function(name) {
		this.name = name.charAt(0).toUpperCase() 
		+ name.slice(1).toLowerCase();
	}
	get name = function() {
		return this.name;
	}
}
module.exports = Pokemon;