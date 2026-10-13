# UI Contract — [nome da tela/funcionalidade]

Preencher antes de implementar. Isso substitui uma descrição visual solta por um
modelo mental completo da tela, que o agente pode implementar sem inventar comportamento.

## Persona

Quem usa esta tela? (ex.: Administrador, Operador, Cliente final)

## Objetivo

O que esta tela permite que a persona faça? (uma frase)

## Ação principal

Qual é a única ação mais importante desta tela?

## Ações secundárias

Quais outras ações existem, e com qual prioridade visual (secondary/ghost)?

## Conteúdo principal

O que é exibido? (campos de uma tabela, seções de um formulário, etc.)

## Estados

Marcar quais se aplicam (ver `references/06-feedback-states.md` para a lista completa):

- [ ] Loading
- [ ] Empty
- [ ] Filtered empty
- [ ] Populated
- [ ] Recoverable error
- [ ] Fatal error
- [ ] Insufficient permission
- [ ] Partial data
- [ ] (formulário) inicial / alterado / inválido / enviando / erro validação /
      erro servidor / salvo / conflito de concorrência

## Regras de interação

Liste comportamentos específicos desta tela (ex.: "a busca deve atualizar a listagem sem
perder os filtros", "o último administrador ativo não pode ser removido").

## Restrições / regras de negócio

O que não pode acontecer, e por quê.

## Referência

Qual tela existente serve de referência visual/estrutural? O que reutilizar dela e o que
**não** copiar (regras de negócio específicas, colunas, permissões, textos).

## Padrões esperados

Liste o que provavelmente será usado do catálogo do projeto. Se algum não existir ainda,
sinalizar aqui **antes** de criar um novo.
