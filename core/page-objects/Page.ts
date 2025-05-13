import { By, WebDriver } from "selenium-webdriver";
import * as data from "../data/data.json";

class Page {
  protected driver: WebDriver;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  async open() {
    await this.driver.get(data.url);
  }
}

export default Page;
