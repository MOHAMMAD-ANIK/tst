const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  console.log('Puppeteer Version:', puppeteer.version); // ✅ ফাংশন নয়, তাই () লাগবে না
  const page = await browser.newPage();
  await page.goto('https://example.com');
  console.log('Page Title:', await page.title());
  await browser.close();
})();
