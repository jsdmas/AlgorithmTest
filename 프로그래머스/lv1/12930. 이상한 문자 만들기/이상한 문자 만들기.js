function solution(s) {
    const answer = [];
    const strArray = s.split(' ');
    for(const str of strArray){
        let result = '';
        for(let i = 0; i < str.length; i++){
            const word = i % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
            result += word;
        }
        answer.push(result);
    }
    return answer.join(' ');
}