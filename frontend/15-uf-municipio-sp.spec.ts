import { test, expect } from '@playwright/test';

test('15 Pesquisar por UF/Município: SP/São Paulo', async ({ page }) => {
  // Abrir a página principal
  await page.goto('https://www.pcpdev.com.br');

  // Abrir a busca avançada
  const buscaAvancada = page.locator('a.busca-av');
  await buscaAvancada.click();
  await page.waitForTimeout(500); // esperar painel abrir

  // Selecionar UF
  const ufSelect = page.locator('#UF');
  await ufSelect.selectOption('100135'); // SP
  await page.waitForTimeout(1000); // esperar carregamento do select de municípios

  // Selecionar Município pelo value correto
  const municipioSelect = page.locator('#municipios');
  const municipioOption = municipioSelect.locator('option:not([value="0"])'); // ignora a opção "Municipios"
  await expect(municipioOption).toContainText('São Paulo'); // garante que a option está carregada
  await municipioSelect.selectOption('100135565'); // valor atualizado de São Paulo

  // Clicar no botão BUSCAR
  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();

  // Validar que a URL contém os parâmetros corretos
  await expect(page).toHaveURL(/uf=100135/i);
  await expect(page).toHaveURL(/municipio=100135565/i);
  await expect(page).toHaveURL(/processos/i);
});
