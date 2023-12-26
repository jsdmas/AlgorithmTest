function solution(people, limit) {
    const peoples = people.sort((a,b) => a - b);
    
    let left = 0;
    let right = peoples.length - 1;
    let boats = 0;
    
    while(left <= right){
        if(peoples[left] + peoples[right] <= limit){
            left++; // 가장 가벼운 사람과 무거운 사람을 함께 태우기
        }
        right--; // 가장 무거운 사람은 항상 탑승하기
        boats++; // 보트 증가
    }
    
    return boats;
}