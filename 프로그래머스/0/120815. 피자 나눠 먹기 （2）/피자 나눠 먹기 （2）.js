//GCD는 Greatest Common Divisor,  LCM은 Least Common MultiPle
const getGcd = (a, b) => a % b === 0 ? b : getGcd(b, a % b); // 최대 공약수
const getLcm = (a, b) => (a * b) / getGcd(a, b); // 최소 공배수

function solution(n) {
    const slicePizza = 6;
    const lcm = getLcm(n, 6);
    return lcm / slicePizza;
}