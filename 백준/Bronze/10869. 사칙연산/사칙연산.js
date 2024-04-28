const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const INPUT = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  const [input] = INPUT;
  const SPLIT_INPUT = input.split(' ');
  const A = +SPLIT_INPUT[0];
  const B = +SPLIT_INPUT[1];
  console.log(`${A + B}\n${A - B}\n${A * B}\n${Math.floor(A / B)}\n${A % B}`);
}

solution();
module.exports = solution;
