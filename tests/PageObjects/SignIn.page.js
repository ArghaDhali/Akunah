class SignInPage{ //sub page containing specific selectors and methods for a specific page

    constructor(page) {  //Page Constructor
        this.page = page;
    }

    /*
    This method is for signin into the application

    @param username - email id should be passed
    @param password - password should be passed
    */
    async signin(username, password) {     
        await this.page.fill('input[name="username"]', username); //Entering value into username textbox

        await this.page.fill('input[name="password"]', password); //Entering value into password textbox

        await this.page.click('input[name="rememberMe"]'); //Clicking on the remember me checkbox

        await this.page.click('input[name="login"]'); //Clicking on the Login button
    }

    /*
    This method is for clicking on the forgot password button

    @param username - emaild id should be passed
    */
    async forgotpassword(username) {
        await this.page.click("a[tabindex='5']>b");
        //await expect(page.locator("h1[id='kc-page-title']>b")).toContainText(text);
        await this.page.fill('input[name="username"]', username);
        await this.page.click('//input[@id="send-button"]');
        //await expect(page.locator('div[id="popup"]>h4')).toContainText(' An email has been dispatched for password reset. Kindly select the “Click here” link to proceed with resetting your password ');
        //await this.page.click('');
        await this.page.click('//button[@id="click-here-button"]');
    }

    /*
    This method is for clicking on the signup button
    */
    async signup(){
        await this.page.click('b[style="color:#3F2783"]'); //Clicking on the signup button
    }

    /*
    This method is for clicking the language dropdown and select the language

    @param languages - language should be passed
    */
    async languagedropdown(languages){
        let language = await this.page.$('ul[class="show_lang"]>li')
        for( var i=0; i<language.length; i++){
            //console.log("Dropdown Value : " + await language[i].getText())
            const dropdownValue = await language[i].text() 
            if(dropdownValue.trim()==languages[i]){
                language[i].click();
                break;
            }
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    }
}


export default SignInPage; //This is for exporting the instance of SignInPage class