<h2>TCP, IP, UDP</h2>

<img width="480" alt="스크린샷 2022-10-28 오후 1 41 26" src="https://user-images.githubusercontent.com/93105083/198525652-d18b5153-d007-4795-a5c0-301e3ea3422a.png">

<br>

<h3>인터넷</h3>
전 세계에 걸쳐 파일 전송 등의 데이터 통신 서비스를 받을 수 있는 컴퓨터 네트워크 시스템

- 사업자가 만들어 놓은 네트워크 인프라를 인터넷 통신 비용을 지불하고 사용함
    - 해외와는 바다 밑 광속 케이블을 통해 연결되어 있음
- 이 인프라를 통해 데이터를 디지털 신호로 바꾸어 전달하고 받은 디지털 신호를 다시 데이터로 바꿈으로서 통신이 이루어짐

<br>

<h3>프로토콜</h3>
네트워크 통신을 위해 미리 정해 놓은 공통된 메뉴얼

<br>

<h3>TCP/IP</h3>
인터넷에서 컴퓨터들이 서로 정보를 주고 받는데 쓰이는 프로토콜의 집합

<img width="608" alt="스크린샷 2022-10-28 오후 1 55 47" src="https://user-images.githubusercontent.com/93105083/198525729-20fcfa35-72ff-4f55-a54a-ab27c95096e6.png">

- Application Layer
    - 특정 서비스를 제공하기 위해 애플리케이션 끼리 정보를 주고 받을 수 있음
        - ex. 브라우저와 웹서버가 HTTP요청, 응답을 통해 통신
    - HTTP, FTP, DNS 같은 프로토콜 사용

- Transport Layer
    - 송신된 데이터를 수신된 애플리케이션에 확실하게 전달
    - 네트워크 통신을 하는 애플리케이션은 포트 번호를 사용
        - Transport Layer는 포트번호를 사용해 애플리케이션을 찾아주는 역할을 함
    - TCP, UDP 같은 프로토콜 사용

- Internet Layer
    - 수신 측까지 데이터를 전달하기 위해 사용
    - 송신 측, 수신 측 모두 IP 주소를 가지고 있어야 함
        - Internet Layer는 IP 주소를 기반으로 올바른 목적지로 찾아 갈 수 있도록 함
    - IP, ARP 같은 프로토콜 사용
        - ARP: 네트워크 상에서 IP 주소를 물리적 네트워크 주소(MAC 주소)로 대응(bind)시키기 위해 사용되는 프로토콜

- Network Access Layer
    - 네트워크에 직접 연결된 기기 간의 데이터 전송을 도움
    - 물리적 주소인 MAC주소 사용
        - MAC 주소
            - 컴퓨터간 데이터를 전송하기 위해 있는 컴퓨터의 물리적 주소
            - 네트워크 어댑터(랜카드)의 물리적 주소
        - Ethernet, PPP, Token Ring 같은 프로토콜 사용

<br>

<h3>TCP/IP의 흐름</h3>
<p>www.google.com을 웹브라우저에 입력하면 무슨 일이 일어날까요</p>

<p>1. (http) www.google.com(:80) HTTP로 작성된 해당 요청 처리 부탁</p>

![image](https://user-images.githubusercontent.com/93105083/198525810-1bfffa3a-ee72-4886-92f7-515d5f3eeabe.png)

- 구글 웹서버의 80포트로 이와 같은 HTTP Request 메시지를 보냄

<br>

<p>2. 해당 요청을 인터넷을 통해 구글 서버에 전달하기 위해 패킷을 만들어야 함</p>
![스크린샷 2022-10-28 오후 3 26 00] src="https://user-images.githubusercontent.com/93105083/198525889-05a6b982-53f9-4868-af4a-fb350f7a6231.png">

    - 패킷에는 각 계층에 필요한 정보가 담겨야 함
        - 각 계층별로 해당 프로토콜 사용
            - Application Layer: HTTP
                - 위에서 작성한 HTTP Request가 들어감

            - Transport Layer: TCP

                <img width="1320" alt="스크린샷 2022-10-28 오후 3 30 00" src="https://user-images.githubusercontent.com/93105083/198526386-92566b30-bf3a-4fff-99c0-ee7ec27ece5c.png">
                
                    - TCP 패킷의 헤더는 이런 식으로 생김

                    - SP(시작 포트번호)와 DP(목적지 포트번호)

                        - SP(시작 포트번호)

                            - 내 컴퓨터에서 만든 소켓의 포트 번호 -> 내 컴퓨터는 알고 있음

                        - DP(목적지 포트번호)

                            - :80 (웹서버의 웰노운 포트 번호)

            - Internet Layer: IP
                <img width="1304" alt="스크린샷 2022-10-28 오후 3 32 37" src="https://user-images.githubusercontent.com/93105083/198526551-9e7b384a-5950-428a-8b47-71b4b2795a81.png">
                - IP 헤더에 대한 정보
                - SA(시작 IP주소)와 DA(목적지 IP주소)
                    - SA(시작 IP주소)
                        - 내 IP주소이므로 알고 있음
                    - DA(목적지 IP주소)
                        - 모름
                        - www.google.com이라는 도메인 정보만 앎
                            - 하지만 DNS 프로토콜을 이용해 도메인 정보로 IP 주소를 알아낼 수 있음
                            <img width="1005" alt="스크린샷 2022-10-28 오후 3 36 39" src="https://user-images.githubusercontent.com/93105083/198526603-640fc21e-7b70-4abe-a9e0-6007f6c03c28.png">
                                1. 브라우저는 OS에게 도메인에 대한 IP 주소를 알고 싶다고 요청
                                2. OS에서 DNS 서버로 요청을 보냄
                                    - 어떻게 OS가 DNS 서버를 알지?
                                        - DNS 서버 주소는 이미 컴퓨터에 등록되어 있음
                                        - 맥북의 경우 시스템환경설정 - 네트워크 들어가면 볼 수 있음
                                            <img width="662" alt="스크린샷 2022-10-28 오후 3 45 53" src="https://user-images.githubusercontent.com/93105083/198526667-a32aae23-7773-4a11-b086-5ec90d712d61.png">
                                    - DNS도 Application Layer의 프로토콜(53번 포트)
                                        <img width="783" alt="스크린샷 2022-10-28 오후 3 53 35" src="https://user-images.githubusercontent.com/93105083/198526672-3ae32d73-6780-4528-a8ca-82b18280db90.png">
                                        - 도메인이 담긴 쿼리를 도메인 서버로 보냄
                                        - 도메인 서버가 IP 주소를 응답해줌
                                    - DNS는 Transport Layer에서 UDP 프로토콜 사용
                                        <img width="546" alt="스크린샷 2022-10-28 오후 3 55 42" src="https://user-images.githubusercontent.com/93105083/198526682-228c63c0-acf2-4637-bbbf-f8312b0f8725.png">
                                        - UDP는 비연결지향형 프로토콜
                                        
            - Network Access Layer: Ethernet
                <img width="1303" alt="스크린샷 2022-10-28 오후 3 56 34" src="https://user-images.githubusercontent.com/93105083/198526689-12568708-4b32-4e68-bd3f-180051d002fb.png">
                - Ethernet 프로토콜에 대한 헤더를 만들어야 하는데 아직 MAC 주소를 모름
                    - 어떻게 IP주소로 MAC 주소를 알 수 있는지?
                        - ARP 프로토콜을 통해 알 수 있음
                            - ARP 프로토콜: IP주소를 MAC주소로 바꾸어주는 주소해석 프로토콜
                    - Google 웹서버의 MAC 주소가 필요한지?
                        - Google MAC주소 대신 물리적으로 연결된 우리집 공유기의 MAC주소가 필요함
                            - 이 공유기를 통해 다른 네트워크와 연결이 가능 -> 게이트웨이라고도 부름
                            - 게이트웨이의 IP는 ``` netstat -rn ``` 를 통해 알 수 있음

3. 패킷을 네트워크 세계로 보낼 수 있음 하지만 유의할 점은 바로
- TCP는 연결 지향 프로토콜이라는 점
    - 데이터를 전송하기 전에 송신측과 수신측이 연결되는 작업이 필요 => 3 Way Handshaking

- 3 Way Handshaking
    <img width="1136" alt="스크린샷 2022-10-28 오후 4 07 31" src="https://user-images.githubusercontent.com/93105083/198526694-7a85569d-b8ff-4cf1-8e01-7d4cb5f57ba8.png">
        - 3 Way Handshaking을 수행하기 위해서는 TCP 헤더에 표시한 플래그들이 사용됨 => 이러한 플래그를 컨트롤 비트라고 함
        - 여기서는 ACK와 SYN 플래그를 사용함






<br>
<hr>
https://www.youtube.com/watch?v=BEK354TRgZ8
https://jhnyang.tistory.com/404