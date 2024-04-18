class HomePage{

    constructor(page, dropdownSelector) {
        this.page = page;
        this.dropdownSelector = dropdownSelector;
    }

    async Searchpatientbutton(){
        await this.page.click("//*[text()='Search']")
    }

    async Addpatientbutton(){
        await this.page.click("//*[text()='Add']")
    }

    async Addpatient(firstname, lastname, dob, sexs, email){
        await this.page.fill('input[placeholder="First Name"]', firstname);
        await this.page.fill('input[placeholder="Last Name"]', lastname);
        await this.page.fill('div[class="react-datepicker__input-container"]>input', dob);
        await this.page.click("div[class='form-group mxw_100 br_10']");

        /*const sex = await this.page.$(this.dropdownSelector);
        await sex.selectOption({ label: optionText });                                                                                                                                                                                                                                                                                       ('div[class="form-group mxw_100 br_10"]>select>option');
        for( var i=0; i<sex.length; i++){
            const dropdownValue = await sex[i].text() 
            if(dropdownValue.trim()==sexs[i]){
                sex[i].click();
                break;
            }
        }*/
        
        /*const sex = await this.page.$('select[fdprocessedid="r0oi7g"]');
        const allElements = await sex.$$("option");

        for(var i=0; i<allElements.length; i++){
            const dropdownValue = await allElements[i].text()
            if(dropdownValue.trim()==sexs[i]){
                allElements[i].click();
                break;
            }
        }*/

        await this.page.fill('input[placeholder="Email"]', email);
        await this.page.click('div[class="modal-footer"]>button');
    }
}

export default HomePage;