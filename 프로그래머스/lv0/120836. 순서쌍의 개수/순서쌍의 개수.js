function solution(n) {
    const result = [];
    for(let i = 1; i <= n / 2; i++){
        if(n % i === 0){
            result.push(i);
        }
    }
    return result.length + 1; // n자체도 n을 나누어 떨어지게하기 때문에 1을 더해줌.
}