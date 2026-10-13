# Padrões comuns de app

Fluxos que aparecem em quase todo produto. Use a convenção antes de inventar.

## Entrar e criar conta

- `<form>` próprio, com `<label>` acima de cada campo e botão que diz a ação ("Entrar",
  "Criar conta"), não "Enviar".
- E-mail: `type="email"` com `autocomplete="username"`. Senha: `autocomplete="current-password"`
  ao entrar e `"new-password"` ao criar ou trocar.
- Botão de mostrar senha. **Não pedir** e-mail ou senha duas vezes.
- Colar é sempre permitido, em senha e em código. Bloquear colar quebra gerenciador de senhas e
  fere o WCAG 3.3.8.
- Código por SMS ou e-mail: um campo só, `inputmode="numeric"` e `autocomplete="one-time-code"`.
- Chave de acesso (passkey): oferecer no autopreenchimento com `autocomplete="username webauthn"`.
- "Esqueci a senha" perto do campo de senha.
- Erro de login não revela se o e-mail existe: "E-mail ou senha incorretos".
- No celular, os campos e o botão ficam no topo e o teclado não cobre o botão.
- Cadastro pede só o indispensável. O resto vem depois, quando o usuário vir o motivo.
- Sessão que expira avisa antes e preserva o que estava sendo preenchido.

## Primeiro uso

- O produto é utilizável o mais cedo possível. Tour de várias telas antes de qualquer valor é
  ruído, e sempre tem como pular.
- Ensinar no contexto: a dica aparece quando a função vai ser usada.
- Estado vazio da primeira vez explica o que a tela faz e traz a ação que cria o primeiro item.
- Permissão do sistema (notificação, câmera, localização) só é pedida no momento em que a função
  é usada, depois de explicar o motivo. Nunca ao abrir a página.

## Busca

- `<search>` ou `role="search"`, campo `type="search"` com `enterkeyhint="search"`.
- O termo continua no campo depois de buscar e vai para a URL.
- Sugestão enquanto digita com debounce; a lista de sugestões é navegável por setas e fecha com Esc.
- Sem resultado: dizer o termo buscado, sugerir ajuste e oferecer limpar filtros.
- Botão de limpar o campo quando há texto.

## Configurações

- Um modelo de salvamento por tela: ou tudo aplica na hora (alternadores), ou existe um botão
  Salvar. Não misturar.
- Alternador aplica imediatamente e mostra o resultado. Se precisa de Salvar, use caixa de seleção.
- Ação perigosa (excluir conta, apagar dados) separada no fim, com confirmação nomeada.
- Agrupar por assunto do usuário, não pela estrutura técnica.

## Notificações e avisos

| Tipo | Quando | Comportamento |
|---|---|---|
| Toast | confirmação de ação concluída | some sozinho em 4 a 10 s conforme o tamanho do texto; pausa com hover e foco; `role="status"` |
| Toast com ação | exclusão ou mudança reversível | traz "Desfazer" e dura o bastante para ser lido e acionado |
| Aviso inline | problema ligado a um trecho da tela | fica junto do trecho até ser resolvido |
| Banner | condição que afeta a tela toda (offline, manutenção) | persistente, com ação quando houver |
| Modal | decisão que bloqueia | só quando o fluxo não pode seguir sem resposta |

- Erro que exige ação não vai em toast que desaparece: `role="alert"` e permanência.
- No máximo um toast por vez, ou pilha curta. Nunca cobrindo a ação principal nem a navegação
  inferior.
- Contador de não lidas com número real e limite ("99+").

## Envio de arquivo

- Botão de escolher arquivo sempre existe; arrastar e soltar é um atalho, com área destacada ao
  arrastar por cima.
- Tipos e tamanho máximo ditos antes do envio, não só no erro.
- Progresso por arquivo, com cancelar. Erro por arquivo, sem derrubar os outros.
- Pré-visualização do que foi enviado e forma de remover.
- No celular, `accept` e `capture` adequados para abrir câmera ou galeria.

## Data e hora

- Data conhecida de cor (nascimento, emissão): campos de texto para dia, mês e ano, ou um campo
  com máscara. Calendário obriga a navegar décadas.
- Data próxima (agendamento, prazo): seletor de calendário, nativo quando atende.
- Intervalo: dois campos claros ou seletor de intervalo, com atalhos ("últimos 7 dias").
- Sempre aceitar digitação. Mostrar o formato esperado e o fuso quando ele importar.

## Seleção e ação em massa

- Ao selecionar, aparece uma barra com a contagem e as ações. Ela some ao limpar a seleção.
- "Selecionar tudo" deixa claro o alcance: os itens da página ou todos os resultados.
- Ação destrutiva em massa diz quantos itens serão afetados.

## Fluxo em etapas

- Indicador de etapa atual e do total. Voltar não perde o que foi preenchido.
- Uma decisão por etapa; validar ao avançar.
- Revisão antes de enviar, com atalho para editar cada parte.
- Não pedir de novo o que já foi informado (WCAG 3.3.7): preencher ou oferecer para reaproveitar.
- Fluxo longo salva rascunho.

## Arrastar e soltar

- Sempre com alternativa sem arraste: botões de mover, menu "mover para" ou teclado.
- Alça visível, destino destacado durante o arraste, anúncio do resultado para leitor de tela.

## Offline e sincronização

- Dizer quando está offline e o que continua funcionando.
- Mudança feita offline aparece como pendente e sincroniza depois, com aviso se houver conflito.
- "Salvo" só aparece quando salvou de verdade. Enquanto salva, "Salvando...".
