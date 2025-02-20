# Description: 
# Author: Leah Murphy
# Date(s): Feb 2, 2025


# Define program constants

EVEN_SITE = 80
ODD_SITE = 120
ALT_MEMBER_FEE = 5
CLEAN_FEE = 50
VID_FEE = 35

STANDARD_DUES = 75
EXEC_DUES = 150

PROCESSING_FEE = 59.99

HST = 0.15
CANCEL_RATE = 0.6

 
# User inputs

date = input("Enter the current date: (YYYY-MM-DD): ")
site_num = int(input("Enter site number: "))
member_name = input("Enter your name: ")
street_add = input("Enter street address: ")
city = input("Enter city name: ")
province = input("Enter province (XX): " )
post_code = input("Enter postal code: ")
home_num = input("Enter home phone number: ")
cell_num = input("Enter cellphone number: ")
member_inq = input("Are you a standard or exclusive member? (Type S for standard, E for exclusive): ").upper()
alt_members = int(input("Enter number of alternative members: "))
site_cleaning = input(f"Would you like a weekly site cleaning for ${CLEAN_FEE} per week? (Y/N): ").upper()
video_surv = input(f"Would you like video surveillance for ${VID_FEE} per week? (Y/N): ").upper()

# if statements
dues = 0
alt_fees = 0
clean_choice = False
video_choice = False

if member_inq == "S":
    dues = STANDARD_DUES
    member_type = "Standard"
else:
    dues = EXEC_DUES
    member_type = "Executive"

if site_cleaning == "Y":
    clean_choice = True
    alt_fees += CLEAN_FEE

if video_surv == "Y":
    video_choice = True
    alt_fees += VID_FEE

if site_num % 2 != 0:
    site_charge = ODD_SITE
else: 
    site_charge = EVEN_SITE

# Fee calculations

alt_fees = alt_fees + (alt_members * ALT_MEMBER_FEE)
subtotal = site_charge + alt_fees
hst_charge = subtotal * HST

monthly_charge = subtotal + hst_charge
total_monthly_fees = monthly_charge + dues
total_yearly_fees = total_monthly_fees * 12
monthly_payment = (total_yearly_fees + 59.99)/12
cancel_fee = (site_charge * 12) * CANCEL_RATE


# Reciept printing

print("\n")
print("St. John's Marina & Yacht Club".center(50))
print("Yearly Member Receipt".center(50))
print("----------------------------------------------------")
print("\nClient Name and Address:")
print(f"\n{member_name}\n{street_add}\n{city}, {province} {post_code}")
print(f"\nPhone: {home_num} (H)\n       {cell_num} (C)")
print(f"\nSite #: {site_num}  Member type: {member_type}")
print(f"\nAlternative members:                        {alt_members}")
print(f"Weekly site cleaning:                       {site_cleaning}")
print(f"Video surveillance:                         {video_surv}")
print(f"\nSite charges:                              ${site_charge:,.2f}")
print(f"Extra charges:                             ${alt_fees:,.2f}")
print("                                      --------------")
print(f"Subtotal:                                  ${subtotal:,.2f}")
print(f"Sales tax (HST):                           ${hst_charge:,.2f}")
print("                                      --------------")
print(f"Total monthly charges:                     ${monthly_charge:,.2f}")
print(f"Monthly dues:                              ${dues:,.2f}")
print("                                      --------------")
print(f"Total monthly fees:                        ${total_monthly_fees:,.2f}")
print(f"Total yearly fees:                         ${total_yearly_fees:,.2f}")
print("                                      --------------")
print(f"Monthly payment:                           ${monthly_payment:,.2f}")
print("----------------------------------------------------")
print(f"Issued: {date}")
print("HST reg No: 549-33-5849-4720-9885")
print(f"\nCancellation fee:                         ${cancel_fee:,.2f}")
