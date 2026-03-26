const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

console.log("믄지열", + 1);
console.log(+"1024");
console.log(+true);
console.log(+false);

// + 를 제외한  산술 연산자는,
// 파연산지에 문자열이 있는 경우 Number로 변환 후 연산을 시도한다
console.log("10" - b)
console.log("10" * b)
console.log("10" / b)
console.log("10" % b)
console.log("10" ** b)