## 1강) 코틀린에서 변수를 다루는 방법

1. **변수 선언 키워드 - var과 val의 차이점**

    **자바**

    ```java
    long number1 = 10L; // (1)
    final long number2 = 10L; // (2)

    Long number3 = 1_000L; // (3)
    Person person = new Person("채원"); // (4)
    ```

    - 자바에서 long과 final long의 차이
        - 이 변수는 가변인가 불변인가(read-only)

    **코틀린**

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
        - val 컬렉션에는 element를 추가할 수 있음
            - 자바 : ArrayList인 경우 final을 붙이더라도 원소 추가가 가능
                - Arrays.asList에 추가하면 `UnsupportedOperationException` 발생
            - 코틀린
                - 모든 변수를 val로 만들고 꼭 필요한 경우 var로 변경
2. 코틀린에서의 Primitive Type
    
    **자바**
    
    ```java
    long number1 = 10L; // (1)
    
    Long number3 = 1_000L; // (3)
    ```
    
    - long: Primitive Type
    - Long: reference Type
        - 연산시엔 primitive type 사용
    
    **코틀린**
    
    ```kotlin
    var number1 = 10L
    val number3 = 1_000L
    ```
    
    - primitive type과 reference type이 하나로 합쳐져 있지만
        - 연산할 때 코틀린에서 상황에 따라 primitive type으로 변환해줌
        - 프로그래머가 boxing, unboxing을 고려하지 않아도 되도록 코틀린이 알아서 처리해줌

3. 코틀린에서의 nullable 변수
    
    **자바**
    
    - reference type에만 null 가능
        - `int a = null` (X)
        - `Integer a = null` (O)

    **코틀린**

    ```kotlin
    var number3: Long? = 1_000L
    number3 = null
    ```

    - `타입?` : null 가능 변수임을 선언

4. 코틀린에서의 객체 인스턴스화

    **자바**

    ```java
    Person person = new Person("채원")
    ```

    **코틀린**

    ```kotlin
    var person = Person("채원")
    ```

    - 코틀린에선 new를 안씀

