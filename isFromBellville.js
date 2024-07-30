export function isFromBellville(registrationNumber) {
  return registrationNumber.startsWith('CY');
}

// console.log(isFromBellville('CY 123'));
// console.log(isFromBellville('CJ 123'));