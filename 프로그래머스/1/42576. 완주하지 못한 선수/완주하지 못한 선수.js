function solution(participant, completion) {
    
    const map = new Map();
    let result = null;
    
    for(const person of participant){
        if(!map.get(person)){
            map.set(person, 1);
        }else{
            map.set(person, map.get(person) + 1);
        }
    }
    
    for(const person of completion){
        if(map.get(person)){
            map.set(person, map.get(person) - 1);
        }
    }
    
    for(const [key, value] of map){
        if(value > 0){
            result = key;
        }
    }
    
    return result;
}