function solution(numbers) {
    const myArray = [...numbers];
    myArray.sort((prev,cur) => cur - prev); // 내림차순
    return myArray[0] * myArray[1];
    
    /*
    let result = 0;
    let maxNum = 0;
    
    for(let i = 0; i < numbers.length + 1; i++){
        maxNum = Math.max(maxNum, numbers[i]);
        const temp = maxNum * numbers[i+1];
        
        if(result < temp) result = temp;
    }
    
    return result;
 */   
}