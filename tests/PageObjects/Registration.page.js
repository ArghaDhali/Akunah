class RegistrationPage{ //sub page containing specific selectors and methods for a specific page

    constructor(page) { //Page Constructor
        this.page = page;
    }

    /*
    This method is for Registration

    @param firstname - firstname should be passed
    @param lastname - lastname should be passed
    @param email - email should be passed
    @param password - password should be passed
    @param confirmpassword - confirm password should be passed
    */
    async Registration(firstname, lastname, email, password, confirmpassword){
        await this.page.fill('input[id="firstName"]', firstname); //Entering value into firstname textbox

        await this.page.fill('input[id="lastName"]', lastname); //Entering value into lastname textbox

        await this.page.fill('input[id="email"]', email); //Entering value into email textbox

        await this.page.fill('input[id="password"]', password); //Entering value into password textbox

        await this.page.fill('input[id="password-confirm"]', confirmpassword); //Entering value into confirm password textbox

        await this.page.click('input[id="send-button"]'); //Clicking on the send button
    }

    /*
    This method is for clicking on the confirm button 
    */
    async Confirmbutton(){
        await this.page.click('button[id="click-here-button"]'); //Clicking on the confirm button
    }

    /*
    This method is for clicking on the cancel button
    */
    async Cancelbutton(){
        await this.page.click('button[id="close-popup"]');
    }

    /*
    This method is for clicking on the  signin to existing workspace link
    */
    async signintoanexistingworkspace(){
        await this.page.click('//b[normalize-space()="Sign in to an existing workspace"]');
    }
}

export default RegistrationPage; //This is for exporting the instance of RegistrationPage class