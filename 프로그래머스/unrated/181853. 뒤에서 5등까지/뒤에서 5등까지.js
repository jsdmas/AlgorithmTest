function solution(num_list) {
    const resultArray = [...num_list].sort((a,b)=>a-b);
    return resultArray.filter((_,i)=> i <= 4);
}