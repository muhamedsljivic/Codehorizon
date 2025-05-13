import { By, WebDriver, until } from "selenium-webdriver";
import Page from "./Page";

class HomePage extends Page {
  private menuLoginLocator = By.xpath('//*[@id="profileName"]');
  private registerLocator = By.xpath('//*[@id="login-form"]//div[3]//a');
  private regFirstNameLocator = By.xpath('//*[@id="first_name"]');
  private regLastNameLocator = By.xpath('//*[@id="last_name"]');
  private regEmailLocator = By.xpath('//*[@id="email"]');
  private regPassLocator = By.xpath('//*[@id="password"]');
  private regSubmitLocator = By.xpath('//html//body//div//form//button');
  private loginEmailLocator = By.xpath('//html//body//main//div//div//form//div[1]//input');
  private loginPassLocator = By.xpath('//html//body//main//div//div//form//div[2]//input');
  private loginSubmitLocator = By.xpath('//*[@id="login-form"]//button');
  private browseElementLocator = By.xpath('//html//body//header//div//div//div//nav//ul//li[2]//a');
  private myProfileLocator = By.xpath('//html//body//div[2]//div//div//div//div[2]//div//div[2]//div[4]//div//a');
  private addFundsLocator = By.xpath('//*[@id="amountInput"]');
  private addButtonLocator = By.xpath('//*[@id="addButton"]');

  constructor(driver: WebDriver) {
    super(driver);
  }

  async clickLoginElement() {
    const menuElement = await this.driver.findElement(this.menuLoginLocator);
    await menuElement.click();
  }

  async clickRegisterElement() {
    const secondElement = await this.driver.findElement(this.registerLocator);
    await secondElement.click();
  }
  async enterFirstName(username: string) {
    const usernameElement = await this.driver.findElement(this.regFirstNameLocator);
    await usernameElement.sendKeys(username);
  }
  async enterLastName(lastname: string) {
    const usernameElement = await this.driver.findElement(this.regLastNameLocator);
    await usernameElement.sendKeys(lastname);
  }
  async enterEmail(email: string) {
    const usernameElement = await this.driver.findElement(this.regEmailLocator);
    await usernameElement.sendKeys(email);
  }
  async enterPassword(password: string) {
    const usernameElement = await this.driver.findElement(this.regPassLocator);
    await usernameElement.sendKeys(password);
  }
  async clickRegSubmit() {
    const firstElement = await this.driver.findElement(this.regSubmitLocator);
    await firstElement.click();
  }

  async enterEmailLogin(email: string) {
    const usernameElement = await this.driver.findElement(this.loginEmailLocator);
    await usernameElement.sendKeys(email);
  }
  async enterPasswordLogin(password: string) {
    const usernameElement = await this.driver.findElement(this.loginPassLocator);
    await usernameElement.sendKeys(password);
  }
  async clickLoginSubmit() {
    const firstElement = await this.driver.findElement(this.loginSubmitLocator);
    await firstElement.click();
  }
  async clickBrowse() {
    const firstElement = await this.driver.findElement(this.browseElementLocator);
    await firstElement.click();
  }
  async clickMyProfile() {
    const firstElement = await this.driver.findElement(this.myProfileLocator);
    await firstElement.click();
  }
  async addFunds(value: string) {
    const usernameElement = await this.driver.findElement(this.addFundsLocator);
    await usernameElement.sendKeys(value);
  }
  async clickAdd() {
    const firstElement = await this.driver.findElement(this.addButtonLocator);
    await firstElement.click();
  }
}

export default HomePage;

