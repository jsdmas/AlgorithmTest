function solution(t, p) {
    let count = 0;
    for(let i = 0; i < t.length - p.length + 1; i++){
        const number = t.slice(i, i + p.length);
        ////
        if(+number <= +p) count++;
    }
    return count;
}