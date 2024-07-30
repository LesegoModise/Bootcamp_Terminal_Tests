export function countAllPaarl(regNum) {
    const regNumbers = regNum.split(', '); //The string is split into an array
      let count = 0; //We are initialising a counter for Paarl registration numbers that start from 0 (We start counting from 0)
     
    for (var i = 0; i < regNumbers.length; i++) { //The code is repeated for each registration number
    var regNumber = regNumbers[i].trim(); //The code is also trimmed of any whitespaces while it loops
      
    if (regNumber.startsWith('CJ')) { //We are looking for Paarl registration numbers so we need every registration number that starts with 'CJ'
    count++; //We want our Paarl registration number to start counting from the first Paarl registration number found
    }
    }
    return count; //We want our code to return the total of all Paarl registration numbers found
    }
    