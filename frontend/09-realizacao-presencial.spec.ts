import { test, expect } from '@playwright/test'

test('9 Pesquisar por Realização: Presencial', async ({ page }) => {
  await page.goto('https://www.pcpdev.com.br/processos');

  await page.locator('.busca-av').click();

  const selectRealizacao = page.locator('#Realizacao');
  await selectRealizacao.waitFor({ state: 'attached' });
  await selectRealizacao.selectOption('2');
  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();
  await expect(page).toHaveURL(/processos/);
  await expect(page).toHaveURL(/Realizacao=2/);
  await expect(page.locator('body')).toContainText('Presencial');
});
