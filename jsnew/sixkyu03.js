// Нам нужна функция, которая может преобразовать строку в число. Какие способы достижения этого вы знаете?

// Примечание. Не беспокойтесь, все входные данные будут строками, а каждая строка является абсолютно допустимым представлением целого числа.

// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

const stringToNumber = function (str) {
	// put your code here
	// return parseInt(str)

	// return Number(str)
	return +str
}

console.log(stringToNumber("1234"));   // 1234
