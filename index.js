/*
  Node v6.11.3
  Используем все блага es6 так как нода 6 версии поддерживает
  классные штуки из нового стандарта.

  Оказалось все просто,
  сначала "зипаем" название функций и даты,
  затем сортируем по дате обновления.
  Никакие алгоритмы сортировки придумывать не нужно, так как
  стандартный сорт реализован "быстрой сортировкой",
  а он достаточно эффективен с большими массивами!

  Можете посмотреть мои тесты: https://github.com/alexeyShumakov/simple-ide-tools/blob/master/index.test.js
*/
let functionsArray = [];

module.exports.refresh = (words, numbers) => {
  functionsArray = words
    .map((el, i) => ({ name: el, time: numbers[i] }))
    .sort((a, b) => b.time - a.time);
};

/*
  Изи.
*/
module.exports.guess = (str) => {
  return functionsArray
    .filter(el => el.name.substring(0, str.length) === str)
    .slice(0,12)
    .map(el => el.name);
};