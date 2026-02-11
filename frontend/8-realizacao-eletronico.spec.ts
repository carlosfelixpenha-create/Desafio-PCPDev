import { test, expect } from '@playwright/test'

test('8 Pesquisar por Realização: Eletrônico', async ({ page }) => {
  await page.goto('https://www.pcpdev.com.br/processos');

  // Abrir Busca Avançada
  await page.locator('.busca-av').click();

  // Selecionar Realização = Eletrônico (value="1")
  const selectRealizacao = page.locator('#Realizacao');
  await selectRealizacao.waitFor({ state: 'attached' });
  await selectRealizacao.selectOption('1');

  // Clicar em BUSCAR
  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();

  // Validar rota
  await expect(page).toHaveURL(/processos/);

  // Validar parâmetro enviado
  await expect(page).toHaveURL(/Realizacao=1/);

  // Validar retorno na tela
  await expect(page.locator('body')).toContainText('Eletrônico');
});
