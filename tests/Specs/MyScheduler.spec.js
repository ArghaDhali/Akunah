import {test, expect} from '@playwright/test';
import SignInTestdata from "../TestData/LoginTestData.json" assert { type: "json" };
import SignInPage from '../PageObjects/SignIn.page.js';
import MyProfilesPage from '../PageObjects/MyProfile.page.js';
import MySchedulerPage from '../PageObjects/MyScheduler.Page.js';

test.describe('Home Page', () => {

    test.beforeEach(async ({ page}) => {
        await page.goto('https://clinicians.akunah.com/');
    
        const pageTitle = await page.title();
    
        console.log('Page Title is:', pageTitle);
    
        await expect(page).toHaveTitle('Akunah:Sign In ::');

        await expect(page.locator('h4>b')).toContainText('Sign in to akunah');

        await new SignInPage(page).signin(SignInTestdata[0].username, SignInTestdata[0].password);

        await expect(page.locator("//*[text()='My Profiles']")).toContainText('My Profiles');

        await new MyProfilesPage(page).Myprofiles();

        await expect(page.locator("//*[text()='Welcome to akunah,']")).toContainText('Welcome to akunah,');

        await new MySchedulerPage(page).MySchedulerPage();
    });

    test('Validate My Scheduler page', async ({ page }) => {
        await expect(page).toHaveURL('https://clinicians.akunah.com/schedular');

        await page.close();
    });

    test('Validate Year View', async ({ page }) => {
        await new MySchedulerPage(page).Yearbutton();

        await page.close();
    });

    test('Validate Month View', async ({ page }) => {
        await new MySchedulerPage(page).Monthbutton();

        await page.close();
    });

    test('Validate Week View', async ({ page }) => {
        await new MySchedulerPage(page).Weekbutton();

        await page.close();
    });

    test('Validate Day View', async ({ page }) => {
        await new MySchedulerPage(page).Daybutton();

        await page.close();
    });

    test('Validate List View', async ({ page }) => {
        await new MySchedulerPage(page).Listbutton();

        await page.close();
    });

    test('Validate Today button', async ({ page }) => {
        await new MySchedulerPage(page).Nextarrow();

        await new MySchedulerPage(page).Tobaybutton();

        await page.close();
    });
});