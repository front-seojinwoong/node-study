function isValidEmail (email) {
  if (!email) return false;
  if (!email.includes('@')) return false;

  return true;
}

function createUser({ name, age, school, email, createdAt }) {
  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@" 포함여부)
  const isValid = isValidEmail(email);
  if (!isValid) return console.log("이메일이 유효하지 않습니다");

  // 2. 가입환영 템플릿 만들기
  const welComeTemplate = `
    <html>
      <body>
        <h1>${name}님 가입을 환영합니다!</h1>
        <hr/>
        <div>이름: ${name}</div>
        <div>나이: ${age}</div>
        <div>학교: ${school}</div>
        <div>가입일: ${createdAt}</div>
      </body>
    </html>
  `

  // 3. 이메일에 가입환영 템플릿 전송하기
  console.log(`${name}님에게 다음의 메세지를 보냈습니다 ${welComeTemplate}`)

}

function getToday() {
  return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
  }).format(new Date()).replace(/\. /g, '-').replace('.', '');
}

const name = "철수";
const age = 8;
const school = "다람쥐초등학교";
const email = "a@a.com";
const createdAt = getToday();
createUser({ name, age, email, school, createdAt });

