function solution(n, lost, reserve) {
    const students = Array(n).fill(1); // 모든 학생의 체육복 상태를 1로 초기화
    
    // 체육복을 도난당한 학생들의 체육복 상태를 -1로 변경
    for (const l of lost) {
        students[l - 1] -= 1;
    }
    
    // 여벌의 체육복을 가져온 학생들의 체육복 상태를 +1로 변경
    for (const r of reserve) {
        students[r - 1] += 1;
    }
    
    // 체육복을 빌려주기
    for (let i = 0; i < n; i++) {
        if (students[i] === 0 && students[i - 1] === 2) {        
            // 앞의 학생이 체육복이 있는 경우    
                students[i - 1]--;
                students[i]++;
        } else if (students[i] === 0 && students[i + 1] === 2) {
            // 뒤의 학생이 체육복이 있는 경우
                students[i + 1]--;
                students[i]++;
            }
        }
    
    
    // 체육복을 가진 학생 수 세기
    let answer = 0;
    for (const student of students) {
        if (student > 0) answer++;
    }
    
    return answer;
}
