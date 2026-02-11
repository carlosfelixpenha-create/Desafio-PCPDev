import { test, expect } from '@playwright/test'

test('4 Pesquisar por Status: Em Andamento', async ({ page }) => {
  await page.goto('https://www.pcpdev.com.br/processos');

  await page.locator('.busca-av').click();

  const selectStatus = page.locator('#Status');
  await selectStatus.waitFor({ state: 'attached' });
  await selectStatus.selectOption('2');
  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();
  await expect(page).toHaveURL(/processos/);
  await expect(page).toHaveURL(/Status=2/);
  await expect(page.locator('body')).toContainText('Em Andamento');
});
