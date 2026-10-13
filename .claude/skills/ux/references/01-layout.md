# Layout

## Estrutura padrão de uma página

```
Cabeçalho de página (título, ações globais, voltar)
  ↓
Toolbar da seção (título da seção, contador, ação principal)
  ↓
Filtros/busca (quando aplicável — permanece visível ao rolar em listagem longa)
  ↓
Conteúdo principal (tabela, cards, formulário, detalhe)
  ↓
Paginação (quando aplicável)
```

- Toda página com conteúdo carregado por API usa o cabeçalho já catalogado no projeto — não
  criar um cabeçalho customizado por tela.
- A ação principal fica no cabeçalho ou na toolbar, alinhada à direita. **Nunca duplicada**
  dentro da tabela/lista abaixo.
- Largura de conteúdo: telas de gestão usam um contêiner com largura máxima (algo entre
  1200px e 1400px), não full-width — para não estourar a linha de leitura em monitor grande.

## O sistema de layout do projeto

Descubra qual é (Passo 0) e **use só ele**. Se o projeto carrega um framework CSS mas não usa
o grid dele em lugar nenhum, não introduza esse grid agora: seria um segundo sistema de layout
convivendo com o atual. Vale o inverso também — se o grid do framework é o padrão, não
substitua por Flexbox ad-hoc.

Primitivas que resolvem quase tudo, em qualquer stack:

| Necessidade | Primitiva |
|---|---|
| Largura da página | contêiner com `max-width` + `margin: 0 auto` + padding |
| Barra horizontal (cabeçalho, toolbar, grupo de botões) | `display: flex` + `justify-content` / `gap` |
| Formulário | grid de N colunas (`repeat(N, minmax(0, 1fr))`), colapsando para 1 no mobile |
| Ações do formulário | ocupa a linha inteira (`grid-column: 1 / -1`), flex alinhado à direita |
| Campo que ocupa a linha toda | `grid-column: 1 / -1` dentro do grid do formulário |
| Grade de cards | `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` |
| Colunas de largura igual | `repeat(N, minmax(0, 1fr))` — o `minmax(0, ...)` evita que conteúdo longo estoure a coluna |

Campo que precisa ocupar a linha toda usa `grid-column: 1 / -1` — não crie um formulário
paralelo fora do grid para acomodar um campo largo.

## Regras de disposição

- **Agrupe por proximidade antes de desenhar caixa.** Elementos relacionados ficam próximos;
  não relacionados ficam separados por espaço. Borda e card entram só quando o espaçamento
  sozinho não resolve (ver `00-principles.md`).
- **Uma coluna de ação por tela.** Se a ação principal está no topo à direita, as secundárias
  não competem com ela no mesmo eixo.
- **Alinhamento consistente**: rótulos, campos e conteúdo compartilham a mesma borda esquerda.
  Alinhamento à direita é para número e ação, não para texto corrido.
- **Espaçamento sai da escala do projeto** — a própria, se existir; senão a do framework CSS já
  carregado. Não crie uma terceira escala em px soltos.
- **Ordem de leitura importa**: a ordem no DOM deve corresponder à ordem visual, senão a
  navegação por teclado e o leitor de tela ficam incoerentes com a tela.

## Páginas de detalhe

- Mesmo padrão de cabeçalho, com a ação principal do registro (ex.: "Editar", "Aprovar").
- Ações secundárias vão em grupo `outline`/ghost, nunca competindo visualmente com a principal.
- Se a página tiver abas, o estado da aba ativa vive na URL (query param), para permitir
  compartilhar e voltar sem perder contexto.
