// enum Shoes {
//     Nike = '나이키',
//     Adidas = '아디다스'
// }

// var myShoes = Shoes.Nike;
// console.log(myShoes); // 나이키

// // 값을 설정하지 않으면 숫자형 이넘으로 반환함


// // 예제
// enum Answer {
//     Yes = 'Y',
//     No = 'N'
// }

// function askQuestion(answer: string) {
//     if (answer === 'yes') {
//         console.log('정답입니다');
//     }
//     if (answer === 'no') {
//         console.log('오답입니다');
//     }
// }
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');

// function askQuestion(answer: Answer) {
//     if (answer === Answer.Yes) {
//         console.log('정답입니다');
//     }
//     if (answer === Answer.No) {
//         console.log('오답입니다');
//     }
// }
// askQuestion(Answer.Yes);
// askQuestion('Yes'); // 에러