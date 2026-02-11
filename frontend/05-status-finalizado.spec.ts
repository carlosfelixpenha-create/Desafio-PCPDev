import { test, expect } from '@playwright/test'

test('5 Pesquisar por Status: Finalizado', async ({ page }) => {
  await page.goto('https://www.pcpdev.com.br/processos');

  await page.locator('.busca-av').click();

  const selectStatus = page.locator('#Status');
  await selectStatus.waitFor({ state: 'attached' });
  await selectStatus.selectOption('3');
  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();
  await expect(page).toHaveURL(/processos/);
  await expect(page).toHaveURL(/Status=3/);
  await expect(page.locator('body')).toContainText('Finalizado');
});
