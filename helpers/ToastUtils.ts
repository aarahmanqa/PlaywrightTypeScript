import { Page } from "playwright";

export default class ToastUtils {
    private page : Page
    constructor(page:Page) {
        this.page = page;
    }

    public async getToastMessage() {
        let selector = "div[role='alertdialog']";
        this.page.waitForSelector(selector);
        return this.page.locator(selector).textContent();
    }
}