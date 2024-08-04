function solution(before, after) {
    
    const beforeMap = new Map();
    const afterMap = new Map();
    
    [...before].forEach((v)=>{
        if(!beforeMap.get(v)) beforeMap.set(v, 1);
        else beforeMap.set(v, beforeMap.get(v) + 1);
    });
    
    [...after].forEach((v)=>{
        if(!afterMap.get(v)) afterMap.set(v, 1);
        else afterMap.set(v, afterMap.get(v) + 1);
    });
    
    for(const [key, value] of beforeMap){
        if(afterMap.get(key) !== value) return 0;
    }
    
    return 1;
}