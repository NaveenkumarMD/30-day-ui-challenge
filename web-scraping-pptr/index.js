const puppeteer = require("puppeteer");
var fs = require("fs");
var path = require("path");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.greatfrontend.com/prepare/coding");

  await page.setViewport({ width: 1080, height: 1024 });

  try {
    const ulElement = await page.waitForSelector(
      "ul.isolate.rounded-lg.divide-y.divide-neutral-200.dark\\:divide-neutral-800.border.border-neutral-200.dark\\:border-neutral-800"
    );

    if (ulElement) {
      const liElements = await page.$$eval(
        "ul.isolate.rounded-lg.divide-y.divide-neutral-200.dark\\:divide-neutral-800.border.border-neutral-200.dark\\:border-neutral-800 > li",
        (elements) => elements.map((el) => el.innerText)
      );

      const res = liElements.map((li) => {
        const parts = li.split("\n");
        const title = parts[0];
        const description = parts[1];
        const difficulty = parts[3];
        return {
          title,
          description,
          difficulty,
        };
      });
      await createDirandReadmeFile(res);
    } else {
      console.log("UL element not found");
    }
  } catch (error) {
    console.error(
      "Error while waiting for UL selector or querying LI elements:",
      error
    );
  }

  await browser.close();
})();

async function createDirandReadmeFile(res) {
  console.log(res[0]);
  let count = 0;
  res.forEach(async ({ title, description, difficulty }) => {
    count++;
    const dirPath = path.join(__dirname, "../", count.toString() + "-" + title);
    console.log(dirPath);
    fs.mkdirSync(dirPath, { recursive: true });
    const readmePath = path.join(dirPath, "README.md");
    fs.writeFileSync(
      readmePath,
      `Difficulty: ${difficulty}\nDescription: ${description}`
    );
  });
}
