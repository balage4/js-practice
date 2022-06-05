function comp(array1, array2) {

  let out = true;

  if (array1.length !== array2.length) return false;

  const copy2 = [...array2];

  for (let i = 0; i < array1.length; i++) {
    const exponent = array1[i] * array1[i];
    let isExist = false;

    for (let j = 0; j < copy2.length; j++) {
      if (exponent === copy2[j]) {
        isExist = true;
        copy2.splice(j, 1);
        break;
      }
    }
    if (!isExist) out = false;
  }
  return out;
}

const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];

console.log(comp(a1, a2));

