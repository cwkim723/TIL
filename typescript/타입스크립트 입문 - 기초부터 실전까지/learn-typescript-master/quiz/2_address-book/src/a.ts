// function fetchItems(): string[] {
//   let items = ['a', 'b', 'c'];
//   return items;
// }
// let result = fetchItems();
// console.log(result); // string[]

function fetchItems(): Promise<string[]> {
    let items: string[] = ['a', 'b', 'c']; // Promise<string[]>이기 때문에 타입이 string[]
    return new Promise(function (resolve){
        resolve(items);
    });
    // fetchItems()의 반환값이 Promise<unknown> => 반환값이 뭔지를 명시해줘야 함
    // Promise는 기본적으로 generics 사용
}
fetchItems();