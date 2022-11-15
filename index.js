const fs = require("fs");
const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.apexbar.com/menu");

  const html = await page.content();

  const tableData = await page.evaluate(() =>
    Array.from(document.querySelectorAll("td"), (e) => e.innerHTML)
  );

  const apexJSON = [];

  for (let i = 0; i < tableData.length; i += 6) {
    const chunk = tableData.slice(i, i + 6);
    apexJSON.push(
      (obj = {
        beerName: chunk[0],
        price: chunk[1],
        brewery: chunk[2],
        state: chunk[3],
        alcohol: chunk[4],
        size: chunk[5],
      })
    );
  }

  console.log(apexJSON);

  await browser.close();
}

run();
