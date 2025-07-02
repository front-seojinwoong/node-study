// const express = require('express');  옛날 방식 => common.js 방식
import express from 'express'; // 요즘방식 => 모듈방식
import { checkPhone, getToken, sendTokenToSMS } from './phone.js';

const app = express();
app.use(express.json());

app.get('/boards', function(req, res){
  const result = [
		{ number: 1, writer: "철수", title: "제목입니다~~", contents: "내용이에요!!!" },
    { number: 2, writer: "영희", title: "영희입니다~~", contents: "영희이에요!!!" },
    { number: 3, writer: "훈이", title: "훈이입니다~~", contents: "훈이이에요!!!" },
  ]

  res.send(result);
});

app.post('/boards', (req, res) => {
  console.log('req', req);
  console.log('req.body', req.body);
});

app.post('/tokens/phone', (req, res) => {
  const myphone = req.body.qqq;

  const isValid = checkPhone(myphone);
  if (isValid === false) return;
  
  // * 2. 핸드폰 토큰 6자리 만들기
  const myToken = getToken();

  // * 3. 핸드폰번호에 토큰 전송하기
  sendTokenToSMS(myphone, myToken);

  res.send('인증완료!!!');
});


app.listen(3000, () => {
  console.log('port 3000연결완료');
});

