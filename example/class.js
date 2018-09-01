"use strict";

class Food {
    constructor (name, protein, price) {
        this.name = name;
        this.protein = protein;
        this.price = price;
    }
    toString () {
        return `${this.name}-${this.protein}-${this.price}`;
    }
    print () {
        console.log(this.toString());
    }
}

const food = new Food('rice', 26, 0.35);
food.print();
console.log(food.name, food.protein, food.price);


class FatFood extends Food{
    constructor (name, protein, price) {
        super(name, protein, 0);
    }
    print () {
        super.print();
    }
}