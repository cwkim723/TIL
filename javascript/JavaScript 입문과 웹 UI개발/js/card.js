window.addEventListener('scroll', function () {
    const 높이 = window.scrollY
    console.log(높이)

    // 650~1150까지 스크롤바 내리면 첫째카드의 opacity 1~0으로 서서히 변경
    const y1 = (-1/500) * 높이 + (115/50);
    // y = a * 높이 + b;
    // 1 = a * 650 + b
    // 0 = a * 1150 + b
    // y = (-1/500) * 높이 + (115/50);
    document.querySelectorAll('.card-box')[0].style.opacity = y1

    // 1200 ~  1700까지 스크롤바 내리면 둘째카드 opacity 1~0
    const y2 = (-1/500) * 높이 + (170/50)
    document.querySelectorAll('.card-box')[1].style.opacity = y2

})