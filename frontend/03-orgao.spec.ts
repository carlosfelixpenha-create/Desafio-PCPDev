import { test, expect } from '@playwright/test'

test('3 Pesquisar por Órgão', async ({ page }) => {
  await page.goto('https://www.pcpdev.com.br/processos');

  const campoOrgao = page.locator('#orgao');
  await campoOrgao.waitFor({ state: 'attached' });
  await campoOrgao.fill('Prefeitura');

  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();
  await expect(page).toHaveURL(/processos/);
  await expect(page).toHaveURL(/orgao=Prefeitura/);
  await expect(page.locator('body')).toContainText('Prefeitura');
});
