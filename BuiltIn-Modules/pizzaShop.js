const EventEmitter = require('events');

class PizzaShop extends EventEmitter {
    constructor() {
        super()
        this.orderNumber = 0;
    }
    order() {
        this.orderNumber++;
        this.emit('pizzaOrderNum', this.orderNumber)
    }
}

module.exports = PizzaShop;