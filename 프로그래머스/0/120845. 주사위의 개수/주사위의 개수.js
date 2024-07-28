function solution(box, n) {
    const [w, l, h] = box;
    if(h < n) return 0;
    return Math.floor(w/n) * Math.floor(l/n) * Math.floor(h/n)
}