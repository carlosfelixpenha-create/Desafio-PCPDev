import { test, expect } from '@playwright/test';

test('14 Pesquisar por UF/Município: RJ/Rio de Janeiro', async ({ page }) => {
  // Abrir a página principal
  await page.goto('https://www.pcpdev.com.br');

  // Abrir a busca avançada
  const buscaAvancada = page.locator('a.busca-av');
  await buscaAvancada.click();
  await page.waitForTimeout(500); // esperar painel abrir

  // Selecionar UF
  const ufSelect = page.locator('#UF');
  await ufSelect.selectOption('100133'); // RJ
  await page.waitForTimeout(1000); // esperar carregamento do select de municípios

  // Selecionar Município pelo value correto direto
  const municipioSelect = page.locator('#municipios');
  await municipioSelect.selectOption('100133068'); // Rio de Janeiro

  // Clicar no botão BUSCAR
  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();

  // Validar que a URL contém os parâmetros corretos
  await expect(page).toHaveURL(/uf=100133/i);
  await expect(page).toHaveURL(/municipio=100133068/i);
  await expect(page).toHaveURL(/processos/i);
});
