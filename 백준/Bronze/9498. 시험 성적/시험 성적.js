const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const INPUT = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  const [input] = INPUT;
  switch (true) {
    case +input >= 90:
      console.log('A');
      return;
    case +input >= 80:
      console.log('B');
      return;
    case +input >= 70:
      console.log('C');
      return;
    case +input >= 60:
      console.log('D');
      return;
    default:
      console.log('F');
      return;
  }
}

solution();
