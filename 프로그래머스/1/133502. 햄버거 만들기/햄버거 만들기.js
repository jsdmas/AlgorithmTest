function solution(ingredient) {
    let result = 0;
    const stack = [];
    
    for(const item of ingredient){
        stack.push(item);
        
        if(stack.slice(-4).join('') === '1231'){
            stack.splice(-4);
            result++;
        }
        
    }
    return result;
}