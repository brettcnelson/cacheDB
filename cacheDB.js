// create DB - add collections - find collections - set collection models - add to collections - delete collections/dbs
// HTML: view dbs/collections/models/localStorage/sessionStorage

var DB = function(name) {
	if (!name) {alert('db must have a name')}
	this.name = name;
	this.collections = {}
}

DB.prototype.addCollection = function(name) {
	if (this.collections[name]) {alert('a collection with that name already exists')}
	if (!name) {alert('the collection must have a name')}
	this.collections[name] = {}
}

DB.prototype.deleteCollection = function(name) {
	if (!name) {alert('must give name to delete collection')}
	if (name && !this.collections[name]) {alert('no collection with that name')}
	delete this.collections[name]
}

DB.prototype.getCollections = function() {
	if (Object.keys(this.collections).length === 0) {alert('no collections')}
	console.log(this.collections)
}


var main = new DB('main')
main.addCollection('first')
main.addCollection('second')
main.getCollections()
console.log(main)