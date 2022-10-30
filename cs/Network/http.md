<h2>http</h2>

<h3>HTTP 프로토콜의 특징</h3>

- 클라이언트, 서버 구조
    - request(클라이언트), response(서버) 구조

- Connectionless
    - 클라이언트가 request를 보내고 서버가 response를 보내면 연결을 끊어버림

    - 이에 대한 보완으로 keep-alive 옵션이 추가됨
        - HTTP 1.1 버전에서 추가, 커넥션을 계속 유지하고, 요청(Request)에 재사용


- Stateless
    - 연결을 끊는 순간 클라이언트와 서버의 통신이 끝나고 서버가 클라이언트의 상태를 보존하지 않음

    - 장점: 서버 확장성 높음(scale out)

    - 단점: 클라이언트가 추가 데이터를 계속해서 전송해야 함

        - 매번 페이지를 이동할 때마다 로그인을 해야하는 일 발생

        - 이를 해결하기 위해 쿠키, 세션 사용

            - 쿠키: 클라이언트(로컬피씨)에 저장

            - 세션: 서버에 저장


<br>

<h3>포트(Port)</h3>

![image](https://user-images.githubusercontent.com/93105083/198879717-45ce2914-c005-4833-8d4b-5606233ddcec.png)








<hr>

https://hanamon.kr/네트워크-http-http란-특징-무상태-비연결성/