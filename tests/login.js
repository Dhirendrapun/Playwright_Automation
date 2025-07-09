exports.LoginPage = class LoginPage {
  constructor(page) {

    this.page = page;
    this.username_textbox = page
      .getByRole("textbox", { name: "Username" })
    this.password_textbox = page
      .getByRole("textbox", { name: "Password" })
    this.login_button = page.getByRole("button", { name: " Login" })
    this.logout_button = page.getByRole("link", { name: "Logout" })
  }

  async gotopage(){
    await this.page.goto('https://the-internet.herokuapp.com/login')
  }
  async closepage(){
    await this.page.getByRole("link", { name: "Logout" }).click();
  }

  async login(Username,Password){
    await this.username_textbox.fill(Username);
    await this.password_textbox.fill(Password);
    await this.login_button.click();
  }
}
