const toFix = (num) => {
  return num < 10 ? `0${num}` : `${num}`;
}

const genLetter = letterNumber => {
  let out = '';
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const lettersLength = letters.length;
  for (let i = 0; i < letterNumber; i++) {
    out += letters[Math.round(Math.random() * (lettersLength - 1))];
  }
  return out;
}

export const createUniqueId = () => {
  const d = new Date();
  const year = d.getFullYear().toString().split('');
  let str = `${genLetter(2)}${year[2]}${year[3]}${toFix(d.getMonth())}${genLetter(2)}${toFix(d.getDate())}${toFix(d.getHours())}${genLetter(3)}${toFix(d.getMinutes())}${toFix(d.getSeconds())}`;
  str += genLetter(3);
  return str;
}
