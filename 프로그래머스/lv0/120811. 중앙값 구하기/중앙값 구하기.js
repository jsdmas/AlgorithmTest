function solution(array) {
    array.sort((prev,cur)=> prev - cur);
    const middle = Math.floor(array.length / 2);
    return array[middle];
}