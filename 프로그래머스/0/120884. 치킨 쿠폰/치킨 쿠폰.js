function solution(chicken) {
    let serviceChicken = 0;
    let coupons = chicken;
    
    while(coupons >= 10){
        const newChicken = Math.floor(coupons / 10);
        serviceChicken += newChicken;
        coupons = (coupons % 10) + newChicken;
    }

    return serviceChicken;
}