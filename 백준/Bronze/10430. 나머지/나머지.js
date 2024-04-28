const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const INPUT = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  const [input] = INPUT;
  const SPLIT_INPUT = input.split(' ').map((v) => +v);
  const [A, B, C] = SPLIT_INPUT;

  console.log(`${(A + B) % C}\n${((A % C) + (B % C)) % C}\n${(A * B) % C}\n${((A % C) * (B % C)) % C}`);
}

solution();
module.exports = solution;
