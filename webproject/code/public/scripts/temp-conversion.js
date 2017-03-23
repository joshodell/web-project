
function tempConv(degFahr) {
	var degCent = 5 / 9 * (degFahr - 32);
	return degCent;
}

var degFahr = [212, 32, -459.15];
var degCent = [];
var loopCounter;

for (loopCounter = 0; loopCounter <= 2; loopCounter++) {
	degCent[loopCounter] = tempConv(degFahr[loopCounter]);
} 

for (loopCounter = 2; loopCounter >= 0; loopCounter--) {
	document.write('Value ' + loopCounter + ' in F ' + degFahr[loopCounter] + '<br>' );
}

for (loopCounter = 2; loopCounter >= 0; loopCounter--) {
	document.write('Value ' + loopCounter + ' in C ' + degCent[loopCounter] + '<br>');
}