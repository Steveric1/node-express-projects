const { readFile, writeFile } = require("fs").promises;
const util = require("util");

// Using promisify
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// using async and await
const start = async () => {
	try {
		const first = await readFile("./content/first.txt", "utf-8");
		const second = await readFile("./content/second.txt", "utf-8");
		await writeFile(
			"./content/great-mind.txt",
			"ThIS IS AWESOME: " + first + second 
		);
		console.log(first, second);
	} catch (error) {
		console.log(error);
	}
};

start();

// Writing custom promises

// const getText = (path) => {
// 	return new Promise((resolve, reject) => {
// 		readFile(path, 'utf-8', (err, data) => {
// 			if (err) reject(err);
// 			resolve(data);
// 		});
// 	});
// };

// getText('./content/first.txt')
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
