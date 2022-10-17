<h2>Block vs Non-Block / Sync vs Async</h2>

- Java: Sync + Block
- JavaScript: Async + Non-Block

제어권의 반환

결과값의 전달: return

<br>

<h2>Block Non-Block</h2>

keyword: 제어권의 반환

제어권: 행동할 수 있는 권리

제어할 수 없는 대상의 처리 방법

<br>


```java
function 호출자() {
    functionA();

    functionB();

    functionC();
}
```

<br>

```java
function functionA() {
    // 로직

    return sth;
}

```
<br>

<h2>제어권(실행권리)이 누구에게 있는지 나타내보기</h2>
<h3>Block의 경우</h3>

- 제어권이 처음에 호출자()에게 있음
    - 제어권: 호출자() O
- 호출자()가 functionA()를 실행함
    - 제어권: 호출자() X, functionA() O
- functionA()가 return함으로써 결과 + 제어권이 호출자에게 돌아감
    - 제어권: 호출자() O, functionA() X
    - 결과: 호출자()에 있는 functionA()에게 존재

... 반복

<br>

<h3>Non-Block의 경우</h3>

- 제어권이 처음에 호출자()에게 있음
    - 제어권: 호출자() O
- 호출자()가 functionA()를 실행함
    - 제어권: 호출자() O, functionA() X
    - 제어권은 다시 호출자에게 돌아오고 functionA()는 쓰레드든지 단일 쓰레드 분할을 통해 다른 제어권 갖든지해서 호출자에게 제어권 돌려준 뒤에 functionA()은 따로 알아서 돌아감
- 제어권은 functionB()에게 돌아감

- functionA()가 return
    - 제어권: 호출자() O, functionA() X
    - 결과: functionA()에게 존재하는 return값은 어떻게??

... 반복

<br><br>

<h2>Sync Async</h2>
Syn(함께) + Chrono(시간)

데이터베이스 동기화 : 데이터를 같은 시간에 갖게 맞춰줌



