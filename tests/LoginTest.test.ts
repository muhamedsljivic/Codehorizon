import { Builder, WebDriver } from "selenium-webdriver";
import HomePage from "../core/page-objects/HomePage";
import Page from "../core/page-objects/Page";
import { createDriver, quitDriver } from "../core/config/driver-setup";

describe("SkillSpace Test", () => {
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

  test("Login Test", async () => {
    await page.open();
    await driver.sleep(2000);
    await homePage.clickLoginElement();
    await driver.sleep(2000);
    const pageTitle = await driver.getTitle();
    expect(pageTitle).toEqual("Web Project 2");


    await driver.sleep(2000);
    await homePage.enterEmailLogin("dino.krso@hotmail.com");
    await driver.sleep(2000);
    await homePage.enterPasswordLogin("pass123123");
    await driver.sleep(2000);
    await homePage.clickLoginSubmit();
    await driver.sleep(2000);
  },25000);
});