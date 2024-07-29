function solution(age) {
    const strs = [...age.toString()];
    const result = strs.map(v => (+v + 97).toString());
    return String.fromCharCode(...result);
}