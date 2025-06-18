## docker 명령어 모음

docker ps관련
1. docker ps -a : 실행중인, 실행중이지 않은 모든 컨테이너 출력
2. docker rm "컨테이너ID": 컨테이너 삭제하기
3. docker ps -a -q : 모든 컨테이너의 아이디 값만 출력하기
4. docker rm `docker ps -a -q`: 모든도커 컨테이너 지우기

docker images 관련
1. docker images: docker 이미지 내역
2. docker rmi "이미지ID":  도커 이미지 지우기
3. docker images -q : docker 이미지를 뽑아오는데 ID값만
4. docker rmi `docker images -q` : 모든 도커 이미지 지우기

c.f) 도커 명령어는 그래도 안전하기 때문에 모든 프로그램을 종료하지는 않는다. 실행중인 프로그램이 있으면 그것은 피해서 지운다.

아 귀찮아 한방에 하는 방법은 없을까? 있다
docker system prune -a