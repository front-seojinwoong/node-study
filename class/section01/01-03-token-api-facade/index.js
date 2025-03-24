function checkPhone(myPhone) {
  if (myPhone.length < 10 || myPhone.length > 11) {
    console.log("에러발생! 핸드폰 번호를 제대로 입력해주세요");
    return false;    
  } else {
    return true;
  }
}

function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  return result;
}

function sendTokenToSMS(myPhone, myToken) {
  console.log(myPhone + '번호로 인증번호 ' + myToken + '를 전송합니다.');
}

// 좋은 예
function createTokenOfPhone(myPhone) { // 매개변수(parameter)
  // * 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
  const isValid = checkPhone(myPhone);
  if (isValid === false) return;
  
  // * 2. 핸드폰 토큰 6자리 만들기
  const myToken = getToken();

  // * 3. 핸드폰번호에 토큰 전송하기
  sendTokenToSMS(myPhone, myToken);

  res.send('인증완료!!!');
}

createTokenOfPhone("01012345678"); // 인자(argument)