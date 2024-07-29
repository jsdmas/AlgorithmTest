function solution(age) {
    const result = [...age.toString()].map(v => (+v + 97).toString());
    return String.fromCharCode(...result);
}