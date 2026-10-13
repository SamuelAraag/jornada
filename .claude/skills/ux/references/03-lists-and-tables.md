# Listagens

## Tabela vs. cards

- Usar **tabela** quando a comparação entre registros for importante (múltiplas colunas
  numéricas ou de status a comparar lado a lado).
- Usar **cards** quando reconhecimento visual for mais importante que comparação
  (ex.: catálogo de itens, dashboard de projetos).
- Não misturar os dois no mesmo módulo sem motivo — escolha um padrão por tipo de entidade
  e mantenha.

## Regras gerais

- Filtros aplicados devem permanecer visíveis (chips ou badge indicando quantidade ativa),
  nunca escondidos após aplicar.
- Paginação não deve perder filtros, busca ou ordenação — tudo isso vai na URL.
- Linhas/cards clicáveis precisam de indicação visual clara (cursor, hover) — não deixar
  clicável "invisível".
- Não duplicar a mesma ação na linha da tabela e em um menu contextual da mesma linha.
- Colunas de status usam o badge de status catalogado no projeto - nunca cor isolada sem texto.
- Ordenação por coluna, quando existir, deve ser indicada visualmente (seta) e refletida
  na URL.
- Tabelas com ações destrutivas (excluir, revogar) exigem confirmação — ver documento 05.

## Busca

- A busca atualiza a listagem sem resetar os outros filtros aplicados.
- Buscar com resultado vazio usa o estado "filtered empty" (ver `06-feedback-states.md`),
  diferente do estado "nenhum registro cadastrado".
