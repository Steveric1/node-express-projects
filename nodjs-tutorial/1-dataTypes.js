// Array method

const { remove } = require("lodash");

// arr.splice method is use to delete from an array and also modify the array by adding element into the arr
// let arr = ["I", "study", "javascript", "right", "now"];
// console.log(arr.splice(0, 3, "let's", "dance"));
// console.log(arr);

// arr.slice make a copy of the original array and modify it
// let arr = ["I", "study", "javascript", "right", "now"];
// let copy = arr.slice();
// console.log(arr);
// console.log(copy.slice(0, 2));
// console.log(copy)

// The method arr.concat creates a new array that includes values from other arrays and additional items.
// console.log(arr.concat(copy.slice(3), ["I", "love", "programming"]));

// The arr.forEach method allows to run a function for every element of the array.
// arr.forEach(console.log)

/*****************************
 * Searching in an array
 * indexOf, lastIndexOf, includes
 * indexOf return -1, includes return true or false
 *****************************/
let arr = [1, 0, false];
console.log( arr.indexOf(false) )
console.log( arr.includes(false) )


/*****************************
 * Searching in an array
 * find and findIndex/findLastIndex
 * Imagine we have an array of objects. How do we find an object with a specific condition?
 * Here the arr.find(fn) method comes in handy.
 * syntax =  arr.find(function(item, index, array) {})
 * If it returns true, the search is stopped, the item is returned. If nothing is found, undefined is returned.
 * 
 * FIND -> single element 
 * 
 * The arr.findIndex method has the same syntax but returns the index where the element was 
 * found instead of the element itself. The value of -1 is returned if nothing is found.
 * 
 * The arr.findLastIndex method is like findIndex, but searches from right to left, similar to lastIndexOf.
 * 
 * 
 * FILTER -> many element
 * The find method looks for a single (first) element that makes the function return true.
 * If there may be many, we can use arr.filter(fn).
 * The syntax is similar to find, but filter returns an array of all matching elements:
 *****************************/
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];
let user = users.find(item => item.id === 1);
console.log(user.name);
console.log(users.filter(item => item.id < 3));

let number = [1, 2, 3, 4, 5];
const newNumber = []
number.forEach((elem) => newNumber.push(elem**2));
console.log("forEach Method: ", newNumber);


/*****************************
 * Transform an array
 * 
 * Map
 * It calls the function for each element of the array and returns the array of results.
 * It also transform an array and return a new array
 * 
 * Reverse 
 * Sort(fn) -> takes a comparison function
 * split(delim) & join(glue)
 * 
 * Reduce / reduceRight -> it used to calculate a single value base on the array
 * syntax = let value = arr.reduce(function(accumulator, item, index, array){
 * }, [initial])
 * accumulator – is the result of the previous function call, equals initial the first time
 * (if initial is provided).
 * item – is the current array item.
 * index – is its position.
 * array – is the array.
*****************************/

console.log("map method: ", number.map(elem => elem**2));

let names = 'home, vagrant, node, nodejs-tutorial';
let newArr = names.split(', ');
console.log(names);
console.log(newArr);
console.log(newArr.join('/'))

// calculate the total elemnt in the number array 
const ans = number.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log("Total Number: ", ans);

// OR -> note that it is not neccessary to pass the initial
console.log("OR Total Number: ", number.reduce((sum, current) => sum + current));

// Questions
let words = "-webkit-transition";
let wordArr = words.split('-');
console.log(wordArr.join(''))
let s = "short";
console.log(s.slice(1))
// let newWord = [];
// 
// for (let i = 0; i < wordArr.length; i++)
// {
//     if (wordArr[i] === '-') {
//         if (i + 1 < wordArr.length) {
//             newWord.push(wordArr[i + 1].toUpperCase());
//         }
//         i++;
//     }
//     newWord.push(wordArr[i])
// }
// 
// console.log(newWord);


// let removeDash = wordArr.filter((item) => item !== '-');
// console.log(removeDash);
// let join = removeDash.join('');
// console.log(join)
// let seondSplit = join.split('/ ');
// console.log(seondSplit);

//Question
/*****
 * Write the function camelize(str) that changes dash-separated words like 
 * “my-short-string” into camel-cased “myShortString”.
 * That is: removes all dashes, each word after dash becomes uppercased.
 * 
 * Algorithm
 * split the string to letter
 * loop through each element and check turn the letter after - to uppercase
 * join the string together and return
 */

// this function is fine but is not that effiecient as it is splitting into letters
// assuming we to split a very long word, then we will first have to split it to letter which will take alot of time

const camelize = (str) => {
    const letterArr = str.split('');
    let newLetterArr = [];

    for (let i = 0; i < letterArr.length; i++) {
        if (letterArr[i] === '-') {
            if (i + 1 < letterArr.length) {
                newLetterArr.push(letterArr[i + 1].toUpperCase());
            }
            i++;
        } else {
            newLetterArr.push(letterArr[i]);
        }
    }

    return newLetterArr.join('');
}

// the function implementation is very efficient 
function camelize2(str) {
    return str
        .split('-')
        .map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1))
        .join('');
}



console.log(camelize2("my-short-string"));
console.log(camelize2("background-color"));
console.log(camelize2("list-style-image"));
console.log(camelize2("-webkit-transition"));

// Question

const filterRange = (arr, a, b) => {
    let result = arr.filter((item) => {
        return (item > a || item >= a) && (item < b || item <= b) ? item : null;
    })
    return result
}

let ar = [5, 3, 8, 1];

console.log(filterRange(ar, 1, 4))
console.log(ar)

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]

        if (value < a || value > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
filterRangeInPlace(ar, 1, 4)

console.log(ar);

const sortDecreasingOrder = (arr) => {
    return arr.sort((a, b) => b -a);
}
console.log(sortDecreasingOrder([5, 2, 1, -10, 8]))


const copySorted = (arr) => {
    const copy = arr.slice();
    return copy.sort();
}
let arSt = ["HTML", "JavaScript", "CSS"];
console.log(copySorted(arSt));
console.log(arSt);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// 
// let user2 = [ john, pete, mary ];
// 
// let name = user2.map((item) => item.name);
// console.log(name);

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
// 
// let user2 = [ john, pete, mary ];

// let usersMapped = user2.map((item) => {
//     return {
//         fullName: item.name + " " + item.surname,
//         id: item.id,
//     }
// })

// console.log(usersMapped[0].id);
// console.log(usersMapped[0].fullName);


const sortByAge = (users) => {
    return users.sort((a, b) => a.age - b.age)
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr2 = [ pete, john, mary ];


console.log(sortByAge(arr2))


let userss = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];
// const obj = {};
// const n = 'Eric'
// obj[n] = n
// obj[userss[0].id] = userss[0]
// console.log(obj)

const groupById = (arr) => {
    return arr.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}
console.log(groupById(userss));

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
    let result = [];

    for (let val of arr) {
        if (!result.includes(val)) result.push(val);
    }
    return result
}

console.log(unique(strings))