// Read Stream
const { createReadStream,  writeFileSync } = require('fs');

// write big data
for (let i = 0; i < 100000; i++) {
  writeFileSync('./content/big.txt', 'Hello World - ' + i + '\n', {flag: 'a'});
}

const stream = createReadStream('./content/big.txt', {
  highWaterMark: 90000,
  encoding: 'utf-8'
});

stream.on('data', (data) => console.log(data));
stream.on('error', (err) => console.log(err));