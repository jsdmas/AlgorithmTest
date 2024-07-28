function solution(array) {
    if(array.length === 1) return [array[0], 0];
    return [Math.max(...array), array.indexOf(Math.max(...array))];
}