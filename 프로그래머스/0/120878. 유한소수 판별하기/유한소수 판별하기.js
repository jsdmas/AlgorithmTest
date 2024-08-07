/**
유클리드 호제법의 기본 원리는 num1를 num2로 나눈 나머지를 r이라고 했을 때, GCD(num1, num2) = GCD(num2, r)과 같다는 것이다.

r이 0이라면, 그 때의 num2가 최대공약수이다.

num1=24, num2=16을 가정하면, GCD(24, 16) = GCD(16, 8) = GCD(8, 0)

GCD = 8
*/
const getGcd = (a, b) => a % b === 0 ? b : getGcd(b, a % b);

function solution(a, b) {
    const gcd = getGcd(a, b);
    
    let diffb = b / gcd;
    if(diffb === 1) return 1;
    
    while(diffb % 2 === 0) diffb /= 2;
    while(diffb % 5 === 0) diffb /= 5;
    
    return diffb === 1 ? 1 : 2
    
}