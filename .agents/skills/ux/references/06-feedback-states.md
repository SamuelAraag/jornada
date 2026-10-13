# Estados de interface

Nenhuma tela de dados é considerada concluída se implementar apenas o estado preenchido.

## Estados obrigatórios por tipo de tela

### Telas de listagem/dados

- Loading (skeleton ou spinner — nunca tela em branco)
- Success (dados populados)
- Empty (nenhum registro cadastrado ainda — mensagem orientando a próxima ação, ex.: botão
  para criar o primeiro registro)
- Filtered empty (nenhum resultado para os filtros/busca aplicados — diferente do Empty
  acima; deve oferecer "limpar filtros")
- Recoverable error (falha ao carregar, com botão de tentar novamente)
- Fatal error (erro que impede o uso da tela — mensagem clara + ação de suporte/voltar)
- Insufficient permission (usuário sem acesso — nunca apenas 404 genérico quando a causa
  real é permissão)
- Partial data (quando parte dos dados falhou mas o restante pode ser exibido — indicar
  o que não carregou)
- Offline/timeout, quando a tela depende de conexão contínua

### Formulários

Ver lista completa em `04-forms.md`.

## Regras de implementação

- Loading nunca é uma tela em branco — usar skeleton compatível com o layout final ou
  spinner central com texto.
- Toda mensagem de erro explica o que aconteceu **e** o que o usuário pode fazer a seguir
  (tentar novamente, contatar suporte, ajustar filtro).
- Feedback de sucesso após uma ação (salvar, excluir, convidar) usa toast/snackbar
  temporário — não bloqueia a tela com modal de sucesso, exceto quando a ação leva a uma
  mudança de contexto importante (ex.: redirecionar para outra página).
- Erros de rede/servidor nunca aparecem como `alert()` do navegador.
