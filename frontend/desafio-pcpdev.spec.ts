import { test, expect } from '@playwright/test';

// Configuração visual
test.use({ headless: false, viewport: { width: 1280, height: 720 }, launchOptions: { slowMo: 500 } });

// URL base do PCPDev
const BASE_URL = 'https://www.pcpdev.com.br/';

//////////////////////////
// 1️⃣ Campo básico: Objeto
//////////////////////////
test('1️⃣ Pesquisar por Objeto', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.fill('#objeto', 'Compra de materiais');
  await page.click('.btn-pesquisa-p');
  await page.waitForSelector('table tbody tr');
});

//////////////////////////
// 2️⃣ Campo básico: Processo
//////////////////////////
test('2️⃣ Pesquisar por Processo', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.fill('#processo', '12345');
  await page.click('.btn-pesquisa-p');
  await page.waitForSelector('table tbody tr');
});

//////////////////////////
// 3️⃣ Campo básico: Órgão
//////////////////////////
test('3️⃣ Pesquisar por Órgão', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.fill('#orgao', 'Prefeitura Municipal');
  await page.click('.btn-pesquisa-p');
  await page.waitForSelector('table tbody tr');
});

//////////////////////////
// 4️⃣ Status representativo
//////////////////////////
test('4️⃣ Pesquisar por Status: Em Andamento', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.click('.busca-av');
  await page.selectOption('#Status', '2'); // Em Andamento
  await page.click('.btn-pesquisa-p');
  await page.waitForSelector('table tbody tr');
});

test('5️⃣ Pesquisar por Status: Finalizado', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.click('.busca-av');
  await page.selectOption('#Status', '3'); // Finalizado
  await page.click('.btn-pesquisa-p');
  await page.waitForSelector('table tbody tr');
});

//////////////////////////
// 6️⃣ Modalidade representativa
//////////////////////////
test('6️⃣ Pesquisar por Modalidade: Concorrência', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.click('.busca-av');
  await page.selectOption('#Modalidade', '6'); // Concorrência
  await page.click('.btn-pesquisa-p');
  await page.waitForSelector('table tbody tr');
});

test('7️⃣ Pesquisar por Modalidade: Pregão', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.click('.busca-av');
  await page.selectOption('#Modalidade', '1'); // Pregão
  await page.click('.btn-pesquisa-p');
  await page.waitForSelector('table tbody tr');
});

//////////////////////////
// 8️⃣ Realização representativa
//////////////////////////
test('8️⃣ Pesquisar por Realização: Eletrônico', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.click('.busca-av');
  await page.selectOption('#Realizacao', '1'); // Eletrônico
  await page.click('.btn-pesquisa-p');
  await page.waitForSelector('table tbody tr');
});

test('9️⃣ Pesquisar por Realização: Presencial', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.click('.busca-av');
  await page.selectOption('#Realizacao', '2'); // Presencial
  await page.click('.btn-pesquisa-p');
  await page.waitForSelector('table tbody tr');
});

//////////////////////////
// 10️⃣ Julgamento representativo
//////////////////////////
test('10️⃣ Pesquisar por Julgamento: Técnica', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.click('.busca-av');
  await page.selectOption('#julgamento', '7'); // Técnica
  await page.click('.btn-pesquisa-p');
  await page.waitForSelector('table tbody tr');
});

test('11️⃣ Pesquisar por Julgamento: Maior Desconto', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.click('.busca-av');
  await page.selectOption('#julgamento', '3'); // Maior Desconto
  await page.click('.btn-pesquisa-p');
  await page.waitForSelector('table tbody tr');
});

//////////////////////////
// 12️⃣ Período (apenas labels por enquanto)
//////////////////////////
test('12️⃣ Pesquisar por Período', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.click('.busca-av');

  // Aqui você pode clicar nos labels ou preencher datas se existirem inputs
  await page.click('label[for="customRadioInline1"]'); // Abertura
  await page.click('label[for="customRadioInline2"]'); // Publicação

  await page.click('.btn-pesquisa-p');
  await page.waitForSelector('table tbody tr');
});

//////////////////////////
// 13️⃣ UF/Município representativos
//////////////////////////
test('13️⃣ Pesquisar por UF/Município: AC/Acrelandia', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.click('.busca-av');
  await page.selectOption('#UF', '100112'); // AC
  await page.selectOption('#municipios', '100129173'); // Irará
  await page.click('.btn-pesquisa-p');
  await page.waitForSelector('table tbody tr');
});

test('14️⃣ Pesquisar por UF/Município: RJ/Rio de Janeiro', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.click('.busca-av');
  await page.selectOption('#UF', '100133'); // RJ
  await page.selectOption('#municipios', '100133001'); // Rio de Janeiro (ajuste conforme HTML real)
  await page.click('.btn-pesquisa-p');
  await page.waitForSelector('table tbody tr');
});

test('15️⃣ Pesquisar por UF/Município: SP/São Paulo', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.click('.busca-av');
  await page.selectOption('#UF', '100135'); // SP
  await page.selectOption('#municipios', '100135001'); // São Paulo (ajuste conforme HTML real)
  await page.click('.btn-pesquisa-p');
  await page.waitForSelector('table tbody tr');
});

//////////////////////////
// 16️⃣ Cenário combinado chave
//////////////////////////
test('16️⃣ Combinar Objeto + Status + Modalidade + UF/Município', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.click('.busca-av');

  await page.fill('#objeto', 'Compra de materiais');
  await page.selectOption('#Status', '2'); // Em Andamento
  await page.selectOption('#Modalidade', '6'); // Concorrência
  await page.selectOption('#UF', '100135'); // SP
  await page.selectOption('#municipios', '100135001'); // São Paulo

  await page.click('.btn-pesquisa-p');
  await page.waitForSelector('table tbody tr');
});
