function solution(quiz) {
    const result = [];
    
    for(const expression of quiz){
        const expressionArray = expression.split(' ');
        const isMinus = expressionArray[1] === "-";
        const secondeNum = isMinus ? expressionArray[2] * -1 : +expressionArray[2];
        result.push(+expressionArray[0] + secondeNum === +expressionArray[4] ? "O" : "X");
    }
    return result
}