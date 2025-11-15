import { expect, Locator, Page } from '@playwright/test';
export class NurseProfilePage{
    readonly page: Page;
    readonly btnResumeOptions: Locator;
    readonly btnEditResume: Locator;
    readonly textUploadResume: Locator;
    readonly inputFile: Locator;
    readonly btnUploadResume: Locator;
    readonly btnUploadNewResume: Locator;
    readonly textContactInfo: Locator;

    constructor(page: Page){
        this.page = page;
        this.btnResumeOptions = page.locator("//button[@data-cy='app-kebab-menu-trigger-resume']");
        this.btnEditResume = page.locator("//ul[@data-dropdown-id='menu-resume']/li[@role='menuitem']/a[text()=' Edit ']");
        this.textUploadResume = page.locator("//div[text()='Upload Resume']");
        this.inputFile = page.locator("//div[@class='dropzone sm:hidden']//input");
        this.btnUploadResume = page.locator("//button[@data-test-id='saveButton']");
        this.btnUploadNewResume = page.locator("//button[text()=' Upload New Resumé']");
        this.textContactInfo = page.locator("//div[text()='Contact Information']");
    }
    async clickEditResume(): Promise<void>{
        await this.btnResumeOptions.click();
        await expect(this.btnEditResume).toBeVisible();
        await this.btnEditResume.click();
        await expect(this.textUploadResume).toBeVisible();
    }
    async uploadResume(filePath: string): Promise<void>{
        await this.inputFile.setInputFiles(filePath);
        await expect(this.btnUploadResume).toBeEnabled();
        await this.btnUploadResume.click();
        await expect(this.btnUploadNewResume).toBeVisible();
        await this.btnUploadNewResume.click();
        await expect(this.textContactInfo).toBeVisible();
    }
}