function solution(answers) {
    const person1 = [1,2,3,4,5];
    const person2 = [2,1,2,3,2,4,2,5];
    const person3 = [3,3,1,1,2,2,4,4,5,5];
    
    const scores = [0, 0, 0];
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === person1[i % person1.length]) scores[0]++;
        if(answers[i] === person2[i % person2.length]) scores[1]++;
        if(answers[i] === person3[i % person3.length]) scores[2]++;
    }
    
    const result = [];
    for(let i = 0; i < scores.length; i++){
        if(scores[i] === Math.max(...scores)) result.push(i + 1);
    }
    
    return result;
    
}