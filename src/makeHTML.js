let html = document.documentElement;
let body = document.body;
let myDiv = document.getElementById('myDiv');


// Напишите функцию, которая возвращает список нод в соответствии с запросом. 
// Запрос это список из имен тегов, в котором каждый следующий тег это тег, 
// вложенный в предыдущий. Порядок, в котором ноды возвращаются - не важен.
// https://ru.hexlet.io/challenges/js_sequences_hierarchy

const iterHtmlTree = (element, ...tagNames) => {

 
  // if(element.tagName.toLowerCase() == tagNames[0].toLowerCase()) {
  //   iterHtmlTree(element.children[i], tagNames.slice(1));
  //   console.log(element);
  // }


  if(element.children.length) {
    for (let i = 0; i < element.children.length; i++) {
      if (tagNames.length == 1 && element.tagName.toLowerCase() == tagNames[0].toLowerCase()) {
        console.log(element);
        return true;
      } 
      
      if (tagNames.length > 1 && element.tagName.toLowerCase() == tagNames[0].toLowerCase()) {
        iterHtmlTree(element.children[i], ...tagNames.slice(1));
      }

      iterHtmlTree(element.children[i], ...tagNames);
    }
  } else {
    if (tagNames.length == 1 && element.tagName.toLowerCase() == tagNames[0].toLowerCase()) {
      console.log(element);
    }
    return false;
  }
}

iterHtmlTree(html, 'ul', 'li', 'a', 'span');


