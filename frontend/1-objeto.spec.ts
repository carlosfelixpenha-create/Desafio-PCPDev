import { test, expect } from '@playwright/test'

test('1 Pesquisar por Objeto', async ({ page }) => {
  await page.goto('https://www.pcpdev.com.br');

  const campoObjeto = page.locator('#objeto');
  await campoObjeto.waitFor({ state: 'attached' });
  await campoObjeto.fill('Compra de materiais');
  //await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();
  //await page.waitForTimeout(2000);
  await expect(page).toHaveURL(/objeto=Compra%20de%20materiais/);
  await expect(page).toHaveURL(/processos/);
  //await page.waitForTimeout(2000);
});
