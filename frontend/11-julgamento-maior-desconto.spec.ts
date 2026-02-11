import { test, expect } from '@playwright/test'

test('11 Pesquisar por Julgamento: Maior Desconto', async ({ page }) => {
  await page.goto('https://www.pcpdev.com.br/processos');

  await page.locator('.busca-av').click();

  const selectJulgamento = page.locator('#julgamento');
  await selectJulgamento.waitFor({ state: 'attached' });
  await selectJulgamento.selectOption('3');
  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();
  await expect(page).toHaveURL(/processos/);
  await expect(page).toHaveURL(/codigoJulgamento=3/);
  await expect(page.locator('body')).toContainText('Maior Desconto');
});
