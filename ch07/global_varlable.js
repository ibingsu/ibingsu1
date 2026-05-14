let a = 10;

function 함수() {
    a = 11;
    console.log(a);
}

함수();
console.log(a)

// 매개변수
function add(n, m) {
    return n + m
}

// 함수표현식
let add = function (a, b) {
    return a + b;
};

function testFn(fn) {
    fn(1, 2);
}
testFn(add);