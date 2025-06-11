export function iisValidJuminFn(jumin) {
  const [ jumin1, jumin2 ] = jumin.split('-');
  if (jumin1.length !== 6) return false;
  if (jumin2.length !== 7) return false;
  return true;
}

function customRegistrationNumber(jumin) {
  const isContainDash = jumin.includes('-');
  if (!isContainDash) return console.log('에러 발생!!! 형식이 올바르지 않습니다!!!');

  const isValidJumin = iisValidJuminFn(jumin);
  if (!isValidJumin) return console.log('에러 발생!!! 개수를 제대로 입력해 주세요!!!');

  const [ jumin1, jumin2 ] = jumin.split('-');
  console.log( `${jumin1}-${jumin2.charAt(0) + jumin2.slice(1).replace(/./g, '*')}`);
}

customRegistrationNumber("210510-1010101");
customRegistrationNumber("210510-1010101010101");
customRegistrationNumber("2105101010101");