# Description: Write a program for the Edsel Car Rental Company to calculate the customer cost.
# Author: Leah Murphy
# Date: Jan 17 2025

# Global constants

RENT_FEE = 75
PER_KM_RATE = 0.26
INSUR_RATE = 19

# Inputs for customer info

cust_name = input("Please Enter your Name: ")
rental_days = int(input("Enter # of days rented: "))

start_odo = int(input("Start odometer reading: "))
end_odo = int(input("End odometer reading: "))

# Calculate kms travelled, as well as cost of rental fees, milage, insurance

kms_travelled = end_odo - start_odo

rental_cost = RENT_FEE * rental_days
milage_cost = PER_KM_RATE * (kms_travelled)
insur_cost = INSUR_RATE * rental_days

# Calculate winter discount, HST, and final invoice total
winter_discount = float((rental_cost * 0.1) + (milage_cost * 0.25))

total_cost = rental_cost + milage_cost + insur_cost - winter_discount
hst_cost = total_cost * 0.15
final_invoice_total = total_cost + hst_cost

# Create list for invoice statement print out

inv_statement = [f"Total km travelled: {kms_travelled}km",
                f"Rental cost: ${rental_cost}",
                f"Mileage cost: ${round(milage_cost, 2)}",
                f"Insurance cost: ${round(insur_cost, 2)}",
                f"Winter discount: ${round(winter_discount, 2)}",
                f"Total rental cost: ${round(total_cost, 2)}",
                f"HST cost: ${round(hst_cost, 2)}",
                f"Final invoice total: ${round(final_invoice_total, 2)}"]

# Print invoice statement

for line in inv_statement:
    print(line)
