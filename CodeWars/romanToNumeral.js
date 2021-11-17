function solution(roman) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  const splitted = roman.split('');
  let out = 0;
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i] === 'I' && (splitted[i + 1] === 'V' || splitted[i + 1] === 'X')) {
      out -= symbols[splitted[i]];
    } else out += symbols[splitted[i]];
  }
  return out;
}


console.log(solution('XXI'));
console.log(solution('I'));
console.log(solution('IV'));
console.log(solution('MMVIII'));
console.log(solution('MDCLXVI'));
