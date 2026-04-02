function x2(x) {
    return x * 2;
}

console.log(x2(2));

function solution(start_num, end_num) {
    const answer = [];
    for (let i = start_num; i <= end_num; i++) {
        answer.push(1);
    }
    return answer;
}

let a = solution(3, 10);
console.log(a);