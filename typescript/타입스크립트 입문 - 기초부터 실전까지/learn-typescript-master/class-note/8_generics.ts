// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true

// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }
// logText<string>('하이'); // text = '하이', T: string
// logText<number>(10); // text = 10, T: number
// logText<boolean>(true); // text = true, T: boolean


// function logText(text: string) {
//     console.log(text);
//     // text.split('').reverse().join('');
//     return text;
// }

// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }

// logText('a');
// // logText(10); // 에러
// const num = logNumber(10);
// // logText(true); // 에러

// // 문자처림 숫자와 boolean도 받을 수 있도록 각자 함수 생성
// // =>> 유지보수 측면에서 아주 좋지 않음!



// function logText(text: string | number) {
//     console.log(text);
//     return text;
// }

// const a = logText('a');
// // a.split(''); // 유니온 타입에서는 string과 number의 공통적인 api만 제공, 혹은 string만 들어온다는 것을 명시해줘야 사용 가능
// logText(10);
// // logText(true);


// 제네릭의 장점과 타입 추론에서의 이점
function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const str = logText<string>('abc');
str.split('')
const login = logText<boolean>(true);



// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

// const obj: Dropdown = { value: 'abc', selected: false };


// interface Dropdown<T> {
//     value: T;
//     selected: boolean;
// }
// const obj: Dropdown<number> = { value: 'abc', selected: false }

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length)
//     text.forEach(function (text) {
//         console.log(text);
//     })
//     return text;
// }
// logTextLength<string>(['hi', 'abc']);


// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
logTextLength('a'); // 'a'는 기본적으로 문자열이기 때문에 length 제공
logTextLength(10); // 에러, 숫자에는 length를 제공하고 있지 않음
logTextLength({ length: 10 });


// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}
getShoppingItemOption(10);
getShoppingItemOption<'name'>('a');
// keyof: ~중에 한가지 키값만 제네릭임. => ShoppingItem에서 'name', 'price', 'stock' 중 하나만 제네릭으로 가능
getShoppingItemOption("name");