import {test, expect} from '@playwright/test';
import RegistrationTestdata from "../TestData/RegistrationTestData.json" assert { type: "json" };
import RegistrationPage from '../PageObjects/Registration.page.spec.js';
import SignInPage from '../PageObjects/SignIn.page.spec.js';
import { assert } from 'console';

test.describe('Registration', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://clinicians.akunah.com/');
    
        const pageTitle = await page.title();
    
        console.log('Page Title is:', pageTitle);
    
        await expect(page).toHaveTitle('Akunah:Sign In ::');
    });

    test('Validate registration', async ({ page }) => {
        await expect(page.locator('h4>b')).toContainText('Sign in to akunah');

        await new SignInPage(page).signup();

        await expect(page.locator("(//b[normalize-space()='Registration'])[1]")).toContainText(' Registration ');

        await new RegistrationPage(page).Registration(RegistrationTestdata[0].firstname, 
                                                      RegistrationTestdata[0].lastname, 
                                                      RegistrationTestdata[0].email, 
                                                      RegistrationTestdata[0].password, 
                                                      RegistrationTestdata[0].confirmpassword);

        await new RegistrationPage(page).Confirmbutton();

        await page.close();
    });

    test('Validate cancel button', async ({ page }) => {
        await expect(page.locator('h4>b')).toContainText('Sign in to akunah');

        await new SignInPage(page).signup();

        await expect(page.locator("(//b[normalize-space()='Registration'])[1]")).toContainText(' Registration ');

        await new RegistrationPage(page).Registration(RegistrationTestdata[0].firstname, 
                                                      RegistrationTestdata[0].lastname, 
                                                      RegistrationTestdata[0].email, 
                                                      RegistrationTestdata[0].password, 
                                                      RegistrationTestdata[0].confirmpassword);

        await new RegistrationPage(page).Cancelbutton();
        
        await page.close();
    });

    test('Validate First Name textbox without input', async ({ page }) => {
        await expect(page.locator('h4>b')).toContainText('Sign in to akunah');

        await new SignInPage(page).signup();

        await expect(page.locator("(//b[normalize-space()='Registration'])[1]")).toContainText(' Registration ');

        await new RegistrationPage(page).Registration(RegistrationTestdata[1].firstname, 
                                                      RegistrationTestdata[1].lastname, 
                                                      RegistrationTestdata[1].email, 
                                                      RegistrationTestdata[1].password, 
                                                      RegistrationTestdata[1].confirmpassword);

        await new RegistrationPage(page).Confirmbutton();

        await expect(page.locator('span[id="input-error-firstname"]')).toContainText(' Please enter the required field ');

        await page.close();
    });

    test('Validate Last Name textbox without input', async ({ page }) => {
        await expect(page.locator('h4>b')).toContainText('Sign in to akunah');

        await new SignInPage(page).signup();

        await expect(page.locator("(//b[normalize-space()='Registration'])[1]")).toContainText(' Registration ');

        await new RegistrationPage(page).Registration(RegistrationTestdata[2].firstname, 
                                                      RegistrationTestdata[2].lastname, 
                                                      RegistrationTestdata[2].email, 
                                                      RegistrationTestdata[2].password, 
                                                      RegistrationTestdata[2].confirmpassword);

        await new RegistrationPage(page).Confirmbutton();

        await expect(page.locator('span[id="input-error-lastname"]')).toContainText(' Please enter the required field ');

        await page.close();
    });

    test('Validate Email textbox without input', async ({ page }) => {
        await expect(page.locator('h4>b')).toContainText('Sign in to akunah');

        await new SignInPage(page).signup();

        await expect(page.locator("(//b[normalize-space()='Registration'])[1]")).toContainText(' Registration ');

        await new RegistrationPage(page).Registration(RegistrationTestdata[3].firstname, 
                                                      RegistrationTestdata[3].lastname, 
                                                      RegistrationTestdata[3].email, 
                                                      RegistrationTestdata[3].password, 
                                                      RegistrationTestdata[3].confirmpassword);

        await new RegistrationPage(page).Confirmbutton();

        await expect(page.locator('span[id="input-error-email"]')).toContainText(' Email already exists. ');

        await page.close();
    });

    test('Validate Password textbox without input', async ({ page }) => {
        await expect(page.locator('h4>b')).toContainText('Sign in to akunah');

        await new SignInPage(page).signup();

        await expect(page.locator("(//b[normalize-space()='Registration'])[1]")).toContainText(' Registration ');

        await new RegistrationPage(page).Registration(RegistrationTestdata[4].firstname, 
                                                      RegistrationTestdata[4].lastname, 
                                                      RegistrationTestdata[4].email, 
                                                      RegistrationTestdata[4].password, 
                                                      RegistrationTestdata[4].confirmpassword);

        await new RegistrationPage(page).Confirmbutton();

        await expect(page.locator('span[id="input-error-password"]')).toContainText(' Please enter the required field ');

        await page.close();
    });

    test.skip('Validate Confirm Password textbox without input', async ({ page }) => {
        await expect(page.locator('h4>b')).toContainText('Sign in to akunah');

        await new SignInPage(page).signup();

        await expect(page.locator("(//b[normalize-space()='Registration'])[1]")).toContainText(' Registration ');

        await new RegistrationPage(page).Registration(RegistrationTestdata[5].firstname, 
                                                      RegistrationTestdata[5].lastname, 
                                                      RegistrationTestdata[5].email, 
                                                      RegistrationTestdata[5].password, 
                                                      RegistrationTestdata[5].confirmpassword);

        await new RegistrationPage(page).Confirmbutton();

        await expect(page.locator('')).toContainText(' Please enter the required field ');

        await page.close();
    });

    test('Validate "Already have an account?" link', async ({ page }) => {
        await expect(page.locator('h4>b')).toContainText('Sign in to akunah');

        await new SignInPage(page).signup();

        await expect(page.locator("(//b[normalize-space()='Registration'])[1]")).toContainText(' Registration ');

        await new RegistrationPage(page).signintoanexistingworkspace();

        await expect(page.locator('h4>b')).toContainText('Sign in to akunah');

        await page.close();
    });
});