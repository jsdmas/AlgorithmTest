function solution(lines) {
    const line = new Array(200).fill(0);
    lines.forEach(([min,max])=>{
        for(;min < max; min++) line[min+100]++;
    })
    return line.reduce((acc,cur)=> cur > 1 ? acc + 1 : acc, 0);
}
