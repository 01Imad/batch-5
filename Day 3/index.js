// //  functional instantiation
// function Animal(name, energy) {
// 	let animal = {};
// 	animal.name = name;
// 	animal.energy = energy;
// 	animal.eat = function(amount) {
// 		console.log(`${this.name} is eating`);
// 		this.energy += amount;
// 	};
// 	animal.sleep = function(amount) {
// 		console.log(`${this.name} is slepping`);
// 		this.energy += amount;
// 	};
// 	animal.play = function(length) {
// 		console.log(`${this.name} is playing`);
// 		this.energy -= length;
// 	};

// 	return animal;
// }

// const leo = Animal('LEO', 7);

// const tiger = Animal('tiger', 10);

// //functional instantiation with shared methods
// const animalMethods = {
// 	eat(amount) {
// 		console.log(`${this.name} is eating`);
// 		this.energy += amount;
// 	},
// 	sleep(length) {
// 		console.log(`${this.name} is slepping`);
// 		this.energy += length;
// 	},
// 	play(length) {
// 		console.log(`${this.name} is playing`);
// 		this.energy -= length;
// 	}
// };
// function Animal(name, energy) {
// 	let animal = Object.create(animalMethods);
// 	animal.name = name;
// 	animal.energy = energy;

// 	return animal;
// }

// const leo = Animal('leo', 7);

// function Animal(name, energy) {
// 	// let animal = Object.create(Animal.prototype);
// 	console.log(this);
// 	this.name = name;
// 	this.energy = energy;
// 	// return animal;
// }
// Animal.prototype.eat = function(amount) {
// 	console.log(`${this.name} is eating`);
// 	this.energy += amount;
// };
// Animal.prototype.sleep = function(length) {
// 	console.log(`${this.name} is slepping`);
// 	this.energy += length;
// };

// Animal.prototype.play = function(length) {
// 	console.log(`${this.name} is playing`);
// 	this.energy -= length;
// };

// const leo = new Animal('Leo', 7);
// const leo1 = new Animal('Leo1', 71);

// //prototypal instantiation
// function Animal(name, energy) {
// 	// let animal = Object.create(Animal.prototype);
// 	console.log(this);
// 	this.name = name;
// 	this.energy = energy;
// 	// return animal;
// }
// Animal.prototype.eat = function(amount) {
// 	console.log(`${this.name} is eating`);
// 	this.energy += amount;
// };
// Animal.prototype.sleep = function(length) {
// 	console.log(`${this.name} is slepping`);
// 	this.energy += length;
// };

// Animal.prototype.play = function(length) {
// 	console.log(`${this.name} is playing`);
// 	this.energy -= length;
// };

// const leo = new Animal('Leo', 7);
// const leo1 = new Animal('Leo1', 71);

function a(cb){
    setTimeout(function(){
        console.log("from a")
        cb()
    }, 3000)
}

// function b(){
//     console.log("from b")
// }

a(() => {
    console.log("from b")
});