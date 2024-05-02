import {test, expect} from '@playwright/test';
import SignInTestdata from "../TestData/LoginTestData.json" assert { type: "json" };
import SignInPage from '../PageObjects/SignIn.page.spec.js';
import MyProfilesPage from '../PageObjects/MyProfile.page.spec.js';
import HomePage from '../PageObjects/Home.Page.spec.js';
import HomeTestdata from '../TestData/HomeTestData.json';
import exp from 'constants';

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
    });

    test('Validate Home page', async ({ page }) => {
        await expect(page.locator("//*[text()='Welcome to akunah,']")).toContainText('Welcome to akunah,');

        await page.close();
    });

    test('Validate Search button', async ({ page }) => {
        await new HomePage(page).Searchpatientbutton();

        await expect(page.locator('h4[class="ph_title"]')).toContainText('Patient List');

        await page.close();
    });

    test('Validate Add button', async ({ page }) => {
        await new HomePage(page).Addpatientbutton();

        await expect(page.locator('div[class="text-center modal-title h4"]')).toContainText('Add Patient');

        await page.close();
    });

    test.skip('Validate Add Patient', async ({ page }) => {
        await new HomePage(page).Addpatientbutton();

        await expect(page.locator('div[class="text-center modal-title h4"]')).toContainText('Add Patient');

        await new HomePage(page).Addpatient(HomeTestdata[0].firstname,
                                            HomeTestdata[0].lastname,
                                            HomeTestdata[0].dob,
                                            HomeTestdata[0].sexs,
                                            HomeTestdata[0].email);

        await page.close();
    });

    test.only('Validate Contact us', async ({ page }) => {
        await new HomePage(page).Contactus(HomeTestdata[0].subject, HomeTestdata[0].message);

        await page.close();
    });
});