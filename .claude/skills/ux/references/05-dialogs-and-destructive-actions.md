# Diálogos e operações destrutivas

## Quando usar modal

- Confirmações curtas (uma pergunta, uma decisão).
- Formulários de 1 único campo/etapa (ex.: renomear).
- Nunca para fluxos com mais de uma etapa — nesse caso, usar página ou drawer
  (ver princípio 4 em `00-principles.md`).

## Confirmação de operações destrutivas

- Exigir confirmação sempre que houver perda relevante de dados (exclusão, revogação,
  cancelamento irreversível).
- A confirmação deve informar **exatamente qual entidade** será afetada
  (ex.: "Excluir o usuário Maria Silva?", nunca "Tem certeza?").
- Não usar textos genéricos como "Tem certeza?" ou "Esta ação não pode ser desfeita"
  isoladamente — combinar com o nome/identificador do registro.
- O botão de confirmação usa a variante `danger` **apenas** para a ação irreversível em si;
  o botão "Cancelar" nunca é `danger`.
- Para exclusões em massa (múltiplos registros selecionados), listar ou contar quantos
  registros serão afetados no próprio diálogo.

## Drawer vs. página

- Drawer: edição rápida de um registro sem sair do contexto da listagem (ex.: editar um
  item sem perder a página/filtro da tabela atrás).
- Página: fluxos longos, com múltiplas seções, ou quando o usuário precisa navegar
  (voltar/avançar) entre etapas.
