import { test, expect } from '@playwright/test'

test('6 Pesquisar por Modalidade: Concorrência', async ({ page }) => {
  await page.goto('https://www.pcpdev.com.br/processos');

  await page.locator('.busca-av').click();

  const selectModalidade = page.locator('#Modalidade');
  await selectModalidade.waitFor({ state: 'attached' });
  await selectModalidade.selectOption('6');
  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();
  await expect(page).toHaveURL(/processos/);
  await expect(page).toHaveURL(/Modalidade=6/);
  await expect(page.locator('body')).toContainText('Concorrência');
});
