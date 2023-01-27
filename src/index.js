module.exports = function check(str, bracketsConfig) {
	let value = '';
	let n;
	let m = 0;
	bracketsConfig = bracketsConfig.flat().join('').split('');
	str.split('').forEach(item => {
		bracketsConfig.indexOf(item) % 2 == 0 ? (value = bracketsConfig[bracketsConfig.indexOf(item) + 1], m += 1) : (item == value || value == '') ? (value = '', m -= 1) : n = false;
	});
	return n == undefined && m == 0 ? true : false;
}
