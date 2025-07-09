const { test, expect } = require("@playwright/test");
// import { test, expect } from '@playwright/test';
import { LoginPage } from "./login";

test("My first Test", async ({ page }) => {

    const Login = new LoginPage(page);
    Login.gotopage();
    Login.login('tomsmith','SuperSecretPassword!');
    Login.closepage();


//   await page.goto("https://the-internet.herokuapp.com/login");
//   await page.getByRole("textbox", { name: "Username" }).click();
//   await page.getByRole("textbox", { name: "Username" }).fill("tomsmith");
//   await page.getByRole("textbox", { name: "Password" }).click();
//   await page.getByRole("textbox", { name: "Password" }).fill("SuperSecretPassword!");
//   await page.getByRole("button", { name: " Login" }).click();
//   await page.getByRole("link", { name: "Logout" }).click();
  await page.pause();
});
