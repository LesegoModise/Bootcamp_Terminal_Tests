var regCount1 = 'CA 182736,CY 523519,CJ 812328';
// console.log(countRegNumber(regCount1));

var regCount2 = 'CA 182736';
// console.log(countRegNumber(regCount2));

var regCount3 = 'CA 42665, AA 12 RT GP';
// console.log(countRegNumber(regCount3));

export function countRegNumber(regNumber) {
  var regCount = regNumber.split(',');
  return regCount.length;
}
