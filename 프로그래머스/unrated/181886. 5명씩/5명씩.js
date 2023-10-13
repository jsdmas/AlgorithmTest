function solution(names) {
    return names.filter((name,i)=> (i + 1) % 5 === 1);
}
// names.filter((_, i) => !(i % 5))
