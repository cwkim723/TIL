<h3>Scale Up과 Scale Out</h3>

- 스케일 업(Scale Up)
    ![](2022-10-26-09-40-40.png)

    - 기존의 서버를 높은 사양으로 업그레이드

        - 하드웨어: 서버에 디스크 추가, CPU나 메모리 업그레이드

        - 소프트웨어: AWS EC2 사양을 micro -> small -> medium 등으로 높임

    - 수직 스케일링(vertical scaling)이라고도 함


- 스케일 아웃(Scale Out)
    ![](2022-10-26-09-43-09.png)

    - 장비를 추가해서 확장

        - 비슷한 사양의 서버를 추가로 연결

            - 데이터 용량 증가
            - 기존 서버의 부하 분담

    - 수평 스케일링(horizontal scaling)이라고도 함

    - 클라우드 서비스에서 Auto Scaling 기능 존재

        - 자원 사용량을 모니터링 해 자동으로 서버 증설


<hr>

https://tecoble.techcourse.co.kr/post/2021-10-12-scale-up-scale-out/