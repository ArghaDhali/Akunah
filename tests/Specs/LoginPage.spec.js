import {test, expect} from '@playwright/test';
import SignInTestdata from "../TestData/LoginTestData.json" assert { type: "json" };
import SignInPage from '../PageObjects/SignIn.page.js';
//import MyProfilesPage from '../PageObjects/MyProfile.page.spec.js';

//const MyProfilePage = new MyProfilesPage();

test.describe('Sign In', () => {

    test.beforeEach(async ({ page}) => {
        await page.goto('https://clinicians.akunah.com/');
    
        const pageTitle = await page.title();
    
        console.log('Page Title is:', pageTitle);
    
        await expect(page).toHaveTitle('Akunah:Sign In ::');
    });

    test('Validate Sign In', async ({ page }) => {

        await expect(page.locator('h4>b')).toContainText('Sign in to akunah');

        await new SignInPage(page).signin(SignInTestdata[0].username, SignInTestdata[0].password);

        await expect(page.locator("//*[text()='My Profiles']")).toContainText('My Profiles');

        await page.close();
    });

    test('Validate Sign In with wrong username', async ({ page }) => {

        await expect(page.locator('h4>b')).toContainText('Sign in to akunah');

        await new SignInPage(page).signin(SignInTestdata[1].username, SignInTestdata[1].password);

        await expect(page.locator('//span[normalize-space()="Invalid email address."]')).toContainText('Invalid email address.');

        await page.close();
    });

    test('Validate Sign In with wrong password', async ({ page }) => {

        await expect(page.locator('h4>b')).toContainText('Sign in to akunah');

        await new SignInPage(page).signin(SignInTestdata[2].username, SignInTestdata[2].password);

        await expect(page.locator('//span[normalize-space()="Invalid password."]')).toContainText('Invalid password.');

        await page.close();
    });

    test.skip('Validate Forgot Password', async ({page}) => {

        await expect(page.locator('h4>b')).toContainText('Sign in to akunah');

        await new SignInPage(page).forgotpassword(SignInTestdata[0].username);

        //await expect(page.locator('div[id="popup"]>h4')).toContainText(' An email has been dispatched for password reset. Kindly select the “Click here” link to proceed with resetting your password ');

        await page.close();
    });

    test.skip('Validate Language dropdown', async ({page}) => {

        await expect(page.locator('h4>b')).toContainText('Sign in to akunah');

        await new SignInPage(page).languagedropdown(SignInTestdata[0].languages);

        await new SignInPage(page).signin(SignInTestdata[0].username, SignInTestdata[0].password);
    });
});     