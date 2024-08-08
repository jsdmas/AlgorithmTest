function solution(num, total) {
    // 중간값 찾기
    const middle = Math.floor(total / num);
    
    // 시작값 계산
    const start = middle - Math.floor((num - 1) / 2);
    
    // 결과 배열 생성
    const result = [];
    for (let i = 0; i < num; i++) {
        result.push(start + i);
    }
    
    return result;
}