const ideTools = require('./index');

function setup(count = 10, word = 'hello') {
  const words = [];
  const numbers = [];
  for(let i = 0; i <= count; i++) {
    words.push(word + i);
    numbers.push(1504964076225 + i);
  }
  return { words, numbers };
}

test('simple test', () => {
  let words = ['helloworld', 'world', 'hellscream'];
  let numbers = [1, 2, 3];

  ideTools.refresh(words, numbers);
  expect(ideTools.guess('he')).toEqual(['hellscream', 'helloworld']);
  expect(ideTools.guess('world')).toEqual(['world']);
});

test('empty', () => {
  const { words, numbers } = setup(0, '');
  ideTools.refresh(words, numbers);
  expect(ideTools.guess('hello')).toEqual([]);
});

test('limit count', () => {
  const { words, numbers } = setup(100, 'str');
  ideTools.refresh(words, numbers);
  expect(ideTools.guess('str').length).toEqual(12);
});

test('big array', () => {
  const { words, numbers } = setup(100000, 'superlongstring123456789012345678901234455667788');
  ideTools.refresh(words, numbers);
  const expectedArray =
  ["superlongstring123456789012345678901234455667788100000",
   "superlongstring12345678901234567890123445566778899999",
   "superlongstring12345678901234567890123445566778899998",
   "superlongstring12345678901234567890123445566778899997",
   "superlongstring12345678901234567890123445566778899996",
   "superlongstring12345678901234567890123445566778899995",
   "superlongstring12345678901234567890123445566778899994",
   "superlongstring12345678901234567890123445566778899993",
   "superlongstring12345678901234567890123445566778899992",
   "superlongstring12345678901234567890123445566778899991",
   "superlongstring12345678901234567890123445566778899990",
   "superlongstring12345678901234567890123445566778899989"];
    expect(ideTools.guess('super')).toEqual(expectedArray);
});
