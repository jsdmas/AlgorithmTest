function solution(board) {
    const n = board.length;
    const customBoard = board.map(row => [...row]);
    
    function setCell(i, j) {
        if (i >= 0 && i < n && j >= 0 && j < n) {
            customBoard[i][j] = 1;
        }
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                const neighbors = [
                    [i-1, j-1], [i-1, j], [i-1, j+1],
                    [i, j-1],   [i, j],   [i, j+1],
                    [i+1, j-1], [i+1, j], [i+1, j+1]
                ];
                neighbors.forEach(([ni, nj]) => setCell(ni, nj));
            }
        }
    }
    
    let safeZoneCount = 0;
    customBoard.forEach(row => {
        row.forEach(cell => {
            if (cell === 0) safeZoneCount++;
        });
    });
    
    return safeZoneCount;
}