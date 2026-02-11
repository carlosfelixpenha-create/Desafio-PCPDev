import { test, expect } from '@playwright/test'

test('2 Pesquisar por Processo', async ({ page }) => {
  await page.goto('https://www.pcpdev.com.br/processos');

  const campoProcesso = page.locator('#processo');
  await campoProcesso.waitFor({ state: 'attached' });
  await campoProcesso.fill('123456');

  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();
  await expect(page).toHaveURL(/processos/);
  await expect(page).toHaveURL(/processo=123456/);
  await expect(page.locator('body')).toContainText('123456');
});
