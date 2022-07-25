import { Page } from "playwright";

export default class ToastUtils {
    private page : Page
    constructor(page:Page) {
        this.page = page;
    }

    public async getToastMessage() {
        let selector = "div[role='alertdialog']";
        await this.page.waitForSelector(selector);
        console.log("await this.page.locator(selector).textContent() = " + await this.page.locator(selector).textContent());
        return await this.page.locator(selector).textContent();
    }
}