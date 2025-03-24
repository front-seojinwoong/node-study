// const express = require('express');  옛날 방식 => common.js 방식
import express from 'express'; // 요즘방식 => 모듈방식

const app = express();

app.get('/qqq', function(req, res){
  res.send('HELLO WORD!asdadas');
})

app.listen(3000);

