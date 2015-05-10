
function calc_mortgage(principal, rate, years, period) {
    rate = rate/period;
    return principal*(rate/(1-Math.pow(1+rate, -years*period)));
}

console.log(calc_mortgage(200000, 0.065, 30, 12));
