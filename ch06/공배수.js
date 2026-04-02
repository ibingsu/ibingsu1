function solution(number, n, m) {
    let answer = 0;
    if (number % n == 0 && number % m == 0) {
        answer = 1;
    }
    return answer;
}

let a = solution(13, 3, 4);
console.log(a)