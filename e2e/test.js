
import puppetteer from 'puppeteer';

jest.setTimeout(180000); // default puppeteer timeout
describe('INN/OGRN form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 100,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });


  test('valid', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[class=validateForm]');
    const input = await form.$('[class=input]');
    await input.type('7715964180');
    const submit = await form.$('[class=button]');
    submit.click();
    await page.waitForSelector('[data-valid=valid]');
  });

  test('invalid', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[class=validateForm]');
    const input = await form.$('[class=input]');
    await input.type('1');
    const submit = await form.$('[class=button]');
    submit.click();
    await page.waitForSelector('[data-valid=invalid]');
  });
});