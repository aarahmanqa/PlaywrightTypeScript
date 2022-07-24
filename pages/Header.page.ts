import { Page } from "playwright";

export default class HeaderPage {

    private page:Page;

    constructor(page: Page) {
        this.page = page;
    }

    //Locators
    public get eleLoginBtn() {
        return "text='Log in'";
    }

    public get eleSignOutBtn() {
        return "text='Sign out'";
    }

}