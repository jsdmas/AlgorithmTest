function solution(s) {
    
    // 한번만 등장하는 문자를 사전순서로 return.
    // 한번만 등장하는 문자열이 없을경우 빈 문자열 return.
    
    const map = new Map();
    let result = '';
    
    [...s].forEach(v=>{
        if(!map.get(v))map.set(v, 1)
        else map.set(v, map.get(v)+1);
    })
    
    for(const [key, value] of map){
        if(value === 1) result += key;    
    }
    return [...result].sort().join('');
}