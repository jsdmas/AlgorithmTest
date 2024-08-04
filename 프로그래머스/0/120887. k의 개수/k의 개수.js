function solution(i, j, k) {
    let count = 0;
    
    for(let start = i; start <= j; start++){
        [...String(start)].forEach(v => {
            if(v === String(k)) count++;
        })
    }
    return count;
}