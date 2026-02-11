import { test, expect } from '@playwright/test';

test('13 Pesquisar por UF/Município: AC/Acrelandia', async ({ page }) => {
  // Abrir a página principal
  await page.goto('https://www.pcpdev.com.br');

  // Abrir a busca avançada
  const buscaAvancada = page.locator('a.busca-av');
  await buscaAvancada.click();
  await page.waitForTimeout(500); // esperar painel abrir

  // Selecionar UF
  const ufSelect = page.locator('#UF');
  await ufSelect.selectOption('100112'); // AC

  // Esperar o select de municípios atualizar
  const municipioSelect = page.locator('#municipios');
  await page.waitForTimeout(500); // esperar carregamento inicial

  // Selecionar Município pelo value correto
  await municipioSelect.selectOption('100112001'); // Acrelândia

  // Clicar no botão BUSCAR
  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();

  // Validar que a URL contém os parâmetros corretos (minúsculo)
  await expect(page).toHaveURL(/uf=100112/i);
  await expect(page).toHaveURL(/municipio=100112001/i);
  await expect(page).toHaveURL(/processos/i);
});
