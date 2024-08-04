function solution(array, n) {
    let minTemp = Number.MAX_SAFE_INTEGER;
    let result = 0;
    
    array.forEach((v,i)=> {
        if(minTemp > Math.abs(v - n)) {
            minTemp = Math.abs(v - n);
            result = array[i];
        }
        
        if(minTemp === Math.abs(v - n)){
            result = Math.min(result, v);    
        }
    });
    
    return result;
}