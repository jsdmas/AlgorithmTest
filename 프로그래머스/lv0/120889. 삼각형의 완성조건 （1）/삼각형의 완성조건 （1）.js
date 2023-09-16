function solution(sides) {
     sides.sort((a, b) => a - b);

    const maxSide = sides[sides.length - 1];
    
    const sumOfOtherSides = sides[0] + sides[1];
    
    return maxSide < sumOfOtherSides ? 1 : 2;
}