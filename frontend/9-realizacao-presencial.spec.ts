import { test, expect } from '@playwright/test'

test('9 Pesquisar por Realização: Presencial', async ({ page }) => {
  await page.goto('https://www.pcpdev.com.br/processos');

  // Abrir Busca Avançada
  await page.locator('.busca-av').click();

  // Selecionar Realização = Presencial (value="2")
  const selectRealizacao = page.locator('#Realizacao');
  await selectRealizacao.waitFor({ state: 'attached' });
  await selectRealizacao.selectOption('2');

  // Clicar em BUSCAR
  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();

  // Validar rota
  await expect(page).toHaveURL(/processos/);

  // Validar parâmetro enviado
  await expect(page).toHaveURL(/Realizacao=2/);

  // Validar retorno na tela
  await expect(page.locator('body')).toContainText('Presencial');
});
