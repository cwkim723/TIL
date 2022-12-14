<h2>Process vs Thread</h2>

- 실행 단위: cpu core에서 실행하는 하나의 단위로 프로세스와 스레드를 포괄

- 프로세스: 하나의 스레드만 가지고 있는 단일 스레드 프로세스

- 동시성: 한 순간에 여러 일이 아니라, 짧은 전환으로 여러가지 일을 동시에 처리하는 것처림 보이는 것

<br>

<h3>프로그램과 프로세스</h3>

- 피자 레시피: 우리가 작성하는 코드, 프로그램

- 피자: 피자 레시피(프로그램)가 실행이 되어서 사용할 수 있는 무언가, 프로세스

![스크린샷 2022-10-31 오후 9 56 03](https://user-images.githubusercontent.com/93105083/199012833-762d10dc-e46e-4d8b-9335-ff7a0a0a44bb.png)

<b>프로그램이 프로세스가 되는 과정</b>
1. 프로세스가 필요로 하는 재료들이 메모리에 올라가야 함
    - 메모리 종류
        - Code
            - 실행 명령을 포함하는 코드들
        - Data
            - Static 변수 혹은 Global 변수
        - Heap
            - 동적 메모리 영역
        - Stack
            - 지역변수, 매개변수, 반환 값 등등 일시적인 데이터
2. 해당 프로세스에 대한 정보를 담고 있는 PCB 블럭이 프로세스 생성 시 만들어짐

    ![스크린샷 2022-10-31 오후 9 59 19](https://user-images.githubusercontent.com/93105083/199013552-5c1b6823-42f7-4227-a2fe-cd3d0cf7f88a.png)
    
    - PCB 블럭
        - Pointer: 프로세스 상태 중에 준비 상태나 대기 상태의 큐를 구현하기 위해 필요
        - Process State: 현재 프로세스 상태를 담음
        - PID(Process Number(ID)): 고유 번호를 담음
        - Program Counter: 다음 명령어를 가리킴

<br>

<h3>Process vs Thread</h3>

![스크린샷 2022-10-31 오후 10 02 50](https://user-images.githubusercontent.com/93105083/199014141-7b2ac06b-0cba-4e3d-b8ba-3c6dd13af94e.png)
- 대부분의 사람들은 하나의 프로세스만 사용하기 보다는 여러 가지를 동시에 사용하고 싶어 함
- 하지만 원래는 한 프로세스가 실행되기 위해서 cpu를 점유하고 있으면 다른 프로세스는 실행 상태에 있을 수 없음
    - 그래서 다수의 프로세스를 동시에 실행하기 위해 여러 개 프로세스를 시분할로, 즉 짧은 텀을 반복하면서 전환해서 실행을 시키게 됨

<br>

<b>컨텍스트 스위칭(Context Switching)</b>

![스크린샷 2022-10-31 오후 10 06 16](https://user-images.githubusercontent.com/93105083/199014710-f529d206-52b2-4caf-acd3-a4aab3357591.png)

프로세스1과 프로세스2를 동시에 실행하고 싶은 경우
- 프로세스1을 CPU에 올림, 프로세스2는 준비상태
- 프로세스2를 CPU에 올림, 프로세스1은 준비상태
- 프로세스1을 CPU에 올림, 프로세스2는 준비상태
- 이과정 ... 반복
- 두 개의 프로세스만 반복해도 과정이 귀찮고 복잡함

<br>

<b>스레드(Thread)</b>
- 위에서 본 컨텍스트 스위칭의 과정이 귀찮고 복잡함 -> 그래서 등장하는 것이 경량화된 프로세스 버전인 스레드
    - 스레드가 경량화된 프로세스인 이유

        ![스크린샷 2022-10-31 오후 10 12 00](https://user-images.githubusercontent.com/93105083/199015844-3dc9b8dc-3695-4984-9176-35a705f8f44a.png)

        - 하나의 프로세스 안에 다수의 스레드가 있는 경우 공유되는 자원이 있기 때문
        - 스레드는 코드, 데이터, 힙 영역을 공통된 자원으로 사용
            - 각 스레드는 스택 부분만 따로 가짐
        - 공유되는 자원이 있기 때문에 컨텍스트 스위칭이 일어날 때 캐싱 적중률이 올라감

<br>

<h3>Multi-Process vs Multi-Thread</h3>

- 멀티 프로세스와 멀티 스레드 이 두가지 개념 모두 애플리케이션에 대한 처리 방식의 일종

- 여러 사용자가 동시에 로그인을 하는 상황이라고 가정
    - 한 프로세스는 매번 하나의 로그인만 처리할 수 있음 -> 동시에 처리 불가
        - 부모 프로세스가 fork()를 해서 자식 프로세스를 여러 개 만들어서 일을 처리하도록 함

            ![스크린샷 2022-11-01 오후 1 42 43](https://user-images.githubusercontent.com/93105083/199160380-98bf3e15-9a3e-408a-bf22-2bfebdd194db.png)

            - 이 때 자식 프로세스는 부모와 별개의 메모리 영역을 확보함

    - 스레드는 한 프로세스 내에서 구분지어진 실행 단위

        ![스크린샷 2022-11-01 오후 1 44 28](https://user-images.githubusercontent.com/93105083/199160552-d38b2283-267a-451f-ba9a-8a6b97041786.png)

        - 프로세스가 다수의 스레드로 구분되어 있지 않으면 단일스레드 하나로 프로세스가 실행됨
            - 이때 실행 단위는 프로세스 그 자체
            - 해당 프로세스의 하나밖에 없는 스레드가 실행 단위가 되는 것
        - 프로세스 내에서 분리해서 여러 스레드로 나뉘어서 실행단위가 나뉘어지면 멀티 스레드가 됨 

<br>

- 멀티 프로세스와 멀티 스레드의 차이점
    - 멀티 프로세스
        - 각 프로세스는 독립적
        - IPC를 이용한 통신
            - **IPC(Inter-Process Communication)**: 각 프로세스는 독립적이기 때문에 서로 통신할 때 어려움을 겪음 -> 서로 각자 실행을 하다가 통신이 필요할 때 IPC라는 설비를 통해 서로 통신을 할 수 있음
        - 자원 소모적, 개별 메모리 차지
        - Context Switching 비용이 큼
        - 동기화 작업이 필요하지 않음
    - 멀티 스레드
        - Thread끼리 긴밀하게 연결되어 있음
            - 동기화에 신경을 써야 함
        - 공유된 자원으로 통신 비용 절감
        - 공유된 자원으로 메모리가 효율적임
        - Context Switching 비용이 적음
        - 공유 자원 관리를 해야 함

<br>

- 멀티 스레드가 더 장점이 많아보이는데 왜 멀티 프로세스를 이용할까?

    ![](https://user-images.githubusercontent.com/93105083/199165888-a64b5772-b75d-4253-b8f1-3279888e5eb3.png)
    - 인터넷 익스플로러 이용할 때 한 창에서 문제가 발생하면 전체 창이 꺼지는 경우가 발생할 때가 있음
        - 멀티 스레드를 이용했기 때문
            - 스레드는 서로 긴밀하게 연결되어 있기 때문에 한 스레드(한 탭)에 문제가 생기면 전체 프로세스에 영향이 감 
    - 구글 크롬은 멀티 프로세스를 이용했기 때문에 멀티 탭 간의 영향을 덜 받음


<br>


<h3>Multi-core</h3>

- 앞서 소개한 멀티 프로세스와 멀티 스레드는 처리 방식의 일종 -> 소프트웨어 분야
- 멀티코어 -> 하드웨어 분야

![](https://user-images.githubusercontent.com/93105083/199166521-e6f4f90b-059a-4cd1-9cf3-e266b3f2930b.png)
- 싱글 코어
    - 싱글코어를 가진 CPU가 실행 단위를 처리할 때는 동시에 여러 가지가 진행되기 위해서 빠른 텀으로 전환이 되면서 실행이 됨 => **동시성**
        - 이렇게 여러 실행 단위를 번갈아 실행하면서 동시에 일어난 것처럼 보이게 함
- 멀티 코어
    - 물리적으로 여러 코어를 사용해서 다수의 실행 단위를 한 순간에 처리할 수 있게 해줌 => **병렬처리**
        - 병렬처리: 둘 이상의 코어에서 동시에 하나 이상의 프로세스(혹은 스레드)가 한꺼번에 진행되는 것





<hr>

https://www.youtube.com/watch?v=1grtWKqTn50