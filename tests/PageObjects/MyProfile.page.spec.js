class MyProfilesPage{ //sub page containing specific selectors and methods for a specific page

    constructor(page) { //Page Constructor
        this.page = page;
    }

    /*
    This method is for click on the My profiles icon 
    */
    async Myprofiles(){
        await this.page.click('div[class="flex flex-col items-center group gap-2  patient_imgS c_pointer"]');
    }

    /*
    This method is for click on the Add another doctor profile icon
    */
    async Addanotherdoctorprofile(){
        await this.page.click('div[class=" c_pointer patient_imgS"]');
    }

    /*
    This method is for click on the logout button
    */
    async Logout(){
        await this.page.click("div[class='content__main_reg '] button[class='btn_outline']");
    }
}

export default MyProfilesPage; //This is for exporting the instance of MyProfilesPage class