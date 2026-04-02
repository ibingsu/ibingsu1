// 0 ~ 10 사이의 홀수만 출력하기

let num = 0;

while (num < 10) {
    num++;
    if (num % 2 == 0) {
        continue;
    }
    console.log(num);
}

// 1 ~ 10 사이의 수를 출력하는데,
// 7을 만나면 그대로 종료하는 코드
num = 1;
while (num <= 10) {
    if (num==7) {
        break;
    }
    console.log(num);
    num++;
}

// continue -> 현재 루프면 건너뛰고 반복문은 진행된다.
// break --> 해당 구문이 속한 반복문이 종료된다.
