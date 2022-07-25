import { Browser, BrowserContext, chromium, Page } from "playwright"
import LocatorUtils from "../helpers/LocatorUtils";
import ToastUtils from "../helpers/ToastUtils";
import HeaderPage from "../pages/Header.page"
import LoginPage from "../pages/Login.page";

describe('Login test', () => {
    let browser: Browser, context: BrowserContext, page: Page, locatorUtils: LocatorUtils, toastUtils:ToastUtils;

    let headerPage:HeaderPage, loginPage:LoginPage;

    beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext();
        page = await context.newPage();
        locatorUtils = new LocatorUtils(page);
        toastUtils = new ToastUtils(page);

        headerPage = new HeaderPage(page)
        loginPage = new LoginPage(page)

        await page.goto("https://letcode.in")
    })

    test('Login and logout', async () => {
        expect(page.url()).toBe("https://letcode.in/");
        await locatorUtils.click(headerPage.eleLoginBtn);
        await loginPage.doLogin("aarahman@mailinator.com","Letcode@1234","Ahamed");
        expect(page.url()).toBe("https://letcode.in/");
        await headerPage.doLogout();
    })

    afterAll(async () => {
        await browser.close();
    })
})