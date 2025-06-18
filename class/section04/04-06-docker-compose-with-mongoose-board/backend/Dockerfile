FROM node:20

# RUN mkdir myfolder => 아래에서 COPY할때, 어차피 자동으로 만들어주므로 굳이 필요 없음.

# new ===> 캐시가 한번 깨지면 그 아래줄의 코드는 모두 캐시가 깨진다.
# 그래서 
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install

# 현재 경로에 있는 모든 리소스들을 복사해서 myfolder폴더 안에다가 집어넣어라
COPY . /myfolder/

# RUN cd ./myfolder/ OR WORKDIR /myfolder/ 실행해주기

CMD yarn start:dev

