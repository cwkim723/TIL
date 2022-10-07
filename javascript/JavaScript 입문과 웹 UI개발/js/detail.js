const tabButton = document.querySelectorAll('.tab-button');
const tabContent = document.querySelectorAll('.tab-content')

tabButton[0].addEventListener('click', function() {
    // 전체에 있는 orange 다 삭제 -> tabButton해당 버튼에 orange + 해당 위치 content도
    
    태그삭제하기()

    tabButton[0].classList.add('orange')
    tabContent[0].classList.add('show')
})
tabButton[1].addEventListener('click', function() {
    // 전체에 있는 orange 다 삭제 -> 해당 버튼에 orange + 해당 위치 content도
    
    태그삭제하기()

    tabButton[1].classList.add('orange')
    tabContent[1].classList.add('show')
})
tabButton[2].addEventListener('click', function() {
    // 전체에 있는 orange 다 삭제 -> 해당 버튼에 orange + 해당 위치 content도
    
    태그삭제하기()

    tabButton[2].classList.add('orange')
    tabContent[2].classList.add('show')
})


function 태그삭제하기() {
    for(let i = 0; i < tabButton.length; i++) {
        tabButton[i].classList.remove('orange');
    }
    for(let i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
    }
}
