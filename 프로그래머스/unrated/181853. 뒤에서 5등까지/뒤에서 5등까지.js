function solution(num_list) {
    // return num_list.sort((a, b) => a - b).slice(0, 5);
    const resultArray = [...num_list].sort((a,b)=>a-b);
    return resultArray.filter((_,i)=> i <= 4);
}