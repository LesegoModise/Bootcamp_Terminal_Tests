export function regCheck(registrationNumber, registrationLocation) {
    return registrationNumber.endsWith(registrationLocation);
  }
  
  var isGP = regCheck('RG 45 HN GP', 'GP');
  console.log(isGP);
  
  var isEC = regCheck('LKG 679 EC', 'EC');
  console.log(isEC);
  
  var isMP = regCheck('GHT 456 MP', 'MP');
  console.log(isMP);
  
  var isL = regCheck('FGT 491 L', 'L');
  console.log(isL);
  
  var isND = regCheck('ND 123-456', 'ND');
  console.log(isND);
  
  var isCY = regCheck('CY 678-453', 'CY');
  console.log(isCY);
  
  var isCA = regCheck('CA 1234-123', 'CA');
  console.log(isCA);
  
  
  