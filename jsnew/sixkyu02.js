// Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?».
// Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!

// Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:

// name + " plays banjo" 
// name + " does not play banjo"

function areYouPlayingBanjo(name) {

	return (name[0] == 'R' || name[0] == 'r') ? name + ' plays banjo' : name + ' does not play banjo'

	// return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

console.log(areYouPlayingBanjo("Adam"));  //  "Adam does not play banjo"
console.log(areYouPlayingBanjo("Ringo")); //  "Ringo plays banjo"

