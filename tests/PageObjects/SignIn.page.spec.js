class SignInPage{

    constructor(page) {
        this.page = page;
    }

    async signin(username, password) {
        await this.page.fill('input[name="username"]', username);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('input[name="rememberMe"]');
        await this.page.click('input[name="login"]');
    }

    async forgotpassword(username) {
        await this.page.click("a[tabindex='5']>b");
        //await expect(page.locator("h1[id='kc-page-title']>b")).toContainText(text);
        await this.page.fill('input[name="username"]', username);
        await this.page.click('//input[@id="send-button"]');
        //await expect(page.locator('div[id="popup"]>h4')).toContainText(' An email has been dispatched for password reset. Kindly select the “Click here” link to proceed with resetting your password ');
        //await this.page.click('');
        await this.page.click('//button[@id="click-here-button"]');
    }

    async signup(){
        await this.page.click('b[style="color:#3F2783"]');
    }

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


export default SignInPage;