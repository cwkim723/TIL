

// 다크모드 설정
// 버튼 누르면 내부 글자 dark -> light
// 2회 누르면 다시 dark, 3회 누르면 light
let count = 1;
document.querySelector('.badge').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('navbar-dark')
    document.querySelector('.navbar').classList.toggle('bg-dark')
    document.querySelector('html').classList.toggle('dark')
    document.querySelector('.btn-div').classList.toggle('dark')

    if (count % 2 === 1) {
        this.innerHTML = 'Light 🔄'
    } else {
        this.innerHTML = 'Dark 🔄';
    }
    count++;
});



document.querySelector('.navbar-toggler').addEventListener('click', function () {
    document.querySelector('.list-group').classList.toggle('show');
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

let currentSlide = 1
const firstPage = 1
const lastPage = 3
document.querySelector('.slide-1').addEventListener('click', function(){
    currentSlide = 1;
    document.querySelector('.slide-container').style.transform = 'translateX(0vw)'
})
document.querySelector('.slide-2').addEventListener('click', function(){
    currentSlide = 2;
    document.querySelector('.slide-container').style.transform = 'translateX(-100vw)'
})
document.querySelector('.slide-3').addEventListener('click', function(){
    currentSlide = 3;
    document.querySelector('.slide-container').style.transform = 'translateX(-200vw)'
})


document.querySelector('.prev-slide').addEventListener('click', function(){
    let x = 1
    if(currentSlide == firstPage) {
        x = Number(lastPage) - 1
        
        document.querySelector('.slide-container').style.transform = 'translateX(-' + x + '00vw)';
        currentSlide = lastPage;
    } else {  
        x = Number(currentSlide) - 2;

        document.querySelector('.slide-container').style.transform = 'translateX(-' + x + '00vw)';
        currentSlide-=1;
    }
})

document.querySelector('.next-slide').addEventListener('click', function(){
    if(currentSlide >= 3) {
        currentSlide = 0
    }
    currentSlide++;

    let x = Number(currentSlide) - 1

    document.querySelector('.slide-container').style.transform = 'translateX(-' + x + '00vw)';
})


// 소수점 반올림하는 법
console.log( (1.1 + 0.3).toFixed(1) );
// '숫자'를 숫자로 변환하고 싶으면 
parseFloat('123')
parseInt('123') 


// 문제 1. 스크롤바 내리면 로고폰트 작게만들기
window.addEventListener('scroll', function () {
    // console.log('hi')
    // this.window.scrollY // 얼마나 스크롤을 내렸나
    // this.window.scrollTo(0, 100); // x좌표 y좌표로 강제로 이동(안움직임)
    // this.window.scrollBy(0, 100); // 스크롤 시 현재 위치부터 강제로 스크롤

    if(this.window.scrollY >= 100) {
        document.querySelector('.navbar-brand').style.fontSize = '20px';
    } else {
        document.querySelector('.navbar-brand').style.fontSize = '30px';
    }

})

// 문제 2. 회원약관 끝까지 읽으면 alert 띄우기
// 스크롤바 내린 양 + div 박스 높이 == div의 실제 높이
// document.documentElement = document.querySelector('html')
/*
하지만 스크롤 내린 양은 정수단위로 나오지 않고 OS 마다 부정확해서 여유를 두고 비교하는게 좋습니다. 
그래서 끝까지 스크롤했냐~ 체크하는 것 보다 끝에서 10px 정도 남기고 스크롤했냐~ 라고 체크해봅시다. 
*/
let scrollCount = 0;
document.querySelector('.lorem').addEventListener('scroll', function() {
    const 스크롤양 = this.scrollTop; // 스크롤바 내린 높이
    const 박스높이 = this.clientHeight; // div 높이
    const 실제높이 = this.scrollHeight; // 스크롤바 실제 높이

    if((스크롤양+박스높이 >= 실제높이-10) && (scrollCount === 0)) {
        scrollCount++;
        alert('다읽었징')
    }
})

// 스크롤 퍼센트 체크하기
this.document.querySelector('#coloredScroll').style.width = (Number(document.documentElement.clientHeight)) / Number(document.documentElement.scrollHeight) * 100 + '%'
window.addEventListener('scroll', function(){
    const 스크롤양 = document.documentElement.scrollTop; // 스크롤바 내린 높이
    const 박스높이 = document.documentElement.clientHeight; // div 높이
    const 브라우저높이 = document.documentElement.scrollHeight;

    const 스크롤바길이 = (Number(스크롤양) + Number(박스높이)) / Number(브라우저높이) * 100

    this.document.querySelector('#coloredScroll').style.width = 스크롤바길이 + '%'
})


// 검은 배경 누르면 모달창 닫기
document.querySelector('.black-bg').addEventListener('click', function(e) {
    // e.target; // 유저가 실제로 누른 거
    // console.log(e.target); // 이벤트 리스너 달린 곳
    // e.currentTarget; // 이벤트리스너 달린 곳 = this
    // e.preventDefault(); // 이벤트 기본동작 막아줌
    // e.stopPropagation(); // 상위요소로 이벤트 버블링 막아줌

    if(e.target == document.querySelector('.black-bg')) {
        document.querySelector('.black-bg').classList.remove('show-modal')
    }

})

// 캐러셀 스와이프 기능
let 시작좌표 = 0;
let 눌렀냐 = false;
let 이동거리 = 0;
let width = 0;
document.querySelector('.slide-container').addEventListener('mousedown', function(e){
    // 기능1: 내가 드래그한 거리만큼 박스도 왼쪽으로 이동(이동후x좌표-이동전x좌표)
    // mousedown -> 모바일에선 touchstart
    시작좌표 = e.clientX;
    눌렀냐 = true;
});
document.querySelector('.slide-container').addEventListener('mousemove', function(e){
    // mousemove -> 모바일에선 touchmove
    if(눌렀냐 === true) {
        if(currentSlide == 2) {
            width = document.querySelectorAll('.slide-box')[Number(currentSlide-1)-1].childNodes[1].width
        } else if (currentSlide == 3) {
            width += document.querySelectorAll('.slide-box')[Number(currentSlide-1)-1].childNodes[1].width
            width += document.querySelectorAll('.slide-box')[Number(currentSlide-1)-1].childNodes[1].width
        }
        document.querySelector('.slide-container').style.transform = `translateX(${(e.clientX - 시작좌표 - width)}px)`;

        이동거리 = e.clientX - 시작좌표;
        clientx = e.clientX
    }
    width = 0;
});
document.querySelector('.slide-container').addEventListener('mouseup', function(e){
    // 기능1: 내가 드래그한 거리만큼 박스도 왼쪽으로 이동(이동후x좌표-이동전x좌표)
    // mouseup -> 모바일에선 touchend

    눌렀냐 = false;
    if(이동거리 <= -100-width) {
        if(currentSlide >= 3) {
            currentSlide = 0
        }
        currentSlide++;
    
        let x = Number(currentSlide) - 1
    
        document.querySelector('.slide-container').style.transform = 'translateX(-' + x + '00vw)';
        document.querySelector('.slide-container').style.transition = 'all 0.5s'
    } else if (이동거리 >= -100 && 이동거리 <= 100) {
        document.querySelector('.slide-container').style.transform = 'translateX(0vw)';
        document.querySelector('.slide-container').style.transition = 'all 0.5s'
    } else if (이동거리 > 100) {
        let x = 1
        if(currentSlide == firstPage) {
            x = Number(lastPage) - 1
            
            document.querySelector('.slide-container').style.transform = 'translateX(-' + x + '00vw)';
            document.querySelector('.slide-container').style.transition = 'all 0.5s'
            currentSlide = lastPage;
        } else {  
            x = Number(currentSlide) - 2;

            document.querySelector('.slide-container').style.transform = 'translateX(-' + x + '00vw)';
            document.querySelector('.slide-container').style.transition = 'all 0.5s'
            currentSlide-=1;
        }

    } 

    setTimeout(()=>{
        document.querySelector('.slide-container').style.transition = 'none'
    },500)
    이동거리 = 0
});






// 모바일 ver
document.querySelectorAll('.slide-box')[0].addEventListener('touchstart', function(e){
    // 기능1: 내가 드래그한 거리만큼 박스도 왼쪽으로 이동(이동후x좌표-이동전x좌표)
    // mousedown -> 모바일에선 touchstart
    시작좌표 = e.touches[0].clientX;
    눌렀냐 = true;
});
document.querySelectorAll('.slide-box')[0].addEventListener('touchmove', function(e){
    // mousemove -> 모바일에선 touchmove

    if(눌렀냐 === true) {
        document.querySelector('.slide-container').style.transform = `translateX(${e.touches[0].clientX - 시작좌표}px)`;
        이동거리 = e.touches[0].clientX - 시작좌표;
    }
});
document.querySelectorAll('.slide-box')[0].addEventListener('touchend', function(e){
    // 기능1: 내가 드래그한 거리만큼 박스도 왼쪽으로 이동(이동후x좌표-이동전x좌표)
    // mouseup -> 모바일에선 touchend

    눌렀냐 = false;
    if(이동거리 <= -100) {
        document.querySelector('.slide-container').style.transform = 'translateX(-100vw)'
        document.querySelector('.slide-container').style.transition = 'all 0.5s'
    } else {
        document.querySelector('.slide-container').style.transform = 'translateX(0vw)'
        document.querySelector('.slide-container').style.transition = 'all 0.5s'
    }
    setTimeout(()=>{
        document.querySelector('.slide-container').style.transition = 'none'
    },500)
    이동거리 = 0
});