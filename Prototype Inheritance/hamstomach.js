let hamster = {

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
    stomach: [],
  __proto__: hamster
};

let lazy = {
     stomach: [],
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple
