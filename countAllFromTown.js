export function allFromTown(regNum, Location) { // We are including the registration number and location because we will have to filter out the different towns using the location
    var regNumbers = regNum.split(',');// If this ', ' is passed, it would be incorrect, it shouldn't have a space in it
    //console.log(regNumbers); //This will help you see your list so that it returns correctly.
    const containerToPush = []; //We are creating a new container to store the new list of matching registration numbers
    for (var i = 0; i < regNumbers.length; i++) {
      var regNumbers2 = regNumbers[i].trim(); // Remove any whitespaces with trim
      
      if (regNumbers2.startsWith(Location)) {
        containerToPush.push(regNumbers2);
      }
    }
    return containerToPush;
  }
  
  
//   var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
//   var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
  
  