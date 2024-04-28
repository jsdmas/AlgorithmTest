const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const INPUT = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  const [A, B] = INPUT;
  const [b1, b2, b3] = B.split('').map((v) => +v);
  console.log(`${b3 * +A}\n${b2 * +A}\n${b1 * A}\n${+A * +B}`);
}

solution();
module.exports = solution;
