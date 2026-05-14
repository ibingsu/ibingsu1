const orderCoffee = function (num) {
    console.log(`${num} 번째 주문`)
const makeCoffee = function () {
    // 대충 커피 다 만들었다
    console.log(`${num}커피가 완성되었습니다.`);
    };
// 커피를 주문하면 5초 뒤에 나온다
    setTimeout(makeCoffee, 5000);
};
for (let i = 1; i <= 30; i++) {
    orderCoffee(i);
}