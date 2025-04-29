import { Page, Locator } from '@playwright/test';
import { Actions } from '../utils/Actions';
export class ProductPage {
  readonly action: Actions;
  readonly inputAddQuantity: Locator;
  readonly btnAddToCart: Locator;

  constructor(readonly page: Page) {
    this.page = page;
    this.action = new Actions();
    this.inputAddQuantity = page.getByRole('spinbutton', { name: 'Qty' });
    this.btnAddToCart = page.getByRole('button', { name: 'Añadir al carrito' });
  }

  async addQuantityOfProduct(quantity: any) {
    await this.action.fillOn(this.inputAddQuantity, quantity);
  }

  async addProduct() {
    await this.action.clickOn(this.btnAddToCart);
  }
}
