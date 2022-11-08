<h2>좋은 객체 지향 설계의 5가지 원칙 (SOLID)</h2>
클린 코드로 유명한 로버트 마틴이 좋은 객체 지향 설계의 5가지 원칙 정리

<br><br>

<h3>SRP: 단일 책임 원칙(Single Responsibility Principle)</h3>

- 한 클래스는 하나의 책임만 가져야 함
- 하나의 책임이라는 것은 모호
    - 클 수도, 작을 수도 있음
    - 문맥과 상황에 따라 다름
- 중요한 기준은 **변경**
    - 변경이 있을 때 파급력이 적으면 단일 책임 원칙을 잘 따른 것
- ex. UI 변경, 객체의 생성과 사용을 분리

<br><br>

<h3>OCP: 개방-폐쇄 원칙(Open/Closed Principle)</h3>

- 소프트웨어 요소는 **확장에는 열려있으나 변경에는 닫혀있어야 함**
- 확장을 하려면 당연히 기존 코드를 변경해야 하는 것이 아닌가? => **다형성** 활용
- 인터페이스를 구현한 새로운 클래스를 만들어서 새로운 기능을 구현
- 역할과 구현의 분리

```java
public class MemberService {

    // private MemberRepository memberRepository = new MemoryMemberRepository();
    private MemberRepository memberRepository = new JdbcMemberRepository();

}
```


<br><br>

<h3>LSP: 리스코프 치환 원칙(Liskov Substitution Principle)</h3>

<br><br>

<h3>ISP: 인터페이스 분리 원칙(Interface Segregation Principle)</h3>

<br><br>

<h3>DIP: 의존관계 역전 원칙(Dependency Inversion Principle)</h3>