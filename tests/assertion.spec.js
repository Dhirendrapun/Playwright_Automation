import{test,expect} from '@playwright/test';

test('Assertion test', async({page}) =>{

    await page.goto('https://kitchen.applitools.com/')
    await page.pause();
    // check element is present or not assertion
    await expect(page.locator('#__next > div > div > section > div > h1')).toHaveCount(1)
    if(await page.$('#__next > div > div > section > div > h1')){
        await page.locator('#__next > div > div > section > div > h1').click()
    }
    //check element hidden or not
    await expect(page.locator('#__next > div > div > section > div > h1')).toBeVisible();
    await expect(page.locator('#__next > div > div > section > div > h1')).toBeHidden();

    //title

    await expect(page).toHaveTitle('The Kitchen')

    // enable or disable
    await expect(page.locator('#__next > div > div > section > div > h1')).toBeEnabled();
    await expect(page.locator('#__next > div > div > section > div > h1')).toBeDisabled();
    await page.pause();

    // attribute class , id 
    await expect(page.locator('class=chakra-heading css-dpmy2a')).toHaveAttribute('class' ,/.*css-dpmy2a/ );


})