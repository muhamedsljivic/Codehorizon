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

  test("Add Funds Test", async () => {
    await page.open();
    await driver.sleep(2000);
    await homePage.clickBrowse();
    await driver.sleep(2000);
    await homePage.clickMyProfile() ;
    await driver.sleep(2000);
    await homePage.addFunds("200");
    await driver.sleep(2000);
    await homePage.clickAdd();
    const pageTitle = await driver.getTitle();
    expect(pageTitle).toEqual("");
  },25000);
});