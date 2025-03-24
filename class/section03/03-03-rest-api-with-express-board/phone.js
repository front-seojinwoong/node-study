export function checkPhone(myPhone) {
  if (myPhone.length < 10 || myPhone.length > 11) {
    console.log("에러발생! 핸드폰 번호를 제대로 입력해주세요");
    return false;    
  } else {
    return true;
  }
}

export function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  return result;
}

export function sendTokenToSMS(myPhone, myToken) {
  console.log(myPhone + '번호로 인증번호 ' + myToken + '를 전송합니다.');
}
