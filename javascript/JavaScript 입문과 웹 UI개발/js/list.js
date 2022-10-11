// 숙제: 3개의 상품 제목, 가격을 html에 전부 꽂아넣어오십시오.
const products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' }
];
// for(let i = 0; i < products.length; i++) {
//     document.querySelectorAll('.card-body h5')[i].innerHTML = products[i].title
//     document.querySelectorAll('.card-body p')[i].innerHTML = `가격은 ${products[i].price}`
// }

// ajax
// jQuery ver.
// $.get('https://codingapple1.github.io/hello.txt')
//     .done(function(data) {
//         console.log(data);
//     })
//     .fail(function() {
//         console.log('실패함');
//     })

// // 쌩 자바스크립트
/**
 * 기본함수 fetch() 이런건 JSON으로 자료가 도착하면 알아서 array/object 자료로 바꿔주지 않습니다.
 * 그래서 fetch() 로 가져온 결과를 array/object로 바꾸고 싶으면 res.json() 이런 코드 한 줄 추가하면 됩니다. 
 */
// fetch('https://codingapple1.github.io/price.json')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.price);
//     })
//     .catch(error => {
//         console.log('실패함');
//     })

const oldOne = document.querySelector('.col-sm-4');
for(let i = 1; i < products.length; i++) {
    oldOne.after(document.querySelector('.col-sm-4').cloneNode(true));
}

products.forEach((product, i) => {
    document.querySelectorAll('.col-sm-4 h5')[i].innerHTML = product.title
    document.querySelectorAll('.col-sm-4 p')[i].innerHTML = `가격은 ${product.price}`
})