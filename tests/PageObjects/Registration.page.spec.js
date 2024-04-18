class RegistrationPage{

    constructor(page) {
        this.page = page;
    }

    async Registration(firstname, lastname, email, password, confirmpassword){
        await this.page.fill('input[id="firstName"]', firstname);
        await this.page.fill('input[id="lastName"]', lastname);
        await this.page.fill('input[id="email"]', email);
        await this.page.fill('input[id="password"]', password);
        await this.page.fill('input[id="password-confirm"]', confirmpassword);
        await this.page.click('input[id="send-button"]');
    }

    async Confirmbutton(){
        await this.page.click('button[id="click-here-button"]');
    }

    async Cancelbutton(){
        await this.page.click('button[id="close-popup"]');
    }

    async signintoanexistingworkspace(){
        await this.page.click('//b[normalize-space()="Sign in to an existing workspace"]');
    }
}

export default RegistrationPage;