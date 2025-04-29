import { test, expect } from '@playwright/test';
import { TakeScreenshot } from '../utils/TakeScreenshot';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductoPage';

test.describe('Verificar el correcto funcionamiento de los principales módulos del sitio web sanangel', () => {
  let homePage: HomePage;
  let productPage: ProductPage;
  let take: TakeScreenshot;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    take = new TakeScreenshot(page);
    await page.goto('');
    await homePage.chooseProduct();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test.use({
    viewport: { width: 1200, height: 900 },
  });

  test('Verificar que el sistema permite agregar 2 cantidades de productos al carrito de compras', async ({
    page,
  }, testInfo) => {
    await productPage.addQuantityOfProduct('2');
    await take.takeScreenshot(testInfo);
    await productPage.addProduct();
    await expect(productPage.inputAddQuantity).toHaveValue('2');
    await take.takeScreenshot(testInfo);
  });

  test('Verificar que el sistema permite agregar 5 cantidades de productos al carrito de compras', async ({
    page,
  }, testInfo) => {
    await productPage.addQuantityOfProduct('5');
    await take.takeScreenshot(testInfo);
    await productPage.addProduct();
    await expect(productPage.inputAddQuantity).toHaveValue('5');
    await take.takeScreenshot(testInfo);
  });

  test('Verificar que el sistema permite agregar una cantidades aleatoria de productos al carrito de compras', async ({
    page,
  }, testInfo) => {
    const quantity = await productPage.action.getRandomNumberToString();
    await productPage.addQuantityOfProduct(quantity);
    await take.takeScreenshot(testInfo);
    await productPage.addProduct();
    await expect(productPage.inputAddQuantity).toHaveValue(quantity);
    await take.takeScreenshot(testInfo);
  });
});
