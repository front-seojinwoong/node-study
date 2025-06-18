import testFn from './email.js';
import 'dotenv/config';

const checkEmail = (email) => {
  if (email === undefined || email.includes("@") === false ) {
    console.log('에러 발생! 이메일 주소를 제대로 입력해주세요!');
    return false;
  } else {
    return true;
  }
}

const getWelcomeTemplate = ({ name, age, school, email }) => {
  return `
    <html>
      <body>
        <h1>${name}님, 가입을 환영합니다!</h1>
        <hr/>
        <div>이름: ${name}</div>
        <div>나이: ${age}</div>
        <div>학교명: ${school}</div>
        <div>이메일주소: ${email}</div>
      </body>
    </html>
  `
}

const sendTemplateToEmail = (email, welcomeTemplate) => {
  console.log(`
    ${email}주소로 다음과 같은 환영문자를 보냈습니다!
    ${welcomeTemplate}
  `)
}

const createUser = ({ name, age, school, email }) => {
  // 1. 이메일이 정상적인 형식인지 확인하기
  // const isValidEmail = checkEmail(email);
  // if (!isValidEmail) return;

  // 2. 가입환영 템플릿 만들기
  const welcomeTemplate = getWelcomeTemplate({ name, age, school, email });

  

  console.log("index.js ::: ", process.env.TEST_ID);
  console.log("index.js ::: ", process.env.TEST_PWD);
  console.log("index.js ::: ", process.env.TEST_KEYCODE);

  testFn();
  // 3. 만든 템플릿 고객의 이메일로 보내기
  // sendTemplateToEmail(email, welcomeTemplate);
}


const name = "철수222";
const age = 823;
const school = "다람쥐초등학교23";
const email = "tjwlsdnd12aver.com";
createUser({name, age, school, email });