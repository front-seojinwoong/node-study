FROM node:14 

# RUN mkdir myfolder => 아래에서 COPY할때, 어차피 자동으로 만들어주므로 굳이 필요 없음.

# 현재 경로에 있는 모든 리소스들을 복사해서 myfolder폴더 안에다가 집어넣어라
COPY . /myfolder/

# RUN cd ./myfolder/ OR WORKDIR /myfolder/ 실행해주기
WORKDIR /myfolder/
RUN yarn install

CMD yarn start:dev

