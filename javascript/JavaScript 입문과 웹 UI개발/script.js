

// 다크모드 설정
// 버튼 누르면 내부 글자 dark -> light
// 2회 누르면 다시 dark, 3회 누르면 light
let count = 1;
document.querySelector('.badge').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('navbar-dark')
    document.querySelector('.navbar').classList.toggle('bg-dark')
    document.querySelector('html').classList.toggle('dark')

    if (count % 2 === 1) {
        this.innerHTML = 'Light 🔄'
    } else {
        this.innerHTML = 'Dark 🔄';
    }
    count++;
});



document.querySelector('.navbar-toggler').addEventListener('click', function () {
    document.querySelector('.list-group').classList.toggle('show-modal');
})

document.querySelector('#login').addEventListener('click', function () {
    document.querySelector('.black-bg').classList.toggle('show-modal')
})

document.querySelector('#close').addEventListener('click', function () {
    document.querySelector('.black-bg').classList.remove('show-modal')
})

// 5초 후에 div 숨김
setTimeout(function () {
    document.querySelector('.alert').style.display = 'none'
}, 5000)

setTimeout(함수, 1000)
function 함수() {
}

// 1초마다 코드 실행
setInterval(function () { }, 1000)

// 1초마다 5라는 문자를 1씩 감소
// 그냥 함수 파라미터 자리에 들어가는 함수를 콜백함수라고 합니다.
// addEventListener(), setTimeout() 이런건 안에 콜백함수를 요구
let interval = setInterval(숫자바꾸기, 1000)
let countNum = 5;
function 숫자바꾸기() {
    document.querySelector('#second').innerHTML = countNum - 1;
    if (countNum == 0) {
        clearInterval(interval)
    }

    countNum -= 1
}

// 'abc'.includes('a') : abc에 a가 들어있냐
// /a/.test('abcde') // true : 정규식
// /[a-z]/.test('바보') // false
// /[A-Z]/.test('abcdeA') // true
// /[ㄱ-ㅎ가-힣]/.test('ㅋㅋㅋㅋ') // true
// /[0-9]/.test('ㅋㅋㅋㅋ') // false
// /\S/.test('ㅋㅋㅋㅋ') // 아무 문자 하나(특문 포함)
// /^a/.test('asdffdsd') // a로 시작하냐 -> true
// /a$/.test('sadfaa') // a로 끝나냐
// /a|b/.test('bbb') // or
// email 검사 정규식
// /\S+@\S+\.\S+/.test('aaa@bbb.ccc') // 
// \S : 아무글자 한글자




// 전송 버튼 누르면 input에 입력한 값이 공백이면 알림창
document.querySelector('form').addEventListener('submit', function (e) {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#pwd').value;

    if (email == '') {
        e.preventDefault();
        alert('아이디 공백 입력 금지')
    } else if (/\S+@\S+\.\S+/.test(email) == false) {
        // 이메일 형식 검사
        e.preventDefault();
        alert('이메일 형식 아님용')
    } else if (password == '') {
        e.preventDefault();
        alert('비밀번호 공백 입력 금지')
    } else if (password.length < 6) {
        e.preventDefault();
        alert('6자 미만 입력')
    } else if (/[A-Z]/.test(password) == false) {
        e.preventDefault();
        alert('비밀번호는 대문자 하나 포함해야대')
    }
});
document.querySelector('#email').addEventListener('input', function (e) {
    // input 값이 변할 때 실행됨
    console.log('input changed')
});


// one way 애니메이션 만들기
// 1. 시작화면 만들기
// 2. 최종화면 만들기
// 3. 원할 때 최종화면으로 변하게 JS
// 4. transition: all 1s; 추가

    
// 2번 버튼을 누르면 transform: translateX(-100vw); 추가
document.querySelector('.slide-1').addEventListener('click', function(){
    document.querySelector('.slide-container').style.transform = 'translateX(0vw)'
})
document.querySelector('.slide-2').addEventListener('click', function(){
    document.querySelector('.slide-container').style.transform = 'translateX(-100vw)'
})
document.querySelector('.slide-3').addEventListener('click', function(){
    document.querySelector('.slide-container').style.transform = 'translateX(-200vw)'
})