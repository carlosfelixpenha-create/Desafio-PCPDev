import { test, expect } from '@playwright/test';

test('12 Pesquisar por Período - selecionar datas em fevereiro', async ({ page }) => {

  await page.goto('https://www.pcpdev.com.br');

  await page.locator('a.busca-av').click();
  await page.waitForTimeout(500);

  await page.locator('label[for="periodo"]').click();
  await page.waitForTimeout(500);
  const labelAbertura = page.locator('label[for="customRadioInline1"]');
  await labelAbertura.waitFor({ state: 'visible' });
  await labelAbertura.click();

  const calendario = page.locator('.calendario-block .vfc-span-day.vfc-hover:not(.vfc-hide)');
  const diaInicio = calendario.filter({ hasText: '1' }).first();   // 01/02/2026
  const diaFim = calendario.filter({ hasText: '10' }).first();    // 10/02/2026

  await diaInicio.click();
  await diaFim.click();

  await page.getByRole('link', { name: 'BUSCAR', exact: true }).click();
  await expect(page).toHaveURL(/dataInicial=2026-02-01/);
  await expect(page).toHaveURL(/dataFinal=2026-02-10/);
  await expect(page).toHaveURL(/processos/);
});
