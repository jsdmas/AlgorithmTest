function solution(n, m) {
    // 배열로 [최대공약수, 최소공배수] 반환
    // 최대공약수
    let gcd = 1;
    for(let i = 2; i <= Math.min(n,m); i++){
        if( n % i === 0 && m % i === 0){
            gcd = i;
        }
    }
    const lcm = (n * m) / gcd;
    return [gcd,lcm];
}