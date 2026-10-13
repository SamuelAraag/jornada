# Estados de interface

Nenhuma tela de dados é considerada concluída se implementar apenas o estado preenchido.

## Estados obrigatórios por tipo de tela

### Telas de listagem/dados

- Loading (skeleton ou spinner, nunca tela em branco)
- Success (dados populados)
- Empty (nenhum registro cadastrado ainda: mensagem orientando a próxima ação, ex.: botão
  para criar o primeiro registro)
- Filtered empty (nenhum resultado para os filtros/busca aplicados, diferente do Empty
  acima; deve oferecer "limpar filtros")
- Recoverable error (falha ao carregar, com botão de tentar novamente)
- Fatal error (erro que impede o uso da tela: mensagem clara + ação de suporte/voltar)
- Insufficient permission (usuário sem acesso, nunca apenas 404 genérico quando a causa
  real é permissão)
- Partial data (quando parte dos dados falhou mas o restante pode ser exibido: indicar
  o que não carregou)
- Offline/timeout, quando a tela depende de conexão contínua
- Refreshing (dados já visíveis sendo atualizados: manter o conteúdo e indicar a atualização,
  sem voltar ao skeleton)

### Formulários

Ver lista completa em `04-forms.md`.

## Quanto tempo, qual indicador

| Duração esperada | Indicador |
|---|---|
| até 1 s | nenhum, ou só o controle acionado em estado de carregamento |
| 1 a 10 s | skeleton quando o formato é conhecido; spinner com texto quando não é |
| acima de 10 s | progresso com percentual ou etapas, e opção de cancelar |

- Atrasar a exibição do indicador em 300 a 500 ms, para ele não piscar em resposta rápida.
- O controle tocado reage em até 100 ms, mesmo que a operação demore.
- Detalhes e metas em `14-performance.md`.

## Regras de implementação

- Loading nunca é uma tela em branco: usar skeleton compatível com o layout final ou
  spinner central com texto.
- Toda mensagem de erro explica o que aconteceu **e** o que o usuário pode fazer a seguir
  (tentar novamente, contatar suporte, ajustar filtro).
- Feedback de sucesso após uma ação (salvar, excluir, convidar) usa toast/snackbar
  temporário, sem bloquear a tela com modal de sucesso, exceto quando a ação leva a uma
  mudança de contexto importante (ex.: redirecionar para outra página).
- Erros de rede/servidor nunca aparecem como `alert()` do navegador.
- Erro de um trecho fica no trecho. Não derrubar a tela inteira porque um bloco falhou.
- Tentar de novo refaz só o que falhou e mantém o que o usuário já tinha na tela.

## Toast

- Dura de 4 a 10 s, proporcional ao tamanho do texto. Pausa com hover e com foco.
- Com ação ("Desfazer"), dura o suficiente para ser lido e acionado, e a ação também é
  alcançável por teclado.
- Não usar para erro que exige ação nem para informação que o usuário precisa consultar depois.
- Posição consistente no produto; não cobre a ação principal nem a barra de navegação inferior.

## Anúncio para leitor de tela

Mudança que acontece sem troca de página precisa ser anunciada:

- Sucesso e informação: região com `role="status"` (anúncio educado).
- Erro e urgência: `role="alert"`.
- Carregando: `aria-busy="true"` na região e um texto de status; ao terminar, anunciar o
  resultado ("12 resultados").
- A região de anúncio já existe no DOM antes de o texto mudar, senão não é lida.

## UI otimista

Para ação reversível e de baixa falha (marcar, curtir, arquivar, reordenar), aplicar o resultado
na hora e confirmar em segundo plano. Se falhar, desfazer e explicar. Nunca em pagamento ou ação
irreversível. Ver `14-performance.md`.
