import { expect } from "@playwright/test";

class AppointmentPage{

    constructor(page){ //Page Constructor
        this.page = page;
    }

    /*
    This method is for clicking the I'm a New Patient button
    */
   async newpatientbutton(){
    await this.page.click("//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-8']//div[2]//div[1]");
   }

   /*
   This method is for clicking the I'm a Returning Patient button
   */
  async returnpatientbutton(){
    await this.page.click("//div[@class='group-selection-style']//div//div[2]");
  }

  /*
  This method is for clicking the Dental Implant Consultation button
  */
 async dentalimplantbutton(){
    await this.page.click('//span[text()="Dental Implant Consultation"]');
 }

  /*
  This method is for clicking the Cosmetic Dentistry Consultation buton
  */
 async cosmeticdentistrybutton(){
    await this.page.click('//span[text()="Cosmetic Dentistry Consultation"]');
 }

 /*
 This method is for clicking the Emergency button
 */
 async emergencybutton(){
    await this.page.click('//span[text()="Emergency"]');
 }

 /*
 This method is for clicking the Dental Cleaning button
 */
 async dentalcleaningbutton(){
   await this.page.click('//span[text()="Dental Cleaning"]');
 }

 /*
 This method is for select the booking date and time

 @param date - Date should be passed
 */
 async timetable(date, time){
    await this.page.fill('input[placeholder="MM/DD/YYYY"]', date) //Entering value into Jump To input field

    const timeSlot = this.page.locator('//td/button/span[@class="MuiButton-label"]') //Clicking appointment time
      .filter({ hasText: time });
    await timeSlot.first().click();
 }

 /*
 This method is for enter your information for booking a appointment for MySelf

 @param firstname - Patient First Name should be passed
 @param lastname - Patient Last Name should be passed
 @param cellphone - Cell Phone number should be passed
 @param birthdate - Patient Birthdate should be passed
 @param email - Email should be passed
 @param message - Message to Office should be passed
 */
 async bookingmyself(firstname, lastname, cellphone, birthdate, email, message){
   await this.page.fill('input[placeholder="Patient First Name"]', firstname) //Entering value into Patient First Name textbox

   await this.page.fill('input[placeholder="Patient Last Name"]', lastname) //Entering value into Patient Last Name textbox

   await this.page.fill('input[placeholder="(###) ###-####"]', cellphone) //Entering value into Cell Phone textbox

   await this.page.fill('input[placeholder="MM/DD/YYYY"]', birthdate) //Entering value into Patient Birthdate textbox

   await this.page.fill('input[placeholder="email"]', email) //Entering value into Email textbox

   await this.page.fill('textarea[placeholder="Message to Office"]', message) //Entering value into Message to Office textbox

   await this.page.click('input[class="jss48"]'); //Clicking the I agree checkbox

   await this.page.click('//span[text()="Next"]') //Clicking the Next button
 }

 /*
 This method is for clicking the Insurance Unchanged & Next button
 */
 async insuranceunchangedbutton(){
   await this.page.click('//span[text()="Insurance Unchanged"]'); //Clicking the Insurance Unchanged button

   await this.page.click('//span[text()="Next"]'); //Clicking the Next button
 }

 /*
 This method is for clicking the I don't have Insurance & Next button
 */
async donthaveinsurancebutton (){
  await this.page.click('div[role="group"] button:nth-child(2)'); //Clicking the I don't have Insurance button

  await this.page.click('//span[text()="Next"]'); //Clicking the Next button
}

 /*
 This method is for clicking the Use Email button and entering the OTP manually
 */
 async useemailbutton(){
   await this.page.click('//span[text()="Use Email"]'); //Clicking the Use Email button

   console.log('Please enter the OTP manually...');
 }

 /*
 This method is for clicking the Use Cell Phone button
 */
 async usecellphonebutton(){
   await this.page.click('//span[text()="Use Cell Phone"]');
 }

 /*
 This method is for clicking the verify & Schedule button
 */
 async verifybutton(){
  await this.page.click('//span[text()="Verify & Schedule"]'); //Clicking the Verify & schedule button

  await expect(this.page.locator('div[class="contact-confirmation-info"] div h3')).toContainText('Appointment Booked!'); // Checking the Appointment Booked! hedaing

  console.log('Appointment Booked!');
 }
}

export default AppointmentPage; //This is for exporting the instance of AppointmentPage class