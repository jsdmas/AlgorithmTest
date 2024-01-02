function solution(k, score) {
    const honor = []
    const result = []
    for(let i = 0 ; i < score.length ; i ++) {
        if(i < k) {
            honor.push(score[i])
        }
        // 이번 점수가 명예의 전당 최하위 점수보다 큰 경우
        if(score[i] > Math.min(...honor)) {
            // 가장 작은 수를 이번 점수와 교체 후 내림차 순 정렬
            honor.pop()
            honor.push(score[i])
            honor.sort((a,b) => b-a)
        }

        result.push(honor.at(-1))
    }
    return result
}