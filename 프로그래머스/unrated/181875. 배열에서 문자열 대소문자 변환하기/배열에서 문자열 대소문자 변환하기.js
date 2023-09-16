function solution(strArr) {
    const myArray = strArr.map((value,index)=>{
        if(index % 2 <= 0) return value.toLowerCase();
        return value.toUpperCase();
    })
    return myArray;
}