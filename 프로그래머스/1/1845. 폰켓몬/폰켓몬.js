function solution(nums) {
    const map = new Map();
    const getMonsterNum = nums.length / 2;
    
    for(let monster of nums){
        if(!map.get(monster)){
            map.set(monster, 1);
        }
    }
    
    return Math.min(map.size, getMonsterNum);
}