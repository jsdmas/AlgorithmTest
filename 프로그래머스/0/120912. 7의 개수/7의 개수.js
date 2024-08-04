function solution(array) {
    let count = 0;
    const stringArray = array.map(v => v + "");
    stringArray.forEach(v=>{
        [...v].forEach(j=>{
            if(j === "7") count++;
        })    
    })
    
    return count;
}