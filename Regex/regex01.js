
// ! Метод 'test'

// console.log(/Code/.test("freeCodeCamp"))              // true


// ! оператор '|' - "или"  ищет одно из слов из шаблона

// console.log(/free|Code|Camp/.test('gfhfh free khkkl')) // true


// ! флаг /.../i  игнорирует регистр

// console.log(/freecodecamp/i.test("freeCodeCamp"));       // true


// ! Метод 'match' - ищет и возвращает индекс первого попавшегося слова из шаблона

// console.log("Extract the word 'coding' from this string.".match(/coding/))  // ['coding', index: 18, input: "Extract the word 'coding' from this string.", groups: undefined]

// ! флаг /../g - ищет все вхождения шаблона в строку и возвращает массив

// console.log("Twinkle, twinkle, little star".match(/twinkle/gi));       // (2) ['Twinkle', 'twinkle']
// console.log("Twinkle, twinkle, little star".match(/twinkle/g));       // ['twinkle']

// ! '.' - подстановочный знак точка, означает что вместо точки может быть любой символ (/.un/)
// console.log(/.un/.test("Let's have fun with regular expressions!"));               // true
// console.log("Let's have fun with regular expressions!".match(/.un/))   //['fun', index: 11, input: "Let's have fun with regular expressions!", groups: undefined]


// ! Найти все гласные в предложении используя классы в шаблоне
// console.log("Beware of bugs in the above code.".match(/[aeiou]/gi))
//(12) ['e', 'a', 'e', 'o', 'u', 'i', 'e', 'a', 'o', 'e', 'o', 'e']


// ! /[a-z]/gi чтобы не перечислять каждую букву для сопоставления можно задать диапазон букв из алфавита
// console.log("The quick brown fox jumps over the lazy dog.".match(/[a-d]/gi));  // (4) ['c', 'b', 'a', 'd']
console.log("5 -3 4 0 1 8 9".match(/[0-5]/gi));    // (2) ['4', '0']

// ! [h-s2-6]/gi комбинация диапазонов сопоставления
// console.log("Blueberry 3.141592653s are delicious.".match(/[h-s2-6]/gi))  //(17) ['l', 'r', 'r', '3', '4', '5', '2', '6', '5', '3', 's', 'r', 'l', 'i', 'i', 'o', 's']