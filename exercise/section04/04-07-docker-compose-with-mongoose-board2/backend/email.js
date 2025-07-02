import nodemailer from 'nodemailer';

export function isValidEmail (email) {
  if (!email) return false;
  if (!email.includes('@')) return false;

  return true;
}

function getToday() {
  return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
  }).format(new Date()).replace(/\. /g, '-').replace('.', '');
}

export function getWelcomeTemplate({ name, age, school, email }) {

  const createdAt = getToday();

  // 2. 가입환영 템플릿 만들기
  const welComeTemplate = `
    <html>
      <body>
        <div style="display: flex; justify-content: center;">
          <div style="width: 500px;">
            <h1>${name}님 가입을 환영합니다!</h1>
            <hr/>
            <div style="color: red;">이름: ${name}</div>
            <div>나이: ${age}</div>
            <div>학교: ${school}</div>
            <div>가입일: ${createdAt}</div>
          </div>
        </div>
      </body>
    </html>
  `;

  return welComeTemplate;
}

export async function sendTemplateToEmail(email, myTemplate){
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tjwlsdnd12@gmail.com',
      pass: "oczy ugep sntf lmze"
    }
  });

  const res = await transporter.sendMail({
    from: "wssksms@naver.com",
    to: email,
    subject: "가입을 축하합니다(테스트)",
    html: myTemplate
  });

  console.log(res);
}