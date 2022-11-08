<h2>IoC, DI, 컨테이너</h2>

<br>

<h3>제어의 역전 IoC(Inversion of Control)</h3>
1 제어

```java
public class A {
    private B b;

    public A() {
        this.b = new B();
    }
}
```

- 직접 객체를 생성하여 코드를 제어
    - 제어 = 관리

2 역전

```java
public class A {
    private B b;

    public A(B b) {
        this.b = b;
    }
}
```

- 프로그램 제어 흐름을 직접 제어(관리)하는 것이 아니라 외부에서 관리

<br><br>

<h3>IoC가 필요한 이유</h3>

- 객체 내에서 제어하는 경우

    ```java
    public class ItalianBMT {
        WhiteBread whiteBread;
        MozzarellaCheese mozzarellaCheese;
        ChiliSauce chiliSauce;
        MayonnaiseSauce mayonnaiseSauce;

        public ItalianBMT() {
            this.whiteBread = new WhiteBread();
            this.mozzarellaCheese = new MozzarellaCheese();
            this.chiliSauce = new ChiliSauce();
            this.mayonnaiseSauce = new MayonnaiseSauce();
        }
    }
    ```

    - 빵, 치즈, 소스 등을 모두 ItalianBMT 클래스 내에서 생성해 초기화 
    - **각 재료들에 대한 제어권이 객체 내부에 있음**

<br>

- IoC가 적용된 경우

    ```java
    public class ItalianBMT {
        Bread bread;
        Cheese cheese;
        List<Sauce> sauces;

        public ItalianBMT(Bread bread, Cheese cheese, List<Sauce> sauces) {
            this.bread = bread;
            this.cheese = cheese;
            this.sauces = sauces;
        }
    }
    ```

    - 빵, 치즈, 소스 등의 재료들이 외부에서 제어를 받음으로써 변경이 자유로워짐
    - **각 재료들에 대한 제어권이 객체 외부에 있음**

<br>

- IoC가 필요한 이유
    - 객체지향 원칙을 잘 지키기 위해
        - 역할과 관심을 분리해 응집도를 높이고 결합도를 낮추며 이에 따라 변경에 유연한 코드를 작성 할 수 있는 구조가 될 수 있기 때문
    - 할리우드 법칙(Hollywood Principle)
        - Don't call us, we'll call you
        - 주도권은 빼앗기고 호출당하길 기다림
    
<br><br>

<h3>DIP(Dependency Inversion Principle): 의존 역전 원칙</h3>

- 상위 레벨 모듈은 절대 하위 레벨 모듈에 의존하지 않고 둘 다 추상화에 의존해야 함

![](https://user-images.githubusercontent.com/93105083/200487032-3821cf65-5928-4903-8c45-3aa20be54505.png)
- 이 상황에서 고수준 모듈인 이탈리안 비엠티는 저수준 모듈인 화이트 브레드에 의존
- 만약 빵을 플랫 브레드로 변경해달라 한다면? -> 연쇄적으로 문제가 일어남

<br>

![](https://user-images.githubusercontent.com/93105083/200488577-2820d743-8db3-430a-b4d4-42c03ff7105e.png)
- 이 상황에서는 고수준 모듈과 저수준 모듈 모두 추상화에 의존하고 있음
- 저수준 모듈이 고수준 모듈에 의존하게 됨
- 이와 같은 상황을 DIP, 의존 역전 원칙이라고 함

```java
public class ItalianBMT {
    Bread bread;
    Cheese cheese;
    List<Sauce> sauces;

    public ItalianBMT(Bread bread, Cheese cheese, List<Sauce> sauces) {
        this.bread = bread;
        this.cheese = cheese;
        this.sauces = sauces;
    }
}
```

- 고수준 모듈인 이탈리안 비엠티가 저수준 모듈인 재료의 종류에 의존하지 않고 치즈, 브레드, 소스 인터페이스에 재료들이 의존하는 DIP 적용

<br><br>

<h3>IoC와 DIP의 목적</h3>

**클래스 간 결합을 느슨히 하기 위함**
- 한 클래스의 변경에 따른 다른 클래스들의 영향을 최소화
- => 애플리케이션을 지속 가능하고 확장성 있게 만듦

<br><br>

<h3>IoC와 DIP의 차이</h3>

- 공통점
    - IoC와 DIP는 모두 principle(원칙)

- 차이점
    - IoC

        ```java
        public class ItalianBMT {
            WhiteBread whiteBread;
            MozzarellaCheese mozzarellaCheese;
            ChiliSauce chiliSauce;
            MayonnaiseSauce mayonnaiseSauce;

            public void inject(WhiteBread whiteBread, MozzarellaCheese mozzarellaCheese, ChiliSauce chiliSauce, MayonnaiseSauce mayonnaiseSauce) {
                this.whiteBread = new WhiteBread();
                this.mozzarellaCheese = new MozzarellaCheese();
                this.chiliSauce = new ChiliSauce();
                this.mayonnaiseSauce = new MayonnaiseSauce();
            }
        }
        ```

        - inject라는 메소드를 통해 외부의 존재에게 제어권을 넘겨 어떤 빵, 치즈, 소스가 들어오는지 ItalianBMT는 알 방법이 없음
        - **외부존재에게 제어를 받게 된 상황이 IoC**

    - DIP

        ```java
        public class ItalianBMT {
            Bread bread;
            Cheese cheese;
            List<Sauce> sauces;

            public ItalianBMT(Bread bread, Cheese cheese, List<Sauce> sauces) {
                this.bread = bread;
                this.cheese = cheese;
                this.sauces = sauces;
            }
        }
        ```

        - 필드가 인터페이스로 구현 -> 변경이 자유로워짐
        - 고수준 모듈, 저수준 모듈이 모두 추상화에 의존 -> **의존 방향이 역전된 것이 DIP**

<br><br>

<h3>IoC 구현 방법</h3>

- IoC 구현 패턴
    - Service Locator
    - Factory
    - Abstract Factory
    - Template Method
    - Strategy
    - **Dependency Injection**

<br>

<h2>DI(Dependency Injection) 의존성 주입</h2>

- 의존성?
    - 클래스 간에 의존 관계가 있다 = 한 클래스가 바뀔 때 다른 클래스가 영향을 받는다
- 주입?
    - 의존성을 다른 곳으로 주입해줌

<br>

<h3>의존성 주입 전</h3>

```java
public class ItalianBMT {
    WhiteBread whiteBread;
    MozzarellaCheese mozzarellaCheese;
    ChiliSauce chiliSauce;
    MayonnaiseSauce mayonnaiseSauce;

    public ItalianBMT() {
        this.whiteBread = new WhiteBread();
        this.mozzarellaCheese = new MozzarellaCheese();
        this.chiliSauce = new ChiliSauce();
        this.mayonnaiseSauce = new MayonnaiseSauce();
    }
}
```

- ItalianBMT에는 각 재료들이 강하게 결합되어 있음 -> 하나라도 변화가 생기면 ItalianBMT에도 변화가 생기게 됨
    - 만약 WhiteBread에 유통기한이 필요하게 됨 -> ItalianBMT에도 코드 변화가 일어나게 됨

<br>

<h3>DI(의존성 주입) 방법 - Spring을 사용하지 않았을 때</h3>

- 생성자 주입

    ```java
    public class ItalianBMT {
        WhiteBread whiteBread;
        MozzarellaCheese mozzarellaCheese;
        ChiliSauce chiliSauce;
        MayonnaiseSauce mayonnaiseSauce;

        public ItalianBMT (WhiteBread whiteBread, MozzarellaCheese mozzarellaCheese, ChiliSauce chiliSauce, MayonnaiseSauce mayonnaiseSauce) {
            this.whiteBread = new WhiteBread();
            this.mozzarellaCheese = new MozzarellaCheese();
            this.chiliSauce = new ChiliSauce();
            this.mayonnaiseSauce = new MayonnaiseSauce();
        }
    }
    ```

    - 필요한 의존성을 모두 포함하는 생성자를 만들고 이 생성자를 통해 의존성 주입

<br>

- Setter 주입

    ```java
    public class ItalianBMT {
        WhiteBread whiteBread;
        MozzarellaCheese mozzarellaCheese;
        ChiliSauce chiliSauce;
        MayonnaiseSauce mayonnaiseSauce;

        public void setWhiteBread(WhiteBread whiteBread) {
            this.whiteBread = whiteBread;
        }

        public void setMozzarellaCheese(MozzarellaCheese mozzarellaCheese) {
            this.mozzarellaCheese = mozzarellaCheese;
        }

        public void setChiliSauce(ChiliSauce chiliSauce) {
            this.chiliSauce = chiliSauce;
        }

        public void setMayonnaiseSauce(MayonnaiseSauce mayonnaiseSauce) {
            this.mayonnaiseSauce = mayonnaiseSauce;
        }
    }
    ```

    - 의존성을 입력받는 setter메소드를 만들고 이 메소드들을 호출해 의존성 주입

<br>

- Interface 주입

    ```java
    public class ItalianBMT implements RecipeInjection {
        WhiteBread whiteBread;
        MozzarellaCheese mozzarellaCheese;
        ChiliSauce chiliSauce;
        MayonnaiseSauce mayonnaiseSauce;

        @Override
        public void inject(WhiteBread whiteBread, MozzarellaCheese mozzarellaCheese, ChiliSauce chiliSauce, MayonnaiseSauce mayonnaiseSauce) {
            this.whiteBread = new WhiteBread();
            this.mozzarellaCheese = new MozzarellaCheese();
            this.chiliSauce = new ChiliSauce();
            this.mayonnaiseSauce = new MayonnaiseSauce();
        }
    }

    interface RecipeInjection {
        void inject(WhiteBread whiteBread, MozzarellaCheese mozzarellaCheese, ChiliSauce chiliSauce, MayonnaiseSauce mayonnaiseSauce);  
    }
    ```

    - 의존성을 주입하는 메소드를 포함한 인터페이스를 작성하고 이 인터페이스를 구현하도록 함으로써 실행시에 이를 통해 의존성을 주입함
    - setter주입처럼 메소드를 외부에서 호출하는 것은 비슷하지만 의존성 주입 메소드를 빠뜨릴 수 있는 setter와 다르게 **override를 통해 메소드 구현을 강제할 수 있음**

<br><br>

<h3>재료의 종류를 변경 시에 어떻게 해야 할까?</h3>

- 의존성 분리
    - DIP를 이용해 의존 관계를 분리시킴
        - 상위계층이 하위계층에 의존하는 상황을 interface를 이용해 반전시켜 하위계층의 구현으로부터 독립시킴

```java
public class ItalianBMT {
    Bread bread;
    Cheese cheese;
    List<Sauce> sauces;

    public ItalianBMT(Bread bread, Cheese cheese, List<Sauce> sauces) {
        this.bread = bread;
        this.cheese = cheese;
        this.sauces = sauces;
    }
}
```

<br><br>

<h3>DI(의존성 주입) 방법 - Spring을 사용할 때</h3>

```java
@Controller
public class MemberController {
    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }
}
```

```java
@SpringBootApplication
public class DiApplication {
    public static void main(String[] args) {
        SpringApplication.run(DiApplication.class, args);
    }
}
```

- 생성자를 통해 의존성 주입 받음
- 특정한 MemberService를 받는 생성자가 호출이 되어야 함
    - 하지만 MemberController의 상위 어디를 보아도 MemberController 생성 시 MemberService 인스턴스를 주입하는 코드가 없음
    - 하지만 우리는 MemberService가 들어간 MemberController를 쓸 수 있음
    - 그 이유는 바로 **스프링이 자동으로 의존성을 주입해주기 때문**
        - **스프링 빈으로 등록되면 스프링이 자동으로 인스턴스를 생성해주고 필요한 의존성도 자동으로 주입해줌**

<br>

- 스프링이 의존성을 주입해주는 방법
    - @Autowired 어노테이션 활용
        - 다만 여기서 주입받을 MemberService도 스프링 Bean이어야 함
    - @Autowired를 통해 의존성 주입 받는 세 가지 방법
        - 필드 주입

            ```java
            @Controller
            public class MemberController {
                @Autowired
                private MemberService memberService;
            }
            ```

            - 스프링을 사용하지 않았을 때는 없었던 방법
            - 원래는 불가능한 주입을 프레임워크의 힘을 빌려 주입해줌
            - 추천하지 않는 방법
                - 자동이 아닌 수동 의존성 주입을 하고 싶어도 생성자도 setter도 없으므로 우리가 직접 의존성을 넣어줄 수 없음 -> 의존성이 프레임워크에 강하게 종속됨

        - setter 주입

            ```java
            @Controller
            public class MemberController {
                private MemberService memberService;

                @Autowired
                public void setMemberService(MemberService memberService) {
                    this.memberService = memberService;
                }
            }
            ```

            - setter메소드에 @Autowired 어노테이션을 붙이면 스프링이 setter를 사용해 자동으로 의존성 주입해줌
            - bean객체를 만들고 setter로 의존성 주입을 해주기 때문에 bean 생성자 혹은 bean 정적 팩토리 메서드가 필요
                - final 필드를 만들 수 없고 의존성의 불변을 보장할 수 없음
            - 런타임에 의존성을 수정해줘야 하거나 의존성을 선택적으로 주입할 때 사용
            - setter주입은 주로 클래스 내에서 합리적인 기본 값을 할당할 수 있는 선택적 의존성에만 사용해야 함


        - **생성자 주입**

            ```java
            @Controller
            public class MemberController {
                private final MemberService memberService;

                public MemberController(MemberService memberService) {
                    this.memberService = memberService;
                }
            }
            ```

            - 객체의 최소 생성 시점에 스프링이 의존성을 주입해줌
            - 스프링에서 추천하는 방법
            - 생성자 주입된 컴포넌트들은 완전히 초기화된 상태로 클라이언트에 반환됨
            - 생성자 주입의 경우 의존성 주입이 생성자 호출 시 최초 1회만 이루어지므로 의존관계를 불변으로 만들어 줄 수 있음
            - final이 가능 -> NullPointerException을 방지할 수 있음
                - 필드 주입이나 setter 주입의 경우 스프링의 빈 관리 기능을 빌리지 않고 new 키워드로 객체를 생성해 줄 경우 NullPointerException 발생 가능
            - 순환 참조 방지 가능

                ```java
                @Component
                public class A {
                    @Autowired
                    private B b;

                    public void doSomething() {
                        b.doSomething();
                    }
                }
                ```

                ```java
                @Component
                public class B {
                    @Autowired
                    private A a;

                    public void doSomething() {
                        a.doSomething();
                    }
                }
                ```

                - 순환 참조 발생 시 스프링은 에러 메시지와 함께 종료됨
                - 스프링부트 2.6 버전 이후 부터는 다른 주입 방법도 순환 참조 발생 막아줌

<br>

- 생성자가 여러 개라면?
    - 의존성을 자동으로 주입하는데 사용할 생성자에 @Autowired
    - @Autowired가 여러 개 있을 경우
        - 가장 많은 의존성을 주입할 수 있는 생성자 사용
    - @Autowired가 붙은 모든 생성자가 사용 불가능한 경우 또는 어떤 생성자에도 @Autowired가 없을 경우
        - 기본 생성자를 호출
        - 기본 생성자 조차 없는 경우
            - 컴파일 에러

<br>

- 의존성 주입 우선 순위
    - 생성자 -> 필드 -> setter

<br>

- 주입 대상이 여러 개일 때

```java
@Controller
public class PayController {
    private final PayService payService;

    public PayController(PayService payService) {
        this.payService = payService;
    }
}
```

- bean이 여러 개일 경우: kakaoPayService, naverPayService
    ![](https://user-images.githubusercontent.com/93105083/200594371-7fd88fb9-e678-43d3-8bf5-c8fcdc9435ab.png)
    - 에러 발생
- 주입 대상이 여러 개일 때

    ```java
    @Controller
    public class PayController {
        private final PayService payService;

        public PayController(PayService naverPayService) {
            this.payService = naverPayService;
        }
    }
    ```

    - 타입 => 이름 순
    - naverPayService bean이 주입 됨
    - 수동으로 bean 주입 or 자동으로 bean 주입 시 귀찮아짐 => @Qualifier 어노테이션

<br>

<h3>@Qualifier</h3>

```java
@Service
@Qualifier("mainPayService")
public class NaverPayService implements PayService {

}
```

```java
@Controller
public class PayController {
    private final PayService payService;

    public PayController(@Qualifier("mainPayService") PayService payService) {
        this.payService = payService;
    }
}
```

- 지정한 대로 주입됨

<br>

<h3>@Primary</h3>

```java
@Service
@Primary
public class NaverPayService implements PayService {

}
```

```java
@Controller
public class PayController {
    private final PayService payService;

    public PayController(ayService payService) {
        this.payService = payService;
    }
}
```

- @Primary가 붙은 bean은 해당 타입으로 의존성 검색 시 우선적으로 주입됨 -> default bean

<br>

<h3>의존성 주입 기준</h3>

- 타입 > @Qualifier > @Primary > 변수 명