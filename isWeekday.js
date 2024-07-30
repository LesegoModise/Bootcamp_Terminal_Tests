export function isWeekday(dayName) {
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    return weekDays.includes(dayName);
  }
  
  console.log(isWeekday('Sunday'));
  console.log(isWeekday('Monday'));
  console.log(isWeekday('Tuesday'));
  console.log(isWeekday('Wednesday'));
  console.log(isWeekday('Thursday'));
  console.log(isWeekday('Friday'));
  console.log(isWeekday('Saturday'));