function solution(keyinput, board) {
    const maxX = Math.floor(board[0] / 2);
    const maxY = Math.floor(board[1] / 2);
    
    const result = [0, 0];
    for(const word of keyinput){
        if(word === "left" && result[0] > -maxX) {
            result[0] -= 1;
        }
        else if(word === "right" && result[0] < maxX){
            result[0] += 1;
        } 
        else if(word === "up" && result[1] < maxY){
            result[1] += 1;
        } 
        else if(word === "down" && result[1] > -maxY){
            result[1] -= 1;
        } 
    }
    return result;
}