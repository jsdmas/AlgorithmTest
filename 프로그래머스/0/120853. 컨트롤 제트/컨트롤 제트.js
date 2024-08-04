function solution(s) {
    const calcurator = s.split(' ').reduce((acc,cur,idx,src)=>{
        if(cur === "Z"){
            return acc + (-1 * +src[idx - 1])
        }else{
            return acc + +cur;
        }
    },0);
    return calcurator;
}