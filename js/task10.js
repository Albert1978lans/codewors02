function hero(bullets, dragons) {
	return dragons * 2 <= bullets
}

console.log(hero(10, 5))
console.log(hero(7, 4))
console.log(hero(1500, 751))