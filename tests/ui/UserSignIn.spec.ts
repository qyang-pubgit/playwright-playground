import {test, expect} from '@playwright/test'
import { JobBoardPage } from '../../pages/jobBoardPage';
import { JobData } from '../../data/jobData';

test.describe('User Search Job and upload resume',()=>{
    test.beforeEach(async ({ context }) => {
        await context.route("*.cookiebot.com", route => route.abort());
    });
    test('Search Job',async ({page})=>{
        const jobBoard = new JobBoardPage(page);
        await page.route('*.cookiebot.com', route => route.abort());
        await jobBoard.goto();
        await jobBoard.searchJob(JobData.JOB_ID);
    });
});