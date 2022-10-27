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