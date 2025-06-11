import coolsms from 'coolsms-node-sdk';

const mysms = coolsms.default;


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

export async function sendTokenToSMS(myPhone, myToken) {
  const messageService = new mysms(process.env.COOLSMS_API_KEY, process.env.COOLSMS_API_PWD);
  console.log('process.env.COOLSMS_API_KEY',process.env.COOLSMS_API_KEY);
  console.log('process.env.COOLSMS_API_PWD',process.env.COOLSMS_API_PWD);

  const result = await messageService.sendOne({
    to: myPhone,
    from: "01027057964",
    text: `[코드캠프] 안녕하세요?! 요청하신 인증번호는 ${myToken} 입니다.`
  });
  console.log(result);
}
