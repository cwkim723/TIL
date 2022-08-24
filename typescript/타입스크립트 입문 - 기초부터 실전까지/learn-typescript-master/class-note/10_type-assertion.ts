// 타입 단언(type assertion)
var a;
a = 20;
a = 'a'
var b = a as string
// 타입스크립트보다 개발자가 타입에 대해 더 잘 알 수 있음
// 개발자가 설정한 타입으로 설정


// DOM API 조직
// DOM API
// 접근자에서 제공하는 속성 등의 api
// 웹 페이지의 태그 정보에 접근하고 조작할 수 있는 API

// <div id="app">hi</div>
var div = document.querySelector('div')
if(div) {
    div.innerText
}
// div가 존재하는지 확인 먼저
