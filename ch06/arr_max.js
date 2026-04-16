const arr = [1, 7, -2, 21, 18, 12]

//let max1 = -10000;
//let max2 = -10000;
// 반복문을 이용해서 배열 순회
// 현재 보고 있는 원소가 max 값보다 크면 max 갱신
//for (let i = 0; i < arr.length; i++) {
//    arr[arr.indexOf(21)] = -999
//    if (max1 < arr[i]) {
//    max1 = arr[i]
//    }
//}
//for (let i = 0; i < arr.length; i++) {
//    if (max2 < arr[i]) {
 //   max2 = arr[i]
//    }
//}

arr.sort((a, b) => a - b);
console.log(arr);