var count = 0, y = 1901, years = 100;
for (var m=0; m < 12*years; m++)
    if (new Date(y,m,1).getDay() == 0) count ++;

document.write ('Project Euler 19 Solution = ' + count + ' Sundays');