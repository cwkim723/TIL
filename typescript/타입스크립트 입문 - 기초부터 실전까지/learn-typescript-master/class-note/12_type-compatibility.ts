// // 인터페이스
// interface Developer {
//     name: string;
//     skill: string;
// }
// interface Person {
//     name: string;
//     skill: string;
// }
// var developer: Developer
// var person: Person
// // developer = person; // 오른쪽의 타입이 왼쪽으로 할당 불가. 더 큰 타입(person)은 작은 타입(developer)을 지원할 수 없음
// // person = developer; // 에러가 나지 않음. developer보다 person이 더 크기 때문


// // 함수
// var add = function(a: number) {
//     // ...
// }
// var sum = function(a: number, b: number) {
//     // ...
// }
// add = sum; // 에러 발생. sum이 범위적으로 add보다 더 크기 때문에 호환이 되지 않음(오른쪽 -> 왼쪽으로 호환)
// sum = add; // 호환 가능

// // 제네릭
// interface Empty<T> {
//     // ..
// }
// var empty1: Empty<string>;
// var empty2: Empty<number>;
// empty1 = empty2; // 호환 가능. 왜냐면 Empty 인터페이스 타입이 <T>로 선언되었기 때문에 string이 오든 number가 오든 상관 X,
// empty2 = empty1; // 호환 가능

// interface NotEmpty<T> {
//     data: T;
// }
// var notempty1: NotEmpty<string>; // data가 string
// var notempty2: NotEmpty<number>; // data가 number
// // notempty1과 notempty2의 타입의 차이가 생김(data: T에서 T에 차이가 생김)
// notempty1 = notempty2; // 호환 불가
// notempty2 = notempty1 // 호환 불가