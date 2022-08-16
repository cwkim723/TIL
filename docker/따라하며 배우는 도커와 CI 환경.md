### 도커 이미지와 컨테이너 정의

**컨테이너**

- 코드와 모든 종속성을 패키지화하여 응용 프로그램이 한 컴퓨팅 환경에서 다른 컴퓨팅 환경으로 빠르고 안정적으로 실행되도록 하는 소프트웨어의 표준 단위
- 간단하고 편리하게 프로그램을 실행시켜 줌

<br>

**컨테이너 이미지**

- 코드, 런타임, 시스템 도구, 시스템 라이브러리 및 설정과 같은 응용 프로그램을 실행하는 데 필요한 모든 것을 포함하는 소프트웨어 패키지
- 런타임에 컨테이너가 되고 도커 컨테이너의 경우 도커 엔진에서 실행될 때 이미지가 컨테이너가 됨

<br>

**도커를 사용할 때의 흐름**

- 도커 다운
    - [https://www.docker.com/get-started/](https://www.docker.com/get-started/)
- 노트북 상 위에 도커 로고에 이 표시가 있어야 함

![image](https://user-images.githubusercontent.com/93105083/184085424-d9db65d7-6be4-464c-a410-7c08cbad34fa.png)

```
chaewon@gimchaewon-ui-MacBookAir ~ % **docker run hello-world**
Unable to find image 'hello-world:latest' locally // 로컬에 hello-world 라는 이미지 없음
latest: Pulling from library/hello-world
7050e35b49f5: Pull complete // 어딘가에서 hello-world 라는 이미지 가져옴
Digest: sha256:53f1bbee2f52c39e41682ee1d388285290c5c8a76cc92b42687eecf38e0af3f0
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (arm64v8)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

1. `**docker run hello-world**` 라는 명령어를 도커 클라이언트에 작성
2. 도커 서버로 전해짐
3. 이미지 cache 보관 장소에 hello-world라는 이미지가 있는지 확인
4. 캐시 보관 장소에 이미지가 없으면 도커 허브에서 가져옴

### 도커와 기존의 가상화 기술과의 차이를 통한 컨테이너 이해

**가상화 기술 나오기 전**

- 한 대의 서버, 하나의 용도
- 남는 서버 공간 방치

**하이퍼 바이저 기반의 가상화 출현**

- 논리적으로 공간을 분할하여 VM이라는 독립적인 가상 환경 서버 이용 가능
- 하이퍼 바이저
    - 호스트 시스템에서 다수의 게스트 OS를 구동할 수 있게 하는 소프트웨어
    - 하드웨어를 가상화하면서 하드웨어와 각각의 VM을 모니터링 하는 중간 관리자
- 각각의 프로세스(프로그램)들이 컨테이너 안에 격리가 되어 있음 → 하드 디스크 안에서도 각 프로그램을 실행시키기 위한 파일 시스템이 격리가 되어 있음
    - 어떻게 도커 컨테이너를 격리 시키는지?
        - C Group과 네임 스페이스 → 컨테이너와 호스트에서 실행되는 다른 프로세스 사이에 벽을 만드는 리눅스 커널 기능
        - C Group
            - CPU, 메모리, Network Bandwith, HD i/o 등 프로세스 그룹의 시스템 리소스 사용량 관리
                
                ⇒ 어떤 어플이 사용량이 많은 경우 그 어플리케이션을 C Group에 넣어 CPU와 메모리 사용 제한 가능
                
        - 네임 스페이스
            - 하나의 시스템에서 프로세스를 격리시킬 수 있는 가상화 기술
            - 별개의 독립된 공간을 사용하는 것처럼 격리된 환경을 제공하는 경량 프로세스 가상화 기술

### 이미지로 컨테이너 만들기

**도커 이미지**

- 프로그램을 실행하는데 필요한 설정이나 종속성 가짐
- 응용 프로그램을 실행하는데 필요한 모든 것 포함

**도커 이미지 구성요소**

1. 시작시 실행될 명령어
    
    ex. run kakaotalk
    
2. 파일 스냅샷
    
    ex. 카카오톡을 실행하는데 필요한 파일 스냅샷
    
    - 디렉토리나 파일을 카피

**이미지로 컨테이너 만드는 순서**

1. docker 클라이언트에 `docker run 이미지` 입력
2. 도커 이미지에 있는 파일 스냅샷을 컨테이너 하드디스크에 옮김
    
    ![image](https://user-images.githubusercontent.com/93105083/184086124-d86f3a43-b6c1-4d95-b1b8-c9a81ce1f131.png)
    
    1. **`docker run kakaotalk`** 실행
    2. 카카오톡 실행 파일이 하드디스크에 옮겨짐
    3. 명령어를 컨테이너에 → 이미지에서 가지고 있는 명령어(컨테이너 실행 시 사용될 명령어)를 이용해 카카오톡 실행
        
        ![image](https://user-images.githubusercontent.com/93105083/184086208-718ebdba-6675-4875-b0f3-d47fad0659dd.png)
    
    4. 컨테이너 안에서 카카오톡이 실행됨
    

### Cgroup, 네임스페이스를 도커 환경에서 사용할 수 있는 이유

![image](https://user-images.githubusercontent.com/93105083/184086280-29745c6d-ca9d-4970-9074-835d51c62271.png)

- 카카오톡을 위한 컨테이너, 노션을 위한 컨테이너 등 나눌 때 사용하는 것이 C group과 네임 스페이스
- 네임스페이스
    - 프로그램이 어떠한 파일 시스템을 이용하는지 나눠줌
- C group
    - 이 프로그램이 얼만큼의 램과 하드디스크를 사용하는지 나눠줌
- 이 둘은 모두 리눅스에서 사용됨 → 하지만 우리는 mac os와 window에서 사용하는 중 ⇒ 어떻게 ??

- chaewon@gimchaewon-ui-MacBookAir ~ % `docker version`
    
    ```markdown
    Client:
     Cloud integration: v1.0.28
     Version:           20.10.17
     API version:       1.41
     Go version:        go1.17.11
     Git commit:        100c701
     Built:             Mon Jun  6 23:04:45 2022
     OS/Arch:           darwin/arm64
     Context:           default
     Experimental:      true
    
    Server: Docker Desktop 4.11.1 (84025)
     Engine:
      Version:          20.10.17
      API version:      1.41 (minimum version 1.12)
      Go version:       go1.17.11
      Git commit:       a89b842
      Built:            Mon Jun  6 23:01:01 2022
      **OS/Arch:          linux/arm64**
      Experimental:     false
     containerd:
      Version:          1.6.6
      GitCommit:        10c12954828e7c7c9b6e0ea9b0c02b01407d3ae1
     runc:
      Version:          1.1.2
      GitCommit:        v1.1.2-0-ga916309
     docker-init:
      Version:          0.19.0
      GitCommit:        de40ad0
    ```
    
- 컨테이너 부분에 리눅스 VM이 깔려있음 → 도커가 실행될 때는 리눅스 환경에서 돌아가고 있음
    
    ![image](https://user-images.githubusercontent.com/93105083/184086369-12f27787-437e-4824-976b-9dd99bb2364a.png)
    
    - 그렇기 때문에 c group과 네임 스페이스를 사용할 수 있음

## 기본적인 도커 클라이언트 명령어 알아보기

### 도커 이미지 내부 파일 구조 보기

`**docker run hello-world**`

- **docker**
    - 도커 클라이언트 언급
- **run**
    - 컨테이서 생성 및 실행
- **이미지 이름**
    - 이 컨테이너를 위한 이미지

**작동 순서**

1. 도커 클라이언트에 명령어 입력 후 도커 서버로 보냄
2. 도커 서버에서 컨테이너를 위한 이미지가 이미 캐쉬가 되어 있는지 확인
3. 없으면 도커 허브에서 다운 받아옴(pulling) 있다면 그 이미 가지고 있는 이미지로 컨테이너 생성

**이미지로 컨테이너 생성 하는 순서**

1. 먼저 파일 스냅샷 되있는것을 컨테이너의 하드 디스크 부분에 올림
2. 시작 커맨드를 이용해 어플리케이션 실행

→ 시작시 실행될 명령어와 파일 스냅샷이 담긴 이미지를 컴퓨터 하드 디스크에 올리면 컨테이너 내에서 명령어가 실행되면 커널을 통해 프로세스 실행 시 필요한 부분들에 전달되어 실행이 되는 것임

**이미지 내부 파일 시스템 구조 보기**

![image](https://user-images.githubusercontent.com/93105083/184086450-c34b0a47-57ab-474c-abf0-5e45f3035143.png)

`**docker run alpine ls**`

```markdown
chaewon@gimchaewon-ui-MacBookAir ~ % **docker run alpine ls**
Unable to find image 'alpine:latest' locally
latest: Pulling from library/alpine
9b18e9b68314: Pull complete 
Digest: sha256:bc41182d7ef5ffc53a40b044e725193bc10142a1243f395ee852a8d9730fc2ad
Status: Downloaded newer image for alpine:latest
bin
dev
etc
home
lib
media
mnt
opt
proc
root
run
sbin
srv
sys
tmp
usr
var
```

![image](https://user-images.githubusercontent.com/93105083/184086495-99102df6-fa32-426b-b80a-1403b01b151b.png)

`**docker run hello-world ls**`

```markdown
chaewon@gimchaewon-ui-MacBookAir ~ % **docker run hello-world ls**
docker: Error response from daemon: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: exec: "ls": executable file not found in $PATH: unknown.
ERRO[0000] error waiting for container: context canceled
```

- 에러남

**Alpine 이미지를 통해 ls 명령어 실행 가능한 이유**

- Alpine 이미지 파일 스냅샷 안에 이미 ls를 사용가능하게 하는 파일 존재

**hello-world 이미지로는 ls 명령어 사용 불가**

- `docker run hello-world ls` → 오류 뜸
    - 실행할 수 있는 파일을 찾지 못함

### 컨테이너들 나열하기

![image](https://user-images.githubusercontent.com/93105083/184086556-00c99055-877c-49c3-bf44-9eb647b41fbe.png)

```markdown
Last login: Thu Aug 11 13:29:33 on ttys000
chaewon@gimchaewon-ui-MacBookAir ~ % docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
chaewon@gimchaewon-ui-MacBookAir ~ % docker run alpine ping localhost
PING localhost (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: seq=0 ttl=64 time=0.704 ms
64 bytes from 127.0.0.1: seq=1 ttl=64 time=0.187 ms
64 bytes from 127.0.0.1: seq=2 ttl=64 time=0.306 ms
64 bytes from 127.0.0.1: seq=3 ttl=64 time=0.220 ms
64 bytes from 127.0.0.1: seq=4 ttl=64 time=0.215 ms
64 bytes from 127.0.0.1: seq=5 ttl=64 time=0.171 ms
64 bytes from 127.0.0.1: seq=6 ttl=64 time=0.188 ms
64 bytes from 127.0.0.1: seq=7 ttl=64 time=0.156 ms
64 bytes from 127.0.0.1: seq=8 ttl=64 time=0.218 ms
64 bytes from 127.0.0.1: seq=9 ttl=64 time=0.152 ms
64 bytes from 127.0.0.1: seq=10 ttl=64 time=0.147 ms
64 bytes from 127.0.0.1: seq=11 ttl=64 time=0.152 ms
64 bytes from 127.0.0.1: seq=12 ttl=64 time=0.156 ms
64 bytes from 127.0.0.1: seq=13 ttl=64 time=0.151 ms
64 bytes from 127.0.0.1: seq=14 ttl=64 time=0.190 ms
64 bytes from 127.0.0.1: seq=15 ttl=64 time=0.084 ms
64 bytes from 127.0.0.1: seq=16 ttl=64 time=0.303 ms
64 bytes from 127.0.0.1: seq=17 ttl=64 time=0.227 ms
64 bytes from 127.0.0.1: seq=18 ttl=64 time=0.299 ms
64 bytes from 127.0.0.1: seq=19 ttl=64 time=0.160 ms
64 bytes from 127.0.0.1: seq=20 ttl=64 time=0.190 ms
64 bytes from 127.0.0.1: seq=21 ttl=64 time=0.179 ms
64 bytes from 127.0.0.1: seq=22 ttl=64 time=0.115 ms
64 bytes from 127.0.0.1: seq=23 ttl=64 time=0.177 ms
64 bytes from 127.0.0.1: seq=24 ttl=64 time=0.194 ms
64 bytes from 127.0.0.1: seq=25 ttl=64 time=0.177 ms
64 bytes from 127.0.0.1: seq=26 ttl=64 time=0.226 ms
64 bytes from 127.0.0.1: seq=27 ttl=64 time=0.169 ms
64 bytes from 127.0.0.1: seq=28 ttl=64 time=0.168 m
```

```markdown
Last login: Thu Aug 11 12:04:11 on ttys000
chaewon@gimchaewon-ui-MacBookAir ~ % docker ps
CONTAINER ID   IMAGE     COMMAND            CREATED          STATUS          PORTS     NAMES
1aa279dda3f0   alpine    "ping localhost"   18 seconds ago   Up 17 seconds             hungry_saha
chaewon@gimchaewon-ui-MacBookAir ~ %
```

1. `docker ps`
    - 실행되고 있는 컨테이너 존재
1. `docker ps`
    - ps: process status
    - 실행되고 있는 컨테이너 없음
2. `docker run alpine ping localhost`
    - 컨테이너가 실행되고 있음
    - ping: 상대 컴퓨터에 일정한 크기의 패킷을 보내 상대 컴퓨터가 응답하는지 점검
        - 상대 컴퓨터의 동작 여부를 확인하거나 상대 컴퓨터의 네트워크 상태 점검 가능

**이미지 설명**

- CONTAINER ID
    - 컨테이너의 고유한 아이디 해쉬값
    - 실제로는 더욱 길지만 일부분만 표출
- IMAGE
    - 컨테이너 생성 시 사용한 도커 이미지
- COMMAND
    - 컨테이너 시작 시 실행될 명령어
    - 대부분 이미지에 내장 → 별도 설정 필요 X
- CREATED
    - 컨테이너 생성된 시간
- STATUS
    - 컨테이너 상태
    - Up(실행 중), Exites(종료), 일시정지(Pause)
- PORTS
    - 컨테이너가 개방한 포트와 호스트에 연결한 포트
    - 특별한 설정을 하지 않은 경우 출력 X
- NAMES
    - 컨테이너 고유한 이름
    - 컨테이너 생성 시 —name 옵션으로 이름 설정하지 않으면 도커 엔진이 임의로 형용사와 명사를 조합해 설정
    - id와 마찬가지로 중복 X
    - `docker rename`으로 이름 변경 가능
        - `docker rename original-name changed-name`

**원하는 항목만 보기**

`docker ps --format 'table{{.Names}}\table{{.Image}}'`

```markdown
chaewon@gimchaewon-ui-MacBookAir ~ % docker ps --format 'table{{.Names}}\table{{.Image}}'
NAMES         ableIMAGE
hungry_saha   ablealpine
```

- docker
    - 도커 클라이언트 언급
- ps
    - process status
- —format
- ‘table{{.Names}}
    - Ports 등 다른 것도 가능
- \t
    - 탭
- table{{.Image}}’

`sudo docker stop 1aa279dda3f0`

```markdown
chaewon@gimchaewon-ui-MacBookAir ~ % **sudo docker stop 1aa279dda3f0**
1aa279dda3f0
```

`docker ps -a`

```markdown
chaewon@gimchaewon-ui-MacBookAir ~ % **docker ps -a**
CONTAINER ID   IMAGE         COMMAND            CREATED          STATUS                       PORTS     NAMES
1aa279dda3f0   alpine        "ping localhost"   20 minutes ago   Exited (137) 5 seconds ago             hungry_saha
d99e6ca6b20d   hello-world   "ls"               43 minutes ago   Created                                gifted_grothendieck
85b4ed95b2e5   alpine        "ls"               48 minutes ago   Exited (0) 48 minutes ago              nervous_brattain
21bc252ae387   hello-world   "/hello"           2 hours ago      Exited (0) 2 hours ago                 wizardly_allen
e02ed6a01b1f   hello-world   "/hello"           3 days ago       Exited (0) 3 days ago                  determined_galileo
```

### 도커 컨테이너의 생명주기

![image](https://user-images.githubusercontent.com/93105083/184085906-4e3e2ec0-7bd0-4426-b448-8843bca7b904.png)

`docker run 이미지` = `docker create 이미지`(생성) + `docker start 컨테이너 아이디/이름`(실행)

**`docker create 이미지`**

`docker create hello-world`

```markdown
chaewon@gimchaewon-ui-MacBookAir ~ % **docker create hello-world**
f4e96183418aa0aec5c09719400d898f95e6d9837b86fff3e1b3d2ab2fa6bda6 // 생성된 컨테이너의 아이디
```

- 생성된 컨테이너의 아이디
- 실행될 명령어와 파일 스냅샷이 담긴 이미지를 컴퓨터 하드 디스크에 올린 상태. 아직 컨테이너 내에서 명령어가 실행되지는 않음

**`docker start -a 컨테이너아이디`**

```markdown
chaewon@gimchaewon-ui-MacBookAir ~ % **docker start -a f4e961834**

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (arm64v8)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

`-a`

- attach
- 도커 컨테이너가 실행이 될 때 그곳에서 나오는 output들을 화면에 표출해줌

### docker stop vs docker kill

도커 중지

![image](https://user-images.githubusercontent.com/93105083/184085996-5e36bbd5-75e7-49d9-ab4f-2beb4d8377e4.png)

- `docker stop`
    - 그동안 하던 작업들을 완료하고 컨테이너 중지
    
    **`docker run alpine ping localhost`**
    
    ```markdown
    chaewon@gimchaewon-ui-MacBookAir ~ % **docker run alpine ping localhost**
    PING localhost (127.0.0.1): 56 data bytes
    64 bytes from 127.0.0.1: seq=0 ttl=64 time=0.044 ms
    64 bytes from 127.0.0.1: seq=1 ttl=64 time=0.163 ms
    64 bytes from 127.0.0.1: seq=2 ttl=64 time=0.112 ms
    64 bytes from 127.0.0.1: seq=3 ttl=64 time=0.111 ms
    64 bytes from 127.0.0.1: seq=4 ttl=64 time=0.184 ms
    ```
    
    `**docker ps**`
    
    ```markdown
    chaewon@gimchaewon-ui-MacBookAir ~ % **docker ps**
    CONTAINER ID   IMAGE     COMMAND            CREATED          STATUS          PORTS     NAMES
    703495e8493b   alpine    "ping localhost"   15 seconds ago   Up 13 seconds             focused_poincare
    ```
    
    **`docker stop 703495e8493b`**
    
    ```markdown
    chaewon@gimchaewon-ui-MacBookAir ~ % docker stop 703495e8493b
    703495e8493b
    ```
    
- `docker kill`
    - 어떠한 것도 기다리지 않고 바로 컨테이너 중지
    

### 컨테이너 삭제하기

- 먼저 중지를 시켜야 함

```markdown
chaewon@gimchaewon-ui-MacBookAir ~ % **docker ps**
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

chaewon@gimchaewon-ui-MacBookAir ~ % **docker ps -a**
CONTAINER ID   IMAGE         COMMAND            CREATED          STATUS                        PORTS     NAMES
703495e8493b   alpine        "ping localhost"   15 minutes ago   Exited (137) 15 minutes ago             focused_poincare
f4e96183418a   hello-world   "/hello"           4 hours ago      Exited (0) 4 hours ago                  flamboyant_carver
1aa279dda3f0   alpine        "ping localhost"   5 hours ago      Exited (137) 5 hours ago                hungry_saha
d99e6ca6b20d   hello-world   "ls"               5 hours ago      Created                                 gifted_grothendieck
85b4ed95b2e5   alpine        "ls"               5 hours ago      Exited (0) 5 hours ago                  nervous_brattain
21bc252ae387   hello-world   "/hello"           6 hours ago      Exited (0) 6 hours ago                  wizardly_allen
e02ed6a01b1f   hello-world   "/hello"           3 days ago       Exited (0) 3 days ago                   determined_galileo

chaewon@gimchaewon-ui-MacBookAir ~ % **docker rm 703495e8493b**
703495e8493b

chaewon@gimchaewon-ui-MacBookAir ~ % **docker ps -a**
CONTAINER ID   IMAGE         COMMAND            CREATED       STATUS                     PORTS     NAMES
f4e96183418a   hello-world   "/hello"           4 hours ago   Exited (0) 4 hours ago               flamboyant_carver
1aa279dda3f0   alpine        "ping localhost"   5 hours ago   Exited (137) 5 hours ago             hungry_saha
d99e6ca6b20d   hello-world   "ls"               5 hours ago   Created                              gifted_grothendieck
85b4ed95b2e5   alpine        "ls"               5 hours ago   Exited (0) 5 hours ago               nervous_brattain
21bc252ae387   hello-world   "/hello"           6 hours ago   Exited (0) 6 hours ago               wizardly_allen
e02ed6a01b1f   hello-world   "/hello"           3 days ago    Exited (0) 3 days ago                determined_galileo

chaewon@gimchaewon-ui-MacBookAir ~ % docker rm **`docker ps -a -q`**
f4e96183418a
1aa279dda3f0
d99e6ca6b20d
85b4ed95b2e5
21bc252ae387
e02ed6a01b1f

chaewon@gimchaewon-ui-MacBookAir ~ % **docker ps -a**
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

- 중지된 도커 삭제: `docker rm 아이디/이름`
- 모든 컨테이너 삭제: `docker rm `docker ps -a -q``
- 도커 이미지 삭제: `docker rmi 이미지id`
- 한 번에 컨테이너, 이미지, 네트워크 모두 삭제: `docker system prune`
    - 도커를 쓰지 않을 때 모두 정리하고 싶은 경우 사용
    - 실행중인 컨테이너에는 영향을 주지 않음
    
    ```markdown
    chaewon@gimchaewon-ui-MacBookAir ~ % **docker run hello-world**
    
    Hello from Docker!
    This message shows that your installation appears to be working correctly.
    
    To generate this message, Docker took the following steps:
     1. The Docker client contacted the Docker daemon.
     2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
        (arm64v8)
     3. The Docker daemon created a new container from that image which runs the
        executable that produces the output you are currently reading.
     4. The Docker daemon streamed that output to the Docker client, which sent it
        to your terminal.
    
    To try something more ambitious, you can run an Ubuntu container with:
     $ docker run -it ubuntu bash
    
    Share images, automate workflows, and more with a free Docker ID:
     https://hub.docker.com/
    
    For more examples and ideas, visit:
     https://docs.docker.com/get-started/
    
    chaewon@gimchaewon-ui-MacBookAir ~ % **docker ps -a**
    CONTAINER ID   IMAGE         COMMAND    CREATED          STATUS                      PORTS     NAMES
    7faba6ac82c3   hello-world   "/hello"   4 seconds ago    Exited (0) 3 seconds ago              stoic_ptolemy
    3eb4ab2cc185   hello-world   "/hello"   50 seconds ago   Exited (0) 49 seconds ago             gallant_varahamihira
    
    chaewon@gimchaewon-ui-MacBookAir ~ % **docker system prune**
    WARNING! This will remove:
      - all stopped containers
      - all networks not used by at least one container
      - all dangling images
      - all dangling build cache
    
    Are you sure you want to continue? [y/N] y   
    Deleted Containers:
    7faba6ac82c32be8be19b14d1283bc9485e933fcc8e1f747d4499b895076434e
    3eb4ab2cc1858591abaa5a62e2082724f162600fe6c605ca5607556592b78af0
    
    Total reclaimed space: 0B
    
    chaewon@gimchaewon-ui-MacBookAir ~ % **docker ps -a**
    CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
    ```
    

### 실행 중인 컨테이너에 명령어 전달

**이미 실행중인 컨테이너에 명령어를 전달하고 싶은 경우**

- `docker exec 컨테이너아이디`
- 터미널1
    
    ```markdown
    chaewon@gimchaewon-ui-MacBookAir ~ % **docker run alpine ping localhost**
    PING localhost (127.0.0.1): 56 data bytes
    64 bytes from 127.0.0.1: seq=0 ttl=64 time=0.520 ms
    64 bytes from 127.0.0.1: seq=1 ttl=64 time=0.150 ms
    64 bytes from 127.0.0.1: seq=2 ttl=64 time=0.106 ms
    64 bytes from 127.0.0.1: seq=3 ttl=64 time=0.210 ms
    64 bytes from 127.0.0.1: seq=4 ttl=64 time=0.184 ms
    64 bytes from 127.0.0.1: seq=5 ttl=64 time=0.199 ms
    64 bytes from 127.0.0.1: seq=6 ttl=64 time=0.189 ms
    64 bytes from 127.0.0.1: seq=7 ttl=64 time=0.188 ms
    64 bytes from 127.0.0.1: seq=8 ttl=64 time=0.178 ms
    64 bytes from 127.0.0.1: seq=9 ttl=64 time=0.111 ms
    64 bytes from 127.0.0.1: seq=10 ttl=64 time=0.197 ms
    64 bytes from 127.0.0.1: seq=11 ttl=64 time=0.289 ms
    ...
    ```
    
- 터미널2
    
    ```markdown
    chaewon@gimchaewon-ui-MacBookAir ~ % **docker ps**
    CONTAINER ID   IMAGE     COMMAND            CREATED          STATUS          PORTS     NAMES
    c4fbdf915d65   alpine    "ping localhost"   51 seconds ago   Up 50 seconds             epic_elion
    
    chaewon@gimchaewon-ui-MacBookAir ~ % **docker exec c4fbdf915d65 ls**
    bin
    dev
    etc
    home
    lib
    media
    mnt
    opt
    proc
    root
    run
    sbin
    srv
    sys
    tmp
    usr
    var
    
    chaewon@gimchaewon-ui-MacBookAir ~ % **docker run alpine ls**
    bin
    dev
    etc
    home
    lib
    media
    mnt
    opt
    proc
    root
    run
    sbin
    srv
    sys
    tmp
    usr
    var
    ```
    
    - `docker exec c4fbdf915d65 ls` : `docker run alpine ls`과 똑같은 결과
- `docker run` vs `docker exec`
    - `docker run` : 새로 컨테이너를 만들어서 실행
    - `docker exec` : 이미 실행중인 컨테이너에 명령어 전달
    

### 레디스를 이용한 컨테이너 이해

- 레디스 서버가 먼저 작동하고 있어야 함 → 그 후 레디스 클라이언트 실행 후 명령어를 레디스 서버에 전달
- 레디스 클라이언트(redis-cli)를 통해 서버(docker run redis)에 명령어(set value1 hello) 전달

- 터미널1
    
    ```markdown
    chaewon@gimchaewon-ui-MacBookAir ~ % **docker run redis**
    Unable to find image 'redis:latest' locally
    latest: Pulling from library/redis
    a9fe95647e78: Pull complete 
    d633f0d49103: Pull complete 
    02b2c9411454: Pull complete 
    edf75a5169a5: Pull complete 
    916009909ae8: Pull complete 
    a15eebd8670a: Pull complete 
    Digest: sha256:9bc34afe08ca30ef179404318cdebe6430ceda35a4ebe4b67d10789b17bdf7c4
    Status: Downloaded newer image for redis:latest
    1:C 11 Aug 2022 09:58:23.553 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
    1:C 11 Aug 2022 09:58:23.553 # Redis version=7.0.4, bits=64, commit=00000000, modified=0, pid=1, just started
    1:C 11 Aug 2022 09:58:23.553 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
    1:M 11 Aug 2022 09:58:23.553 * monotonic clock: POSIX clock_gettime
    1:M 11 Aug 2022 09:58:23.554 * Running mode=standalone, port=6379.
    1:M 11 Aug 2022 09:58:23.554 # Server initialized
    1:M 11 Aug 2022 09:58:23.555 * Ready to accept connections
    ```
    
    ```markdown
    chaewon@gimchaewon-ui-MacBookAir ~ % **redis-cli**
    zsh: command not found: redis-cli
    ```
    
    - 원인
        
        ![image](https://user-images.githubusercontent.com/93105083/184278499-1b30ac42-4b73-41bf-baf6-e609e715c72a.png)
        
        - 레디스 클라이언트가 레디스 서버가 있는 컨테이너 밖에서 실행을 하려 함 → 레디스 서버에 접근 불가 ⇒ 레디스 클라이언트 작동 시 에러 발생
        - ⇒  레디스 클라이언트도 컨테이너 안에서 실행해야 함

- 해결
    
    ![image](https://user-images.githubusercontent.com/93105083/184278542-4d2aafe1-a5e8-44ce-94e0-ed28e8966c54.png)
    
    - 이렇게 해야함
    - → `docker exec -it 컨테이너아이디 redis-cli`
        - `exec`: 실행중인 컨테이너에 명령어 전달
        - `-it` : 명령어를 실행한 후 계속 명령어를 적을 수 있음
            - `-i`(interactive) : 상호적인
            - `-t` : terminal
    
    ```markdown
    chaewon@gimchaewon-ui-MacBookAir ~ % **docker ps**  
    CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS      NAMES
    7a398d1a9ba9   redis     "docker-entrypoint.s…"   4 minutes ago   Up 4 minutes   6379/tcp   clever_visvesvaraya
    
    chaewon@gimchaewon-ui-MacBookAir ~ % **docker exec -it 7a398d1a9ba9 redis-cli**
    127.0.0.1:6379> **set key1 hello**
    OK
    127.0.0.1:6379> **get key1**
    "hello"
    ```
    

### 실행중인 컨테이너에서 터미널 생활 즐기기

- 실행 중인 컨테이너에 명령어 전달할 때마다 `docker exec -it 컨테이너아이디 명령어` 를 입력하는 건 너무 번거로움
- 그래서 컨테이너 안에 쉘이나 터미널 환경으로 접속해 줌으로써 문제 해결
    
    `docker exec -it 컨테이너아이디 **sh**`
    
    - 이미지에 따라
        - sh (윈도우, 맥)
        - bash (맥)
        - zsh (맥)
        - powershell (윈도우)
    - 빠져 나오려면 **ctrl+d**
- 터미널1
    
    ```markdown
    chaewon@gimchaewon-ui-MacBookAir ~ % **docker run alpine ping localhost**
    PING localhost (127.0.0.1): 56 data bytes
    64 bytes from 127.0.0.1: seq=0 ttl=64 time=0.044 ms
    64 bytes from 127.0.0.1: seq=1 ttl=64 time=0.163 ms
    64 bytes from 127.0.0.1: seq=2 ttl=64 time=0.112 ms
    64 bytes from 127.0.0.1: seq=3 ttl=64 time=0.111 ms
    64 bytes from 127.0.0.1: seq=4 ttl=64 time=0.184 ms
    ```
    
- 터미널2
    
    ```markdown
    chaewon@gimchaewon-ui-MacBookAir ~ % **docker ps**
    CONTAINER ID   IMAGE     COMMAND            CREATED          STATUS          PORTS     NAMES
    c8dc4b242361   alpine    "ping localhost"   34 seconds ago   Up 33 seconds             nostalgic_chatelet
    
    chaewon@gimchaewon-ui-MacBookAir ~ % **docker exec -it c8dc4b242361 ls**
    bin    etc    lib    mnt    proc   run    srv    tmp    var
    dev    home   media  opt    root   sbin   sys    usr
    
    chaewon@gimchaewon-ui-MacBookAir ~ % **docker exec -it c8dc4b242361 echo "hello"**
    hello
    ```
    
    ```markdown
    chaewon@gimchaewon-ui-MacBookAir ~ % **docker exec -it c8dc4b242361 sh**
    / # **ls**
    bin    etc    lib    mnt    proc   run    srv    tmp    var
    dev    home   media  opt    root   sbin   sys    usr
    / # **echo "hello"**
    hello
    / # **touch new-file**
    / # **ls**
    bin       etc       lib       mnt       opt       root      sbin      sys       usr
    dev       home      media     **new-file**  proc      run       srv       tmp       var
    / # **export hello=hi**
    / # **echo $hello**
    hi
    ```
    

## 직접 도커 이미지를 만들어 보기

- 현재까지 도커 이미지는 항상 도커 허브에 있는 것들만 사용
- 하지만 도커 이미지를 직접 만들 수도 있고 직접 만든 이미지를 도커 허브에 올려 공유도 가능
- 도커 이미지를 이용해 도커 컨테이너 생성: `docker create 이미지이름`
    
    ![image](https://user-images.githubusercontent.com/93105083/184278587-54805f20-fb6b-4662-afb3-22aabf40ea37.png)
    
    - 컨테이너는 도커 이미지로 생성

**도커 이미지 생성하는 순서**

1. Dockerfile 작성
    - Dockerfile: 도커 이미지를 만들기 위한 설정 파일
    - 컨테이너가 어떻게 행동해야 하는지에 대한 설정 정의
2. 도커 클라이언트
    - 도커 파일에 입력된 것들이 도커 클라이언트에 전달되어야 함
3. 도커 서버
    - 도커 클라이언트에 전달된 모든 중요한 작업들을 하는 곳
4. 이미지 생성



### Dockerfile 만들기

- 도커 이미지 = 시작시 실행될 명령어 + 파일 스냅샷

**도커 파일 만드는 순서 (도커 이미지가 필요한 게 무엇인지 생각하기)**

1. 베이스 이미지 명시(파일 스냅샷)
2. 추가적으로 필요한 파일을 다운받기 위한 몇가지 명령어 명시(파일 스냅샷)
3. 컨테이너 시작 시 실행될 명령어 명시 (시작 시 실행될 명령어)

**베이스 이미지**

![image](https://user-images.githubusercontent.com/93105083/184800023-5cfe057f-a247-4567-ae7c-6b50b682f3a7.png)

- 도커 이미지는 여러개의 레이어로 구성
    - 베이스 이미지: 이 이미지의 기반이 되는 부분
    - 레이어: 중간 단계 이미지
- 이미지에 무엇인가를 추가 → 레이어를 추가하는 것임(레이어 캐싱)

**도커 파일 만들기**

- 목표: hello 문구 출력

```docker
# 베이스 이미지 명시
FROM baseImage

# 추가적으로 필요한 파일들을 다운로드 받는다.
RUN command

# 컨테이너 시작 시 실행될 명령어를 명시
CMD ["executable"]
```

- FROM
    - 이미지 생성 시 기반이 되는 이미지 레이어(베이스 이미지)
    - `이미지이름 태그` 형식으로 작성
    - 태그를 안 붙이면 자동적으로 가장 최신 것으로 다운
- RUN
    - 도커 이미지가 생성되기 전에 수행할 쉘 명령어
- CMD
    - 컨테이너가 시작되었을 때 실행할 실행 파일 또는 쉘 스크립트
    - 해당 명령어는 Dockerfile 내 1회만 가능

**순서**

1. 도커 파일을 만들 폴더 하나 만들기 ex.dockerfile-folder
2. 방금 생성한 도커 파일 폴더를 에디터를 이용해 실행(vsc 추천)
3. 파일 하나 생성(이름은 **Dockerfile**)
4. 그 안에 먼저 어떻게 진행해 나갈지 기본적인 토대를 명시
5. 베이스 이미지부터 실제 값으로 추가
6. 베이스 이미지는 ubuntu, centos 등 가능, hello를 출력하는 기능은 사이즈가 작은 거 써도 돼서 alpine 베이스 이미지 사용
7. 마지막으로 컨테이너 시작 시 실행될 명령어 `echo hello` 적어줌

**완성**

```docker
# 베이스 이미지 명시
FROM alpine

# 추가적으로 필요한 파일들을 다운로드 받는다.
# RUN command

# 컨테이너 시작 시 실행될 명령어를 명시
CMD ["echo", "hello"]
```

### 도커 파일로 도커 이미지 만들기

**도커 파일로 이미지 생성 절차**

`Dockerfile → 도커 클라이언트 → 도커 서버 → 이미지`

- 도커 파일에 입력된 것들이 도커 클라이언트에 전달되어서 도커 서버가 인식하도록 해야 함
    - `docker build ./` 또는 `docker build .`
        - Build 명령어는 해당 디렉토리 내에서 dockerfile이라는 파일을 찾아서 도커 클라이언트에 전달
        - docker build 뒤에 ./ 와 . 는 둘 다 현재 디렉도리를 의미

**실습**

1. 알파인 이미지 빌드(**a6215f271958**~)
    
    ![image](https://user-images.githubusercontent.com/93105083/184800068-1f7676e7-2e65-4580-aa1d-256f17d94097.png)
    
    ```docker
    chaewon@gimchaewon-ui-MacBookAir dockerfile-folder % **docker build ./**
    Sending build context to Docker daemon  2.048kB
    Step 1/2 : FROM alpine
     ---> **a6215f271958** // alpine 이미지의 아이디
    Step 2/2 : CMD ["echo", "hello"]
     ---> Running in **86635c7cc595**
    Removing intermediate container 86635c7cc595
     ---> f608595dc08b
    Successfully built **f608595dc08b**
    ```
    
    - 하단의 에러가 뜬다면 [https://www.inflearn.com/course/따라하며-배우는-도커-ci/unit/52103?q=90166&category=questionDetail&tab=community](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%8F%84%EC%BB%A4-ci/unit/52103?q=90166&category=questionDetail&tab=community)
        
        ```docker
        chaewon@gimchaewon-ui-MacBookAir **dockerfile-folder % docker build .**
        [+] Building 0.1s (5/5) FINISHED                                                                                                                                                              
         => [internal] load build definition from Dockerfile                                                                                                                                     0.1s
         => => transferring dockerfile: 243B                                                                                                                                                     0.0s
         => [internal] load .dockerignore                                                                                                                                                        0.0s
         => => transferring context: 2B                                                                                                                                                          0.0s
         => [internal] load metadata for docker.io/library/alpine:latest                                                                                                                         0.0s
         => CACHED [1/1] FROM docker.io/library/alpine                                                                                                                                           0.0s
         => exporting to image                                                                                                                                                                   0.0s
         => => exporting layers                                                                                                                                                                  0.0s
         => => writing image sha256:5ca0388d811148445d859268d6937d18ccc332af12e618fcb3a7afd35b961a54                                                                                             0.0s
        
        Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them
        chaewon@gimchaewon-ui-MacBookAir dockerfile-folder %
        ```
        

2. 임시 컨테이너 생성(86635c7cc595~)
    
    ![image](https://user-images.githubusercontent.com/93105083/184800110-34c58722-e283-466a-b6af-112d7abde2f1.png)
    
    - 알파인 이미지가 가지고 있는 파일 스냅샷을 컨테이너의 하드 디스크에 저장
    - `CMD ["echo", "hello"]` 부분을 컨테이너에 넣어줌
    - 임시 컨테이너 완성
        
        ![image](https://user-images.githubusercontent.com/93105083/184800175-0e8693ee-7782-4ba7-bae2-dd31bd60d9a8.png)
        

3. Alpine 이미지(**f608595dc08b)**
- 위에서 완성한 임시 컨테이너로 alpine 이미지 생성
    
    ![image](https://user-images.githubusercontent.com/93105083/184800238-b8da96a7-7bb8-4bb6-8516-2f3e5059120b.png)
    

⇒ 베이스 이미지에서 다른 종속성이나 새로운 커맨드를 추가할 때는 **임시 컨테이너를 만든 후 그 컨테이너를 토대로 새로운 이미지를 만듦. 그리고 그 임시 컨테이너는 지워줌**

![image](https://user-images.githubusercontent.com/93105083/184800294-a0c1078a-8b9d-473b-8d1a-4c5299792426.png)

```docker
chaewon@gimchaewon-ui-MacBookAir dockerfile-folder % **docker run -it f608595dc08b** 
hello
chaewon@gimchaewon-ui-MacBookAir dockerfile-folder % **docker run -it hello-world**

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (arm64v8)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/

chaewon@gimchaewon-ui-MacBookAir dockerfile-folder % **docker run -it busybox**
Unable to find image 'busybox:latest' locally
latest: Pulling from library/busybox
98b248744137: Pull complete 
Digest: sha256:ef320ff10026a50cf5f0213d35537ce0041ac1d96e9b7800bafd8bc9eff6c693
Status: Downloaded newer image for busybox:latest
/ # ^C
/ #
```

- **f608595dc08b** 를 외워서 쓰기엔 너무 번거로움 → 이름을 주자!


### 도커 이미지에 이름 주는 방법

![image](https://user-images.githubusercontent.com/93105083/184800349-36a787ed-dc85-4520-aa64-e25049fe8bf7.png)


- `docker build -t smileajw1004/hello:latest ./`

```docker
chaewon@gimchaewon-ui-MacBookAir dockerfile-folder % **docker build -t smileajw1004/hello:latest ./** 
Sending build context to Docker daemon  2.048kB
Step 1/2 : FROM alpine
 ---> a6215f271958
Step 2/2 : CMD ["echo", "hello"]
 ---> Using cache
 ---> f608595dc08b
Successfully built f608595dc08b
Successfully tagged smileajw1004/hello:latest
chaewon@gimchaewon-ui-MacBookAir **dockerfile-folder % docker run -it smileajw1004/hello**
hello
```
