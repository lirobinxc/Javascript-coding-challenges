function convert(color) {

	// Detect if color is HEX or RGB
	// Hex must have prefix # followed by 6 digits
	// RGB must have prefix '(_, _, _)'
	let isHex;

	if (color[0] === '#') {
		isHex = true;
		console.log('HEX detected');
	} else {
		console.log('RGB detected');
	}

	// Convert HEX -> RGB
	if (isHex) {
		let r = parseInt(`0x${color[1]}${color[2]}`);
		let g = parseInt(`0x${color[3]}${color[4]}`);
		let b = parseInt(`0x${color[5]}${color[6]}`);
		return `rgb(${r}, ${g}, ${b})`;
	} else {
		const rgb = color.replace(/[()]/g, '');
		let rgbArr = rgb.split(', ');
		let hex1 = Number(rgbArr[0]).toString(16);
		let hex2 = Number(rgbArr[1]).toString(16);
		let hex3 = Number(rgbArr[2]).toString(16);
		return `#${hex1}${hex2}${hex3}`
	}
}

console.log(convert('#83d79f'));
console.log(convert('(131, 215, 159)'));
