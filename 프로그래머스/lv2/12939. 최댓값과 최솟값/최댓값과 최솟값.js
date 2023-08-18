function solution(s) {
    const myArray = s.split(' ').map(v=>Number(v));
    return Math.min(...myArray) + " " + Math.max(...myArray)
}