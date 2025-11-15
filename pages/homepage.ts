import { expect, Locator, Page } from '@playwright/test';
import { EnvConfig } from '../config/env';

export class HomePage {
  readonly page: Page;
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = page.locator("//a[text()= ' Log In ']");
  }

  async loadHomePage(): Promise<void> {
    await this.page.goto(EnvConfig.HOMEPAGE_URL);
    await expect(this.page).toHaveTitle("Nurse.com - Continuing Education, Jobs, & News for Nurses"); 
  }

  async clickSignIn(): Promise<void> {
    await this.signInButton.click();
    await expect(this.page).toHaveTitle("Login to Your Account | Nurse.com"); 
  }
}

