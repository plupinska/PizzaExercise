const fs = require("fs");
const text = fs.readFileSync("../input.txt").toString('utf-8');
const { pizzaDeliveriesAlone, pizzaDeliveriesWithFriend } = require('../src/pizzaProblem');

// Solution for Pizza Delivery Part 1

pizzaDeliveriesAlone(text); // returns 2565

// Solution for Pizza Delivery Part 2

pizzaDeliveriesWithFriend(text); // returns 2639