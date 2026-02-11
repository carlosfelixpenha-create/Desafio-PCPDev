import { test, expect } from '@playwright/test'

test('11 Pesquisar por Julgamento: Maior Desconto', async ({ page }) => {
  await page.goto('https://www.pcpdev.com.br/processos');

  // Abrir Busca Avançada
  await page.locator('.busca-av').click();

  // Selecionar Julgamento = Maior Desconto (value="3")
  const selectJulgamento = page.locator('#julgamento');
  await selectJulgamento.waitFor({ state: 'attached' });
  await selectJulgamento.selectOption('3');

  // Clicar em BUSCAR
  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();

  // Validar rota
  await expect(page).toHaveURL(/processos/);

  // Validar parâmetro enviado
  await expect(page).toHaveURL(/codigoJulgamento=3/);

  // Validar retorno na tela
  await expect(page.locator('body')).toContainText('Maior Desconto');
});
