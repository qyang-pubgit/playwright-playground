import { expect, Locator, Page } from '@playwright/test';
import { EnvConfig } from '../config/env'; 

export class JobBoardPage {
  readonly page: Page;
  readonly landingURL: string;
  readonly inputKeywordSearch: Locator;
  readonly btnSearch: Locator;
  readonly jobListCard: Locator;


  constructor(page: Page) {
    this.page = page;
    this.landingURL = EnvConfig.JOB_BOARD_URL;
    this.inputKeywordSearch = page.locator("//input[@placeholder='Search by keyword, specialty, job title']");
    this.btnSearch = page.locator("//button[text()=' Search ']");
    this.jobListCard = page.locator("//a[@analytics-id='job-list-card']");
  }

  async goto() {
    await this.page.goto(this.landingURL);
  }

  async searchJob(jobId: string) {
    await this.inputKeywordSearch.fill(jobId);
    await this.btnSearch.click();
    await expect(this.jobListCard).toBeVisible();
  }

}