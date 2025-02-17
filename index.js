const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'] // ✅ স্যান্ডবক্স বন্ধ করা হলো
  });
  console.log('Puppeteer Version:', puppeteer.version);
  const page = await browser.newPage();
  await page.goto('https://example.com');
  console.log('Page Title:', await page.title());
  await browser.close();
})();
