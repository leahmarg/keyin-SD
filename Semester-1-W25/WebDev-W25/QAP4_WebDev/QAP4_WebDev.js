// Description: St. John's Marina & Yacht Club... but in JavaScript
// Author: Leah Murphy
// Date: Mar 28 2025


// Define program constants

const evenSite = 80.00;
const oddSite = 120.00;
const altMemberFee = 5.00;
const cleanFee = 50.00;
const vidFee = 35.00;

const standardDues = 75.00;
const execDues = 150.00;

const processingFee = 59.99;

const hst = 0.15;
const cancelRate = 0.6;

 
// User inputs
const prompt = require("prompt-sync")();

let date = prompt("Enter the current date (YYYY-MM-DD): ");
let siteNum = Number(prompt("Enter site number: "));
let memberName = prompt("Enter your name: ");
let streetAdd = prompt("Enter street address: ");
let city = prompt("Enter city name: ");
let province = prompt("Enter province (XX): ");
let postCode = prompt("Enter postal code: ");
let homeNum = prompt("Enter home phone number: ");
let cellNum = prompt("Enter cellphone number: ");
let memberInq = prompt("Are you a standard or executive member? (Type S for standard, E for executive): ").toUpperCase();
let altMembers = parseInt(prompt("Enter number of alternative members: "));
let siteCleaning = prompt(`Would you like a weekly site cleaning for $${cleanFee} per week? (Y/N): `).toUpperCase();
let videoSurv = prompt(`Would you like video surveillance for $${vidFee} per week? (Y/N): `).toUpperCase();

// if statements

let dues = 0;
let altFees = 0;

if (memberInq === "S") {
    dues = standardDues;
    memberType = "Standard";
} else {
    dues = execDues;
    memberType = "Executive";
}

if (siteCleaning === "Y") {
    altFees += cleanFee;
}

if (videoSurv === "Y") {
    altFees += vidFee;
}
if (siteNum % 2 != 0) {
    siteCharge = oddSite;
} else {
    siteCharge = evenSite;
}

//Fee Calcualtions

altFees += altMembers * altMemberFee;
let subtotal = siteCharge + altFees;
let hstCharge = subtotal * hst;
let monthlyCharge = subtotal + hstCharge;
let totalMonthlyFees = monthlyCharge + dues;
let totalYearlyFees = totalMonthlyFees * 12;
let monthlyPayment = (totalYearlyFees + processingFee) / 12;
let cancelFee = (siteCharge * 12) * cancelRate;

//Receipt printing

console.log("\n");
console.log("St. John's Marina & Yacht Club".padStart(25 + 12));
console.log("Yearly Member Receipt".padStart(25 + 8));
console.log("----------------------------------------------------");

console.log("\nClient Name and Address:");
console.log(`${memberName}\n${streetAdd}\n${city}, ${province} ${postCode}`);
console.log(`\nPhone: ${homeNum} (H)\n       ${cellNum} (C)`);
console.log(`\nSite #: ${siteNum}  Member type: ${memberType}`);
console.log(`\nAlternative members:                        ${altMembers}`);
console.log(`Weekly site cleaning:                       ${siteCleaning}`);
console.log(`Video surveillance:                         ${videoSurv}`);
console.log(`\nSite charges:                              $${siteCharge.toFixed(2)}`);
console.log(`Extra charges:                             $${altFees.toFixed(2)}`);
console.log("                                      --------------");
console.log(`Subtotal:                                  $${subtotal.toFixed(2)}`);
console.log(`Sales tax (HST):                           $${hstCharge.toFixed(2)}`);
console.log("                                      --------------");
console.log(`Total monthly charges:                     $${monthlyCharge.toFixed(2)}`);
console.log(`Monthly dues:                              $${dues.toFixed(2)}`);
console.log("                                      --------------");
console.log(`Total monthly fees:                        $${totalMonthlyFees.toFixed(2)}`);
console.log(`Total yearly fees:                         $${totalYearlyFees.toFixed(2)}`);
console.log("                                      --------------");
console.log(`Monthly payment:                           $${monthlyPayment.toFixed(2)}`);
console.log("----------------------------------------------------");
console.log(`Issued: ${date}`);
console.log("HST reg No: 549-33-5849-4720-9885");
console.log(`\nCancellation fee:                         $${cancelFee.toFixed(2)}`);
