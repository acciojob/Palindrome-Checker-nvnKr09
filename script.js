// complete the given function

function palindrome(str){
	let newStr = str.toLowerCase();
	let ans = newStr.split("").reverse().join("");
	ans == newStr ? alert(true) : alert(false);
	 // alert(newStr);

}
palindrome(prompt()); 
module.exports = palindrome
