class MyProfilesPage{

    constructor(page) {
        this.page = page;
    }

    async Myprofiles(){
        await this.page.click('div[class="flex flex-col items-center group gap-2  patient_imgS c_pointer"]');
    }

    async Addanotherdoctorprofile(){
        await this.page.click('div[class=" c_pointer patient_imgS"]');
    }

    async Logout(){
        await this.page.click("div[class='content__main_reg '] button[class='btn_outline']");
    }
}

export default MyProfilesPage;