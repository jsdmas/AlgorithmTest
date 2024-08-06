function solution(board) {
    const n = board.length;
    const customBoard = board.map(row => [...row]);
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],  [0, 0],  [0, 1],
        [1, -1],  [1, 0],  [1, 1]
    ];

    function setCell(i, j) {
        if (i >= 0 && i < n && j >= 0 && j < n) {
            customBoard[i][j] = 1;
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                directions.forEach(([di, dj]) => setCell(i + di, j + dj));
            }
        }
    }

    return customBoard.flat().filter(cell => cell === 0).length;
}