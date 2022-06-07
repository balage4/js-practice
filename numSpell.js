const getSpells = () => ({
  singles: {
    0: '',
    1: 'egy',
    2: 'kettő',
    3: 'három',
    4: 'négy',
    5: 'öt',
    6: 'hat',
    7: 'hét',
    8: 'nyolc',
    9: 'kilenc',
  },
  endTens: {
    0: '',
    1: 'tíz',
    2: 'húsz',
    3: 'harminc',
    4: 'negyven',
    5: 'ötven',
    6: 'hatvan',
    7: 'hetven',
    8: 'nyolcvan',
    9: 'kilencven',
  },
  middleTens: {
    0: '',
    1: 'tizen',
    2: 'huszon',
    3: 'harminc',
    4: 'negyven',
    5: 'ötven',
    6: 'hatvan',
    7: 'hetven',
    8: 'nyolcvan',
    9: 'kilencven',
  },
  hundreds: {
    0: '',
    1: 'egyszáz',
    2: 'kettőszáz',
    3: 'háromszáz',
    4: 'négyszáz',
    5: 'ötszáz',
    6: 'hatszáz',
    7: 'hétszáz',
    8: 'nyolcszáz',
    9: 'kilencszáz',
  },
});

function numSpell(number) {
  let out = '';
  const spells = getSpells();
  let numString = number.toString();
  if (numString.length > 9) return 'Túl nagy szám!';

  let i = 1;
  let before = 0;
  while (numString.length > 0) {
    const e = parseInt(numString.charAt(numString.length - 1), 10);
    if (i === 7) out = `millió-${out}`;
    if (i === 4) out = `ezer-${out}`;
    if (i % 3 === 1) out = spells.singles[e] + out;
    if (i % 3 === 2) {
      if (before === 0) out = spells.endTens[e] + out;
      else out = spells.middleTens[e] + out;
    }
    if (i % 3 === 0) out = spells.hundreds[e] + out;
    i++;
    before = e;
    numString = numString.substring(0, numString.length - 1);
  }
  if (number % 1000000 === 0) out = out.substring(0, out.length - 5);
  if (out.indexOf('-ezer-') > -1) {
    out = out.substring(0, out.indexOf('-ezer-') + 1) + out.substring(out.indexOf('-ezer-') + 6, out.length);
  }
  if (out.charAt(out.length - 1) === '-') out = out.substring(0, out.length - 1);

  return out;
}
console.log(numSpell(13447));
