function solution(sizes) {
    let maxRow = 0;
    let maxCol = 0;
    
    for(const [width, height] of sizes){
        const maxWidth = Math.max(width, height);
        const maxHeight = Math.min(width, height);
        
        maxRow = Math.max(maxRow, maxWidth);
        maxCol = Math.max(maxCol, maxHeight);
    }
    
    return maxRow * maxCol;
}