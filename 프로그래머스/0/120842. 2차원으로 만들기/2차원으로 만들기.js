function solution(num_list, n) {
    const result = num_list.reduce((acc,cur,index) => {
        if(index % n === 0) {
            acc.push([]);
        }
        acc[acc.length - 1].push(cur);
        return acc;
    },[]);
    return result;
}