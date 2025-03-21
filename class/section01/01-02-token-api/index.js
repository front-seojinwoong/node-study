// 안좋은 예
// function createTokenOfPhone(qqq) { // 매개변수(parameter)
//   // * 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
//   if(qqq.length >= 10 ) {
//     if (qqq.length <= 11) {
//       // * 2. 핸드폰 토큰 6자리 만들기
//       const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
//       console.log("🚀 ~ createTokenOfPhone ~ result:", result)
//       // * 3. 핸드폰번호에 토큰 전송하기

//       console.log(qqq + '번호로 인증번호 ' + result + '를 전송합니다.');
      
//     } else {
//       console.log("에러발생! 핸드폰 번호를 제대로 입력해주세요");
//     }
//   } else {
//     console.log("에러발생! 핸드폰 번호를 제대로 입력해주세요");
//   }
// }





// 좋은 예
function createTokenOfPhone(qqq) { // 매개변수(parameter)
  // * 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
  if (qqq.length < 10 || qqq.length > 11) {
    console.log("에러발생! 핸드폰 번호를 제대로 입력해주세요");
    return;    
  }

  // * 2. 핸드폰 토큰 6자리 만들기
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  // * 3. 핸드폰번호에 토큰 전송하기

  console.log(qqq + '번호로 인증번호 ' + result + '를 전송합니다.');
}

createTokenOfPhone("01012345678"); // 인자(argument)
