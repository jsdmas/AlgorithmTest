function solution(s, n) {
    // 65 ~ 90 : A ~ Z
    // 97 ~ 122 : a ~ z
    const strs = [...s].map(char => {
        // 공백 처리
        if(char === ' ') return char;
        const isUpperCase = char === char.toUpperCase();
        let code = char.charCodeAt() + n;
        
        // 문자 범위를 넘어갈경우 초기화
        if((isUpperCase && code > 90) || (!isUpperCase && code > 122)){
            code -= 26;
        }
        return String.fromCharCode(code);
    });
    return strs.join('');
    
}
