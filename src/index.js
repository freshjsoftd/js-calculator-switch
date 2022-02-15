// let num = 10;
// num = num + 1;
// // num++;
// console.log(num++);
// console.log(num++);
// console.log(num--);
// console.log(--num);

// console.log(2 && 10);
// console.log(0 || null || NaN);

// let year = Number(prompt('Enter a year'));

// if((year % 100 !== 0 || year % 400 === 0) && year % 4 === 0){
// console.log('This year is leap year');
// } else {
//   console.log('This year is not leap year');
// }

function checkLeapYear() {
	let year = Number(prompt('Enter a year'));
	if (isNaN(year)) {
		console.log("It's wrong year. Be careful");
	} else {
		(year % 100 !== 0 || year % 400 === 0) &&
			year % 4 === 0 &&
			console.log('This year is leap year');		
			((year % 100 !== 0 || year % 400 === 0) && year % 4 === 0) ||
			console.log('This year is not leap year');
	}
}
checkLeapYear();


