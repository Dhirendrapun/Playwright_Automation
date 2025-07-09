import { test, expect } from "@playwright/test";

// here we are repeating the login step in every test

test.beforeEach(async({page})=>{
  await page.goto("https://saucedemo.com");
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
})
// we are also closing the page every time
test.afterAll(async({page})=>{
    
    await page.close();
})

// test("Hooks and groups test", async ({ page }) => {
//   await page.goto("https://saucedemo.com");

//   await page.locator('[data-test="username"]').fill("standard_user");
//   await page.locator('[data-test="password"]').fill("secret_sauce");
//   await page.locator('[data-test="login-button"]').click();
//   await page.close();
// });

test("homepage ", async ({ page }) => {
//   await page.goto("https://saucedemo.com");
//   await page.locator('[data-test="username"]').fill("standard_user");
//   await page.locator('[data-test="password"]').fill("secret_sauce");
//   await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="item-1-title-link"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
//   await page.close();
});

test("logout", async ({ page }) => {
//   await page.goto("https://saucedemo.com");
//   await page.locator('[data-test="username"]').fill("standard_user");
//   await page.locator('[data-test="password"]').fill("secret_sauce");
//   await page.locator('[data-test="login-button"]').click();

  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();

//   await page.close();
});
