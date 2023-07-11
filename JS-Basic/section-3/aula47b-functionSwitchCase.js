function getWeekdayName(weekDay){
    let weekDayName;

    switch (weekDay){
        case 0:
           weekDayName = 'domingo';
           return weekDayName;
        case 1:
            weekDayName = 'segunda';
            return weekDayName;
        case 2:
            weekDayName = 'terça';
            return weekDayName;
        case 3: 
            weekDayName = 'quarta';
            return weekDayName;
        case 4:
            weekDayName = 'quinta';
            return weekDayName;
        case 5:
            weekDayName = 'sexta';
            return weekDayName;
        case 6: 
            weekDayName = 'sabado';
            return weekDayName;
        default:
            weekDayName = '';
            return weekDayName;
    }
}
let data = new Date();
let weekDay = data.getDay();
let weekDaytext = getWeekdayName(weekDay);
console.log(weekDay,weekDaytext);