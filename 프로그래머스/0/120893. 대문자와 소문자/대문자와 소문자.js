function solution(my_string) {
    let result = '';
    for(const str of my_string){
        if(str.toUpperCase() === str) result += str.toLowerCase();
        else result += str.toUpperCase();
    }
    return result;
}