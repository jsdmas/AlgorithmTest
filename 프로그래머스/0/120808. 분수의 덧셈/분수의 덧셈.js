const getGcd = (a, b) => a % b === 0 ? b : getGcd(b, a % b);

function solution(numer1, denom1, numer2, denom2) {
    const numer = (numer1 * denom2) + (numer2 * denom1); // 분자
    const denom = denom1 * denom2; // 분모
    const gcd = getGcd(numer,denom); // 최대공약수
    
    return [numer/gcd, denom/gcd]
}
/**
💡 문제풀이 과정

주어진 두 쌍의 분자와 분모로 두 분수의 합을 구해야 하므로 먼저, 분자와 분모를 다음과 같이 구해준다.
분자(numerator) = numer1 * denom2 + numer2 * denom1
분모(denominator) = denom1 * denom2
기약 분수로 나타내야 하므로, 분자와 분모의 최대공약수(GCD)를 구해야 한다.

cf. 기약 분수란? 분자와 분모가 서로소(둘의 공약수가 1밖에 없는) 상태여서 더 이상 약분을 할 수 없는 분수를 말한다. (cf. 약분이란 분모와 분자를 그들의 공약수로 나누는 것)

최대공약수를 구하는 식은 다음과 같다. 

const getGcd = (a % b == 0 ? b : getGcd(b, a % b));
const gcd = getGcd(분자, 분모); 

하여 분자와 분모의 최대공약수를 구한다.
마지막으로 분자와 분모를 이 둘의 최대공약수로 약분하여 리턴한다.

return [분자 / gcd, 분모 / gcd];
*/