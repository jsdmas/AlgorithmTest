function solution(my_string) {
    const elements = my_string.split(' ');
    let result = parseInt(elements[0]);
    
    for (let i = 1; i < elements.length; i += 2) {
        const operator = elements[i];
        const number = parseInt(elements[i + 1]);
        
        if (operator === '+') {
            result += number;
        } else if (operator === '-') {
            result -= number;
        }
    }
    
    return result;
}