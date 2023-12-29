function solution(food) {
    const left = [];
    const right = [];
    for(let i = 0; i < food.length; i++){
        if(i === 0) continue;
        else{
            const countOfFood = Math.floor(food[i] / 2); 
            for(let j = 0; j < countOfFood; j++){
                left.push(i);
                right.unshift(i);
            }
        }
    }
    return [...left, 0, ...right].join('');
}