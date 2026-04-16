function solution(num_list) {
    let pdd = 0;
    let even = 0;
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 == 0) {
            even++;
        }
    }
    return [even, num_list.length - even];
}

console.log(solution([1, 2, 3, 4, 5]));