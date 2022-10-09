// 숙제: 3개의 상품 제목, 가격을 html에 전부 꽂아넣어오십시오.
const products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' }
];
for(let i = 0; i < products.length; i++) {
    document.querySelectorAll('.card-body')[i].querySelector('h5').innerHTML = products[i].title
    document.querySelectorAll('.card-body')[i].querySelector('p').innerHTML = products[i].price
}