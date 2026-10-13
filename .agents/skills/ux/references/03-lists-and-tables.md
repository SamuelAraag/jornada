# Listagens

## Tabela vs. cards

- Usar **tabela** quando a comparação entre registros for importante (múltiplas colunas
  numéricas ou de status a comparar lado a lado).
- Usar **cards** quando reconhecimento visual for mais importante que comparação
  (ex.: catálogo de itens, dashboard de projetos).
- Usar **lista simples** (uma linha por item, com título, detalhe e ação) no celular e quando há
  poucos atributos.
- Não misturar no mesmo módulo sem motivo: escolha um padrão por tipo de entidade e mantenha.

## Regras gerais

- Filtros aplicados permanecem visíveis (chips ou badge indicando quantidade ativa),
  nunca escondidos após aplicar. Existe "limpar filtros".
- Paginação não perde filtros, busca ou ordenação: tudo isso vai na URL.
- Linhas e cards clicáveis têm indicação visual clara (cursor, hover, foco). O alvo de clique é
  um `<a>` ou `<button>` de verdade dentro da linha, não um `onclick` na `<tr>`.
- Não duplicar a mesma ação na linha da tabela e em um menu contextual da mesma linha.
- Colunas de status usam o badge de status catalogado no projeto, nunca cor isolada sem texto.
- Tabelas com ações destrutivas (excluir, revogar) exigem confirmação ou desfazer: ver documento 05.
- Mostrar o total e o recorte ("1 a 20 de 143").

## Tabela

- `<table>` semântica: `<th scope="col">`, `<caption>` ou `aria-label`.
- Ordenação indicada por seta, refletida na URL e em `aria-sort`. O cabeçalho ordenável é um botão.
- Número alinhado à direita com `font-variant-numeric: tabular-nums`; texto à esquerda.
- Cabeçalho fixo (`position: sticky`) em tabela que rola. Largura de coluna estável: a tabela não
  dança quando os dados chegam.
- Texto longo trunca com reticências e o valor inteiro fica acessível (título, expandir ou detalhe).
- No celular: ver `08-responsive.md`.

## Paginação, "carregar mais" ou rolagem infinita

| Padrão | Usar quando | Cuidado |
|---|---|---|
| Paginação | o usuário procura, compara ou precisa voltar a um item; tabelas de gestão | no celular, anterior e próximo com a página atual |
| "Carregar mais" | catálogo e resultado de busca; meio termo | manter a posição ao voltar; anunciar quantos itens chegaram |
| Rolagem infinita | conteúdo homogêneo consumido sem objetivo (feed) | rodapé inalcançável, difícil reencontrar item, ruim para teclado e leitor de tela |

- Rolagem infinita nunca em tela com rodapé importante nem em tarefa de busca ou comparação.
- Qualquer que seja o padrão, voltar do detalhe devolve a lista na mesma posição.
- Lista com centenas de itens no DOM é virtualizada ou paginada.

## Seleção em massa

- Caixa de seleção por linha e uma no cabeçalho. Ao selecionar, surge a barra de ações com a
  contagem.
- "Selecionar tudo" diz o alcance: os itens visíveis ou todos os resultados.
- A seleção sobrevive à ordenação e deixa claro o que acontece ao trocar de página.

## Busca

- A busca atualiza a listagem sem resetar os outros filtros aplicados.
- Digitação com debounce; a resposta de uma busca antiga não sobrescreve a nova.
- Buscar com resultado vazio usa o estado "filtered empty" (ver `06-feedback-states.md`),
  diferente do estado "nenhum registro cadastrado".

## Carregamento

- Skeleton com a mesma quantidade e altura de linhas da página real.
- Recarregar por filtro ou ordenação mantém os dados antigos esmaecidos até os novos chegarem,
  em vez de piscar para um estado vazio.
