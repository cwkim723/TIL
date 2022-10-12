<h3>DOM 이라는 말</h3>
<br>
자바스크립트가 HTML 조작을 하기 위해선 HTML을 자바스크립트가 해석할 수 있는 문법으로 변환  
- 실제로 브라우저는 HTML 페이지를 열어줄 때 HTML을 자바스크립트로 쉽게 찾고 바꾸기 위해 object와 비슷한 자료형에 담음

```html
<div style="color : red">안녕하세요</div>
```
이거를  

```javascript
var document = {
  div1 : {
    style : {color : 'red'}
    innerHTML : '안녕하세요'
  }
}
```
요런 식으로 object 자료에 담아 저장함 : 위 변수를 **document object**라고 함  
- 간지나게 + model이라고 붙여서 Document Object Model(DOM)  

<br>

**DOM** <br>
자바스크립트가 HTML에 대한 정보들 (id, class, name, style, innerHTML 등)을 object 자료로 정리한 것

<br>
<hr><br>
<h3>브라우저는 HTML 문서를 위에서 부터 읽으며 DOM을 생성</h3>
<br>
브라우저는 HTML문서를 위에서 부터 차례로 읽어내려가고 읽을 때 마다 HTML을 발견하면 DOM에 추가  

```html
<script>
  document.getElementById('test').innerHTML = '안녕'
</script>

<p id="test">임시글자</p>
```

에러 발생
- 브라우저는 HTML을 위에서부터 한줄한줄 읽음
- 그런데 갑자기 자바스크립트로 ```<p id="test">``` 인 요소를 DOM에서 찾고 바꾸라고 함
    - 에러 발생
    - 아직 ```<p id="test">```를 읽기 전이라 p태그에 대한 DOM이 아직 생성되지 않았기 때문
- **자바스크립트는 DOM이 생성된 경우에만 HTML을 변경할 수 있음**

<br>
<hr>
<br>
<h3>자바스크립트 실행을 약간 나중으로 미루는 방법</h3>  
<br>

HTML 전부 다 읽고 실행해주세요라고 코드 작성
```javascript
$(document).ready(function(){ 실행할 코드 })

document.addEventListener('DOMContentLoaded', function() { 실행할 코드 }) 
```
- HTML을 다 읽어들였는지를 알려주는 이벤트리스너

<br>

```html
<script>
  document.addEventListener('DOMContentLoaded', function() { 
    document.getElementById('test').innerHTML = '안녕'
  })
</script>

<p id="test">임시글자</p>
```
- 이후 해당 코드를 작성해도 잘 동작함
- 자바스크립트 위치를 내가 정할 수 없을 경우에만 유용한 방법

<br>
<hr>
<br>
<h3>load 이벤트리스너</h3>

<br>
load 라는 이벤트리스너를 사용하면 DOM 생성뿐만 아니라 이미지, css, js파일이 로드가 됐는지도 체크가능  

- 이미지 같은게 로드되면 load라는 이벤트가 발생
```javascript
셀렉터로찾은이미지.addEventListener('load', function(){
  //이미지 로드되면 실행할 코드 
})
```
- 외부 자바스크립트 파일에 저걸 적어놓으면 js 파일보다 이미지가 더 먼저 로드되는 경우도 있어 이벤트 발생체크가 어려울 수 있음

<br>

```javascript
$(window).on('load', function(){
  //document 안의 이미지, js 파일 포함 전부 로드가 되었을 경우 실행할 코드 
});

window.addEventListener('load', function(){
  //document 안의 이미지, js 파일 포함 전부 로드가 되었을 경우 실행할 코드
})
```
- document에 포함된 이미지, CSS파일 등 모든것이 로드가 되었는지 체크
- ready 이런거랑 차이는 앞선 .ready()는 DOM 생성만 체크하는 함수인데, 이것보다 약간 더 나아가서 모든 파일과 이미지의 로드상태를 체크