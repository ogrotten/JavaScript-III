/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global - without context, `this` is in the context of either the Global or Window object
* 2. Implicit - when using an object method, `this` context is implied to be the object left of the dot
* 3. New - when using a constructor, `this` context is of the object built by the constructor
* 4. Explicit - when using bind/apply/call, `this` context explicitly defined.
"half stretch" answer to all 4: `this` generally refers to the parent context of where it's used.
In the case of Explicit, the value of `this` is overridden to be what you give it. 
	(give example of something about Array())
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this.Array.prototype) // refers to array on the Window (in this case) object.

// Principle 2
// code example for Implicit Binding
let kids = {
	first: "Schuyler",
	second: "Bennett",
	third: "Valkyrie",
	fourth: "Maxx",
	fifth: "DeLenn",
	middle: function(){
		console.log(`middle kid is ${this.third}`)
	}
}
kids.middle()

// Principle 3
// code example for New Binding
function Kids (incoming) {
	this.incoming = incoming,  // this `this` threw me for a minute
	this.first = "Schuyler",
	this.second = "Bennett",
	this.third = "Valkyrie",
	this.fourth = "Maxx",
	this.fifth = "DeLenn",
	this.favorite = function(){
		console.log(`My favorite kid is ${this.incoming}`);
	};
}

const best = new Kids('all of em.');
best.favorite();


// Principle 4
// code example for Explicit Binding

function car(){
	console.log(`${this.model}`);
}

const carData = {
	make: "Honda",
	model: "Civic",
	year: "2005",
}

car.call(carData);