function solution(balls, share) {
    // 조합 공식: C(n,r) = n! / (r! * (n-r)!)
    return factorial(balls) / (factorial(share) * factorial(balls - share));
}

function factorial(n) {
    let result = 1n;  // BigInt 사용
    for (let i = 2n; i <= BigInt(n); i++) {
        result *= i;
    }
    return result;
}