const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const INPUT = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  const [input] = INPUT;
  const [A, B] = input.split(' ').map((v) => +v);
  console.log((A > B && '>') || (A < B && '<') || (A === B && '=='));
}

solution();
