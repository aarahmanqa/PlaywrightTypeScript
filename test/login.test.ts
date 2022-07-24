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
        expect(page.url()).toBe("https://letcode.in/signin");
        await locatorUtils.fill(loginPage.eleEmailTextField,"aarahman@mailinator.com");
        await locatorUtils.fill(loginPage.elePasswordTextField,"Letcode@1234");
        await locatorUtils.click(loginPage.eleLoginBtn);
        expect(await toastUtils.getToastMessage()).toContain("Welcome Ahamed");
        expect(page.url()).toBe("https://letcode.in/");
        await locatorUtils.click(headerPage.eleSignOutBtn);
        expect(await toastUtils.getToastMessage()).toContain("Bye! See you soon :)");
    })

    afterAll(async () => {
        await browser.close();
    })
})