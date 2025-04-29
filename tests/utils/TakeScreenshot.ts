import { Page, TestInfo } from '@playwright/test';

export class TakeScreenshot {
  constructor(readonly page: Page) {
    this.page = page;
  }

  async takeScreenshot(testInfo: TestInfo, fullPage?: boolean) {
    const screenshot = await this.page.screenshot({
      fullPage: fullPage ?? false,
    });
    await testInfo.attach('screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });
  }
}
