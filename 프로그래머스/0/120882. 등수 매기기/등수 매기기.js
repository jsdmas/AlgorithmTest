function solution(score) {
    const averages = score.map(([eng, math]) => (eng + math) / 2);
    const sortAverages = [...averages].sort((a,b) => b - a);
    
    return averages.map((v) => sortAverages.indexOf(v)+1)
}