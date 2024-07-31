function solution(n) {
    let factorial = 1;
    let count = 0;
    while(factorial <= n){
        count++;
        factorial *= count;
    }
    return count - 1;
}
/**
처음에 factorial = 1, count = 0
첫 번째 반복: factorial = 1, count = 1
두 번째 반복: factorial = 2, count = 2
세 번째 반복: factorial = 6, count = 3
네 번째 반복: factorial = 24, count = 4
다섯 번째 반복: factorial = 120, count = 5
*/