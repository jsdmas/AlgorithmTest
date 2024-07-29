function solution(n) {
    let result = 0;

    for (let num = 1; num <= n; num++) {
        let temp = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) temp++;
        }
        if (temp > 2) result++;
    }

    return result;
}
