function solution(numbers, num1, num2) {
    // slice = 새로운 배열 반환, splice = 배열의 기존 요소 변경
    const myArray = [...numbers];
    return myArray.slice(num1, num2 + 1);
}