const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const INPUT = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  const [input] = INPUT.map((v) => +v);
  const validation = [input % 4 === 0, input % 100 !== 0 || input % 400 === 0];

  if (validation.every((v) => v === true)) {
    console.log(1);
  } else {
    console.log(0);
  }
}

solution();
