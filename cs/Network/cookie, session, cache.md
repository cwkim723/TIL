<h2>쿠키와 세션</h2>
사용이유: HTTP 프로토콜의 약점을 보완하기 위해 사용

- HTTP 약점: Stateless, Connectionless

<br>

<h3>쿠키(Cookie)</h3>
- 로컬 피씨에 저장하는 정보 파일

- 이름, 값, 만료일(저장기간), 경로 정보로 구성

```javascript
const setCookie = function (name, value, days) {
    const exdate = new Date();
    exdate.setDate(exdate.getDate() + days);
    document.cookie = name + '=' + value + ';expires=' + exdate.toUTCString() + ';path=/';
}

setCookie("cookie_test", "chocolate cookie", 1);


const getCookie = function (name) {
    const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
};

const cookie_test = getCookie("cookie_test");
console.log("쿠키 cookie_test 변수에 저장된 값: " + cookie_test);
```
![스크린샷 2022-10-27 오후 5 42 21](https://user-images.githubusercontent.com/93105083/198237593-be153a86-cc92-4920-86b9-6e7d4463e10f.png)

![스크린샷 2022-10-27 오후 5 42 31](https://user-images.githubusercontent.com/93105083/198237589-cb93814d-6c0f-472e-a316-55b31a8dd5ce.png)



<br>

<h3>세션(Session)</h3>
- 

<br>

<h3>캐시(Cache)</h3>

<br>

<hr>

https://dev-coco.tistory.com/61

https://webisfree.com/2015-02-04/[자바스크립트]-쿠키(cookie)-저장-및-삭제-예제보기