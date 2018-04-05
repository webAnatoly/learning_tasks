// Стартовый файл проекта "Html Builder" по мотивам курса JavaScript: Прототипы.
import assert from 'assert';
import buildHtml from './builder/solution';

const data = ['html',[
  ['meta', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', {'class': 'container'}, [
    ['h1', {'class': 'header'}, 'html builder'],
    ['div', [
      ['span', 'span text2'],
      ['span', 'span text3'],
    ]],
  ]],
]];



const actual = buildHtml(data);
const expected = `<html><meta>
  <title>hello, hexlet!</title></meta><body>
  <h1 class="header">html builder example</h1>
  <div><span>span text2</span>
  <span>span text3</span></div></body></html>`;

// assert.equal(actual, expected);

const makeNode = name => {
  return {
      name, // name: name
      getName() {
        return this.name;
      },
      setName(newName) {
        this.name = newName;
      }
  }
};