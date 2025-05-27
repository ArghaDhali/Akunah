import {test, expect} from '@playwright/test';
import AppointmentPage from "../PageObjects/Appointment.Page";
import AppointmentTestdata from "../TestData/AppointmentTestData.json" assert { type: "json" };
import {MailSlurp } from 'mailslurp-client'

// const mailslurp = new MailSlurp({ apiKey: 'f6f8a646a34f0117485b02dea460b308a8296a000985de9eaf42ef3e445bcfc0' });

// const inbox = await mailslurp.createInbox();

// console.log(inbox);

test.describe('Appointment Booking', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('https://www.patientsreach.com/schedule/Dentiqdental/patient_types/');
        
        const pageTitle = await page.title();
    
        console.log('Page Title is:', pageTitle);
    
        await expect(page).toHaveTitle('Appointment Booking');
    });

    test('Appointment Booking for new patient', async ({page}) => {

        await new AppointmentPage(page).newpatientbutton();

        await new AppointmentPage(page).dentalimplantbutton();

        await new AppointmentPage(page).timetable(AppointmentTestdata[0].date, AppointmentTestdata[0].time);

        await new AppointmentPage(page).bookingmyself(AppointmentTestdata[0].firstname,
                                                      AppointmentTestdata[0].lastname,
                                                      AppointmentTestdata[0].cellphone,
                                                      AppointmentTestdata[0].birthdate,
                                                      AppointmentTestdata[0].email,
                                                      AppointmentTestdata[0].messsage);

        await new AppointmentPage(page).insuranceunchangedbutton();

        await new AppointmentPage(page).useemailbutton();

        await expect(page.locator("//div[normalize-space()='We have sent a 4-digit code to your Email Address']")).toContainText('We have sent a 4-digit code to your');

        // const email = await mailslurp.waitForLatestEmail(inbox.id, 30000);
        // console.log('email==============',email)
        // const otpMatch = email.body.match(/\b\d{4}\b/); // Adjust regex as needed
        // const otp = otpMatch ? otpMatch[0] : null;
        // console.log(otp)
        await page.close();
    });
});