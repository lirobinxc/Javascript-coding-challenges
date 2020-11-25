function answer (arr, sum) {
	let sumArr = [];
	for (item1 of arr) {
		for (item2 of arr) {
			if (item1 + item2 === sum) {
				console.log('Match found');
				sumArr.push([item1, item2]);
			} else {
				continue;
			}
		}
	}
	return sumArr;
}

// Test
console.log(answer([1, 2, 3, 4], 5));