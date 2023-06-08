const eventEmitter = require('events');
const event = new eventEmitter();

event.on("order-pizza", (pizzaName) => {
    console.log("pizza ordered is", pizzaName)
})

event.emit("order-pizza","Margarreta");

const pizzaShop = require('./pizzaShop');
const pizza = new pizzaShop();
pizza.on("pizzaOrderNum",(num) => {
    console.log('Order Number is', num)
})
pizza.order();
