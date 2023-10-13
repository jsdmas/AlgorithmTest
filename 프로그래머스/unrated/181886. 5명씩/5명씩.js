function solution(names) {
    return names.filter((name,i)=> (i + 1) % 5 === 1);
}