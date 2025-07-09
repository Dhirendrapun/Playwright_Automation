import{test,expect } from "@playwright/test";

test("My first selector test" , async({page}) => {

    await page.goto("https://www.saucedemo.com/")
   
    // using class, id 
    await page.locator("data-test=username").click();
    await page.locator("data-test=username").fill("standard_user");
    // using css selector
    await page.pause();

    await page.locator('#user-name').click();
    await page.locator('#password').click();
    await page.locator('#password').fill("secret_sauce");
    // xpath
    // await page.locator('//*[@id="login-button"]').click();
    // text
    await page.locator('text=LOgin').click();

    


    
});