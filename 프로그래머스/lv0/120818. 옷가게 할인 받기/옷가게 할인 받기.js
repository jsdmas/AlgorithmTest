function solution(price) {
    if(price >= 500_000){
        return price - Math.ceil(price * 0.2);
    }else if (price >= 300_000){
        return price - Math.ceil(price * 0.1);
    }else if (price >= 100_000){
        return price - Math.ceil(price * 0.05);
    }else return price;
}