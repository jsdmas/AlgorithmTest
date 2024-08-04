function solution(sides) {
    let count = 0;
    const max = Math.max(...sides);
    const min = Math.min(...sides);
    
    // max가 가장 긴 변일떄
    for(let i = max - min + 1; i <= max; i++){
        count++;
    }
    
    // 다른 변이 가장 긴 변일떄
    const side = max + min - 1;
    for(let i = max + 1; i <= side; i++){
        count++;
    }
    
    return count;
}