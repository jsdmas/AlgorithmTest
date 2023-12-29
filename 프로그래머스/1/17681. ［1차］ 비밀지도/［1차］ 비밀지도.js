function solution(n, arr1, arr2) {
    const map1 = [...arr1].map(v => v.toString(2).padStart(n,'0'));
    const map2 = [...arr2].map(v => v.toString(2).padStart(n,'0'));
    const translateMap = [];
    
    for(let i = 0; i < n; i++){
        let row = '';
        
        for(let j = 0; j < n; j++){
            if(map1[i][j] === '1' || map2[i][j] === '1') row += "#";
            else row += ' ';
        }
        
        translateMap.push(row);
    }
    
    return translateMap;
}