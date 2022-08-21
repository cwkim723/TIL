// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(10);
// logMessage(false);

// var seho: string | number | boolean;
// function logMessage(value: string | number) {
//     if(typeof value === 'number') {
//         value.toLocaleString();
//     }
//     if(typeof value === 'string') {
//         value.toString();
//     }
//     // 타입 가드: 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정

//     throw new TypeError('value must be string or number');
// }
// logMessage('hello')
// logMessage(100);
// // 유니온 타입: 하나 이상의 타입 사용을 하고 싶을 때 사용



// interface Developer {
//     name: string;
//     skill: string;
// }

// interface Person {
//     name: string;
//     age: number;
// }

// function askSomeone(someone: Developer | Person) {
// //     someone.name
// //     // someone.skill
// //     // someone.age
// }
// // 공통된 속성, 보장된 속성만 제공

// askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
// askSomeone({ name: '캡틴', age: 100 });

// function askSomeone(someone: Developer & Person) {
//     someone.name
//     someone.skill
//     someone.age
// }
// askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 34 });

// Developer의 name, skill + Person의 name, age => 총 name, skill, age 3개의 속성 가짐
// Developer과 Person의 모든 속성을 가짐
// 실무에서는 유니온 함수가 더 많이 쓰임

// var seho: string | number | boolean; // 유니온
// var capt: string & number & boolean; // 인터섹션


