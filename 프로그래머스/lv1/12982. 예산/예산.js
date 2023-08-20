function solution(d, budget) {
    // d = 부서별 신청 금액 배열, budget = 예산
    let result = 0;
    let money = budget;
    const moneyArray = [...d].sort((a, b) => a- b);
    for(const value of moneyArray){
        if(money >= value) {
            money -= value;
            result++;
        }else return result;
    }
    return result;
    // 최대 몇 개의 부서에 물품을 지원 가능한가?
    
}