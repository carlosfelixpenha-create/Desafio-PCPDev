# Desafio PCPDev - Testes Automatizados com Playwright

Este repositório contém os testes automatizados desenvolvidos para o desafio PCPDev, utilizando **Playwright**.

---

## Estrutura do Projeto

- `frontend/` - Contém todos os arquivos de teste.
  - `01-objeto.spec.ts` → Testa a pesquisa por **Objeto**.
  - `02-processo.spec.ts` → Testa a pesquisa por **Processo**.
  - `03-orgao.spec.ts` → Testa a pesquisa por **Órgão**.
  - `04-status-andamento.spec.ts` → Testa pesquisa por **Status: Em Andamento**.
  - `05-status-finalizado.spec.ts` → Testa pesquisa por **Status: Finalizado**.
  - `06-modalidade-concorrencia.spec.ts` → Testa pesquisa por **Modalidade: Concorrência**.
  - `07-modalidade-pregao.spec.ts` → Testa pesquisa por **Modalidade: Pregão**.
  - `08-realizacao-eletronico.spec.ts` → Testa pesquisa por **Realização: Eletrônico**.
  - `09-realizacao-presencial.spec.ts` → Testa pesquisa por **Realização: Presencial**.
  - `10-julgamento-tecnica.spec.ts` → Testa pesquisa por **Julgamento: Técnica**.
  - `11-julgamento-maior-desconto.spec.ts` → Testa pesquisa por **Julgamento: Maior Desconto**.
  - `12-periodo.spec.ts` → Testa pesquisa por **Período** (seleção de datas).
  - `13-uf-municipio-ac.spec.ts` → Testa pesquisa por **UF/Município** (AC).
  - `14-uf-municipio-rj.spec.ts` → Testa pesquisa por **UF/Município** (RJ).
  - `15-uf-municipio-*.spec.ts` → Testa pesquisa por **UF/Município** (SP).
  - `16-objeto-status-modalidade-uf-municipio.spec.ts` → Testa **combinação de Objeto, Status, Modalidade e UF/Município**.

---

## Pré-requisitos

- Node.js (versão >= 18)
- Git
- Playwright

## Como rodar os testes

- Todos ao mesmo tempo: npx playwright test
- Rodar um teste especifico: npx playwright test frontend/nome-do-teste.spec.ts

Instalar dependências:

```bash
npm install
npx playwright install
```
