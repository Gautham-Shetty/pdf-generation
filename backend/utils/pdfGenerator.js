const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

async function generatePdf(htmlContent, fileName) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent);
  const outputPath = path.join(__dirname, "..", "reports", fileName);

  await page.pdf({ path: outputPath, format: "A4" });
  await browser.close();
  return outputPath;
}

module.exports = generatePdf;
