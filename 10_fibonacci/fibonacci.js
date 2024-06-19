const fibonacci = function (num) {
	if (typeof num != "number") {
		parseInt(num);
	}
	if (num == 0) {
		return 1;
	} else if (num < 0) {
		return "OOPS!";
	}
	let prevNum = 0;
	let nextNum = 1;
	let numIndex = 2;
	for (numIndex; numIndex != num; numIndex++) {
		let current = prevNum + nextNum;
		prevNum = nextNum;
		nextNum = current;
	}
	return nextNum;
};

// Do not edit below this line
module.exports = fibonacci;
