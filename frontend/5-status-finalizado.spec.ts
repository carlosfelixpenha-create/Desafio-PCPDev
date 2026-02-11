import { test, expect } from '@playwright/test'

test('5 Pesquisar por Status: Finalizado', async ({ page }) => {
  await page.goto('https://www.pcpdev.com.br/processos');

  // Abrir Busca Avançada
  await page.locator('.busca-av').click();

  // Selecionar Status = Finalizado (value="3")
  const selectStatus = page.locator('#Status');
  await selectStatus.waitFor({ state: 'attached' });
  await selectStatus.selectOption('3');

  // Clicar em BUSCAR
  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();

  // Validar que está na rota correta
  await expect(page).toHaveURL(/processos/);

  // Validar que o parâmetro foi enviado corretamente
  await expect(page).toHaveURL(/Status=3/);

  // Validar que aparece "Finalizado" na listagem
  await expect(page.locator('body')).toContainText('Finalizado');
});
