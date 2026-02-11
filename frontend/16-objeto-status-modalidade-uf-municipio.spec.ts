import { test, expect } from '@playwright/test';

test('16 Combinar Objeto + Status + Modalidade + UF/Município', async ({ page }) => {
  await page.goto('https://www.pcpdev.com.br');

  const buscaAvancada = page.locator('a.busca-av');
  await buscaAvancada.click();
  await page.waitForTimeout(500);

  const campoObjeto = page.locator('#objeto');
  await campoObjeto.fill('Compra de materiais');
  await page.waitForTimeout(300);

  const statusSelect = page.locator('#Status');
  await statusSelect.selectOption('2');
  await page.waitForTimeout(300);

  const modalidadeSelect = page.locator('#Modalidade');
  await modalidadeSelect.selectOption('6');
  await page.waitForTimeout(300);

const ufSelect = page.locator('#UF');
await ufSelect.selectOption('100135');
await page.waitForTimeout(1000);

const municipioSelect = page.locator('#municipios');
await municipioSelect.locator('option', { hasText: 'São Paulo' }).waitFor({ state: 'attached' });
await municipioSelect.selectOption('100135565');
  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();
  await expect(page).toHaveURL(/objeto=Compra%20de%20materiais/i);
  await expect(page).toHaveURL(/Status=2/i);
  await expect(page).toHaveURL(/Modalidade=6/i);
  await expect(page).toHaveURL(/uf=100135/i);
  await expect(page).toHaveURL(/municipio=100135565/i);
  await expect(page).toHaveURL(/processos/i);

  await expect(page.locator('body')).toContainText('Compra de materiais');
});
