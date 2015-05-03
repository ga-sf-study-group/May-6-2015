print "How much is the mortgage for? : "
loan = gets.strip.to_f

print "\nHow many months? : "
months = gets.strip.to_f
print "\nWhat annual interest rate? (%) : "
rate = gets.strip.to_f
monthly_rate = (rate / 12) / 100

payment = loan * (monthly_rate * (( 1 + monthly_rate) ** months)) / ((( 1 + monthly_rate) ** months) - 1)

printf("\nYour monthly payment is: $%.3f\n", payment)