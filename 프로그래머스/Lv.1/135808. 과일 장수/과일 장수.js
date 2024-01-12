function solution(k, m, score) {
    
    // 최댓값을 위해 오름차순 정렬
    score.sort((a,b) => b - a);
    
    let result = 0;
    let idx = m - 1; // 최소값에 접근하기 위한 index값
    
    // 만들 수 있는 사과박스 개수만큼 반복
    for(let i = 0; i < Math.floor(score.length / m); i++){
        result += score[idx] * m;
        idx += m;
    }
    
    return result;
    
}