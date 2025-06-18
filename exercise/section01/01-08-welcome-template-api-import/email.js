import { getToday } from "./utils.js";

// email.js
export function isValidEmail (email) {
  if (!email) return false;
  if (!email.includes('@')) return false;

  return true;
}

export function getWelcomeTemplate({ name, age, school }) {
  const welcomeTemplate = `
    <html>
      <body>
        <h1>${name}님 가입을 환영합니다!</h1>
        <hr/>
        <div>이름: ${name}</div>
        <div>나이: ${age}</div>
        <div>학교: ${school}</div>
        <div>가입일: ${getToday()}</div>
      </body>
    </html>
  `

  return welcomeTemplate;
}

export function sendEmail({name, welcomeTemplate}) {
  console.log(`${name}님에게 다음의 메세지를 보냈습니다 ${welcomeTemplate}`)
}