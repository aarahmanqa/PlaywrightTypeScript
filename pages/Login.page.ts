import { Page } from "playwright";

export default class LoginPage {
    private page:Page
    constructor(page:Page) {
        this.page = page;
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
}