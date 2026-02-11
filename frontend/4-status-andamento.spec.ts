import { test, expect } from '@playwright/test'

test('4 Pesquisar por Status: Em Andamento', async ({ page }) => {
  await page.goto('https://www.pcpdev.com.br/processos');

  // Abrir Busca Avançada
  await page.locator('.busca-av').click();

  // Selecionar Status = Em Andamento (value="2")
  const selectStatus = page.locator('#Status');
  await selectStatus.waitFor({ state: 'attached' });
  await selectStatus.selectOption('2');

  // Clicar em BUSCAR
  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();

  // Validar que está na rota correta
  await expect(page).toHaveURL(/processos/);

  // Validar que o parâmetro foi enviado corretamente
  await expect(page).toHaveURL(/Status=2/);

  // Validar que aparece "Em Andamento" na listagem
  await expect(page.locator('body')).toContainText('Em Andamento');
});
