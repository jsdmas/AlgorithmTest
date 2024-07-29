/**
function solution(my_string) {
    return [...new Set(my_string)].join('');
}
*/

function solution(my_string) {
    let result = '';
    const map = new Map();
    
    [...my_string].forEach(v=>{
        if(!map.has(v)) map.set(v, 1);
    })
    
    for(const [key, _] of map){
        result += key;
    }
    
    return result;
}