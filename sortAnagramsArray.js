const isAnagram = (string1, string2) => {
  let objectChars = {};

  if (string1.length !== string2.length) return false;

  for (let char of string1) {
    objectChars[char] = (objectChars[char] || 0) + 1;
  }

  for (let char of string2) {
    if (!objectChars[char]) return false;
    objectChars[char]--;
  }

  return true;
};

const sortAnagramsArray = (array) => {
  if (!array.every((value) => typeof value === 'string')) {
    return console.log('Is require only array of strings');
  }

  let arrayClone = [...array];
  let arrayAnagrams = [];
  let arrayNotAnagrams = [];

  while (arrayClone.length !== 0) {
    let arrayTemp = [arrayClone.shift()];

    for (let pos = 0; pos < arrayClone.length; pos += 1) {
      if (isAnagram(arrayTemp[0], arrayClone[pos])) {
        arrayTemp.push(arrayClone[pos]);
        arrayClone.splice(pos, 1);
      }
    }

    if (arrayTemp.length > 1) {
      arrayAnagrams = [...arrayAnagrams, ...arrayTemp.sort()];
    } else {
      arrayNotAnagrams = [...arrayNotAnagrams, ...arrayTemp];
    }

    arrayTemp = [];
  }

  console.log(arrayAnagrams);
  console.log(arrayNotAnagrams.sort());
};

module.exports = sortAnagramsArray;
