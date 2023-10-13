function solution(n) {
    let result = 0;
    if(n % 2 === 0){
        for(let i = 2; i <= n; i++){
            result += i % 2 === 0 ? i ** 2 : 0;
        }
    }else{
        for(let i = 1; i <=n; i++){
            result += i % 2 === 1 ? i : 0;
        }
    }
    return result;
}