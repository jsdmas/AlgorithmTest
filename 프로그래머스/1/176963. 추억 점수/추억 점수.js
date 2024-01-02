function solution(name, yearning, photo) {
    const map = new Map();
    
    for(let i = 0; i < name.length; i++){
        map.set(name[i], yearning[i]);
    }
    
    const result = [];
    for(const photoOfName of photo){
        let missing = 0;
        for(let i = 0; i < photoOfName.length; i++){
            if(map.get(photoOfName[i])) missing += map.get(photoOfName[i])
        }
        result.push(missing);
    }
    return result;
}