/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(number){
	var sum=0;
	var result=Math.pow(2,number).toString().split('');
	console.log(result)
	for (var i = 0; i < result.length; i++) {
		sum+=parseInt(result[i]);
	}
	console.log(sum)
}
