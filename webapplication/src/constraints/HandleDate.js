export const handleSplitDate = (dateData) =>{
    const result = dateData.split('T')[0];
    return result
}

export const handleCheckToday = (StartedDate, EndDay) =>{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    
    if(dd<10) {
        dd = '0'+dd
    } 
    
    if(mm<10) {
        mm = '0'+mm
    } 
    var d = `${yyyy}-${mm}-${dd}`
    var currentDate = new Date (d);
    var reStartedDate = new Date (StartedDate)
    var reEndDay = new Date (EndDay)
     if (currentDate >= reStartedDate && currentDate <= reEndDay){
        return 0
     }
     else if (currentDate > reEndDay){
         return -1
     }
     else if (currentDate < reStartedDate){
         return 1
     }
}

export const handleCreatedDate = (createdDate, choseDate) =>{
    var today = new Date ();
    var todayYear = createdDate.getFullYear ()
    var handledDateYear = choseDate.getFullYear ()
    return handledDateYear;
}
