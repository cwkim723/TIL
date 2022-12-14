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

// 상품목록 html 만들기
// const oldOne = document.querySelector('.col-sm-4');
// for (let i = 1; i < products.length; i++) {
//     oldOne.after(oldOne.cloneNode(true));
// }

// 상품 리스트 생성
products.forEach((product, i) => {
    // document.querySelectorAll('.col-sm-4 h5')[i].innerHTML = product.title
    // document.querySelectorAll('.col-sm-4 p')[i].innerHTML = `가격은 ${product.price}`

    var 템플릿 =
        `<div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100">
          <h5>${product.title}</h5>
          <p>가격 : ${product.price}</p>
          <button class="buy btn btn-primary">구매</button>
        </div>`;
    document.querySelector('.row').insertAdjacentHTML('beforeend', 템플릿)
})

// 더보기 누르면 상품 3개 가져와서 출력하기
let buttonCount = 0;
document.querySelector('#more').addEventListener('click', function () {
    buttonCount += 1;
    fetch(`https://codingapple1.github.io/js/more${buttonCount}.json`)
        .then(res => res.json())
        .then(data => {
            // for (let i = 0; i < data.length; i++) {
            //     oldOne.after(oldOne.cloneNode(true));
            // }

            data.forEach((product) => {
                // document.querySelectorAll('.col-sm-4 h5')[i].innerHTML = product.title
                // document.querySelectorAll('.col-sm-4 p')[i].innerHTML = `가격은 ${product.price}`
                var 템플릿 =
                    `<div class="col-sm-4">
                    <img src="https://via.placeholder.com/600" class="w-100">
                    <h5>${product.title}</h5>
                    <p>가격 : ${product.price}</p>
                    </div>`;
                document.querySelector('.row').insertAdjacentHTML('beforeend', 템플릿)
            })
        })
        .catch(error => {
            console.log('실패함요')
        })
});


// 정렬
const 어레이 = [7, 3, 5, 2, 40];
어레이.sort(function (a, b) {
    // return b - a; // 내림차순
    return a - b; // 오름차순
    /**
     * return값이 양수면 a를 오른쪽으로
     * return값이 음수면 b를 오른쪽으로
     * [7, 3, 5, 2, 40]
     * a=7, b=3 [3, 7, 5, 2, 40]
     * a=3, b=5 [3, 7, 5, 2, 40]
     * a=3, b=2 [2, 3, 5, 7, 40]
     * a=3, b=40 [2, 3, 5, 7, 40]
     * a=2, b=5 [2, 3, 5, 7, 40]
     * a=2, b=3 [2, 3, 5, 7, 40]
     * a=2, b=40 [2, 3, 5, 7, 40]
     * a=5, b=7 [2, 3, 5, 7, 40]
     * a=5, b=40 [2, 3, 5, 7, 40]
     * a=7, b=40 [2, 3, 5, 7, 40]
     */
});
// console.log(어레이)

// 문자 내림차순 정렬
const 어레이2 = ['a', 'c', 'b']
어레이2.sort().reverse();
// console.log(어레이2)

// products 가격순 정렬
document.querySelector('#price').addEventListener('click', function () {
    products.sort(function (a, b) {
        return a.price - b.price;
    })
    // console.log(products)

    document.querySelector('.row').innerHTML = ""
    products.forEach((product, i) => {
        var 템플릿 =
            `<div class="col-sm-4">
              <img src="https://via.placeholder.com/600" class="w-100">
              <h5>${product.title}</h5>
              <p>가격 : ${product.price}</p>
            </div>`;
        document.querySelector('.row').insertAdjacentHTML('beforeend', 템플릿)
    })
})



// array 자료 원하는 것만 필터: .filter()
어레이.filter(function (a) {
    return a < 4;
});
// console.log(어레이);

// .sort()는 원본 변형O, .filter()는 원본 변형 X

// array자료 전부 변형하려면 .map()
// const 어레이 = [2, 3, 5, 7, 40]
const 뉴어레이 = 어레이.map(function (a) {
    return a * 4;
})
// console.log(뉴어레이) // [8, 12, 20, 28, 160]

// 숙제1. "상품명 다나가순 정렬" 버튼과 기능을 만들어오십시오.
document.querySelector('#name').addEventListener('click', function () {
    products.sort(function (a, b) {
        if (a.title < b.title) return 1;
        if (a.title > b.title) return -1;
        if (a.title === b.title) return 0;
    })
    // console.log(products)

    document.querySelector('.row').innerHTML = ""
    products.forEach((product, i) => {
        var 템플릿 =
            `<div class="col-sm-4">
              <img src="https://via.placeholder.com/600" class="w-100">
              <h5>${product.title}</h5>
              <p>가격 : ${product.price}</p>
            </div>`;
        document.querySelector('.row').insertAdjacentHTML('beforeend', 템플릿)
    })
})

// 숙제2. "6만원 이하 상품보기" 버튼과 기능을 만들어오십시오. 
document.querySelector('#filter').addEventListener('click', function () {
    const 새어레이 = products.filter((product) => product.price <= 60000)

    document.querySelector('.row').innerHTML = ""
    새어레이.forEach((product, i) => {
        var 템플릿 =
            `<div class="col-sm-4">
              <img src="https://via.placeholder.com/600" class="w-100">
              <h5>${product.title}</h5>
              <p>가격 : ${product.price}</p>
            </div>`;
        document.querySelector('.row').insertAdjacentHTML('beforeend', 템플릿)
    })
})

// 로컬스토리지
// array/object -> JSON : JSON.stringify()
// JSON -> array/object : JSON.parse()
localStorage.setItem('이름', 'kim');
localStorage.getItem('이름');
localStorage.removeItem('이름');
localStorage.setItem('num', [1, 2, 3]); // array를 강제로 문자로 변환해서 저장시킴(깨짐)
const arr = [1, 2, 3];
const jsonArr = JSON.stringify(arr);
localStorage.setItem('num', jsonArr); // array를 json으로 바꾸면 안전하게 저장
const 꺼낸거 = localStorage.getItem('num');
const 제이슨 = JSON.parse(꺼낸거);
// console.log(꺼낸거); // [1,2,3]
// console.log(제이슨[0]) // 1


// 숙제1. 구매버튼 누르면 누른 상품명 localStorage에 저장
document.querySelector('.row').addEventListener('click', function (e) {
    const cart = localStorage.cart // localStorage.getItem('cart')와 동일
    // const newItem = e.target.parentNode.querySelector('h5').innerHTML
    const newItem = e.target.previousElementSibling.previousElementSibling.innerHTML
    // console.log(newItem)

    if (cart == null) {
        localStorage.setItem('cart', JSON.stringify([newItem]))
    } else {
        const 카트arr = JSON.parse(cart);
        if(!카트arr.includes(newItem)) {
            카트arr.push(newItem);
            localStorage.setItem('cart', JSON.stringify(카트arr))
        }
    }
})

// 응용: 아니면 같은 상품 구매 누르면 상품 갯수가 올라가게?
document.querySelector('.row').addEventListener('click', function (e) {
    const cart = localStorage.cart
    const newItem = e.target.previousElementSibling.previousElementSibling.innerHTML

    if (cart == null) {
        localStorage.setItem('cart', JSON.stringify({'title': newItem, 'count': 1}))
    } else {
        const 카트arr = JSON.parse(cart);

        카트arr.map(function(item) {
            if(item.title.includes(newItem)) {
                item.count.push(Number(item.count)+=1);
            }
        })
        localStorage.setItem('cart', JSON.stringify(카트arr));
        
        if(!카트arr.title.includes(newItem)) {
            카트arr.push(newItem);
            localStorage.setItem('cart', JSON.stringify(카트arr))
        } else {
            카트arr.push(newItem);
            localStorage.setItem('cart', JSON.stringify(카트arr))
        }
    }
})