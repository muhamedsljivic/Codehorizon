import { Builder, WebDriver } from "selenium-webdriver";
import HomePage from "../core/page-objects/HomePage";
import Page from "../core/page-objects/Page";
import { createDriver, quitDriver } from "../core/config/driver-setup";

describe("CodeHorizon Test", () => {
  let driver: WebDriver;
  let page: Page;
  let homePage: HomePage;

  beforeAll(async () => {
    driver = await createDriver();
    page = new Page(driver);
    homePage = new HomePage(driver);
  }, 30000);

  afterAll(async () => {
    await quitDriver(driver);
  }, 5000);

  test("Registration Flow Test", async () => {
    await page.open();
    await driver.sleep(2000);
    await homePage.clickLoginElement();
    await driver.sleep(2000);
    const pageTitle = await driver.getTitle();
    expect(pageTitle).toEqual("Web Project 2");

    await homePage.clickRegisterElement();
    await driver.sleep(2000);
    const pageAbout = await driver.getTitle();
    expect(pageAbout).toEqual("");


    await homePage.enterFirstName("nedzad");
    await driver.sleep(2000);
    await homePage.enterLastName("Husic");
    await driver.sleep(2000);
    await homePage.enterEmail("nedzadhusic20001@gmail.com");
    await driver.sleep(2000);
    await homePage.enterPassword("nele230119");
    await driver.sleep(2000);
    await homePage.clickRegSubmit();
    await driver.sleep(2000);
  },25000);
});