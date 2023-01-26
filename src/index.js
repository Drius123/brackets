module.exports = function check(str, bracketsConfig) {
	let n = 0;
	let m = 0;
	let k = 0;
	let p = 0;
	str.split('').forEach(item => {
	item == '(' ? n += 1 : item == ')' ? n -= 1 : item == '|' ? m += 1 : item == '[' ? k += 1 : item == ']' ? k -= 1 : item == '{' ? p += 1 : p -= 1;
	})
	return (n == 0 && m == 0 ) && ( k == 0 && p == 0 ) ? true : false;
}
