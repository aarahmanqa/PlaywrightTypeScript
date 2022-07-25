import { Page } from "playwright";
import LocatorUtils from "../helpers/LocatorUtils";
import ToastUtils from "../helpers/ToastUtils";

export default class HeaderPage {

    private page:Page;
    private locatorUtils:LocatorUtils;
    private toastUtils:ToastUtils;

    constructor(page: Page) {
        this.page = page;
        this.locatorUtils = new LocatorUtils(page);
        this.toastUtils = new ToastUtils(page);
    }

    //Locators
    public get eleLoginBtn() {
        return "text='Log in'";
    }

    public get eleSignOutBtn() {
        return "//a[text()='Sign out']";
    }

public async doLogout() {
        await this.locatorUtils.click(this.eleSignOutBtn);
        expect(await this.toastUtils.getToastMessage()).toContain("Bye! See you soon :)");
    }

}