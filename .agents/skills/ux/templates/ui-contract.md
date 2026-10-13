# UI Contract — [nome da tela/funcionalidade]

Preencher antes de implementar. Isso substitui uma descrição visual solta por um
modelo mental completo da tela, que o agente pode implementar sem inventar comportamento.

## Persona

Quem usa esta tela? (ex.: Administrador, Operador, Cliente final)

## Plataforma e contexto de uso

Onde a tela é usada? (desktop com mouse, celular com toque, os dois; navegador, PWA instalada)
Existe projeto com tokens e catálogo, ou é tela nova sem projeto (`references/15` e `16`)?

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

## Navegação e voltar

Como se chega a esta tela e para onde se sai? O que vai na URL? O que o botão Voltar faz em cada
ponto (inclusive com modal, drawer ou visualizador aberto)?

## Toque e gestos (se usada no celular)

Quais gestos existem e qual é o botão equivalente de cada um? Onde fica a ação principal em
relação ao polegar? Algum elemento encosta nas bordas e precisa de área segura?

## Dados e formulário (se houver)

Para cada campo: tipo, `inputmode`, `autocomplete`, obrigatório ou opcional, regra de validação e
texto do erro.

## Mídia (se houver)

Quais imagens ou vídeos aparecem, com que proporção, e qual é o estado de carregando e de falha?

## Restrições / regras de negócio

O que não pode acontecer, e por quê.

## Referência

Qual tela existente serve de referência visual/estrutural? O que reutilizar dela e o que
**não** copiar (regras de negócio específicas, colunas, permissões, textos).

## Padrões esperados

Liste o que provavelmente será usado do catálogo do projeto. Se algum não existir ainda,
sinalizar aqui **antes** de criar um novo.
