function solution(my_strings, parts) {
    let result = "";
    for(let i = 0; i < my_strings.length; i++){
        const part = parts[i];
        
        for(let j = part[0]; j <= part[1]; j++){
            result += my_strings[i][j];
        }
    }
    return result;
}
/*
function solution(my_strings, parts) {
  return my_strings.reduce((result, str, i) => {
    const [s, e] = parts[i];
    return result + str.substring(s, e + 1);
  }, '');
}
*/