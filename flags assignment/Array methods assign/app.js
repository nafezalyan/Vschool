var fruit = ["banana", "apple", "orange", "watermelon"];
console.log("fruit: ", fruit);

var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
console.log("vegetables: ", vegetables);

vegetables.pop();
// console.log (vegetables)
fruit.shift();
console.log(fruit)
var newFruit=fruit.indexOf("orange")
console.log(newFruit)
fruit.push(1);
console.log(fruit)
console.log(vegetables.length)
vegetables.push(3);
console.log(vegetables)
var food=fruit.concat(vegetables);
console.log(food)
food.splice(4,2)
console.log(food)
food.reverse()
console.log(food)

console.log(food.toString());