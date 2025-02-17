const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false }); // GUI সহ চালানোর জন্য
    const page = await browser.newPage();

    await page.goto('https://www.facebook.com/login');

    // Gmail ইনপুট করো
    await page.type('input[name="email"]', 'your-email@gmail.com', { delay: 100 });

    // Password ইনপুট করো
    await page.type('input[name="pass"]', 'your-password', { delay: 100 });

    // Login button এ ক্লিক করো
    await page.click('button[name="login"]');

    // কিছুক্ষণ অপেক্ষা করো যাতে লগইন হয়
    await page.waitForNavigation();

    console.log('Logged in Successfully!');

    // Browser বন্ধ করো
    await browser.close();
})();
