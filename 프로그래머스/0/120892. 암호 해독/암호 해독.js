function solution(cipher, code) {
    const str = [...cipher].filter((v, i) => (i + 1) % code === 0).join('');
    return str;
}