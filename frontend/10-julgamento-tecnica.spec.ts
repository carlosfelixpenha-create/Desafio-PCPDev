import { test, expect } from '@playwright/test'

test('10 Pesquisar por Julgamento: Técnica', async ({ page }) => {
  await page.goto('https://www.pcpdev.com.br/processos');

  await page.locator('.busca-av').click();
  
  const selectJulgamento = page.locator('#julgamento');
  await selectJulgamento.waitFor({ state: 'attached' });
  await selectJulgamento.selectOption('7');
  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();
  await expect(page).toHaveURL(/processos/);
  await expect(page).toHaveURL(/codigoJulgamento=7/);
  await expect(page.locator('body')).toContainText('Técnica');
});
