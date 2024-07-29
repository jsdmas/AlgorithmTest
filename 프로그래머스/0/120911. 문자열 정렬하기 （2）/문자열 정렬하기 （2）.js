function solution(my_string) {
    const result = [...my_string].map(v => v.toLowerCase()).sort().join('');
    return result;
}