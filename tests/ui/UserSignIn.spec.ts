import {test, expect} from '@playwright/test'
import { HomePage } from '../../pages/homepage';
import { SignInPage } from '../../pages/signInPage';
import { NurseProfilePage } from '../../pages/nurseProfilePage';
import { EnvConfig } from '../../config/env';

test.describe('User SignIn and upload resume',()=>{

    test('User Sign In and upload resume',async ({page})=>{
        const homepage = new HomePage(page);
        await homepage.loadHomePage();
        await page.getByRole('button', { name: 'Allow all cookies' }).isVisible();
        await page.getByRole('button', { name: 'Allow all cookies' }).click();
        await homepage.clickSignIn();
        const signInPage = new SignInPage(page);
        await signInPage.signIn(EnvConfig.NURSE_USER, EnvConfig.NURSE_PASSWD);
        const profilePage = new NurseProfilePage(page);
        await profilePage.clickEditResume();
        await profilePage.uploadResume('./data/CustomContentResume1.docx');
        
        console.log('Resume uploaded successfully');
    });
});

