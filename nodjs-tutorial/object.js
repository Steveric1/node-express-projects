// let fruit = "orange";
// 
// let user = {
// 	name: "John",
// 	age: 28,
// 	"likes birds": true,
// 	[fruit]: 10,
// };

// console.log(user["likes birds"])
// delete user["likes birds"];

// console.log(user.orange);
// console.log(user.noSuchProperty === undefined);
// 
// // Instead I can use special operator 'in'
// const name = "name";
// console.log(name in user);
// 
// const codes = {
// 	"+49": "Germany",
// 	"41": "Switzerland",
// 	"44": "Great Britain",
//     "1": "USA",
// };
// 
// for (let code in codes) {
//     console.log(code);
// }

// let firstName = "Eric";
// let secondName = firstName;
// secondName = "Steve"
// 
// console.log(secondName)
// console.log(firstName)

// const firstName = { name: 'Eric' }
// const secondName = firstName;
// secondName.name = "Steve"
// 
// console.log(secondName.name)

//Object.assign
// let permission1 = { canView: true };
// let permission2 = { canEdit: false };

// Copies all properties of permission1 and permission2 to user object
// Object.assign(user, permission1, permission2)
// console.log(user.canEdit);
// console.log(user.canView)

// Adding method to an object
// let sayHi = () => console.log("hello");
// user.say = sayHi;
// console.log(user.say());


let user = {
	name: "John",
	age: 28,
	"likes birds": true,
	sayHi() {
        const info = "My name is " + this.name + " and I am " + this.age + "years old";
        console.log(info);
    },
};


function greetings() {
    console.log("How are you " + this.name)
}

user.greet = greetings;
user.sayHi();
user['sayHi']()
user['greet']()
// user = null;

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      console.log( this.step );
      return this;
    }
};

ladder.up().up().down().showStep().down().showStep();


function BigUser() {
    if (!new.target) return new BigUser();
    this.name = "John";
    return {
        name: "Eric" // it overwrite the 'this keyword'
    }
}

console.log( new BigUser().name );

// Optional chanining
if (user?.name === undefined) {
    console.log("User object is not defined")
} else {
    console.log("User object is defined.")
};

if (user.isAdmin?.() !== undefined) {
    console.log('Function exists');
}
console.log("function does not exist");

let arr = [[1, 2, 3, 4]];
if (arr?.[0] !== undefined) {
    for (let i = 0; i < arr[0].length; i++) console.log(arr[0][i]);
} else {
    console.log("The arry is undefined!");
}

// Symbol is a uniqure primitive value with optional description
let id22 = Symbol('id')
user.id22 = 1
console.log(user.id22);

let id1, id2;
id1 = Symbol('first id')
id2 = Symbol('second id')

console.log(id1 === id2)

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log( Symbol.keyFor(globalSymbol) ); // name, global symbol
console.log( Symbol.keyFor(localSymbol) ); // undefined, not global

console.log( localSymbol.description );
console.log(globalSymbol.description)

// System symbol for conversion  Symbol.toPrimitive
console.log(user);

let user2 = {
    name: 'John',
    money: 1000,

    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == "string" ? "name: " + `{name: "${this.name}"}` : this.money
    }
};
console.log(user2)

// Using toString and valueOf instead of Symbol.toPrimitive
let user = {
    name: "John",
    money: 1000,
  
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
  
  };