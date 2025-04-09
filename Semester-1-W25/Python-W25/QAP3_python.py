# Description: Honest Harry’s Used Car Sales
# Author: Leah Murphy
# Date: Mar 2 2025

# Define required libraries
from datetime import datetime, timedelta

# Define program constants
MAX_SELLING_PRICE = 50000.00
MAX_TRADE_IN = MAX_SELLING_PRICE
PLATE_LEN = 6  # Bonus validation
PHONE_LEN = 10
LOAN_YEARS = [1, 2, 3, 4]
MONTHS = 12
FINANCE_FEE = 39.99
FIRST_PAYMENT_DELAY = 30
HST = 0.15
LISCENSE_FEE = 199.99
TRANS_FEE = 79.99

while True:
    # Grab today's date
    invoice_date = current_date = datetime.today().date()
    formatted_date = current_date.strftime("%B %d, %Y")
    first_pay_date = (datetime.today() + timedelta(days=FIRST_PAYMENT_DELAY)).date()
    formatted_first_pay_date = first_pay_date.strftime("%B %d, %Y")

    # Customer inputs
    first_name = input("Enter your first name: ").title()
    last_name = input("Enter your last name: ").title()

    phone_num = input(f"Enter your phone number ({PHONE_LEN} digits): ")
    while len(phone_num) != PHONE_LEN:
        print(f"Phone number must be {PHONE_LEN} digits.")
        phone_num = input(f"Enter your phone number ({PHONE_LEN} digits): ")

    while True:
        plate_num = input("Enter your plate number (XXX999): ").upper()

        # Bonus validation for plate number
        if len(plate_num) == PLATE_LEN:
            char_check = plate_num[:3].isalpha()
            digit_check = plate_num[-3:].isdigit()

            if char_check and digit_check:
                break
            else:
                print("Invalid format: Please enter as (XXX999).")
        else:
            print(f"Plate number must be {PLATE_LEN} characters and (XXX999) format.")

    car_year = int(input("Enter car manufacturing year: "))
    car_make = input("Enter car make: ")
    car_model = input("Enter car model: ")

    selling_price = float(input("Enter vehicle selling price: "))
    while selling_price > MAX_SELLING_PRICE:
        print(f"Selling price cannot exceed {MAX_SELLING_PRICE}.")
        selling_price = float(input("Enter vehicle selling price: "))

    sales_name = input("Enter sales person name: ")

    receipt_id = f"{first_name[0]}{last_name[0]}-{plate_num[-3:]}-{phone_num[-4:]}"

    # Bonus calculations
    total_trade_allowance = selling_price  
    price_after_trade = selling_price 
    subtotal = selling_price + LISCENSE_FEE + TRANS_FEE
    hst = subtotal * HST
    total_sales_price = subtotal + hst

    # Output + Calculations
    print("         1         2         3         4         5         6         7         8")
    print("12345678901234567890123456789012345678901234567890123456789012345678901234567890")
    print("--------------------------------------------------------------------------------")
    print(f"Honest Harry Car Sales                              Invoice Date: {formatted_date}")
    print(f"Used Car Sale and Receipt                           Receipt No: {receipt_id}")
    print("-------------------------------------------------------------------------------\n")
    print(f"  {'Sale price:':<40} ${selling_price:,.2f}")
    print(f"  {'Sold to:':<40} {'Trade Allowance:':<20} ${total_trade_allowance:,.2f}")
    print(f"  {'':<40} {'----------------------------------':<30}")
    print(f"  {first_name[0]}. {last_name:<20} {'':<15}  {'Price after Trade:':<20} ${price_after_trade:,.2f}")
    print(f"  ({phone_num[:3]}) {phone_num[3:-4]}-{phone_num[-4:]} {'':<25} {'License Fee:':<20} ${LISCENSE_FEE}")
    print(f"  {'':<40} {'Transfer Fee:':<20} ${TRANS_FEE}")
    print(f"  {'':<40} {'----------------------------------':<30}")
    print(f"  {'Car Details:':<40} {'Subtotal:':<20} ${subtotal:,.2f}")
    print(f"  {'':<40} {'HST:':<20} ${hst:,.2f}")
    print(f"  {car_year} {car_make} {car_model:<25} {'----------------------------------':<30}")
    print(f"  {'':<40} {'Total sales price:':<20} ${total_sales_price:,.2f}\n")
    print("--------------------------------------------------------------------------------\n")
    print(f"                                   Financing     Total       Monthly")
    print(f"            Years    # Payments       Fee        Price       Payment")
    print(f"          ------------------------------------------------------------           ")

    # Financing calculations
    for years in LOAN_YEARS:
        monthly_payment_num = years * MONTHS
        total_financing_fee = years * FINANCE_FEE
        total_price = total_sales_price + total_financing_fee
        monthly_payment = total_price / MONTHS
        print(f"              {years}          {monthly_payment_num}         ${total_financing_fee:,.2f}    ${total_price:,.2f}    ${monthly_payment:,.2f}")

    print(f"          ------------------------------------------------------------          ")
    print(f"     Invoice date: {formatted_date}      First payment date: {formatted_first_pay_date}")
    print("--------------------------------------------------------------------------------")
    print("                     Best used cars at the best prices!                         ")

    cont_inq = input("\nDo you want to fill out another receipt? (Y/N): ").upper()
    if cont_inq == 'N':
        break
