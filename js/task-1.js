function isEnoughCapacity(products, containerSize) {
	const fruitsQt = Object.values(products);
	let totalQt = 0;
	for(qt of fruitsQt) {
		totalQt = totalQt + qt;
	}
	return totalQt <= containerSize ? true : false;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
