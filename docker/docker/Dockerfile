FROM node:16-alpine
# 처음 시작은 'FROM baseImage'
# 16 node version
# alpine: 작은 단위의 리눅스 버ㅅ

WORKDIR /app
# WORKDIR = cd, 루트 경로에 있는 app이라는 폴더 안에 모든 파일 가져오겠다

COPY package.json package-lock.json ./
# 프로젝트 파일 복사 -> 레이어 시스템으로 구성(빈번하게 변경되는 파일일수록 젤 마지막에 작성)
# package.json보다 index.js가 더 변경 많이 됨 -> index.js를 더 나중에 가져옴

RUN npm ci
# npm install : 신버전이 나오면 버전이 바뀔 가능성이 있음
# npm ci : 우리가 쓴 버전 그대로 설치

COPY index.js .

ENTRYPOINT [ "node", "index.js" ]

# docker build -f Dockerfile -t fun-docker .
# . : build context -> 도커파일은 여기에 있어라고 지정
# -f Dockerfile : 어떤 도커파일 쓸건지 지정
# -t fun-docker : 이름 지정(tag)