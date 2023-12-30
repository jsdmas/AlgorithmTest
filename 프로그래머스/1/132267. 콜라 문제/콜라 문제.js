function solution(a, b, n) {
    // a : 콜라와 교환하기 위한 병 수, b : 교환될 콜라 개수, n : 가지고있는 빈 병의 개수
    let coke = 0
    // 교환 가능한 수량이 아닐때까지 반복
    while(n >= a) {
        const bottle = Math.floor(n/a)*b;
        coke += bottle
        n = bottle + n % a
    }
    return coke
}
