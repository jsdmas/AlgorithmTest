function solution(hp) {
    if(!hp) return 0;
    
    const ants = [5, 3, 1];
    let count = 0;
    let 체력 = hp;
    
    for(const ant of ants){
        if(체력 === 0) return count;
        count = count + Math.floor(체력 / ant);
        체력 = Math.floor(체력 % ant);
    }
    return count;
}