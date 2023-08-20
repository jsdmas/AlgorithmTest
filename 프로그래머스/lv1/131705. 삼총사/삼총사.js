function solution(number) {
    let result = 0;
    for(let i = 0; i < number.length; i++){
        const firstNum = number[i];
        for(let j = i + 1; j < number.length; j++){
            const secondNum = number[j];
            for(let k = j + 1; k < number.length; k++){
                const threeNum = number[k];
                if((firstNum + secondNum + threeNum) === 0) result++;
            }
        }
    }
    return result;
}