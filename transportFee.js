export var transportFee = function(shift) {
    if (shift === 'morning') {
      return 'R20'; 
    } 
    else if (shift === 'afternoon') {
      return 'R10';
    } 
    else {
      return 'free';
    }
  };
  
  console.log(transportFee('morning'));
  console.log(transportFee('afternoon'));
  console.log(transportFee('nightshift'));