function solution(order) {
    const orderStr = order + "";
    return [...orderStr].filter(v => v === "3"|| v ==="6" || v==="9").length;
}