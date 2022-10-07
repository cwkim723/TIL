document.querySelectorAll('.tab-button')[0].addEventListener('click', function() {
    // 전체에 있는 orange 다 삭제 -> 해당 버튼에 orange + 해당 위치 content도
    
    태그삭제하기()

    document.querySelectorAll('.tab-button')[0].classList.add('orange')
    document.querySelectorAll('.tab-content')[0].classList.add('show')
})
document.querySelectorAll('.tab-button')[1].addEventListener('click', function() {
    // 전체에 있는 orange 다 삭제 -> 해당 버튼에 orange + 해당 위치 content도
    
    태그삭제하기()

    document.querySelectorAll('.tab-button')[1].classList.add('orange')
    document.querySelectorAll('.tab-content')[1].classList.add('show')
})
document.querySelectorAll('.tab-button')[2].addEventListener('click', function() {
    // 전체에 있는 orange 다 삭제 -> 해당 버튼에 orange + 해당 위치 content도
    
    태그삭제하기()

    document.querySelectorAll('.tab-button')[2].classList.add('orange')
    document.querySelectorAll('.tab-content')[2].classList.add('show')
})

function 태그삭제하기() {
    const buttonArr = document.querySelectorAll('.tab-button')
    const contentArr = document.querySelectorAll('.tab-content')

    for(let i = 0; i < buttonArr.length; i++) {
        buttonArr[i].classList.remove('orange');
    }
    for(let i = 0; i < contentArr.length; i++) {
        contentArr[i].classList.remove('show');
    }
}