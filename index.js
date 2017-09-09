let functionsArray = [];

module.exports.refresh = (words, numbers) => {
  functionsArray = words
    .map((el, i) => ({ name: el, time: numbers[i] }))
    .sort((a, b) => b.time - a.time);
};

module.exports.guess = (str) => {
  return functionsArray
    .filter(el => el.name.substring(0, str.length) === str)
    .slice(0,12)
    .map(el => el.name);
};