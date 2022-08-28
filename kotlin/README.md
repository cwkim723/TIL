## 1강) 코틀린에서 변수를 다루는 방법

1. **변수 선언 키워드 - var과 val의 차이점**

**1) 자바**

```java
long number1 = 10L; // (1)
final long number2 = 10L; // (2)

Long number3 = 1_000L; // (3)
Person person = new Person("채원"); // (4)
```

- 자바에서 long과 final long의 차이
    - 이 변수는 가변인가 불변인가(read-only)

**2) 코틀린**

```kotlin
var number1 = 10L
number1 = 5L

val number2 = 10L
number2 = 5L // 에러
```

- var
    - variable의 약자
    - 가변
- val
    - value
    - 불변
- 모든 변수에 수정 가능 여부(var / val)를 표시해야 함
- 코틀린에서는 타입을 컴파일러가 알아서 추론해줌
    
    ```kotlin
    var number1: Long = 10L
    number1 = 5L
    
    val number2: Long = 10L
    number2 = 5L // 에러
    ```
    
    - 타입을 지정하고 싶으면 이런 식으로 쓰면 됨
- 초기값을 지정하지 않은 경우?

