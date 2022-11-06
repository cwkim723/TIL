<h2>TCP, IP, UDP</h2>

<img width="480" alt="스크린샷 2022-10-28 오후 1 41 26" src="https://user-images.githubusercontent.com/93105083/198525652-d18b5153-d007-4795-a5c0-301e3ea3422a.png">

<br><br>

<h2>인터넷</h2>
전 세계에 걸쳐 파일 전송 등의 데이터 통신 서비스를 받을 수 있는 컴퓨터 네트워크 시스템

- 사업자가 만들어 놓은 네트워크 인프라를 인터넷 통신 비용을 지불하고 사용함
    - 해외와는 바다 밑 광속 케이블을 통해 연결되어 있음
- 이 인프라를 통해 데이터를 디지털 신호로 바꾸어 전달하고 받은 디지털 신호를 다시 데이터로 바꿈으로서 통신이 이루어짐

<br><br>

<h2>프로토콜</h2>
네트워크 통신을 위해 미리 정해 놓은 공통된 메뉴얼

<br><br>

<h2>Transport Layer</h2>
End Point간 신뢰성있는 데이터 전송을 담당하는 계층

- 신뢰성: 데이터를 순차적, 안정적인 전달
- 전송: 포트 번호에 해당하는 프로세스에 데이터를 전달

<br><br>

<h3>만약 전송 계층(Transport Layer)이 없다면</h3>

- 데이터의 순차 전송 원활히 X
    - 송신자: 1 2 3 -> 수신자: 2 3 1

- Flow (흐름 문제)
    - 원인: 송수신자 간의 데이터 속도 처리 차이
        - ex. 수신자가 처리할 수 있는 데이터양을 초과

- Congestion (혼잡 문제)
    - 원인: 네트워크의 데이터 처리 속도(ex. 라우터)
        - ex. 네트워크가 혼잡할 때

- 결과: 데이터 손실 발생 => 해결법: TCP

<br><br>

<h2>TCP (Transmission Control Protocol)</h2>

- 신뢰성있는 데이터 통신을 가능하게 해주는 프로토콜
- 특징: Connection 연결 (3 way-handshake) - 양방향 통신
- 데이터의 순차 전송을 보장
- Flow Control (흐름 제어)
- Congestion Control (혼잡 제어)
- Error Detection (오류 감지)


<br><br>

<h2>TCP/IP</h2>
<p>인터넷에서 컴퓨터들이 서로 정보를 주고 받는데 쓰이는 프로토콜의 집합</p>

![image](https://user-images.githubusercontent.com/93105083/198883357-278dc026-66d9-46bf-a7b1-ebe20efbc766.png)

<img width="608" alt="스크린샷 2022-10-28 오후 1 55 47" src="https://user-images.githubusercontent.com/93105083/198525729-20fcfa35-72ff-4f55-a54a-ab27c95096e6.png">

- **Application Layer**
    - 특정 서비스를 제공하기 위해 애플리케이션 끼리 정보를 주고 받을 수 있음
        - ex. 브라우저와 웹서버가 HTTP요청, 응답을 통해 통신
    - **HTTP**, FTP, **DNS** 같은 프로토콜 사용

- **Transport Layer**
    - 송신된 데이터를 수신된 애플리케이션에 확실하게 전달
    - 네트워크 통신을 하는 애플리케이션은 포트 번호를 사용
        - Transport Layer는 포트번호를 사용해 애플리케이션을 찾아주는 역할을 함
    - **TCP**, **UDP** 같은 프로토콜 사용

- **Internet Layer**
    - 수신 측까지 데이터를 전달하기 위해 사용
    - 송신 측, 수신 측 모두 IP 주소를 가지고 있어야 함
        - Internet Layer는 IP 주소를 기반으로 올바른 목적지로 찾아 갈 수 있도록 함
    - **IP**, ARP 같은 프로토콜 사용
        - **ARP**: 네트워크 상에서 IP 주소를 물리적 네트워크 주소(MAC 주소)로 대응(bind)시키기 위해 사용되는 프로토콜

- **Network Access Layer**
    - 네트워크에 직접 연결된 기기 간의 데이터 전송을 도움
    - 물리적 주소인 MAC주소 사용
        - **MAC 주소**
            - 컴퓨터간 데이터를 전송하기 위해 있는 컴퓨터의 물리적 주소
            - 네트워크 어댑터(랜카드)의 물리적 주소
        - Ethernet, PPP, Token Ring 같은 프로토콜 사용

<br>

<h2>TCP/IP의 흐름</h2>
<p>www.google.com을 웹브라우저에 입력하면 무슨 일이 일어날까요</p>

<h3>1. (http) www.google.com(:80) HTTP로 작성된 해당 요청 처리 부탁</h3>

![image](https://user-images.githubusercontent.com/93105083/198525810-1bfffa3a-ee72-4886-92f7-515d5f3eeabe.png)

- 구글 웹서버의 80포트로 이와 같은 HTTP Request 메시지를 보냄

<br>

<h3>2. 해당 요청을 인터넷을 통해 구글 서버에 전달하기 위해 패킷을 만들어야 함</h3>

![스크린샷 2022-10-28 오후 3 26 00](https://user-images.githubusercontent.com/93105083/198525889-05a6b982-53f9-4868-af4a-fb350f7a6231.png)

- 패킷에는 각 계층에 필요한 정보가 담겨야 함
    - 각 계층별로 해당 프로토콜 사용
        - Application Layer: HTTP
            - 위에서 작성한 HTTP Request가 들어감

        - Transport Layer: **TCP**

            ![스크린샷 2022-10-28 오후 3 30 00](https://user-images.githubusercontent.com/93105083/198526386-92566b30-bf3a-4fff-99c0-ee7ec27ece5c.png)

            - TCP 패킷의 헤더는 이런 식으로 생김
            - **SP**(시작 포트번호)와 **DP**(목적지 포트번호)
                - SP(시작 포트번호)
                    - 내 컴퓨터에서 만든 소켓의 포트 번호 -> 내 컴퓨터는 알고 있음
                - DP(목적지 포트번호)
                    - :80 (웹서버의 웰노운 포트 번호)

        - Internet Layer: IP
            <img width="1304" alt="스크린샷 2022-10-28 오후 3 32 37" src="https://user-images.githubusercontent.com/93105083/198526551-9e7b384a-5950-428a-8b47-71b4b2795a81.png">
            - IP 헤더에 대한 정보
            - **SA**(시작 IP주소)와 **DA**(목적지 IP주소)
                - SA(시작 IP주소)
                    - 내 IP주소이므로 알고 있음
                - DA(목적지 IP주소)
                    - 모름
                    - www.google.com이라는 도메인 정보만 앎
                        - 하지만 DNS 프로토콜을 이용해 도메인 정보로 IP 주소를 알아낼 수 있음

                        <img width="1005" alt="스크린샷 2022-10-28 오후 3 36 39" src="https://user-images.githubusercontent.com/93105083/198526603-640fc21e-7b70-4abe-a9e0-6007f6c03c28.png">

                        1. 브라우저는 OS에게 도메인에 대한 IP 주소를 알고 싶다고 요청

                        2. OS에서 **DNS** 서버로 요청을 보냄
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
                        - **ARP 프로토콜**: IP주소를 MAC주소로 바꾸어주는 주소해석 프로토콜
                - Google 웹서버의 MAC 주소가 필요한지?
                    - Google MAC주소 대신 물리적으로 연결된 우리집 공유기의 MAC주소가 필요함
                        - 이 공유기를 통해 다른 네트워크와 연결이 가능 -> **게이트웨이**라고도 부름
                        - 게이트웨이의 IP는 ``` netstat -rn ``` 를 통해 알 수 있음

<br>

<h3>3. 패킷을 네트워크 세계로 보낼 수 있음 하지만 유의할 점은 바로</h3>

- TCP는 연결 지향 프로토콜이라는 점
    - 데이터를 전송하기 전에 송신측과 수신측이 연결되는 작업이 필요 => 3 Way Handshaking

- **3 Way Handshaking**
    <img width="1136" alt="스크린샷 2022-10-28 오후 4 07 31" src="https://user-images.githubusercontent.com/93105083/198526694-7a85569d-b8ff-4cf1-8e01-7d4cb5f57ba8.png">
    - 3 Way Handshaking을 수행하기 위해서는 TCP 헤더에 표시한 플래그들이 사용됨 => 이러한 플래그를 **컨트롤 비트**라고 함
    - 여기서는 **ACK**와 **SYN** 플래그를 사용함

    <img width="992" alt="스크린샷 2022-10-28 오후 4 09 36" src="https://user-images.githubusercontent.com/93105083/198660027-83d9050c-d43a-4e43-ab90-0cf5b305e567.png">

    1. 클라이언트는 서버에게 접속을 요청하는 SYN 패킷을 보냄

    2. 서버는 SYN 요청을 받고 클라이언트에게 요청을 수락한다는 ACK와 SYN 플래그가 설정된 패킷을 보냄

    3. 클라이언트는 서버에 다시 ACK를 보냄

    => 이제부터 연결이 이루어지고 데이터가 오가게 됨

<br>

<h3>4. NAT(Network Address Translation)</h3>

<img width="1029" alt="스크린샷 2022-10-29 오전 12 00 45" src="https://user-images.githubusercontent.com/93105083/198665152-4ebe81ec-eec2-4a90-bf37-f2736d332a70.png">

- 내가 사용하는 컴퓨터는 Private IP를 사용
    - Private IP는 외부 네트워크 환경에서 IP 주소를 찾지 못함
        - 공유기를 통해 나갈 때 Public IP 주소로 변환하여 나가는 작업이 필요함 => NAT

<br>

<h3>5. Routing</h3>

<img width="579" alt="스크린샷 2022-10-29 오전 12 05 41" src="https://user-images.githubusercontent.com/93105083/198668309-bb41d04d-ba84-46cf-9716-8fb3227946c0.png">

- 우리집 공유기를 거치고 나서 구글 서버에 도착하기 위해 여러 라우터를 거쳐야 함

- **라우터**: 네트워크와 네트워크를 연결해주는 역할

- **라우팅**: 라우터가 목적지 경로를 찾아나가는 과정

<br>

<h3>6. ARP</h3>

<img width="496" alt="스크린샷 2022-10-29 오전 12 08 11" src="https://user-images.githubusercontent.com/93105083/198669762-ad6bad91-836a-4818-af85-060a55e2141f.png">

- 라우팅을 거쳐 구글 서버가 연결된 라우터까지 데이터가 도착을 하면 패킷의 IP 헤더에 기록된 구글 서버 IP 주소를 통해 MAC 주소를 얻어와야 함 => **ARP 프로토콜** 사용

- ARP가 라우터가 연결된 네트워크로 브로드캐스팅됨

<img width="536" alt="스크린샷 2022-10-29 오전 12 11 24" src="https://user-images.githubusercontent.com/93105083/198671342-e78bce75-c083-4d66-9837-eaeec9ec252a.png">

- 자신의 IP로 온 ARP 요청을 받으면 MAC 주소로 응답해줌

<img width="535" alt="스크린샷 2022-10-29 오전 12 12 28" src="https://user-images.githubusercontent.com/93105083/198671825-128165a0-84ea-4b47-88ce-b6ba51751282.png">

- 목적지 구글 서버의 MAC 주소로 데이터가 전달됨

- Internet Layer의 IP 주소와 Network Access Layer의 MAC 주소를 사용해 올바른 목적지에 도착함

<br>

<h3>7. Transport Layer</h3>

<img width="513" alt="스크린샷 2022-10-29 오전 12 16 53" src="https://user-images.githubusercontent.com/93105083/198672923-1c524da9-0901-405f-b668-1b6e8442a13f.png">

- Transport Layer의 목적지 포트번호에는 80번이 적혀 있음
    - 80번 포트를 사용하고 있는 애플리케이션에게 데이터를 전달해야 함

<br>

<h3>8. Application Layer</h3>

<img width="506" alt="스크린샷 2022-10-29 오전 12 19 22" src="https://user-images.githubusercontent.com/93105083/198673438-f9d7364b-0011-4b52-9aa3-06641c98e70a.png">

- Application Layer에서는 웹 서버가 사용될 HTTP Request 데이터를 얻을 수 있게 됨

<br>

<h3>9. Routing</h3>

<img width="640" alt="스크린샷 2022-10-29 오전 12 20 45" src="https://user-images.githubusercontent.com/93105083/198674112-a4467948-5e6a-4f53-a0dd-873f264e8cee.png">

- 서버에서 정상적으로 HTTP Request를 받고 응답을 돌려 보냄

- "/"에 매핑된 GET 요청을 처리해서 적절한 HTML을 응답해 줌

<br>

<h3>10. 4-Way-Handshaking</h3>

<img width="550" alt="스크린샷 2022-10-29 오전 12 24 49" src="https://user-images.githubusercontent.com/93105083/198674582-7c23bd0e-1c56-4443-bc42-e8f14ca72d1b.png">

- HTTP의 요청과 응답과정이 끝나면 연결을 종료해야 함

- TCP의 컨트롤 비트가 사용됨
    - ACK, FIN 플래그 사용

<img width="480" alt="스크린샷 2022-10-29 오전 12 27 26" src="https://user-images.githubusercontent.com/93105083/198675192-61754cd4-1573-4f78-94fe-16300c38058c.png">

1. 클라이언트가 서버로 연결을 종료하겠다는 FIN 플래그 전송

2. 서버는 클라이언트에게 ACK 메시지를 보내고 자신의 통신이 끝날 때까지 기다림

3. 서버가 통신이 끝나면 클라이언트에게 FIN을 보냄
    - 이때 만약 서버가 FIN을 보내기 전에 보냈던 데이터가 FIN보다 늦게 도착할 경우 문제가 발생할 수 있음
        - 서버로 부터 FIN을 수신했다고 클라이언트가 바로 연결된 소켓을 닫아버리면 FIN을 보내기 전 보낸 패킷은 영영 클라이언트가 받을 수 없음

    - 해결법(**TIME_WAIT**)
    <img width="478" alt="스크린샷 2022-10-29 오전 12 30 08" src="https://user-images.githubusercontent.com/93105083/198675698-4175c042-2cdd-453b-84de-da47d3d5ccfe.png">

        - 서버로부터 FIN요청을 받더라도 일정시간 동안 소켓을 닫지 않고 혹시나 도착하지 않은 잉여 포켓을 기다림 => TIME_WAIT

4. 클라이언트는 확인했다는 의미로 서버에게 ACK을 보냄

    => 종료가 완료됨

<br>

<h2>TCP는 신뢰할 수 있는 프로토콜</h2>

<img width="620" alt="스크린샷 2022-10-29 오전 12 33 18" src="https://user-images.githubusercontent.com/93105083/198676474-18d058a0-94d9-4a52-9b14-e968555d3544.png">

- 요즘 우리는 엄청나게 큰 데이터들을 주고 받음 -> 한 개의 패킷으로는 무리가 있어서 데이터를 잘게 쪼개서 보내고 많은 패킷을 보내게 됨

- 잘게 쪼개진 패킷들은 엄청나게 복잡한 인터넷을 통해 목적지로 이동함

    - 이런 복잡한 인터넷 환경에서 패킷들이 유실되거나 순서가 변경되지 않게 잘 도착할 수 있도록 TCP가 도와줌

- TCP는 흐름제어, 오류제어, 혼잡제어를 통해 신뢰성있는 데이터 전송을 보장해줌

<br>
<hr>
https://www.youtube.com/watch?v=BEK354TRgZ8
https://jhnyang.tistory.com/404