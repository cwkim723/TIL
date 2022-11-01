<h2>Servlet vs Spring</h2>

<h3>Servlet</h3>
웹 애플리케이션을 만들 때 필요한 인터페이스

<br>

<h3>Spring Web MVC</h3>
- Spring Framework에 있는 모듈
- Web Service를 만듦
- MVC(Model View Controller) 패턴 사용
- Servlet 사용

<br>

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
            - WebContainer: 요청이 들어오면 Thread를 생성하고 Servlet을 실행시킴. Servlet Interface에 따라 Servlet을 관리함




<br>

<hr>
<br>
https://www.youtube.com/watch?v=2pBsXI01J6M