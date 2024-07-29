function solution(numbers, direction) {
    const result = [...numbers];
    
    if(direction === "right"){
        const lastItem = result.pop();
        result.unshift(lastItem);
    }else{
        const firstItem = result.shift();
        result.push(firstItem);
    }
    
    return result;
}