function solution(order) {
    const orderStr = order + "";
    return [...orderStr].filter(v => v === "3"|| v ==="6" || v==="9").length;
}
/**
function solution(order) {
    var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
    return answer;
}

*/