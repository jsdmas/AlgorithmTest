function solution(numbers, k) {
    const position = (k - 1) * 2 % numbers.length;
    return numbers[position];
}