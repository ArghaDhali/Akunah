class MySchedulerPage{ //sub page containing specific selectors and methods for a specific page

    constructor(page, dropdownSelector) {
        this.page = page;
        this.dropdownSelector = dropdownSelector;
    }

    /*
    This method is for click on the My Scheduler on the side dasboard
    */
    async MySchedulerPage(){
        await this.page.click('li[title="My Scheduler"]');
    }

    /*
    This method is for click on the Year button
    */
    async Yearbutton(){
        await this.page.click('button[title="year view"]');

        await expect(this.page.getByRole('button', { name: 'year' })).toBeVisible;
    }

    /*
    This method is for click on the Month button
    */
    async Monthbutton(){
        await this.page.click('button[title="month view"]');

        await expect(this.page.getByRole('button', { name: 'month' })).toBeVisible;
    }

    /*
    This method is for click on the Week button
    */
    async Weekbutton(){
        await this.page.click('button[title="week view"]');

        await expect(this.page.getByRole('button', { name: 'week' })).toBeVisible;
    }

    /*
    This method is for click on the Day button
    */
    async Daybutton(){
        await this.page.click('button[title="day view"]');

        await expect(this.page.getByRole('button', { name: 'day' })).toBeVisible;
    }

    /*
    This method is for click on the List button
    */
    async Listbutton(){
        await this.page.click('button[title="list view"]');

        await expect(this.page.getByRole('button', { name: 'list' })).toBeVisible;
    }

    /*
    This method is for click on the Today button
    */
    async Tobaybutton(){
        await this.page.click('button[title="Today"]');

        await expect(this.page.getByRole('button', { name: 'today'})).toBeVisible;
    }

    /*
    This method is for click on the Previous arrow button
    */
    async Previousarrow(){
        await this.page.click('button[title="Previous day"]');
    }

    /*
    This method is for click on the Next Arrow button
    */
    async Nextarrow(){
        await this.page.click('button[title="Next day"]');
    }

    /*
    This method is for Schedule an events
    */
    async Eventscheduler(){
        await this.page.click('div[class="fc-daygrid-day-frame fc-scrollgrid-sync-inner"]');
    }
}

export default MySchedulerPage;