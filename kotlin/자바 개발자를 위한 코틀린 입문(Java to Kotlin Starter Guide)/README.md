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


## 2강) 코틀린에서 null을 다루는 방법

1. 코틀린에서 Null 체크
    
    **자바**
    
    ```java
    public boolean startWithA(String str) {
    	return str.startsWith("A");
    }
    ```
    
    - str에 null이 들어오면 NPE
    1. str이 null이면 exception
        
        ```java
        public boolean startsWithA1(String str) {
        	if (str == null) {
        		throw new IllegalArgumentException("null이 들어옴");
        	}
        	return str.startsWith("A");
        }
        ```
        
    2. str이 null이면 null 반환
        
        ```java
        public **Boolean** startsWithA2(String str) {
        	if (str == null) {
        		return null;
        	}
        	return str.startsWith("A");
        }
        ```
        
    3. str이 null인 경우 false 반환
        
        ```java
        public boolean startsWithA3(String str) {
        	if (str == null) {
        		return false;
        	}
        	return str.startsWith("A");
        }
        ```
        
    
    **코틀린**
    
    1. str이 null이면 exception
        
        ```kotlin
        fun startsWithA1(str: String?): Boolean {
        	if(str == null) {
        		throw IllegalArgumentException("null이 들어옴")
        	}
        	return str.startsWith("A")
        }
        ```
        
    2. str이 null이면 null 반환
        
        ```kotlin
        fun startsWithA2(str: String?): **Boolean?** {
        	if(str == null) {
        		return null
        	}
        	return str.startsWith("A")
        }
        ```
        
    3. str이 null인 경우 false 반환
        
        ```kotlin
        fun startsWithA3(str: String?): Boolean {
        	if(str == null) {
        		return false
        	}
        	return str.startsWith("A")
        	// 위에서 null이 아님을 판별해주면 아래에서는 null이 아니라고 판단해줌
        }
        ```
        
        - 위에서 null이 아님을 판별해주면 아래에서는 null이 아니라고 판단해줌
    - **코틀린에서는 null이 가능한 타입을 완전히 다르게 취급함**
        - null이 가능한 타입만을 위한 기능? ⇒ safe call, elvis
2. safe call과 elvis 연산자
    
    **safe call**
    
    ```kotlin
    val str: String? = "ABC"
    str.length // 불가능
    str?.length // 가능!!
    ```
    
    - `str?.length` : str이 null이 아니면 length 값을 반환. str이 null이면 null을 반환

   **Elvis 연산자**

   ```kotlin
   val str: String? = "ABC"
   str?.length ?: 0
   ```

   - 앞의 결과가 null이면 뒤의 값을 사용
   - `str?.length ?: 0`
       - str.length가 null이면 0을 반환

   - Elvis 연산은 early return에도 사용할 수 있음

       **자바**

       ```java
       public long calculate(Long number) {
         if(number == null) {
            return 0;
         }

         // 다음 로직
       }
       ```

       - long: 객체 타입의 long → null 반환을 못함.
           - 그래서 Long인 number가 null이면 이걸 0으로 반환시켜줌
           - ⇒ **early return validation**

       **코틀린**

       ```kotlin
       fun calculate(number: Long?): Long {
         number ?: return 0
         // 다음 로직
       }
       ```

       - **early return validation**을 간편하게 작성 가능
   1. str이 null이면 exception

       ```kotlin
       fun startsWithA1(str: String?): Boolean {
         return str?.startsWith("A")
         ?: throw IllegalArgumentException("null이 들어옴")
       }
       ```

   2. str이 null이면 null 반환

       ```kotlin
       fun startsWithA2(str: String?): **Boolean?** {
         return str?.startsWith("A")
       }
       ```

   3. str이 null인 경우 false 반환

       ```kotlin
       fun startsWithA3(str: String?): Boolean {
         return str?.startsWith("A") ?: false
       }
       ```

       ```kotlin
       fun startsWithA3(str: String?): Boolean {
         return str?.startsWith("A") ?: false
       }
       ```


3. 널 아님 단언
    
    ```kotlin
    fun startsWithA1(str: String?): Boolean {
    	return str**!!**.startsWith("A")
    }
    ```
    
    - nullable type이지만 아무리 생각해도 null이 될 수 없는 경우

   ```kotlin
   fun startsWithA3(str: String?): Boolean {
      return str!!.startsWith("A")
   }
   ```

   - `str.startsWith("A")`은 null이 반환될 수 있음(str가 String?이기 때문). 하지만 이 함수의 리턴 타입은 Boolean이므로 null 리턴 불가 → 컴파일러 에러 발생
   - 이럴 때 `str.startsWith("A")`가 null이 아니라고 단언(!!)해줌으로써 에러가 발생하지 않는 것임
   - 혹시나 str!!에 null이 들어오게 되면 NPE(런타임 에러)가 나오기 때문에 null이 아닌게 확실한 경우만 `!!`을 써야 함

4. 플랫폼 타입!!
    - 코틀린에서 자바 코드를 가져다 사용할 때 어떻게 처리?
    
    **자바**
    
    ```java
    public class Person {
    	private final String name;
    
    	public Person(String name) {
    		this.name = name;
    	}
    
    	@Nullable
    	public String getName() {
    		return name;
    	}
    }
    ```
    
    **코틀린**
    
    ```kotlin
    fun main() {
    	val person = Person("공부하는 개발자")
    	startsWithA(person.name) // 에러 발생
    	// name은 @Nullable이기 때문
    	// @NotNull이면 사용 가능
    }
    
    fun startsWithA(str: String): Boolean {
    	return str.startsWith("A")
    	// str은 null이 아님
    }
    ```
    
    - 코틀린은 자바코드의 `@Nullable`을 이해할 수 있음
    - **플랫폼 타입**
        - 코틀린이 null 관련 정보를 알 수 없는 타입(`@Nullable` 혹은 `@NotNull`을 붙이지 않은 경우)
        - 런타임 에러 발생 가능
        

## 3강) 코틀린에서 Type을 다루는 방법

1. 기본 타입
    - Byte, Short, **Int, Long, Float, Double**, 부호 없는 정수들
    
    **코틀린**
    
    - 선언된 기본값을 보고 타입 추론
        
        ```kotlin
        val number1 = 3 // Int
        val number2 = 3L // Long
        val number3 = 3.0f // Float
        val number4 = 3.0 // Double
        ```
        
        - 3: Int, 3L: Long, 3.0f: Float, 3.0: Double
        
    - 코틀린: 기본 타입간의 변환은 **명시적**으로 이루어져야 함
        
        ```kotlin
        val number1 = 4
        val number2: Long = number1 // Type mismatch
        ```
        
        - 에러 발생 → 컴파일 에러(Type mismatch)
        - 해결 방법: `to변환타입()` 사용
            
            ```kotlin
            val number1 = 4
            val number2: Long = number1.toLong()
            ```
            
            ```kotlin
            val number1 = 3
            val number2 = 5
            val result = number1 / number2.toDouble()
            ```
            
        
    - 변수가 nullable이라면 적절한 처리 필요
        
        ```kotlin
        val number1: Int? = 3
        // val number2: Long = number1.toLong() // NPE 발생 가능
        
        val number2: Long = number1.toLong() ?: 0L // 적절한 처리
        ```
        
    
    **자바**
    
    - 자바: 기본 타입간의 변환은 **암시적**으로 이루어질 수 있음
    
    ```java
    int number1 = 4;
    long number2 = number1;
    ```
    
    - int 타입의 값이 long타입으로 **암시적**으로 변경(더 큰 타입으로 암시적 변경)
    
2. 타입 캐스팅
    
    **자바**
    
    ```java
    public static void printAgeIfPerson(Object obj) {
    	if(obj instanceof Person) {
    		Person person = (Person) obj;
    	}
    }
    ```
    
    - `instanceof` : 변수가 주어진 타입이면 true, 그렇지 않으면 false
    - `(Person)`: 주어진 타입을 해당 타입으로 변경
    
    **코틀린**
    
    ![스크린샷 2022-08-30 오후 12.35.38.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0e56f568-a254-4d89-aaa7-697f8c3e939e/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2022-08-30_%EC%98%A4%ED%9B%84_12.35.38.png)
    
    ```kotlin
    fun printAgeIfPerson(obj: Any) {
    	if(obj is Person) {
    		val person = obj as Person // as Person은 생략 가능
    	}
    }
    ```
    
    - `is`: 자바의`instanceof`과 동일, 변수가 `Person` 타입이면 true, 그렇지 않으면 false
    - `obj as Person`
        - 자바의 `(Person) obj`과 동일
        - obj라는 변수를 Person타입으로 간주
        - `as Person`은 생략 가능 ⇒ **스마트 캐스트**
    - 만약 obj가 Person이 아니라는 코드를 작성하고 싶은 경우
        - `obj !is Person`
            - is 앞에 `!`를 붙이면 됨
    - obj에 null이 들어올 수 있는 경우
        
        ```kotlin
        fun printAgeIfPerson(obj: Any?) {
        	val person = obj as Person
        }
        ```
        
        - obj = null인 경우 NPE 발생
        - 해결 방법
            
            ```kotlin
            fun printAgeIfPerson(obj: Any?) {
            	val person = obj as? Person
            }
            ```
            
            ![스크린샷 2022-08-30 오후 12.36.38.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/03f06e14-ffc5-4de8-bda9-731b25c20f52/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2022-08-30_%EC%98%A4%ED%9B%84_12.36.38.png)
            
3. 코틀린의 3가지 특이한 타입
    - Any, Unit, Nothing
        - Any
            - Java의 Object 역할(모든 객체 최상위 타입)
            - 모든 Primitive Type의 최상위 타입도 Any
            - Any 자체는 null을 포함하고 있지 않음. null 포함 시 Any?
            - Any에 equals, hashCode, toString 존재
        - Unit
            - Java의 void와 동일한 역할
            - void와 다르게 Unit은 그 자체로 타입인자로 사용 가능
            - 단 하나의 인스턴스만 갖는 타입(실제 존재하는 타입)
        - Nothing
            - 함수가 정상적으로 끝나지 않았음을 표현
            - 무조건 예외를 반환하는 함수 / 무한 루프 함수 등
            
            ```kotlin
            fun fail(message: String): Nothing {
            	throw IllegalArgumentException(message)
            }
            ```
            
4. String Interpolation, String indexing
    
    **자바**
    
    - 문자열 작성
        
        ```java
        Person person = new Person("채원", 26);
        String log = String.format("사람의 이름은 %s이고 나이는 $s세 입니다."
        , person.getName(), person.getAge());
        ```
        
    
    - 여러 줄에 걸친 문자열 작성
        
        ```java
        StringBuilder builder = new StringBuilder();
        builder.append("사람의 이름은");
        builder.append(person.getName());
        builder.append("이고 나이는");
        builder.append(person.getAge());
        builder.append("세 입니다.");
        ```
        
    
    - 문자열의 특정 문자 가져오기
        
        ```java
        String str = "ABCDE";
        char ch = str.charAt(1);
        ```
        
    
    **코틀린**
    
    - 문자열 작성
        
        ```kotlin
        val person = Person("채원", 26);
        val log = "사람의 이름은 ${person.name}이고 나이는 ${person.age}세 입니다"
        ```
        
        - `${변수}`
        - `${변수}`를 사용하는 것이 **가독성**, **일괄 변환**, **정규식 활용** 측면에서 유리
        
        ```kotlin
        val name = "채원"
        val age = 26
        val log = "사람의 이름: $name 나이: $age"
        ```
        
        - `$변수`
    
    - 여러 줄에 걸친 문자열 작성
        
        ```kotlin
        val withoutIndent = 
        	"""
        						ABC
        						123
        						456
        	""".trimIndent()
        ```
        
        - 여러줄에 걸친 문자열 작성 시 큰따옴표 세개(”””)
        
    - 문자열의 특정 문자 가져오기
       ```kotlin
         val str = "ABCDE"
         val ch = str[1]
         ```
## **4강. 코틀린에서 연산자를 다루는 방법**

1. 단항 연산자 / 산술 연산자
    - 단항 연산자: ++, —
    - 산술 연산자: +, -, *, /, %
    - 산술대입 연산자: +=, -=, *=, /=, %=
2. 비교 연산자와 동등성, 동일성
    - 비교 연산자: >, <, ≥, ≤
    
    **자바**
    
    ```java
    publc class JavaMoney implements Comparable<JavaMoney> {
    	private final long amount;
    
    	public JavaMoney(long amount) {
    		this.amount = amount;
    	}
    
    	@Override
    	public int compareTo(@NotNull JavaMoney o) {
    		return Long.compare(this.amount, o.amount);
    	}
    
    }
    ```
    
    **코틀린**
    
    - 자바와 다르게 객체를 비교할 때 비교 연산자를 사용하면 자동으로 compareTo 호출
    
    ```kotlin
    fun main() {
    
    	val money1 = JavaMoney(2_000L)
    	val money2 = JavaMoney(1_000L)
    
    	if(money1 > money2) {
    		println("Money1이 Money2보다 금액이 큽니다")
    	}
    
    }
    ```
    
    - 코틀린은 compareTo를 안 써도 알아서 자동으로 compareTo를 호출해줌
    
    **동등성(Equality), 동일성(Identity)**
    
    - 동등성(Equality): 두 객체의 값이 같은가
        - 자바: equals()로 확인
        - 코틀린: ==로 확인(간접적으로 equals() 호출해줌)
    - 동일성(Identity): 완전히 동일한 객체인가? 즉 주소가 같은가?
        - 자바: ==으로 확인
        - 코틀린: ===으로 확인
3. 논리 연산자 / 코틀린에 있는 특이한 연산자
    - 논리 연산자: &&, ||, !
    - `in / !in`
        - 컬렉션이나 범위에 포함되어 있다, 포함되어 있지 않다
            
    - `a..b`
        - a부터 b까지의 범위 객체 생성
    - `a[i]`
        - a에서 특정 Index i로 값을 가져옴
        
    - `a[i] = b`
        - a의 특정 index i에 b를 넣음
    
4. 연산자 오버로딩
    
    **자바**
    
    ```java
    publc class JavaMoney implements Comparable<JavaMoney> {
    	private final long amount;
    
    	public JavaMoney(long amount) {
    		this.amount = amount;
    	}
    
    	public JavaMoney plus(JavaMoney other) {
    		return new JavaMoney(this.amount + other.amount);
    	}
    
    	@Override
    	public int compareTo(@NotNull JavaMoney o) {
    		return Long.compare(this.amount, o.amount);
    	}
    
    }
    ```
    
    **코틀린**
    
    ```kotlin
    data clas Money (
    	val amount: Long
    ) {
    		
    	operator fun plus(other: Money): Money {
    		return Money(this.amount + other.amount)
    	}
    
    }
    ```
    

## 5강) 코틀린에서 제어문을 다루는 방법

1. if문
    
    **자바**
    ```java
    private String getPassOrFail(int score) {
    	if(score >= 50) {
    		return "P";
    	} else {
    		return "F";
    	}
    }
    ```
    
    **코틀린**
    ```kotlin
    fun getPassOrFail(score: Int) {
    	if(score >= 50) {
    		return "P"
    	} else {
    		return "F"
    	}
    }
    ```
    
2. Expression과 Statement
    - Statement: 프로그램의 문장, 하나의 값으로 도출되지 않음
        - 자바에서 if-else는 Statement
        - Statement 중에 하나의 값으로 도출되는 문장들이 Expression
    - Expression: 하나의 값으로 도출되는 문장
        - 코틀린에서 if-else는 Expression
            
            ```kotlin
            fun getPassOrFail(score: Int): String {
            	return if(score >= 50) {
            		"P"
            	} else {
            		"F"
            	}
            }
            ```
            
            - 코틀린에서는 if-else를 expression으로 사용할 수 있음 → 삼항 연산자 없음(필요 X)
        
        ```java
        int score = 30 + 40;
        ```
        
        - `30 + 40;` : Expression, Statement
        
        ```java
        String grade = if(score >= 50) {
        	"P";
        } else {
        	"F";
        } // 에러 발생
        ```
        
        - 에러 발생
        - if() {}문을 통해 도출된 값을 String grade의 값으로 인정하지 않음 ⇒ Statement
        
        ```java
        String grade = score >= 50 ? "P" : "F";
        ```
        
        - 삼항 연산자는 하나의 값으로 취급하면서 에러가 없음 ⇒ Expression이면서 Statement
    
    - 어떠한 값이 특정 범위에 포함되어있는지 여부
        
        **자바**
        
        ```java
        if(0 <= score && score <= 100){}
        ```
        
        **코틀린**
        
        ```kotlin
        if(score in 0..100) {}
        ```
        
3. switch와 when
    
    **자바의 switch**
    
    ```java
    private String getGrageWithSwitch(int score) {
    	switch(score / 10) {
    		case 9:
    			return "A";
    		case 8:
    			return "B";
    		case 7:
    			return "C";
    		default:
    			return "D";
    	}
    }
    ```
    
    **코틀린의 when**
    
    ```kotlin
    when (값) {
    	조건부 -> 어떠한 구문
    	조건부 -> 어떠한 구문
    	else -> 어떠한 구문
    }
    ```
    
    ```kotlin
    fun getGradeWithSwitch(score: Int): String {
    	return when (score / 10) {
    		9 -> "A"
    		8 -> "B"
    		7 -> "C"
    		else -> "D"
    	}
    }
    ```
    
    **자바**
    
    ```java
    private boolean startsWithA(Object obj) {
    	if (obj instanceof String) {
    		return ((String) obj).startsWith("A");
    	} else {
    		return false;
    	}
    }
    ```
    
    **코틀린**
    
    ```kotlin
    fun startsWithA(obj: Any): Boolean {
    	return when (obj) {
    		is String -> obj.startsWith("A");
    		else -> false
    	}
    }
    ```
    
- 여러개의 조건을 함께 검사
    
    **자바**
    
    ```java
    private void judgeNumber(int number) {
    	if(number == 1 || number == 0 || number == -1) {
    		System.out.println("어디서 많이 본 숫자입니다.");
    	} else {
    		System.out.println("1, 0, -1이 아닙니다.");
    	}
    }
    ```
    
    **코틀린**
    
    ```kotlin
    fun judgeNumber(number: Int) {
    	when (number) {
    		1, 0, -1 -> println("어디서 많이 본 숫자입니다.")
    		else -> println("1, 0, -1이 아닙니다.")
    	}
    }
    ```
    
- 값(`when(값)`)이 없는 경우
    
    **자바**
    
    ```java
    private void judgeNumber2(int number) {
    	if(number == 0) { 
    		System.out.println("주어진 숫자는 0입니다.");
    		return;
    	}
    
    	if(number % 2 == 0) {
    		System.out.println("주어진 숫자는 짝수입니다.");
    		return;
    	}
    
    	System.out.println("주어지는 숫자는 홀수입니다.");
    }
    ```
    
    **코틀린**
    
    ```kotlin
    fun judgeNumber2(number: Int) {
    	when {
    		number == 0 -> println("주어진 숫자는 0입니다.")
    		number % 2 == 0 -> println("주어진 숫자는 짝수입니다.")
    		else -> println("주어진 숫자는 홀수입니다.")
    	}
    }
    ```
    

## 6강) **코틀린에서 반복문을 다루는 방법**

1. for-each문
    - 숫자가 들어 있는 리스트를 하나씩 출력
        
        **자바**
        
        ```java
        List<Long> numbers = Arrays.asList(1L, 2L, 3L);
        for (long number: numbers) {
        	System.out.println(number);
        }
        ```
        
        **코틀린**
        
        ```kotlin
        val numbers = listOf(1L, 2L, 3L)
        for (number in numbers) {
        	println(number)
        }
        ```
        

2. 전통적인 for문
- 1부터 3까지 출력하는 예제
    
    **자바**
    
    ```java
    for(int i = 1; i <= 3; i++) {
    	System.out.println(i);
    }
    ```
    
    **코틀린**
    
    ```kotlin
    for(i in 1..3) {
    	println(i)
    }
    ```
    
- 내려가는 경우
    
    **자바**
    
    ```java
    for(int i = 1; i >= 1; i--) {
    	System.out.println(i);
    }
    ```
    
    **코틀린**
    
    ```kotlin
    for(i in 3 downTo 1) {
    	println(i)
    }
    ```
    
- 2칸씩 내려가는 경우
    
    **자바**
    
    ```java
    for(int i = 1; i <= 5; i+=2) {
    	System.out.println(i);
    }
    ```
    
    **코틀린**
    
    ```kotlin
    for(i in 1..5 step 2) {
    	println(i)
    }
    ```
    

3. Progression과 Range
- `..`연산자 : 범위를 만들어내는 연산자
    - `1..3` : 1부터 3까지의 범위
        
        ```kotlin
        for(i in 1..3) {
        	println(i)
        }
        ```
        
        - Progression(등차수열)을 만들어내고 있음
    - `3 downTo 1` : 시작값 3, 끝값 1, 공차가 -1인 등차수열
        - 3, 2, 1
    - `1..5 step 2` : 시작값 1, 끝값 5, 공차가 2인 등차수열
        - 1, 3, 5
- `downTo`, `step`도 함수(중위 호출 함수) : `변수 함수이름 argument`

4. While문
- 1부터 3을 출력하는 예제
    
    **자바**
    
    ```java
    int i = 1;
    while(i <= 3) {
    	System.out.println(i);
    	i++;
    }
    ```
    
    **코틀린**
    ```kotlin
   var i = 1
   while (i <= 3) {
      println(i)
      i++
   }
   ```


## **7강) 코틀린에서 예외를 다루는 방법**

1. try catch finally 구문
    - 주어진 문자열을 정수로 변경하는 예제
        
        **자바**
        
        ```java
        private int parseIntOrThrow(@NotNull String str) {
        	try {
        		return Integer.parseInt(str);
        	} catch (NumberFormatException e) {
        		throw new IllegalArgumentException(String.format("주어진 %s는 숫자가 아닙니다", str));
        	}
        }
        ```
        
        **코틀린**
        
        ```kotlin
        fun parseIntOrThrow(str: String): Int {
        	try {
        		return str.toInt()
        	} catch (e. NumberFormatException) {
        		throw IllegalArgumentException("주어진 ${str}은 숫자가 아닙니다.")
        	}
        }
        ```
        
        - 형변환 `to타입()` 사용
        
    - 주어진 문자열을 정수로 변경하는 예제. 실패하면 null을 반환
        
        **자바**
        
        ```java
        private Integer parseIntOrThrowV2(@NotNull String str) {
        	try {
        		return Integer.parseInt(str);
        	} catch (NumberFormatException e) {
        		return null;
        	}
        }
        ```
        
        **코틀린**
        
        ```kotlin
        fun parseIntOrThrowV2(str: String) {
        	return try {
        		str.toInt()
        	} catch (e: NumberFormatException) {
        		null
        	}
        }
        ```
        
    
2. Checked Exception과 Unchecked Exception
    - 프로젝트 내 파일의 내용물을 읽어오는 예제
        
        **자바**
        
        ```java
        public void readFile() throws IOException {
        	File currentFile = new File(".");
        	File file = new File(currentFile.getAbsolutePath() + "/a.txt");
        	BufferedReader reader = new BufferedReader(new FileReader(file));
        	System.out.println(reader.readLine());
        	reader.close();
        }
        ```
        
        **코틀린**
        
        ```kotlin
        fun readFile() {
        	val currentFile = File(".")
        	val file = File(currentFile.absolutePath + "/a.txt")
        	val reader = BufferedReader(FileReader(file))
        	println(reader.readLine())
        	reader.close()
        }
        ```
        
        - `IOException`을 throws 하지 않았음에도 잘 돌아감
            - **코틀린은** Checked Exception과 Unchecked Exception을 구분하지 않고 **모두 Unchecked Exception**으로 판별
3. try with resources (JDK 7에서 추가)
    - 프로젝트 내 파일의 내용물을 읽어오는 예제
        
        **자바**
        
        ```java
        public void readFile(String path) throws IOException {
        	try (BufferedReader reader = new BufferedReader(new FileReader(path))) {
        		System.out.println(reader.readLine());
        	}
        }
        ```
        
        **코틀린**
        
        ```kotlin
        fun readFile(path: String) {
        	BufferedReader(FileReader(path))**.use** {
        		reader ->
        		println(reader.readLine())
        	}
        }
        ```
        
        - 코틀린은 try with resources 구문이 없음
            - use라는 inline 확장함수 사용
        

## 8강) 코틀린에서 함수를 다루는 방법

1. 함수 선언 문법
    - 두 정수를 받아 더 큰 정수를 반환
        
        **자바**
        
        ```java
        public int max(int a, int b) {
        	if(a > b) {
        		return a;
        	}
        	return b;
        }
        ```
        
        **코틀린**
        
        ```kotlin
        fun max(a: Int, b: Int): Int {
        	return if (a > b) {
        		a
        	} else {
        		b
        	}
        }
        ```
        
        ```kotlin
        fun max(a: Int, b: Int): Int =
        	if (a > b) {
        		a
        	} else {
        		b
        	}
        }
        ```
        
        ```kotlin
        fun max(a: Int, b: Int) = if (a > b) a else b
        ```
        
        - 셋 다 같은 함수
    - 함수는 클래스 안에 있을 수도, 파일 최상단에 있을 수도 있고 한 파일에 여러 함수들이 있을 수도 있음
2. default parameter
    - 주어진 문자열을 N번 출력
        
        **자바**
        
        ```java
        pubic void repeat(String str, int num, boolean userNewLine) {
        	for(int i = 1; i <= num; i++) {
        		if(useNewLine) {
        			System.out.println(str);
        		} else {
        			System.out,print(str);
        		}
        	}
        }
        ```
        
        - 많은 코드에서 useNewLine이라는 파라미터에 true를 사용 → 귀찮
            
            ```java
            pubic void repeat(String str, int num, boolean userNewLine) {
            	for(int i = 1; i <= num; i++) {
            		if(useNewLine) {
            			System.out.println(str);
            		} else {
            			System.out,print(str);
            		}
            	}
            }
            
            pubic void repeat(String str, int num) {
            	repeat(str, num, true);
            } // 오버로딩 활용
            
            pubic void repeat(String str) {
            	repeat(str, 3, true);
            } // 오버로딩 활용
            ```
            
            - 자바의 오버로딩 활용(repeat이라는 함수를 여러개 만듦)
            - 메소드를 3개나 만들다니
    
    **코틀린**
    
    ```kotlin
    fun repeat(
    	str: String,
    	num: Int = 3,
    	useNewLine: Boolean = true
    ) {
    	for(i in 1..num) {
    		if(useNewLine) {
    			println(str)
    		} else {
    			print(str)
    		}
    	}
    }
    ```
    
    - default parameter: 기본값을 설정해줌(num: Int = 3, useNewLine: Boolean = true)
        - 기본값을 사용하지 않을 때는 함수 호출할때 값을 넣어주면 됨
            - `repeat(”hello world”, 3, false)` → false로 작동
    - 자바에서는 3개나 써줘야했던 함수를 코틀린에서는 하나만 써줌
3. named argument(parameter)
    
    **코틀린**
    
    ```kotlin
    fun main() {
    	repeat("Hello World", useNewLine = false)
    }
    
    fun repeat(
    	str: String,
    	num: Int = 3,
    	useNewLine: Boolean = true
    ) {
    	for(i in 1..num) {
    		if(useNewLine) {
    			println(str)
    		} else {
    			print(str)
    		}
    	}
    }
    ```
    
    - `repeat("Hello World", useNewLine = false)`에서 `useNewLine = false`같이 이름을 명시해 주는 것을 **named argument(parameter)**
    - 매개변수 이름을 통해 직접 지정, 지정되지 않은 매개변수는 기본값 사용
    - 장점: builder를 가지지 않고도 builer의 장점을 가지게 됨
        
        ```kotlin
        fun main(){
        	printNameAndGender("FEMALE", "채원")
        }
        
        fun printNameAndGender(name: String, gender: String) {
        	println(name)
        	println(gender)
        }
        ```
        
        - 같은 타입의 파라미터인 경우 바꿔 쓸 가능성이 높음
        
        ```kotlin
        fun main(){
        	printNameAndGender(gender = "FEMALE", name = "채원")
        }
        
        fun printNameAndGender(name: String, gender: String) {
        	println(name)
        	println(gender)
        }
        ```
        
        - 이런 식으로 명시해줌으로써 오류 방지
    - 코틀린에서 자바 함수를 가져다 사용할 시 named argument 사용 **불가**
        - JVM상에서 자바가 바이트코드로 변환될 때 파라미터 이름을 보존하고 있지 않기 때문
4. 같은 타입의 여러 파라미터 받기(가변인자)
    - 문자열을 N개 받아 출력
        
        **자바**
        
        ```java
        public static void printAll(String... strings) {
        	for(String str: strings) {
        		System.out.println(str);
        	}
        }
        ```
        
        - `타입…` : 가변인자
        
        ```java
        String[] array = new String[]{"A", "B", "C"};
        printAll(array);
        
        printAll("A", "B", "C");
        ```
        
        - 배열을 직접 넣거나 콤마를 이용해 여러 파라미터를 넣음
        
        **코틀린**
        
        ```kotlin
        fum main() {
        	printAll("A", "B", "C")
        
        	val array = arrayOf("A", "B", "C")
        	printAll(*****array)
        }
        
        fun printAll(**vararg** strings: String) {
        	for(str in strings) {
        		println(str)
        	}
        }
        ```
        
        - 가변인자를 넣어줄 때 `*`를 붙여야 함
            - `*`: 스프레드 연산자
        
    
    ## **9강) 코틀린에서 클래스를 다루는 방법**
