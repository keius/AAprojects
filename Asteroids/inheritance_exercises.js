//Surrogate inheritance
Function.prototype.inherits = function(parent) {
  function Surrogate() {}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

//Object.create inheritance
Function.prototype.inherits2 = function (parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};


function Animal (name) {
  this.name = name;
}//Animal

function Dog (name) {
  Animal.call(this, name);
}//Dog
Dog.inherits2(Animal); //inherit Animal


function Panda (name) {
  Animal.call(this, name);
}//Panda
Panda.inherits2(Animal);//inherit Animal


const saki = new Dog("saki");
console.log(saki.name);

const gummi = new Panda("gummi");
console.log(gummi.name);
