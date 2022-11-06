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