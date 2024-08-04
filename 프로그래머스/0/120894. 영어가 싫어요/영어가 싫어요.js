
function solution(numbers) {
    let temp = ''
    let result = '';
    for(const str of numbers){
        temp += str;
        if(temp === "zero") {result += "0"; temp = ''}
        else if(temp === "one"){ result += "1";temp = ''}
        else if(temp === "two") {result += "2";temp = ''}
        else if(temp === "three"){ result += "3";temp = ''}
        else if(temp === "four") {result += "4";temp = ''}
        else if(temp === "five") {result += "5";temp = ''}
        else if(temp === "six") {result += "6";temp = ''}
        else if(temp === "seven"){ result += "7";temp = ''}
        else if(temp === "eight"){ result += "8";temp = ''}
        else if(temp === "nine") {result += "9";temp = ''}
    }

    return +result;
}