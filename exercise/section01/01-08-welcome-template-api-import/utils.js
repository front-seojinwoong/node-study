// utils.js

export function getToday() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = today.getMonth() + 1;
  const dd = today.getDate();

  return `${yyyy}-${mm}-${dd}`
}