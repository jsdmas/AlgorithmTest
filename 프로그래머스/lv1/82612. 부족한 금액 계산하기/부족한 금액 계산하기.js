function solution(price, money, count) {
//     이용료 : price -> 다음번 탑승 price * 2 ...
//     놀이기구 타는 횟수 : count
//     놀이기구 탑승시 금액에서 모자른지를 return
//     money - price * count;
//     단, 금액이 부족하지 않다면 0을 return
    let playPrice = 0;
    for(let i = 1; i <= count; i++){
       playPrice += price * i;  
    }
    const result = money - playPrice
    return result < 0 ? result * -1 : 0;
    
}