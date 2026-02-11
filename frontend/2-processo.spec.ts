import { test, expect } from '@playwright/test'

test('2 Pesquisar por Processo', async ({ page }) => {
  await page.goto('https://www.pcpdev.com.br/processos');

  const campoProcesso = page.locator('#processo');
  await campoProcesso.waitFor({ state: 'attached' });
  await campoProcesso.fill('123456');

  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();

  // Valida que está na rota correta
  await expect(page).toHaveURL(/processos/);

  // Valida que o parâmetro foi enviado
  await expect(page).toHaveURL(/processo=123456/);

  // Valida que o número pesquisado aparece na listagem
  await expect(page.locator('body')).toContainText('123456');
});
