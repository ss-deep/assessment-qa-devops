const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  setTimeout(() => { 
    driver.quit();
  },4000)
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);

    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.className('bot-btn')).click()

  });
});