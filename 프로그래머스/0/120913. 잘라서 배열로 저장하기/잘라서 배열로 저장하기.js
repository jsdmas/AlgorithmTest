function solution(my_str, n) {
    const stack = [];
    let str = '';
    for(let i = 0; i < my_str.length; i++){
        str += my_str[i];
        if((i+1)%n === 0) {
            stack.push(str);
            str = '';
        } 
    }
    if(str !== '') stack.push(str)
    return stack
}