const add = require("./add.js");
const sum = add(2, 3);
console.log("Sum is", sum);
const sum1 = add(10);
console.log("Sum2 is", sum1);
console.log("Hello World");

require("./batman.js");
require("./superman.js");

const superhero = require("./superHero.js");

const batman_inst = new superhero("Batman");
console.log(batman_inst.getName());
batman_inst.setName("Bruce Wayne");
console.log(batman_inst.getName());

const superhero1 = require("./superHero.js");

const superman_inst = new superhero1("SuperMan");
console.log(superman_inst.getName());

const math = require("./math.js");

const { addition, subtract } = math;
console.log("Addition result", addition(2, 3));
console.log("Subtraction result", subtract(9, 5));

const data = require('./user.json');
console.log('Name', data.name)
