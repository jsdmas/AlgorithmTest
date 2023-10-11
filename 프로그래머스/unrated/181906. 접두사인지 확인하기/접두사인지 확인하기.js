function solution(my_string, is_prefix) {
    let temp = '';
    const stringArray = [];
    for(const str of my_string){
        temp += str;
        stringArray.push(temp);
    }
    return +stringArray.includes(is_prefix);
}