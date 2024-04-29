const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const INPUT = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  const [input] = INPUT;
  const [hour, minutes] = input.split(' ').map((v) => +v);
  const ALARM = 45;

  if (minutes < ALARM) {
    if (hour === 0) {
      console.log(hour + 23, 60 - ALARM + minutes);
      return;
    } else {
      console.log(hour - 1, 60 - ALARM + minutes);
      return;
    }
  }
  console.log(`${hour} ${minutes - ALARM}`);
}

solution();
