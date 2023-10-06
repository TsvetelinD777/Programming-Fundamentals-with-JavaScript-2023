function solve(pages, perHour, days){

    let totalTimetToinish = pages / perHour;
    
    let requiredHoursPerDay = totalTimetToinish / days;

    console.log(requiredHoursPerDay);

}