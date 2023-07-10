function solution(n) {
    /*
    1. n을 3진법으로 만들기
    2. 3진법 n을 역순으로 sort
    3. 10진법으로 전환 후 return
    */
    const answer = [];
    while(n > 0){
        // 배열을 오른쪽부터 왼쪽으로 넣기
        answer.unshift(n % 3);
        n = Math.floor(n / 3);
    }
    return answer.reduce((acc,v,i)=> acc + v * Math.pow(3,i), 0);
}