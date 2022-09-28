function zero(operation) {
	return (operation == null) ? 0 : Math.floor(eval(`0 ${operation}`));
}
function one(operation) {
	return (operation == null) ? 1 : Math.floor(eval(`1 ${operation}`));
}
function two(operation) {
	return (operation == null) ? 2 : Math.floor(eval(`2 ${operation}`));
}
function three(operation) {
	return (operation == null) ? 3 : Math.floor(eval(`3 ${operation}`));
}
function four(operation) {
	return (operation == null) ? 4 : Math.floor(eval(`4 ${operation}`));
}
function five(operation) {
	return (operation == null) ? 5 : Math.floor(eval(`5 ${operation}`));
}
function six(operation) {
	return (operation == null) ? 6 : Math.floor(eval(`6 ${operation}`));
}

function seven(operation) {
	return (operation == null) ? 7 : Math.floor(eval(`7 ${operation}`));
}

function eight(operation) {
	return (operation == null) ? 8 : Math.floor(eval(`8 ${operation}`));
}
function nine(operation) {
	return (operation == null) ? 9 : Math.floor(eval(`9 ${operation}`));
}

function plus(num) {
	return `+ ${num}`
}
function minus(num) {
	return `- ${num}`
}
function times(num) {
	return `* ${num}`
}
function dividedBy(num) {
	return `/ ${num}`
}

console.log(seven(times(five())));    // 35
console.log(four(plus(nine())));      // 13
console.log(eight(minus(three())));   // 5
console.log(six(dividedBy(two())));   // 3
console.log(eight(dividedBy(zero())));


// console.log(seven(times(five())));
// console.log(seven());
