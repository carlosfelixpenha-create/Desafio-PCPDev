import { test, expect } from '@playwright/test'

test('7 Pesquisar por Modalidade: Pregão', async ({ page }) => {
  await page.goto('https://www.pcpdev.com.br/processos');

  // Abrir Busca Avançada
  await page.locator('.busca-av').click();

  // Selecionar Modalidade = Pregão (value="1")
  const selectModalidade = page.locator('#Modalidade');
  await selectModalidade.waitFor({ state: 'attached' });
  await selectModalidade.selectOption('1');

  // Clicar em BUSCAR
  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();

  // Validar rota
  await expect(page).toHaveURL(/processos/);

  // Validar parâmetro enviado
  await expect(page).toHaveURL(/Modalidade=1/);

  // Validar retorno na tela
  await expect(page.locator('body')).toContainText('Pregão');
});
