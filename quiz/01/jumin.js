export function iisValidJuminFn(jumin) {
  const [ jumin1, jumin2 ] = jumin.split('-');
  if (jumin1.length !== 6) return false;
  if (jumin2.length !== 7) return false;
  return true;
}