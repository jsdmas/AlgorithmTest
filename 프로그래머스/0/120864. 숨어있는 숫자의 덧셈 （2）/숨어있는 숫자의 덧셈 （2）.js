function solution(my_string) {
    const stack = [];
    let temp = '';
    
    [...my_string, 'x'].forEach((v) => {
        if (!isNaN(v)) {
            temp += v;
        } else if (temp !== '') {
            stack.push(parseInt(temp));
            temp = '';
        }
    });
    
    return stack.reduce((acc, cur) => acc + cur, 0);
}