const { sumFunc, multiply } = require('./math');
const fs = require('fs');
const express = require('express');

console.log('Hello Bae');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('This is first sever');
});

app.listen(port, () => {
    console.log(`My sever is running port ${port}`);
});

// const sum = (a, b) => {
//     return a + b;
// };

// console.log(sumFunc(2, 5));
// console.log(multiply(2, 5));

// fs.readFile('./text.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error('Somethings went wrong', err);
//         return;
//     }
//     console.log('Data:', data);
// });
