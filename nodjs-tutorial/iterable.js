// [Symbol.iterator]()

// const range = {
//     from: 1,
//     to: 8,
// }

// first method of using Symbol.iterator
// range[Symbol.iterator] = function () {
//     return {
//         current: this.from,
//         last: this.to,
//
//         next() {
//             if (this.current <= this.last) {
//                 return { done: false, value: this.current++ };
//             } else {
//                 return { done: true };
//             }
//         }
//     };
// };
//
// for (let num of range) {
//     console.log(num);
// }

// second method using Symbol.iterator
const range = {
	from: 1,
	to: 8,

	[Symbol.iterator]() {
		this.current = this.from;
		this.last = this.to;
		return this;
	},

	next() {
		if (this.current <= this.last) {
			return { done: false, value: this.current++ };
		}
		return { done: true };
	},
};

for (let num of range) {
	console.log(num);
}

// iteration over a seting and getting the value manually
let string = "hello";
let iterator = string[Symbol.iterator]();

while (true) {
	let result = iterator.next();
	if (result.done === false) console.log("I love programming");
	else break;
	console.log(result.value);
}

let arrayLike = {
	// has indexes and length => array-like
	0: "Hello",
	1: "World",
	length: 2,
};

// for (let num of arrayLike) console.log(num); /// array-like is not iterable vice versa, so [Symbol.iterator]() and for..of loop can not be use on them

//Array.from
//There’s a universal method Array.from that takes an iterable or array-like value and makes a “real” Array from it.
//hen we can call array methods on it.

console.log(Array.from(arrayLike));
let arr = Array.from(arrayLike);
arr.push("love");
console.log(arr);
console.log(Array.from(range, (num) => num * num));

let a = [1, 2, 3, 4, 5];
let iterator2 = a[Symbol.iterator]();
for (let num of a) {
	let result = iterator2.next();
	if (result.done) break;
	console.log(num);
}

// Map
let map = new Map();
map.set(1, "baby");
map.set("str", "string");
console.log(map.get("str1"));
console.log(map.keys());
let recipeMap = new Map([
	["cucumber", 500],
	["tomatoes", 350],
	["onion", 50],
]);
for (let veg of recipeMap.keys()) {
    console.log(veg);
}

// Set
// const set = new Set([1, 1, 2, 3, 4, 4, 5]);
// console.log(set);

const set = new Set();
let john = { name: 'John' }
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(mary);
set.add(john);
set.add(john);
console.log(set);
console.log(set.size)
console.log(set.clear())
console.log(set);

let map2 = new Map();

map2.set("name", "John");

let keys = map2.keys();

// Error: keys.push is not a function
keys = Array.from(keys);
keys.push("more");
console.log(keys);

function unique(arr) {
    const set = new Set(arr);
    return Array.from(set);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values))

let weakMap = new WeakMap();
let j = { name: 'Eric' }
weakMap.set(j,'john');
console.log(weakMap.get(j));

const keyObj = { john: 'john' } 
map.set(keyObj, 1);
console.log(map.get(keyObj.john));


//count user object
let u = { john: 'john' };
let visitCountMap = new WeakMap()
function countUser(user) {
    let count = visitCountMap.get(user) || 0;
    visitCountMap.set(user, count + 1)
    return count;
}

// let c = countUser(u);


// console.log(countUser(u));
// console.log(countUser(u));
// 
// u = null;
// 
// console.log(countUser(u));

let messages = [
    {text: "Hello", from: "John"},
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

function readMessage(arr) {
    let readMessages = new WeakSet();

    for (let i = 0; i < arr.length; i++) {
        readMessages.add(arr[i]);
        if(readMessages.has(arr[i])) {
            return true;
        }
    }

}

function readMessageDate(arr) {
    const readMessageDate = new WeakMap();

    for (let i = 0; i < arr.length; i++) {
        if ( readMessageDate.set(arr[i], new Date(2024, 8, 6))) {
            console.log(readMessageDate.get(arr[i]));
        }
    }
}

readMessageDate(messages)
const read = readMessage(messages);
console.log(read)

console.log("" === 0);