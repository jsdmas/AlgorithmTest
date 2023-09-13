function solution(my_string, n) {
    const result = [...my_string].reduce((acc,cur)=> acc + cur.repeat(n),"");
    return result;
    
    /*
    2중 for문
    let result = "";
    for(let i = 0; i < my_string.length; i++){
        for(let j = 0; j < n; j++) result += my_string[i];
    }
    return result;
    */
    
}