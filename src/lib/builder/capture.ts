import type { SourceRecipe } from "./recipe";
import { defaultRenderedTextMinLength } from "./render-wait";
import { captureKuaishouDocumentHtml, isKuaishouDocsUrl } from "./kuaishou";

export async function captureHtml(recipe: SourceRecipe): Promise<string> {
  if (isKuaishouDocsUrl(recipe.url)) {
    return captureKuaishouDocumentHtml(recipe.url);
  }

  if (recipe.capture.mode === "fetch") {
    return fetchHtml(recipe.url);
  }

  return captureWithPlaywright(recipe);
}

async function fetchHtml(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: {
      "user-agent": "adcli-builder/0.1",
    },
  });

  if (!response.ok) {
    throw new Error(`failed to fetch ${url}: HTTP ${response.status}`);
  }

  return response.text();
}

async function captureWithPlaywright(recipe: SourceRecipe): Promise<string> {
  const { chromium } = await import("playwright");
  const browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage();
    await page.goto(recipe.url, { waitUntil: "domcontentloaded", timeout: 60_000 });

    if (recipe.capture.wait_for) {
      await page.waitForSelector(recipe.capture.wait_for, { timeout: 15_000 });
    }

    await page
      .waitForFunction(
        (minLength) => document.body.innerText.trim().length >= minLength,
        defaultRenderedTextMinLength,
        { timeout: 15_000 },
      )
      .catch(() => undefined);

    if (page.isClosed()) {
      throw new Error(`page was closed while capturing ${recipe.url}`);
    }

    const content = await page.content();
    return content;
  } finally {
    await browser.close();
  }
}
