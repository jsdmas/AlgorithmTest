function solution(quiz) {
    const result = [];
    
    for(const expression of quiz){
        const [x, sign, y, _, signResult] = expression.split(' ');
        const secondNum = sign === "-" ? y * -1 : +y;
        result.push(+x + secondNum === +signResult ? "O" : "X");
        
    }
    return result
}