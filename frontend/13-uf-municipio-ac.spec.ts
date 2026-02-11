import { test, expect } from '@playwright/test';

test('13 Pesquisar por UF/Município: AC/Acrelandia', async ({ page }) => {

  await page.goto('https://www.pcpdev.com.br');

  const buscaAvancada = page.locator('a.busca-av');
  await buscaAvancada.click();
  await page.waitForTimeout(500);

  const ufSelect = page.locator('#UF');
  await ufSelect.selectOption('100112');
  const municipioSelect = page.locator('#municipios');
  await page.waitForTimeout(500);
  await municipioSelect.selectOption('100112001');
  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();
  await expect(page).toHaveURL(/uf=100112/i);
  await expect(page).toHaveURL(/municipio=100112001/i);
  await expect(page).toHaveURL(/processos/i);
});
