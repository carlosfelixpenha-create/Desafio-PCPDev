import { test, expect } from '@playwright/test';

test('16 Combinar Objeto + Status + Modalidade + UF/Município', async ({ page }) => {
  // Abrir a página principal
  await page.goto('https://www.pcpdev.com.br');

  // Abrir a busca avançada
  const buscaAvancada = page.locator('a.busca-av');
  await buscaAvancada.click();
  await page.waitForTimeout(500); // esperar painel abrir

  //  Preencher Objeto
  const campoObjeto = page.locator('#objeto');
  await campoObjeto.fill('Compra de materiais');
  await page.waitForTimeout(300);

  //  Selecionar Status
  const statusSelect = page.locator('#Status');
  await statusSelect.selectOption('2'); // Em Andamento
  await page.waitForTimeout(300);

  //  Selecionar Modalidade
  const modalidadeSelect = page.locator('#Modalidade');
  await modalidadeSelect.selectOption('6'); // Concorrência
  await page.waitForTimeout(300);

  //  Selecionar UF
const ufSelect = page.locator('#UF');
await ufSelect.selectOption('100135'); // SP
await page.waitForTimeout(1000); // esperar carregamento do select de municípios

  //  Selecionar Município
const municipioSelect = page.locator('#municipios');
  // Esperar até que a opção desejada exista no DOM
await municipioSelect.locator('option', { hasText: 'São Paulo' }).waitFor({ state: 'attached' });
  // Agora seleciona
await municipioSelect.selectOption('100135565'); // São Paulo


  //  Clicar no botão BUSCAR
  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();

  //  Validar URL contendo todos os parâmetros
  await expect(page).toHaveURL(/objeto=Compra%20de%20materiais/i);
  await expect(page).toHaveURL(/Status=2/i);
  await expect(page).toHaveURL(/Modalidade=6/i);
  await expect(page).toHaveURL(/uf=100135/i);
  await expect(page).toHaveURL(/municipio=100135565/i);
  await expect(page).toHaveURL(/processos/i);

  //  Validar se o retorno contém algum texto esperado da busca
  await expect(page.locator('body')).toContainText('Compra de materiais');
});
