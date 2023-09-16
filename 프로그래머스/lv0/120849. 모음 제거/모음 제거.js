function solution(my_string) {
    const myArray = ["a", "e", "i", "o", "u"];
    const myStringArray = my_string.split('');
    for(let i = 0; i < myStringArray.length; i++){
        if(myArray.includes(myStringArray[i])){
            myStringArray.splice(i ,1);
            i--; // 배열 길이가 줄어서 인덱스를 하나 감소시킵니다.
        }
    }
    return myStringArray.join('');
    /*
      const result = my_string.replace(/[aeiouAEIOU]/g, '');
      return result;
    */
}