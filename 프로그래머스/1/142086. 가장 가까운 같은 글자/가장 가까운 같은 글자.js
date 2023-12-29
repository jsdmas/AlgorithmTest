function solution(s) {
    const result = [];
    let temp = '';
    
    for(let i = 0; i < s.length; i++){
        // 문자열이 존재하지 않을경우
        if(temp.indexOf(s[i]) === -1) {
            temp += s[i];
            result.push(-1);
        }else{
        // 문자열이 존재할 경우 마지막 위치 찾기
            result.push(i - temp.lastIndexOf(s[i]));
            temp += s[i]; // temp 갱신
        }
    }
    
    return result;
}
/**
function solution(s) {
    const hash={};

    return [...s].map((v,i)=>{
        const result = hash[v] !== undefined ? i - hash[v] : -1;
        hash[v] = i;
        return result;
    });
    
}
*/