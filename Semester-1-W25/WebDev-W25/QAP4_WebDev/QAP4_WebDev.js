// Description: St. John's Marina & Yacht Club... but in JavaScript
// Author: Leah Murphy
// Date: Mar 28 2025


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("membershipForm").addEventListener("submit", function (e) {
      e.preventDefault(); //  Prevents the form from reloading the page
  
      // Grab inputs
      const date = document.getElementById("date").value;
      const siteNum = Number(document.getElementById("siteNum").value);
      const memberName = document.getElementById("memberName").value;
      const streetAdd = document.getElementById("streetAdd").value;
      const city = document.getElementById("city").value;
      const province = document.getElementById("province").value;
      const postCode = document.getElementById("postCode").value;
      const homeNum = document.getElementById("homeNum").value;
      const cellNum = document.getElementById("cellNum").value;
      const memberInq = document.querySelector('input[name="memberType"]:checked')?.value;
      const altMembers = parseInt(document.getElementById("altMembers").value);
      const siteCleaning = document.querySelector('input[name="siteCleaning"]:checked')?.value;
      const videoSurv = document.querySelector('input[name="videoSurv"]:checked')?.value;
  
      // Now the logic from your original script here...
      const evenSite = 80.0;
      const oddSite = 120.0;
      const altMemberFee = 5.0;
      const cleanFee = 50.0;
      const vidFee = 35.0;
      const standardDues = 75.0;
      const execDues = 150.0;
      const processingFee = 59.99;
      const hst = 0.15;
      const cancelRate = 0.6;
  
      let dues = 0;
      let altFees = 0;
      let memberType = "";
  
      if (memberInq === "S") {
        dues = standardDues;
        memberType = "Standard";
      } else {
        dues = execDues;
        memberType = "Executive";
      }
  
      if (siteCleaning === "Yes") {
        altFees += cleanFee;
      }
  
      if (videoSurv === "Yes") {
        altFees += vidFee;
      }
  
      let siteCharge = siteNum % 2 !== 0 ? oddSite : evenSite;
      altFees += altMembers * altMemberFee;
  
      let subtotal = siteCharge + altFees;
      let hstCharge = subtotal * hst;
      let monthlyCharge = subtotal + hstCharge;
      let totalMonthlyFees = monthlyCharge + dues;
      let totalYearlyFees = totalMonthlyFees * 12;
      let monthlyPayment = (totalYearlyFees + processingFee) / 12;
      let cancelFee = (siteCharge * 12) * cancelRate;
  
      // Output the receipt
      const receipt = `
                    St. John's Marina & Yacht Club
                        Yearly Member Receipt
  ---------------------------------------------------------------
  
  Client Name and Address:
  ${memberName}
  ${streetAdd}
  ${city}, ${province} ${postCode}
  
  Phone: ${homeNum} (H)
         ${cellNum} (C)
  
  Site #: ${siteNum}  Member type: ${memberType}
  
  Alternative members:                        ${altMembers}
  Weekly site cleaning:                       ${siteCleaning}
  Video surveillance:                         ${videoSurv}
  
  Site charges:                              $${siteCharge.toFixed(2)}
  Extra charges:                             $${altFees.toFixed(2)}
                                            --------------
  Subtotal:                                  $${subtotal.toFixed(2)}
  Sales tax (HST):                           $${hstCharge.toFixed(2)}
                                            --------------
  Total monthly charges:                     $${monthlyCharge.toFixed(2)}
  Monthly dues:                              $${dues.toFixed(2)}
                                            --------------
  Total monthly fees:                        $${totalMonthlyFees.toFixed(2)}
  Total yearly fees:                         $${totalYearlyFees.toFixed(2)}
                                            --------------
  Monthly payment:                           $${monthlyPayment.toFixed(2)}
  ---------------------------------------------------------------
  Issued: ${date}
  HST reg No: 549-33-5849-4720-9885
  
  Cancellation fee:                         $${cancelFee.toFixed(2)}
  `;
  
      document.getElementById("receiptOutput").textContent = receipt;
    });
  });
  