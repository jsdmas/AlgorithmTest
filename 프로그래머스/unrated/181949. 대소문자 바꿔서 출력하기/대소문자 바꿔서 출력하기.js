const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const [strs] = input.map(str => {
        return str.split('').map(char => {
            return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
        }).join('');
    });
    console.log(strs);
});
