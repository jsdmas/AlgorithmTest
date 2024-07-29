function solution(my_string) {
    const result = [...my_string.toLowerCase()].sort().join('');
    return result;
}