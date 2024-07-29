
const solution = (my_string) => [...my_string].filter(v => !isNaN(parseInt(v))).map(v => +v).sort((a,b) => a - b);