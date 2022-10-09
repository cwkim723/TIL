const tabButton = document.querySelectorAll('.tab-button');
const tabContent = document.querySelectorAll('.tab-content');

// tabButton[0].addEventListener('click', function() {
//     // 전체에 있는 orange 다 삭제 -> tabButton해당 버튼에 orange + 해당 위치 content도
    
//     태그삭제하기()

//     tabButton[0].classList.add('orange')
//     tabContent[0].classList.add('show')
// })
// tabButton[1].addEventListener('click', function() {
//     // 전체에 있는 orange 다 삭제 -> 해당 버튼에 orange + 해당 위치 content도
    
//     태그삭제하기()

//     tabButton[1].classList.add('orange')
//     tabContent[1].classList.add('show')
// })
// tabButton[2].addEventListener('click', function() {
//     // 전체에 있는 orange 다 삭제 -> 해당 버튼에 orange + 해당 위치 content도
    
//     태그삭제하기()

//     tabButton[2].classList.add('orange')
//     tabContent[2].classList.add('show')
// })


// function 태그삭제하기() {
//     for(let i = 0; i < tabButton.length; i++) {
//         tabButton[i].classList.remove('orange');
//     }
//     for(let i = 0; i < tabContent.length; i++) {
//         tabContent[i].classList.remove('show');
//     }
// }


// for (let i = 0; i < tabButton.length; i++) {
//     document.querySelectorAll('.tab-button')[i].addEventListener('click', function() {
//         탭열기(i)
//     })
// }


// 이벤트 리스너가 줄어들수록 램 용량이 줄어듦
document.querySelector('.list').addEventListener('click', function(e) {
    // 지금 누른게 버튼 0이면 버튼0에 orange, 박스0에 show
    // if(e.target ==  document.querySelectorAll('.tab-button')[0]) {
    //     탭열기(0)
    // }
    // if(e.target ==  document.querySelectorAll('.tab-button')[1]) {
    //     탭열기(1)
    // }
    // if(e.target ==  document.querySelectorAll('.tab-button')[2]) {
    //     탭열기(2)
    // }
    // console.log(e.target.dataset.button)
    탭열기(Number(e.target.dataset.button))
})
// html태그에 몰래 정보숨기기 가능
// data-자료이름="값"

function 탭열기(숫자) {
    for (let i = 0; i < tabButton.length; i++) {
        document.querySelectorAll('.tab-button')[i].classList.remove('orange');
        document.querySelectorAll('.tab-content')[i].classList.remove('show');
    }
    document.querySelectorAll('.tab-button')[숫자].classList.add('orange');
    document.querySelectorAll('.tab-content')[숫자].classList.add('show')
}