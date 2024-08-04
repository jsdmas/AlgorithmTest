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
/**
function solution(my_str, n) {
    let res = [];
    for (let i = 0; i < my_str.length; i+=n) res.push(my_str.slice(i, i+n));
    return res;
}
*/