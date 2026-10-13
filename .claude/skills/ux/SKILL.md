---
name: ux
description: >
  Regras de UX, acessibilidade e julgamento visual para implementar ou revisar telas de
  frontend em qualquer projeto. Use ao criar uma tela nova, alterar uma tela existente,
  definir layout, hierarquia, formulários, tabelas, navegação, modais, estados de interface
  (loading/vazio/erro/sem permissão), responsividade ou acessibilidade — e também para revisar
  a qualidade visual e de UX de uma implementação antes de considerá-la pronta. Dispara em:
  "tela", "página", "interface", "frontend", "UI", "UX", "layout", "formulário", "tabela",
  "listagem", "modal", "dialog", "responsivo", "acessibilidade", "design", "componente
  visual", "estado vazio", "revisar a tela".
---

# UX

Regras de interface que valem para qualquer projeto, independentes de stack. Elas não descrevem
pixels — descrevem o que **precisa existir** numa tela para ela ser considerada pronta, e como
decidir quando não houver padrão explícito.

Esta skill não sabe nada sobre o seu projeto. O Passo 0 existe para resolver isso: as regras só
são aplicáveis depois que você descobriu quais tokens, classes e funções o projeto já tem.

## Precedência (resolva conflitos por aqui)

1. **Convenções do projeto** — `CLAUDE.md`, `AGENTS.md`, `.agents/preferencias.md`, catálogo
   local. Vencem sempre.
2. **Esta skill** (`references/`) — regras de UX: estados obrigatórios, formulários, tabelas,
   diálogos, permissões, responsividade, acessibilidade, terminologia.
3. **Julgamento visual** (`references/11-visual-judgment.md`) — hierarquia, densidade, ruído,
   peso, movimento. É o desempate quando 1 e 2 não dizem nada.

Se uma demanda específica conflitar com 1 ou 2, **sinalize o conflito ao usuário antes de
implementar** — não decida sozinho qual regra prevalece.

## Passo 0 — mapeie o projeto antes de escrever qualquer linha

Regra como "reutilize os tokens existentes" só é aplicável se estiver claro **quais** existem.
Antes de implementar, descubra e declare:

| O que descobrir | Onde procurar |
|---|---|
| Catálogo do que já existe | `docs/ux/`, `CLAUDE.md`, `AGENTS.md`, `.agents/`, ou o template em `templates/component-catalog-template.md` |
| Tokens de cor | custom properties em CSS/SCSS (`--*-color`, `--bg-*`, `--text-*`), `_variables.scss`, `tailwind.config`, `theme.ts` |
| Escala de spacing/raio/sombra/tipografia | tokens próprios; se não houver, a escala do framework CSS já carregado (Bootstrap, Tailwind) — **não invente uma terceira** |
| Temas | existe tema claro/escuro? Se sim, nenhuma tela pode assumir fundo fixo: toda cor sai de token |
| Convenções de movimento | `@keyframes` e durações que já se repetem no CSS — reutilize em vez de inventar duração nova por tela |
| Primitivas de layout | o projeto usa grid do framework, Flexbox/Grid direto, ou classes próprias? Não introduza um segundo sistema de layout |
| Tela de referência | a tela existente com padrão de interação mais próximo — para estrutura, **não** para regra de negócio |

Duas perguntas que mudam tudo e precisam de resposta explícita:

- **O projeto tem framework de componentes?** Se não (HTML multi-página, vanilla JS), "componente"
  significa **classe CSS compartilhada** ou **função JS reutilizável**. "Procurar um componente"
  vira "procurar uma classe ou função que já resolva isso". Não crie uma camada de componentes
  em JS puro para imitar um framework que o projeto não tem.
- **A base segue as próprias regras?** Encontrar um padrão no código **não** é prova de que ele
  é o correto. Se o projeto documenta débito conhecido, leia antes de copiar de uma tela existente.

Se um item acima não existir no projeto, **pergunte** em vez de inventar — especialmente cor.
Nunca escreva um hex novo.

## Processo

1. Faça o **Passo 0**.
2. Leia `references/00-principles.md` — os princípios não mudam por tela.
3. Leia os documentos do que está sendo construído: tabela → `03`, formulário → `04`,
   exclusão/modal → `05`, estados → `06`, permissão → `07`, mobile → `08`, a11y → `09`.
4. Procure no catálogo do projeto uma classe/função/componente que já resolva o problema
   (cabeçalho, tabela, modal, toast, badge de status, estado vazio). Só escreva algo novo do
   zero se genuinamente não existir equivalente.
5. Preencha o **UI Contract** (`templates/ui-contract.md`) antes de escrever código. Se a demanda
   já vier com um e faltar algo (estados, permissões, ação principal), pergunte antes de seguir.
6. Liste os arquivos que vai criar ou alterar.
7. Implemente **todos** os estados obrigatórios de `references/06-feedback-states.md`. Uma tela
   que só trata o caminho feliz não está pronta.
8. Faça a **segunda passagem** (revisão) descrita em `references/11-visual-judgment.md`, rode o
   checklist de `references/00-principles.md` e garanta lint, build e testes passando.
9. **Registre o padrão** no catálogo do projeto se você criou algo novo e reutilizável, com
   exemplo de uso. Sem isso, o próximo agente não vai saber que existe e vai recriar algo parecido.

## Regras rígidas (nunca ignorar)

- Não escrever cor hex nova. Cor sai de token do projeto — nunca hex inline em `style="..."`.
- Não criar escala nova de spacing, raio, sombra ou tipografia.
- Não criar uma segunda classe/função/componente para o que uma já existente resolve.
- Não deixar uma tela sem loading, vazio e erro.
- Não usar `alert()` / `confirm()` nativos do navegador. Se o projeto tem diálogo próprio, use;
  se não tem, é a hora de criar um (com foco preso, Esc e retorno de foco) e catalogar.
- Não interpolar dado de usuário ou da API direto em `innerHTML` — preferir `textContent`
  ou escapar.
- Não esconder a ação principal de uma tela em menu de três pontos.
- Não editar à mão arquivo de estilo **gerado** por build (ex.: CSS compilado de SCSS) — a
  alteração some no próximo build.
- Ordem no DOM = ordem visual.

## Referências

| Arquivo | Assunto |
|---|---|
| `references/00-principles.md` | princípios, MUST / SHOULD / MUST NOT, checklist final |
| `references/01-layout.md` | estrutura de página, regras de disposição, páginas de detalhe |
| `references/02-navigation.md` | menu, breadcrumb, estado na URL, voltar |
| `references/03-lists-and-tables.md` | tabela vs. cards, filtros, paginação, busca |
| `references/04-forms.md` | labels, validação, os 8 estados de um formulário |
| `references/05-dialogs-and-destructive-actions.md` | quando usar modal, confirmação, drawer vs. página |
| `references/06-feedback-states.md` | os estados obrigatórios de qualquer tela de dados |
| `references/07-permissions.md` | ação sem permissão, tela sem acesso |
| `references/08-responsive.md` | faixa de suporte, breakpoints, tabela no mobile |
| `references/09-accessibility.md` | WCAG 2.2 AA, teclado, foco, contraste, reduced motion |
| `references/10-content-and-terminology.md` | idioma, tom, texto de botão e de erro, glossário |
| `references/11-visual-judgment.md` | hierarquia, densidade, ruído, movimento, anti-patterns, revisão |
| `templates/ui-contract.md` | modelo a preencher antes de implementar |
| `templates/component-catalog-template.md` | modelo do catálogo que cada projeto mantém |
