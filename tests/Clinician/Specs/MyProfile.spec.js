import {test, expect} from '@playwright/test';
import SignInTestdata from "../TestData/LoginTestData.json" assert { type: "json" };
import SignInPage from '../PageObjects/SignIn.page.js';
import MyProfilesPage from '../PageObjects/MyProfile.page.js';
import exp from 'constants';

//const MyProfilePage = new MyProfilesPage();

test.describe('My Profiles', () => {

    test.beforeEach(async ({ page}) => {
        await page.goto('https://clinicians.akunah.com/');
    
        const pageTitle = await page.title();
    
        console.log('Page Title is:', pageTitle);
    
        await expect(page).toHaveTitle('Akunah:Sign In ::');
    });

    test('Validate My Profiles page', async ({ page }) => {
        await expect(page.locator('h4>b')).toContainText('Sign in to akunah');

        await new SignInPage(page).signin(SignInTestdata[0].username, SignInTestdata[0].password);

        await expect(page.locator("//*[text()='My Profiles']")).toContainText('My Profiles');

        await page.close();
    });

    test('Validate 1st profile', async ({ page }) => {
        await expect(page.locator('h4>b')).toContainText('Sign in to akunah');

        await new SignInPage(page).signin(SignInTestdata[0].username, SignInTestdata[0].password);

        await expect(page.locator("//*[text()='My Profiles']")).toContainText('My Profiles');

        await new MyProfilesPage(page).Myprofiles();

        await expect(page.locator('//*[text()="Welcome to akunah,"]')).toContainText('Welcome to akunah,');

        await page.close();
    });

    test('Validate Add another doctor profile button', async ({page}) => {
        await expect(page.locator('h4>b')).toContainText('Sign in to akunah');

        await new SignInPage(page).signin(SignInTestdata[0].username, SignInTestdata[0].password);

        await expect(page.locator("//*[text()='My Profiles']")).toContainText('My Profiles');

        await new MyProfilesPage(page).Addanotherdoctorprofile();

        await expect(page.locator('//*[text()="Complete personal info"]')).toContainText('Complete personal info');

        await page.close();
    });

    test('Validate Logout button', async ({page}) => {
        await expect(page.locator('h4>b')).toContainText('Sign in to akunah');

        await new SignInPage(page).signin(SignInTestdata[0].username, SignInTestdata[0].password);

        await expect(page.locator("//*[text()='My Profiles']")).toContainText('My Profiles');

        await new MyProfilesPage(page).Logout();

        await page.close();
    });
});