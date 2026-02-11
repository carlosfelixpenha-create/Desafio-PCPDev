import { test, expect } from '@playwright/test'

test('6 Pesquisar por Modalidade: Concorrência', async ({ page }) => {
  await page.goto('https://www.pcpdev.com.br/processos');

  // Abrir Busca Avançada
  await page.locator('.busca-av').click();

  // Selecionar Modalidade = Concorrência (value="6")
  const selectModalidade = page.locator('#Modalidade');
  await selectModalidade.waitFor({ state: 'attached' });
  await selectModalidade.selectOption('6');

  // Clicar em BUSCAR
  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();

  // Validar rota
  await expect(page).toHaveURL(/processos/);

  // Validar parâmetro enviado
  await expect(page).toHaveURL(/Modalidade=6/);

  // Validar retorno na tela
  await expect(page.locator('body')).toContainText('Concorrência');
});
