import { Page } from "playwright";
import LocatorUtils from "../helpers/LocatorUtils";
import ToastUtils from "../helpers/ToastUtils";

export default class LoginPage {
    private page:Page
    private locatorUtils:LocatorUtils;
    private toastUtils:ToastUtils;
    constructor(page:Page) {
        this.page = page;
        this.locatorUtils = new LocatorUtils(this.page);
        this.toastUtils = new ToastUtils(this.page);
    }

    public get eleEmailTextField() {
        return "input[name='email']";
    }


    public get elePasswordTextField() {
        return "input[name='password']";
    }


    public get eleLoginBtn() {
        return "//button[text()='LOGIN']";
    }

    public async doLogin(username:string, password:string, name:string) {
        expect(this.page.url()).toBe("https://letcode.in/signin");
        await this.locatorUtils.fill(this.eleEmailTextField,username);
        await this.locatorUtils.fill(this.elePasswordTextField,password);
        await this.locatorUtils.click(this.eleLoginBtn);
        expect(await this.toastUtils.getToastMessage()).toContain("Welcome " + name);
    }
}