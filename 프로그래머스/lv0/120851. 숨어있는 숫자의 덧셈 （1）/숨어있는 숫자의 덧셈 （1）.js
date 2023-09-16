function solution(my_string) {
    let result = 0;
    for(const str of my_string){
        if(!isNaN(str)) result += +str;
    }
    return result;
}