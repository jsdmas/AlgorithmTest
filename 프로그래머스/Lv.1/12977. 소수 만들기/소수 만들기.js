function solution(nums) {
    // 완전탐색
    let result = 0;
    
    const isPrime = (value) => {
        for(let i = 2; i < value; i++){
            if(value % i === 0) return false;
        }
        return true;
    }
    
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            for(let k = j + 1; k < nums.length; k++){
                const sum = nums[i] + nums[j] + nums[k];
                if(sum % 2 !== 0 && isPrime(sum)) result ++;
            }
        }
    }
    
    return result;
}