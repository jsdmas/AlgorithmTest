function solution(strings, n) {
    return strings.sort((a,b)=>{
        if(a.at(n) > b.at(n)) return 1;
        if(a.at(n) < b.at(n)) return -1;
        if(a.at(n) === b.at(n)) return (a > b ? 1 : -1);
    })
}