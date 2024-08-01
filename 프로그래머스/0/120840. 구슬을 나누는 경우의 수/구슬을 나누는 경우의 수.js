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
/**
BigInt를 사용해야 하는 이유:

정확성: JavaScript의 일반 Number 타입은 IEEE 754 표준을 따르는 64비트 부동소수점을 사용합니다. 이는 약 15-17자리의 정수를 정확히 표현할 수 있습니다. 그 이상의 큰 숫자는 정밀도 손실이 발생할 수 있습니다.
오버플로우 방지: Number 타입은 약 ±2^53까지의 정수를 안전하게 표현할 수 있습니다. 팩토리얼 계산은 빠르게 이 한계를 넘어설 수 있어 오버플로우가 발생할 risk가 있습니다.
큰 수 연산: 조합론 문제에서는 큰 수의 연산이 자주 필요합니다. BigInt는 이러한 큰 수 연산을 정확히 처리할 수 있습니다.
*/