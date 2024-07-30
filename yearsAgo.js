export function yearsAgo(Year) {
    const currentYear = new Date().getFullYear();
    return currentYear - Year;
   // return currentYear = (new Date().getFullYear()-Year);
  }
  
  //function yearsAgo(Year){
   // const new_year = new Date().getFullYear();
   // const diff = new_year - Year;
    //return diff;
  //}*
  
  //console.log((new Date().getFullYear() - 2000))
  console.log(yearsAgo(1976));
  console.log(yearsAgo(2000));