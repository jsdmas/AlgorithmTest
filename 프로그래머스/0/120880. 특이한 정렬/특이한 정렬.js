// O(n log n)
function solution(numlist, n) {
    return numlist.sort((a,b)=> {
        const diffA = Math.abs(a - n);
        const diffB = Math.abs(b - n);
        // 가까운 값이 같다면 큰 수가 앞으로
        if(diffA === diffB) return b - a;
        // a, b 와 비교하면 일반적인 오름차순이 되어버리므로 절대값을 사용하여 가까운 값 구현
        return diffA - diffB;
    })
}

// O(n^2)
/**
function solution(numlist, n) {
    const result = [];
    const distances = numlist.map(num => Math.abs(num - n));

    for (let i = 0; i < numlist.length; i++) {
        let minDistanceIndex = 0;
        for (let j = 1; j < distances.length; j++) {
            if (distances[j] < distances[minDistanceIndex] || 
               (distances[j] === distances[minDistanceIndex] && numlist[j] > numlist[minDistanceIndex])) {
                minDistanceIndex = j;
            }
        }
        result.push(numlist[minDistanceIndex]);
        numlist.splice(minDistanceIndex, 1);
        distances.splice(minDistanceIndex, 1);
    }

    return result;
}
*/