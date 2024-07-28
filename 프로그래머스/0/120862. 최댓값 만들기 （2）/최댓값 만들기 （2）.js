function solution(numbers) {
    if(numbers.length === 2) return numbers[0] * numbers[1];
    let result = 0;
    
    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            result = Math.max(result, numbers[i] * numbers[j]);
        }
    }
    return result;
}