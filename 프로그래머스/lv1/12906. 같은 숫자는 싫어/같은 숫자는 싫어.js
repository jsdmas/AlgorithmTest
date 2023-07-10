function solution(arr)
{
    const stack = [];
    for(let i = 0; i < arr.length; i++){
        // 배열 길이를 벗어나면 push는 되지 않는다.
        if(arr[i] !== arr[i+1]) stack.push(arr[i]);
    }
    return stack;
}