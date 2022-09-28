// Даны два целых числа a и b, которые могут быть положительными или отрицательными, найдите сумму всех целых чисел между ними и включая их и верните ее. Если два числа равны, верните a или b.

// Примечание: a и b не упорядочены!

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)

function getSum(a, b) {
	let sum = 0;
	if (a == b) {
		return a
	} else if (a < b) {
		let i = a
		while (i <= b) {
			sum += i
			i++
		}
		return sum
	}
	else {
		let i = b
		while (i <= a) {
			sum += i
			i++
		}
		return sum
	}
}

console.log(getSum(0, -1));   // -1
console.log(getSum(0, 1));     // 1
