function solution(my_string) {
    const stack = [];
    let temp = '';
    
    [...my_string].forEach((v) => {  
        if (!isNaN(v)) {
            temp += v;
        }else if(temp !== ''){
            stack.push(+temp);
            temp = '';
        }
    });
    
    if(temp !== ''){
        stack.push(+temp);
    }
    
    return stack.reduce((acc, cur) => acc + cur, 0);
}

/**
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}
*/