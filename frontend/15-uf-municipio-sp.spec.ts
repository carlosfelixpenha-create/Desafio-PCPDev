import { test, expect } from '@playwright/test';

test('15 Pesquisar por UF/Município: SP/São Paulo', async ({ page }) => {
 
  await page.goto('https://www.pcpdev.com.br');

  const buscaAvancada = page.locator('a.busca-av');
  await buscaAvancada.click();
  await page.waitForTimeout(500);

  const ufSelect = page.locator('#UF');
  await ufSelect.selectOption('100135');
  await page.waitForTimeout(1000);

  const municipioSelect = page.locator('#municipios');
  const municipioOption = municipioSelect.locator('option:not([value="0"])');
  await expect(municipioOption).toContainText('São Paulo');
  await municipioSelect.selectOption('100135565');
  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();
  await expect(page).toHaveURL(/uf=100135/i);
  await expect(page).toHaveURL(/municipio=100135565/i);
  await expect(page).toHaveURL(/processos/i);
});
