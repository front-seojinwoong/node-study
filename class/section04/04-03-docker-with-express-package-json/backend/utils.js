import { isValidEmail } from "./email";

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

