function solution(array) {
    if(array.length === 1) return [array[0], 0];
    let maxNum = 0;
    let index = 0;
    
    array.forEach((v,i)=>{
        maxNum = Math.max(v, maxNum);
        if(maxNum === v) index = i;
    })
    return [maxNum, index];
}