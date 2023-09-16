function solution(babbling) {
    let result = 0;
    const vaild = ["aya", "ye", "woo", "ma"];
    
    for(let i = 0; i < babbling.length; i++){
        
        let word = babbling[i];
        
        for(const str of vaild){
            if(word.includes(str)) word = word.replaceAll(str, ' ');
        }
        
        if(word.trim().length === 0) {
            result++;
        }
        
    }
    return result;
}