const fs = require("fs");
const puppeteer = require("puppeteer");

async function fetchApex() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.apexbar.com/menu");

  const beerData = await page.evaluate(() =>
    Array.from(document.querySelectorAll("td"), (e) => e.innerHTML)
  );

  const apexJSON = [];

  for (let i = 0; i < beerData.length; i += 6) {
    const chunk = beerData.slice(i, i + 6);
    apexJSON.push(
      (obj = {
        beerName: `${chunk[2]} ${chunk[0]}`,
        location: "Apex",
      })
    );
  }

  console.log(apexJSON);

  await browser.close();
}

async function fetchBelmontStation() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://www.taphunter.com/location/belmont-station/6549318358269952"
  );

  const beerData = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".media-body a"), (e) => e.innerHTML)
  );

  const belmontStationJSON = [];

  for (let i = 0; i < beerData.length; i++) {
    const chunk = beerData.slice(i, i + 6);
    belmontStationJSON.push(
      (obj = {
        beerName: chunk[0],
        location: "Belmont Station",
      })
    );
  }

  console.log(belmontStationJSON);

  await browser.close();
}

async function fetchRoscoes() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.roscoespdx.com/");

  const beerData = await page.evaluate(() =>
    Array.from(document.querySelectorAll("."), (e) => e.innerHTML)
  );

  const roscoesJSON = [];

  // for (let i = 0; i < beerData.length; i++) {
  //   const chunk = beerData.slice(i, i + 6);
  //   roscoesJSON.push(
  //     (obj = {
  //       beerName: chunk[0],
  //       location: "Roscoes",
  //     })
  //   );
  // }

  console.log(beerData);

  await browser.close();
}

async function fetchLoyalLegion() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://www.taphunter.com/location/belmont-station/6549318358269952"
  );

  const beerData = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".media-body a"), (e) => e.innerHTML)
  );

  const belmontStationJSON = [];

  for (let i = 0; i < beerData.length; i++) {
    const chunk = beerData.slice(i, i + 6);
    belmontStationJSON.push(
      (obj = {
        beerName: chunk[0],
        location: "Loyal Legion",
      })
    );
  }

  console.log(belmontStationJSON);

  await browser.close();
}

// fetchBelmontStation();
// fetchApex();
fetchRoscoes();
