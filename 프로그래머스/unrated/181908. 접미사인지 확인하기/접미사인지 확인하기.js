function solution(my_string, is_suffix) {
    for(let i = 0; i < my_string.length; i++){
        if(my_string.substr(i) === is_suffix) return 1;
    }
    return 0;
}