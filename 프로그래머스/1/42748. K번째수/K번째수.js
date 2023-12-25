function solution(array, commands) {
    const result = [];
    for(const command of commands){
        const start = command[0]; // 2
        const end = command[1]; // 5
        const num = command[2]; // 3
        
        const myArray = array.slice(start - 1, end).sort((a,b) => a - b);
        result.push(myArray[num - 1]);
    }
    return result;
}