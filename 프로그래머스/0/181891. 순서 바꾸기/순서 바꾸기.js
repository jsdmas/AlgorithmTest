function solution(num_list, n) {
    const slice = num_list.splice(n);

    return [...slice, ...num_list]
}