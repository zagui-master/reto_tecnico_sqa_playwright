import { Locator } from '@playwright/test';

export class Actions {
  async tryAction(action: () => Promise<void>) {
    try {
      await action();
    } catch (error) {
      throw new Error(`The action could not be performed -> ${error.message}`);
    }
  }

  async fillOn(locator: Locator, value: any) {
    await this.tryAction(() => locator.fill(value));
  }

  async clickOn(locator: Locator) {
    await this.tryAction(() => locator.click());
  }

  async pressKeyOn(locator: Locator, key: string) {
    await this.tryAction(() => locator.press(key));
  }

  async getRandomNumberToString(): Promise<string> {
    let randomQuantity = Math.floor(Math.random() * 5);
    let quantity = randomQuantity.toString();
    return quantity;
  }
}
