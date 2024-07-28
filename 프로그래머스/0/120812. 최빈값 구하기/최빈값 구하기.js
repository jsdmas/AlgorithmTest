function solution(array) {
    if (array.length === 1) return array[0];
    
    const map = new Map();
    const maxKeys = [];
    let maxNum = Number.MIN_SAFE_INTEGER;
    
    array.forEach(v => {
        map.set(v, (map.get(v) || 0) + 1);
    });
    
    for (const [key, value] of map) {
        if (value > maxNum) {
            maxNum = value;
            maxKeys.length = 0; 
            maxKeys.push(key);
        } else if (value === maxNum) {
            maxKeys.push(key);
        }
    }
    
    if (maxKeys.length === 1) {
        return maxKeys[0];
    } else {
        return -1;
    }
}