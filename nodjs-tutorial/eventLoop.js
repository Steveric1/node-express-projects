
// setTimeout(() => {
// 	console.log('timeout');
// }, 0);
// 
// setImmediate(() => {
// 	console.log('immediate');
// });

// const { readFile } = require('fs');
// 
// readFile('./content/first.txt', 'utf-8', (err, data)=> {
// 	setTimeout(() => {
// 		if (err) return;
// 		console.log(data);
// 		console.log('timeout');
// 	}, 100);
// 	setImmediate(() => {
// 		if (err) return;
// 		console.log(data);
// 		console.log('immediate');
// 	})
// })


// let bar;
// // this has an asynchronous signature, but calls callback synchronously
// function someAsyncApiCall(callback) {
//   callback();
// }
// // the callback is called before `someAsyncApiCall` completes.
// someAsyncApiCall(() => {
//   // since someAsyncApiCall hasn't completed, bar hasn't been assigned any value
//   console.log('bar', bar); // undefined
// });
// bar = 1;

// let bar;
// function someAsyncApiCall(callback) {
//   process.nextTick(callback);
// }
// someAsyncApiCall(() => {
//   console.log('bar', bar); // 1
// });
// bar = 1;
// 
// console.log("This is printed first before the undefined is printed")


// Event Emiiter
// const EventEmiiter = require('events');
// 
// const eventEmitter = new EventEmiiter();
// 
// eventEmitter.on('start', (start, end) => {
// 	console.log(`started from ${start} to ${end}`);
// });
// 
// eventEmitter.emit('start', 1, 100);


// nextTick
console.log('Hello => number 1');

setImmediate(() => {
  console.log('Running before the timeout => number 3');
});

setTimeout(() => {
  console.log('The timeout running last => number 4');
}, 0);

process.nextTick(() => {
  console.log('Running at next tick => number 2');
});
