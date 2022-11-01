<h2>Servlet vs Spring</h2>

<h3>Servlet</h3>
웹 애플리케이션을 만들 때 필요한 인터페이스

<br><br>

<h3>Spring Web MVC</h3>
- Spring Framework에 있는 모듈
- Web Service를 만듦
- MVC(Model View Controller) 패턴 사용
- Servlet 사용

<br><br>

<h3>Servlet은 왜 생겼을까?</h3>
1 정적 데이터만 전달하는 Web Server

![](https://user-images.githubusercontent.com/93105083/199177686-c034fc77-cda0-4326-85e5-02944a6606f3.png)

- 처음 웹 프로그래밍은 정적 데이터만 전달 가능
    - 어떤 사용자가 들어와도 hello.html만 전달
    - 사용자(요청)에 따라 다른 처리를 해줄 수 없음
    - 동적인 처리를 해주는 웹 애플리케이션이 없음

<br>

2 동적 데이터를 처리하는 CGI(Common Gateway Interface)

![](https://user-images.githubusercontent.com/93105083/199178023-344f877b-9700-45fa-a2aa-f5dae4c8d45a.png)

![](https://user-images.githubusercontent.com/93105083/199178327-f5fe0ccd-9042-4fea-bd2f-c7a026282009.png)

- CGI는 WebServer(Apache)와 CGI 구현체(C, PHP 등의 언어로 만들어진 프로그램) 사이의 규약
- 동적 웹페이지 제작 가능 -> CGI 사용자 증가

<br>

![](https://user-images.githubusercontent.com/93105083/199178594-f6c6f492-0608-43fb-a149-661d265b26e1.png)

- CGI의 문제
    1. req가 들어올 때마다 프로세스를 만듦

        ![스크린샷 2022-11-01 오후 10 28 04](https://user-images.githubusercontent.com/93105083/199244489-734aadf6-50d5-454e-8038-e43f3a50dd3a.png)

        - 개선점: Process에서 Thread로
    2. 같은 구현체를 사용해도 request(Thread)가 다르면 구현체가 하나씩 생김

        ![스크린샷 2022-11-01 오후 10 30 02](https://user-images.githubusercontent.com/93105083/199244906-0c06f888-319b-4384-9a0f-ae4ab0c6f472.png)

        - 개선점: 여러 Instance에서 Singleton으로 => servlet

            ![스크린샷 2022-11-01 오후 10 31 06](https://user-images.githubusercontent.com/93105083/199245147-0fc4e4f9-54a5-4df7-9eff-698673da2944.png)
            
            - request가 들어올 때마다 thread가 생기고 singleton 패턴으로 바뀜
                - thread마다 servlet 구현체를 연결해줌
                    - servlet이 인터페이스인데 정의되어있는 메서드들을 호출하는 역할을 해줌
            - WebContainer: 요청이 들어오면 Thread를 생성하고 Servlet을 실행시킴. Servlet Interface에 따라 Servlet을 관리함

<br>

<h3>Servlet의 생명주기</h3>

request가 thread 하나

- init: Servlet Instance 생성(initalize)
- Service: 실제 기능이 수행되는 곳

    ```java
    abstract class HttpServlet extends Servlet
    ```

    - HTTP Method(GET, POST, PUT, DELETE)에 따라 doGet(), doPost(), doPut(), doDelete() 메서드를 호출함
        - doXXX(): 개발자가 구현

- **Destroy**: Servlet Instance가 사라짐
    - 보통 container가 종료되는 시점에 destroy() 호출
    - 특정 servlet 로드/언로드 시에도 사용

![image](https://user-images.githubusercontent.com/93105083/199290851-76c227eb-bf5b-45fe-839f-62f1ed13505f.png)

- 싱글톤
- 메모리를 공유하고 local variables는 스레드마다 가짐

<br>

Web.xml
```xml
<web-app>
    <servlet>
        <servlet-name>member</servlet-name>
        <servlet-class>servlets.MemberServlets</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>member</servlet-name>
        <url-pattern>/member</url-pattern>
    </servlet-mapping>
</web-app>
```

- Web.xml(설정 파일) Servlet Mapping
- WAS에게 Servlet 객체 - URL mapping 정보 알려줌

<br>

MemberServlet
```java
public class MemberServlet extends HttpServlet {
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = requesst.getParameter("password");

        String result = doSomething(username, password);

        String htmlResponse = "<html>";
        htmlResponse += "<h2>Result : " + result + "</h2>";
        htmlResponse += "</html>";

        PrintWriter writer = response.getWriter();
        writer.println(htmlResponse);
    }
}
```

<br>

![](https://user-images.githubusercontent.com/93105083/199292676-132c2464-1126-43d8-a076-47977938b5b2.png)

- URL마다 servlet이 생김
- 이 servlet을 Web Container에게 알려주기 위해 Web.xml에 URL과 Servlet을 매핑시켜줌
- /line이라는 request가 오면 LineServlet으로 보내야겠다는 것을 캐치해 각각 HTTP Method에 맞는 문서를 보여주게 됨

<br>

<h3>Spring Web MVC에서의 Servlet</h3>

Spring Web MVC에서 Servlet을 어떻게 사용할까? -> **Dispatcher Servlet**

<br>

![](https://user-images.githubusercontent.com/93105083/199293375-28f2cdff-1d27-459c-9049-71f38b6de8cd.png)

0. Web.xml에 Dispatcher Servlet 등록
    ```xml
    <servlet>
        <servlet-name>dispatcher</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
        <servlet-name>dispatcher</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>
    ```

1. 요청이 들어왔을 때 **Dispatcher Servlet**으로 감
2. **Handler Mapping**을 통해 요청에 따라 적절한 Controller를 찾음
    - Handler가 Controller를 포함하는 큰 개념
    - **어떤 방식의 HandlerMapping을 사용할지 설정 파일에 저장해두어야 함**
    - 찾는 방법은 Spring Framework에서 제공함
        - Spring Framework에서 제공하는 HandlerMapping
            - **BeanNameHandlerMapping**

                ```xml
                <beans ...>
                    ...
                        <!-- <bean class="org.springframework.web.servlet.handler.BeanNameHandlerMapping"/> -->
                        <bean name="/employee" class="com.do.controller.EmployeeController">
                            ...
                        </bean>

                    ...
                </bean>
                ```

                - default 설정이라 별도로 HandlerMapping 방식을 지정하지 않아도 됨
                - Bean이름과 Url을 Mapping하는 방식
                    - /employee로 접근하면 위 Class(Controller)로 mapping해줌

            - **ControllerClassNameHandlerMapping**
            - **SimpleUrlHandlerMapping**
            - **DefaultAnnotationHandlerMapping**

                ```java
                    @Controller
                    public class EmployeeController {
                        @RequestMapping("/Employee")
                        public String do() {
                            // do sth
                        }
                    }
                ```

                - Annotation으로 URL과 Mapping하는 방식
                    - /Employee로 접근하면 위 메서드로 mapping해줌

3. **Handler Adapter**가 HandlerMapping에서 찾은 Handler(Controller)의 메서드를 호출한다.
    - ModelAndView 형태로 바꿔줌
    - 보통 View는 이름만 return해줌

4. **View Resolver**가 View 이름으로 실제 View 객체를 생성함

5. View에 Model(data)를 포함시킨다

<br>

![](https://user-images.githubusercontent.com/93105083/199297639-8b57516b-a696-4cce-95c4-eea5c85f8776.png)

- Spring Web MVC 없을 때
    - URL마다 Servlet 생성
    - web.xml로 servlet 관리
    - view를 하나하나 다 만들어줬어야 했음
        ```java
        String htmlResponse = "<html>";
        htmlResponse += "<h2>Result : " + result + "</h2>";
        htmlResponse += "</html>";
        ```

- Spring Web MVC
    - servlet이 하나만 있으면 됨(Dispatcher Servlet)
    - view를 강제로 분리시킴



<br>

<hr>
<br>
https://www.youtube.com/watch?v=2pBsXI01J6M