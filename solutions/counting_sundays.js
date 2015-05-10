
var days = ["Tue","Wed","Thu","Fri","Sat","Sun","Mon"];
var days_from_1901_to_2000 = 99*365+25+364;
var sundays = 0;
for(var i =0 ; i <= days_from_1901_to_2000; i++) {
    if(i % 7 === 5) {
        sundays++;
    }
}
console.log(sundays);
