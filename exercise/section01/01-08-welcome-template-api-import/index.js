import { isValidEmail, getWelcomeTemplate, sendEmail } from "./email.js";  

function createUser({ name, age, school, email }) {
  const isValid = isValidEmail(email);

  if (!isValid) return;

  const welcomeTemplate = getWelcomeTemplate({ name, age, school })

  sendEmail({ name, welcomeTemplate });
}

const name = "철수23";
const age = 22;
const school = "다람쥐초등학교";
const email = 'tjwlsdnd12@naver.com';

createUser({ name, age, school, email });