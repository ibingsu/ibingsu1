const obj = {
    name: "이병수",
    age: 17,
};

const obj2 = obj;

obj.age = 17;

// 창조형 변수의 경우 복사 시,
// 값이 아닌 창조값이 복사되어, 기존값 수정 시 신규 값에도 반영된다.
console.log(obj);
console.log(obj2);

const arr = [];
arr.push("안녕하세요");
console.log(arr);