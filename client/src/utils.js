export function generateRandomId(len) {
  const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';

  let res = '';
  while (len--) {
    const random = Math.random();
    res += chars.charAt(random * chars.length);
  }

  return res;
}