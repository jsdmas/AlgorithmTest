function solution(s){
    const stack = [];
    
    s.split(' ').forEach((v)=>{
        if(v === "Z") stack.pop();
        else stack.push(+v);
    });
    
    return stack.length ? stack.reduce((acc,cur)=> acc + cur , 0) : 0;
}

// function solution(s) {
//     const calcurator = s.split(' ').reduce((acc,cur,idx,src)=>{
//         if(cur === "Z"){
//             return acc + (-1 * +src[idx - 1])
//         }else{
//             return acc + +cur;
//         }
//     },0);
//     return calcurator;
// }