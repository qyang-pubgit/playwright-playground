import { expect, Locator, Page } from '@playwright/test';
export class SignInPage{
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator
    readonly signInButton: Locator;

    constructor(page: Page){
        this.page = page;   
        this.emailInput = page.locator("//input[@name='email']");
        this.passwordInput = page.locator("//input[@name='password']");
        this.signInButton = page.locator("//button[text()='Log In']");
    }

    async signIn(email: string, password: string): Promise<void>{
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.page.click("//button/span[text()='Log In']/..");
        await expect(this.page).toHaveTitle("Browse Nurse Jobs, CE, & Community | Nurse.com"); 
    }
}