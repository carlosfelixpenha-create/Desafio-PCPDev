import { test, expect } from '@playwright/test'

test('10 Pesquisar por Julgamento: Técnica', async ({ page }) => {
  await page.goto('https://www.pcpdev.com.br/processos');

  // Abrir Busca Avançada
  await page.locator('.busca-av').click();

  // Selecionar Julgamento = Técnica (value="7")
  const selectJulgamento = page.locator('#julgamento');
  await selectJulgamento.waitFor({ state: 'attached' });
  await selectJulgamento.selectOption('7');

  // Clicar em BUSCAR
  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();

  // Validar rota
  await expect(page).toHaveURL(/processos/);

  // Validar parâmetro enviado (ajustado)
  await expect(page).toHaveURL(/codigoJulgamento=7/);

  // Validar retorno na tela
  await expect(page.locator('body')).toContainText('Técnica');
});
