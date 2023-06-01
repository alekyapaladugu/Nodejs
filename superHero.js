class SuperHero {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
//Module Caching - ONly One instance
// module.exports = new SuperHero("batman");

//Different instances - Pass class name to create multiple instances
module.exports = SuperHero;