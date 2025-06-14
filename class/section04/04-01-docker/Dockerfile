# 1. 운영체제 및 프로그램 설치 ... 부연설명 => 프로그램 사이트 모아놓은 곳이 있음(hub.docker.com)
#FROM ubuntu:22.04

# 2. nodejs, yarn 깔기
# c.f) 내 컴퓨터에 깔리는 것이 아니라, 도커컴퓨터에 깔리는 것임.
#RUN sudo apt install nodejs
#RUN sudo npm install -g yarn 

#===== 위까지는 하나하나 다운받는 방식 ====

#1. 운영체제 및 프로그램 설치 (이미 리눅스, node, npm, yarn까지 모두 깔려있는 컴퓨터 다운로드하는 방식) 
# RUM 명령어는 "실행하라" 라는 의미
FROM node:14 
RUN mkdir myfolder 

# 2. COPY => 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
COPY ./index.js /index.js 

# 3. 도커안에서 index.js 실행시키기
# RUN을 안하고 CMD로 한 이유: 굳이 node index.js 실행하는 것을 RUN으로 docker 이미지에 담을 필요는 없으니까.
CMD node index.js

# CMD 와 RUN 의 차이점 : 
  # 1. docker build를 하면 셋팅이 된 도커 이미지가 나오게 된다. CMD명령어는 그 이미지에 저장이 안된다. 실제로 실행시킬때 구현이 된다. RUN 명령어는 이미지 안에도 저장이된다.
  # 2. RUN 명령어는 여러번 쓸 수 있지만, CMD 명령어는 도커파일에 한번만 쓸 수 있다.