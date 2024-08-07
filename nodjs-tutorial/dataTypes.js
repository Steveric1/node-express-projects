// toFixed method of number
// toFixed is a number method when user primitive as an object
// n = 2.5
// console.log(n.toFixed(0))
// let n = 1.23556;
// console.log(n.toString(36));
// console.log(12345..toString())

// Rounding
// Math.floor round down and pick the number before dot
// console.log(Math.floor(0.7))
// console.log(Math.floor(-3.2))
// Math.ceil round up 
console.log(Math.ceil(4.1));
console.log(Math.ceil(-3.2))
// Math.round rounds to the nearest integer
// console.log(Math.round(5.5568));
// console.log(Math.round(-3.5))
// Math.trunc removing anything after the decimal point without rounding
// console.log(Math.trunc(3.444444))

// Imprecision
n = 0.1 + 0.2; // console will give me 0.30000000004
// console.log(0.3 == +n.toFixed(1) ? true : false ); // You can use toFixed or Math.round to correct the imprecision

// parseInt & parseFloat
//The parseInt() function has an optional second parameter. It specifies the base of the numeral system, so parseInt can also parse strings of hex numbers, binary numbers and so on:
// 
// alert( parseInt('0xff', 16) ); // 255
// alert( parseInt('ff', 16) ); // 255, without 0x also works
// 
// alert( parseInt('2n9c', 36) ); // 123456
// console.log(Math.random())
// console.log(Math.random() * (5 - 1 + 1));

/*
Question

A random integer from min to max
importance: 2
Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

Any number from the interval min..max must appear with the same probability.
*/

const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(randomInteger(1, 5));

const randFunc = (min, max) => {
    console.log(Math.random() * (max - min + 1))
}

randFunc(1, 5)
console.log(0.2 + 0.2)



// function readNumber() {
//     let read = prompt('', 0);
//     while (!isFinite(read)) {
//         if (read === "" || read === null) {
//             console.log("null");
//             break;
//         }
// 
//         if (isFinite(read)) {
//             const r = "read: " + read;
//             console.log(r);
//             break;
//         }
//     }
// }
// 
// readNumber()

// indexOf return 1 if subtr is found else -1
let str = "Widget with id";
console.log(str.indexOf('with'));
console.log(str.lastIndexOf('id'))
console.log(str.indexOf('id', 3))
// console.log(str.indexOf("id"));

// the modern method of searching subtr in a string is str.includes, startWith, endWith
console.log(str.includes('id', 10))
console.log(str.startsWith('wi', 7))
console.log(str.endsWith("id"))

//There are 3 methods in JavaScript to get a substring: substring, substr and slice.
console.log("Javascript".substring(0, 4));
console.log("Javascript".substring(4, 0)); // swap -> start and end, in this case start = 0 and end = 5

// str.substr we can specify the length unlike slice and substring that need pos
let st = "stringify";
console.log(st.substr(-4, 2));

// str.codePointAt(pos)
//Returns a decimal number representing the code for the character at position pos:

console.log("Z".codePointAt(0));
console.log(str.codePointAt(2));

// String.fromCodePoint(code)
//Creates a character by its numeric code
console.log(String.fromCodePoint(65));
console.log(String.fromCharCode(97))

/*
 We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.
*/
let extractCurrencyValue = (str) => {
    extracted = str.slice(1);
    return Number(extracted);
}

console.log(extractCurrencyValue('$120') === 120);

console.log('I love'.at(0))
fruits = []
fruits.age = 25
fruits[999] = 5
console.log(fruits.age);
console.log(fruits[999])
let arr = ["Apple", "Orange", "Pear"];
for (let key in arr) {
    console.log(key);
}

let name = {
    name: "Eric",
    age: 25,
}
for (let key in name) {
    console.log(key)
}

// let styles = ["Jazz", "Classic", "Blues"];
// styles.push("Rock-n-Roll", "Rap")
// styles.unshift("Reggae", "Hip-Hop")
// console.log(styles)
// console.log(styles[Math.floor((styles.length - 1) / 2)])

