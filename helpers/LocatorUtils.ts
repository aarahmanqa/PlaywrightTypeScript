import { Page } from "playwright";

export default class LocatorUtils {
    public page : Page;

    constructor(page:Page) {
        this.page = page;
    }

    public async click(selector:string) {
        await this.page.locator(selector).click();
    }

    public async fill(selector:string,text:string) {
        await this.page.locator(selector).fill(text);
    }
}