import { Browser, BrowserContext, chromium, Page } from "playwright"
import LocatorUtils from "../helpers/LocatorUtils";
import HeaderPage from "../pages/Header.page"
import LoginPage from "../pages/Login.page";

describe('Login test', () => {
    let browser: Browser, context: BrowserContext, page: Page, locatorUtils: LocatorUtils;

    let headerPage:HeaderPage, loginPage:LoginPage;

    beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext();
        page = await context.newPage();
        locatorUtils = new LocatorUtils(page);
        headerPage = new HeaderPage(page)
        loginPage = new LoginPage(page)

        await page.goto("https://letcode.in")
    })

    test('Login and logout', async () => {
        await locatorUtils.click(headerPage.eleLoginBtn);
        await locatorUtils.fill(loginPage.eleEmailTextField,"aarahman@mailinator.com");
        await locatorUtils.fill(loginPage.elePasswordTextField,"Letcode@1234");
        await locatorUtils.click(loginPage.eleLoginBtn);
        await locatorUtils.click(headerPage.eleSignOutBtn);
    })

    afterAll(async () => {
        await browser.close();
    })
})