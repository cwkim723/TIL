// 타입 추론 기본 1
var a = 'abc';

function getB(b = 10) {
    var c = 'hi';
    return b + c;
}

10 + '10' // 1010


// 타입 추론 기본2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }
// var shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello'
// }
// Dropdown<string> -> Dropdown<T>의 T는 string이 됨


// 타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K>{
    description: string;
    tag: K;
    // extends Dropdown -> value, title이 여기에 추가됨
}

var detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'a',
    tag: 'a'
}


// Best Common Type
// 타입스크립트가 어떤식으로 해석하는지 방식
// 가장 근접한 타입을 추론 -> 유니언으로 추론
var arr = [1, 2, true, true, 'a'];



