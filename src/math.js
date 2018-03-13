// Задача 10 
// Программист, который работал на проекте до вас, разбросал все функции, связанные с математическими вычислениями по разным файлам 
// с именами numbers1, numbers2 и numbers3. Причем имена функций тоже сделал странными: все функции в файле numbers2 заканчиваются 
// на двойку, например, sum2.

// Вы быстро поняли, что это неудобно и нужно создать единый интерфейс для доступа к ним (говорят "фасад"). 
// Для этого необходимо импортировать все функции из всех перечисленных модулей в новый модуль в файле math.js.

// math.js
// Задача состоит в том, чтобы файл math.js импортировал в себя все функции из трех описанных выше файлов и выставил их наружу под 
// следующими именами: pow, sum, sub, sqrt и multi. А так же экспортировал функцию cube по умолчанию.

// В этом задании специально не сказано, где какая функция и под каким именем лежит. А так же не сказано, как они все экспортируются. 
// Цель этого задания в том, чтобы вы хорошо разобрались с системой модулей, что очень упростит вашу жизнь в дальнейшем. 
// Огромная просьба не подсматривать решение и подумать самостоятельно, а в случае чего задать вопрос в комьюнити.

// Не забудьте проанализировать файл в с тестами, чтобы понять, как используется модуль math.js.


import * as numbers1 from './numbers/numbers1.js';
import * as numbers2 from './numbers/numbers2.js';
import * as numbers3 from './numbers/numbers3.js';

const pow = numbers3.pow3; 
const sum = numbers1.sum1; 
const sub = numbers1.default; // если функция экспортируется через default, то в объекте она тут доступна под ключем default 
const sqrt = numbers3.sqrt3; 
const multi = numbers2.multi2;
const cube = numbers2.cube2; 

export { pow, sum, sub, sqrt, multi, cube as default}

// пробное решение. Когда получу подписку посмотрю тесты. 