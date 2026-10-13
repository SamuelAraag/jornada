---
name: ux
description: >
  Regras de UX, acessibilidade e julgamento visual para implementar ou revisar telas de
  frontend em qualquer projeto. Use ao criar uma tela nova, alterar uma tela existente,
  definir layout, hierarquia, formulários, tabelas, navegação, modais, estados de interface
  (loading/vazio/erro/sem permissão), responsividade ou acessibilidade — e também para revisar
  a qualidade visual e de UX de uma implementação antes de considerá-la pronta. Cobre painel
  web, app mobile, PWA e tela HTML avulsa: gestos e toque, visualizador de imagem, áreas
  seguras, tema escuro, login, busca, upload, performance percebida e verificação em
  dispositivo. Dispara em: "tela", "página", "interface", "frontend", "UI", "UX", "layout",
  "formulário", "tabela", "listagem", "modal", "dialog", "responsivo", "acessibilidade",
  "design", "componente visual", "estado vazio", "revisar a tela", "app", "mobile", "celular",
  "toque", "gesto", "swipe", "arrastar", "galeria", "lightbox", "visualizador", "bottom sheet",
  "tema escuro", "dark mode", "login", "cadastro", "onboarding", "busca", "upload", "PWA",
  "HTML", "protótipo", "landing".
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

Quatro perguntas que mudam tudo e precisam de resposta explícita:

- **Que tipo de produto é e onde ele é usado?** Painel de gestão em desktop, app de consumo no
  celular, PWA, página de conteúdo ou tela avulsa. Muitas regras de `01` e `03` foram escritas
  para painel; em tela usada com o dedo, `08`, `12` e `13` passam a ser leitura obrigatória.
- **Existe projeto ou a tela nasce do zero?** Se não há tokens, catálogo nem tela de referência
  (HTML avulso, protótipo, projeto começando), não trave perguntando por cor: siga o
  **modo tela nova** abaixo.
- **O projeto tem framework de componentes?** Se não (HTML multi-página, vanilla JS), "componente"
  significa **classe CSS compartilhada** ou **função JS reutilizável**. "Procurar um componente"
  vira "procurar uma classe ou função que já resolva isso". Não crie uma camada de componentes
  em JS puro para imitar um framework que o projeto não tem.
- **A base segue as próprias regras?** Encontrar um padrão no código **não** é prova de que ele
  é o correto. Se o projeto documenta débito conhecido, leia antes de copiar de uma tela existente.

Se um item acima não existir **em um projeto que já tem identidade visual**, **pergunte** em vez
de inventar — especialmente cor. Nunca escreva um hex novo.

### Modo tela nova (sem projeto)

Quando a tela nasce do zero e não há nada para reutilizar:

1. Use os tokens de `references/15-visual-foundation.md`, declarados uma vez em `:root`. Se o
   usuário informou uma cor de marca, ela entra como `--accent`, com o contraste conferido.
2. Monte o `<head>` e a estrutura semântica de `references/16-html-baseline.md`.
3. Suporte tema claro e escuro por padrão.
4. Prefira elemento nativo do navegador a biblioteca.
5. Todo o resto do processo vale igual: estados, acessibilidade, verificação.

## Processo

1. Faça o **Passo 0**.
2. Leia `references/00-principles.md` — os princípios não mudam por tela.
3. Leia os documentos do que está sendo construído:

   | Está construindo | Leia |
   |---|---|
   | Estrutura de página | `01` |
   | Menu, abas, rotas, voltar | `02` |
   | Tabela, lista, grade, busca em lista | `03` |
   | Formulário ou qualquer campo | `04` |
   | Modal, drawer, bottom sheet, exclusão | `05` |
   | Qualquer tela que carrega dados | `06` |
   | Ação ou tela com permissão | `07` |
   | Qualquer tela usada no celular | `08` e `12` |
   | Arrastar, deslizar, pinçar, sheet | `12` |
   | Imagem, galeria, visualizador, vídeo | `13` |
   | Tela pesada, lista longa, carregamento | `14` |
   | Tela nova sem projeto | `15` e `16` |
   | Login, cadastro, onboarding, busca, upload, data, configurações | `17` |
   | Assinatura, preço, consentimento, notificação | `18` |

   `09` (acessibilidade) e `10` (texto) valem para toda tela.
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
   **Abra a tela e use**, seguindo `references/19-verification.md`: larguras, teclado, zoom,
   estados, toque. Diga na entrega o que não foi possível verificar.
9. **Registre o padrão** no catálogo do projeto se você criou algo novo e reutilizável, com
   exemplo de uso. Sem isso, o próximo agente não vai saber que existe e vai recriar algo parecido.

## Regras rígidas (nunca ignorar)

- Não escrever cor hex nova. Cor sai de token do projeto — nunca hex inline em `style="..."`.
  Única exceção: no modo tela nova, os tokens são definidos uma vez em `:root`.
- Não desabilitar o botão de envio por formulário incompleto; não usar `type="number"` para
  código (CPF, CEP, telefone); não bloquear colar.
- Não bloquear o zoom do navegador (`user-scalable=no`, `maximum-scale=1`).
- Não deixar gesto, hover ou toque longo como único caminho para uma ação.
- Não deixar imagem ou conteúdo tardio sem espaço reservado.
- Não implementar padrão enganoso (`references/18-ethics.md`): sinalize ao usuário.
- Não declarar pronto sem ter aberto a tela.
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
| `references/02-navigation.md` | menu, barra inferior, estado na URL, voltar, histórico, troca de rota |
| `references/03-lists-and-tables.md` | tabela vs. cards, filtros, paginação vs. rolagem infinita, seleção em massa, busca |
| `references/04-forms.md` | labels, validação, botão de envio, teclado e autocomplete, os 8 estados |
| `references/05-dialogs-and-destructive-actions.md` | quando usar modal, foco, desfazer vs. confirmar, bottom sheet, drawer |
| `references/06-feedback-states.md` | estados obrigatórios, qual indicador por duração, toast, anúncio para leitor de tela |
| `references/07-permissions.md` | ação sem permissão, tela sem acesso |
| `references/08-responsive.md` | mobile first, viewport, `dvh`, áreas seguras, toque, o que muda no celular |
| `references/09-accessibility.md` | WCAG 2.2 AA: estrutura, teclado, alvo, contraste, zoom, anúncios, movimento |
| `references/10-content-and-terminology.md` | idioma, tom, fórmulas de texto, números e plural, truncamento, glossário |
| `references/11-visual-judgment.md` | hierarquia, densidade, ruído, movimento, anti-patterns, revisão |
| `references/12-touch-and-gestures.md` | prioridade de gestos, limiares, alvo de toque, Pointer Events, camada sobre lista |
| `references/13-media-and-images.md` | imagem responsiva, grade de miniaturas, visualizador, vídeo |
| `references/14-performance.md` | Core Web Vitals, limites de tempo de resposta, UI otimista, layout que não salta |
| `references/15-visual-foundation.md` | tokens de partida, tipografia, cor, tema escuro (só para tela nova sem projeto) |
| `references/16-html-baseline.md` | `<head>` mínimo, HTML semântico, nativo antes de biblioteca, PWA, impressão |
| `references/17-app-patterns.md` | login, primeiro uso, busca, configurações, avisos, upload, data, etapas, offline |
| `references/18-ethics.md` | padrões enganosos, consentimento, honestidade de estado |
| `references/19-verification.md` | roteiro de verificação manual e como relatar |
| `references/20-sources.md` | fontes de cada número e convenção, e o que não tem norma |
| `templates/ui-contract.md` | modelo a preencher antes de implementar |
| `templates/component-catalog-template.md` | modelo do catálogo que cada projeto mantém |
