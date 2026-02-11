import { test, expect } from '@playwright/test'

test('3 Pesquisar por Órgão', async ({ page }) => {
  await page.goto('https://www.pcpdev.com.br/processos');

  const campoOrgao = page.locator('#orgao');
  await campoOrgao.waitFor({ state: 'attached' });
  await campoOrgao.fill('Prefeitura');

  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();

  // Valida que está na rota correta
  await expect(page).toHaveURL(/processos/);

  // Valida que o parâmetro foi enviado
  await expect(page).toHaveURL(/orgao=Prefeitura/);

  // Valida que o texto pesquisado aparece na listagem
  await expect(page.locator('body')).toContainText('Prefeitura');
});
