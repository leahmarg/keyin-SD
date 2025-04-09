# Description: The One Stop Insurance Company
# Author: Leah Murphy
# Date: Mar 28 2025

# Define required libraries
from datetime import datetime, timedelta
from dateutil.relativedelta import relativedelta
import random

# Global constants

POLICY_NUM_START = 1944
BASIC_PREM = 869.00
ADD_CAR_DISCOUNT = 0.25
LIABILITY_COST = 130.00
GLASS_COST = 86.00
LOAN_COST = 58.00
HST_RATE = 0.15
PROCESS_FEE = 39.99
FIRST_PAYMENT_DELAY = 20
MONTHLY_PAY_LEN = 8

# Calculations

def calculations(cars_insured):
    
    insurance_prem = BASIC_PREM * cars_insured - (ADD_CAR_DISCOUNT * (cars_insured - 1))
    liability = LIABILITY_COST * cars_insured
    if liability > 1000:
        liability = 1000
    glass = GLASS_COST * cars_insured
    loaner = LOAN_COST * cars_insured

    extra_costs = liability + glass + loaner

    total_insurance_prem = insurance_prem + extra_costs

    hst = HST_RATE * total_insurance_prem

    final_cost = total_insurance_prem + hst

    return final_cost

def payment_plans(final_cost, down_pay_amount, pay_plan, pay_plan_opt):
    monthly_cost = 0
    monthly_payment = False
    if pay_plan == pay_plan_opt[1]:
        monthly_cost = (final_cost + PROCESS_FEE) / MONTHLY_PAY_LEN
        monthly_payment =True

    if pay_plan == pay_plan_opt[2]:
        monthly_cost = ((final_cost + PROCESS_FEE) - down_pay_amount) / MONTHLY_PAY_LEN
        monthly_payment = True

    return monthly_cost, monthly_payment

def get_date():
    invoice_date = current_date = datetime.today().date()
    date_format = "%Y-%m-%d"
    first_pay_date = (datetime.today() + timedelta(days=FIRST_PAYMENT_DELAY)).date()
    
    first_next_month = invoice_date.replace(day=1) + relativedelta(months=1)

    next_month_check = (first_next_month - invoice_date).days
    
    if next_month_check > 20:
        first_pay_date = first_next_month
    
    formatted_date = current_date.strftime(date_format)
    formatted_first_pay_date = first_pay_date.strftime(date_format)

    return formatted_date, formatted_first_pay_date

def __main__():

    claims_list = []

    while True:
        first_name = input("Please enter your first name: ").title()
        last_name = input("Please enter your last name: ").title()
        street_add = input("Street address: ")
        city = input("City: ").title()
        
        while True:
            province = input("Province: ").upper()
            province_list = ["AB", "BC","MB", "NB", "NL", "NS", "ON", "PE", "QC", "SK", "NT", "NU", "YT"]
            if province not in province_list:
                print("Invalid input, please enter province abbreviation (XX): ")
            else:
                break
    
        postal_code = input("Postal Code (XXX999): ")
        phone_num = input("Phone Number:")

        cars_insured = int(input("Enter the number of cars being insured:"))
        extra_liability = input("Would you like extra liability? (Y/N)? ").upper()
        glass_cov = input("Glass coverage (Y/N)? ").upper()
        loaner_car = input("Would you like a loaner car (Y/N)? ").upper()
    
        while True:
            pay_plan = input("Would you like to pay in full, monthly or down payment: ").title()
            pay_plan_opt = ["Full", "Monthly", "Down Payment"]
        
            if pay_plan not in pay_plan_opt:
                print("Invlaid input: Please enter input as 'Full', 'Monthly' or 'Down Payment'.")
            else:
                if pay_plan == pay_plan_opt[2]:
                    down_pay_amount = float(input("Enter down payment amount: "))
                else:
                    down_pay_amount = 0
                break

        final_cost = calculations(cars_insured)
        formatted_date, formatted_first_pay_date = get_date()
        monthly_cost = payment_plans(final_cost, down_pay_amount, pay_plan, pay_plan_opt)
        monthly_cost, monthly_payment = payment_plans(final_cost, down_pay_amount, pay_plan, pay_plan_opt)

        claim_num = str(POLICY_NUM_START)+ str(random.randint(1000,9999))

        claims_list.append((claim_num, formatted_date, final_cost))

        # Display Claims
        if claims_list:
            print("\nClaims:")
            print("-" * 40)
            print(f"{'Claim #':<12}{'Date':<15}{'Amount':>10}")
            print("-" * 40)
            for claim in claims_list:
                print(f"{claim[0]:<12}{claim[1]:<15}${claim[2]:>9,.2f}")

        # Print Receipt
        print("\nReceipt")
        print("----------------------------------------------------")
        print(f"Client Name: {first_name} {last_name}")
        print(f"Address: {street_add}, {city}, {province}, {postal_code}")
        print(f"Phone: {phone_num}")
        print(f"Number of Cars: {cars_insured}")
        print(f"Total Cost: ${final_cost:,.2f}")
        if monthly_payment == True:
            print(f"Monthly Payment: ${monthly_cost:,.2f}")
        print(f"First Payment Date: {formatted_first_pay_date}")
        print("\n")    

        cont_prompt = input("Do you want to process another claim? (Y/N): ").upper()
        if cont_prompt != 'Y':
            break

__main__()
