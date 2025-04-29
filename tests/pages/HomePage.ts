import { Page, Locator } from '@playwright/test';
import { Actions } from '../utils/Actions';

export class HomePage {
  readonly action: Actions;
  readonly productItem: Locator;

  constructor(readonly page: Page) {
    this.page = page;
    this.action = new Actions();
    this.productItem = page.locator('//ul[@class="products columns-3"]//li');
  }

  async chooseProduct(productPosition?: number) {
    const products = await this.productItem.all();
    const getRandomNumber = Math.floor(Math.random() * products.length);
    const product = products[productPosition ?? getRandomNumber];
    await this.action.clickOn(product);
  }
}
