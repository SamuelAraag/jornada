# Conteúdo e terminologia

- Idioma padrão da interface: português do Brasil, tom direto e profissional (sem
  gírias, sem excesso de formalidade). Se o projeto define outro idioma ou tom, ele vence.
- Nomes de entidades e ações são consistentes em todo o sistema. Manter um glossário
  aqui conforme o domínio evolui (ex.: sempre "Usuário", nunca alternar com "Membro" para
  a mesma entidade).
- Botões descrevem a ação com verbo claro ("Convidar usuário", não "OK" ou "Confirmar"
  isolado quando o contexto não é óbvio).
- Mensagens de erro nunca expõem detalhes técnicos crus (stack trace, código SQL) ao
  usuário final: apenas uma mensagem humana, com o detalhe técnico disponível em log.
- Datas e números seguem formato brasileiro (DD/MM/AAAA, vírgula decimal), a menos que o
  domínio exija outro padrão (ex.: exportação para sistema internacional).

## Escrita

- Frase curta, voz ativa, palavra comum. Sem jargão interno e sem código de erro como mensagem.
- Só a primeira letra em maiúscula em título, botão e rótulo ("Criar conta", não "Criar Conta").
- Falar com o usuário ("Você não tem permissão"), sem culpar ("Você digitou errado").
- O mesmo nome para a mesma coisa do começo ao fim do fluxo: o botão "Salvar" não leva a um
  toast "Gravado".
- Texto de link diz o destino. Evitar "clique aqui".
- Sem ponto final em rótulo, botão e título. Com ponto em frase completa.

## Fórmulas

| Texto | Fórmula | Exemplo |
|---|---|---|
| Erro | o que aconteceu + como seguir | "Não foi possível salvar. Verifique a conexão e tente de novo." |
| Erro de campo | o que corrigir | "Informe um e-mail no formato nome@dominio.com" |
| Estado vazio | o que aparece aqui + ação | "Nenhum projeto ainda. Crie o primeiro para começar." |
| Vazio por filtro | o que foi buscado + saída | "Nada encontrado para 'relatório'. Limpar filtros" |
| Confirmação | ação + item + consequência | "Excluir o projeto Atlas? Os 12 arquivos serão apagados." |
| Sucesso | o que foi feito | "Convite enviado para maria@empresa.com" |
| Carregando demorado | o que está sendo feito | "Gerando o relatório..." |

## Números, datas e plural

- Formatar com a API `Intl` no idioma da interface, não com concatenação manual:
  `Intl.NumberFormat('pt-BR')`, `Intl.DateTimeFormat`, `Intl.RelativeTimeFormat`.
- Plural correto, inclusive no zero e no um: "1 item", "2 itens", "Nenhum item". Usar
  `Intl.PluralRules` ou textos separados. Nunca "1 item(ns)".
- Data relativa para o recente ("há 5 minutos", "ontem") e absoluta para o antigo, com a data
  completa disponível em `<time datetime>` e no título.
- Número grande com separador de milhar; moeda com símbolo e duas casas; unidade sempre junto.
- Fuso horário explícito quando a hora importa para pessoas em lugares diferentes.

## Texto que não cabe

- Prever o texto longo: nome comprido, tradução maior, número grande.
- Truncar com reticências só o que é identificável pelo começo, e dar acesso ao texto inteiro.
- Nunca truncar valor em dinheiro, data nem mensagem de erro.
- Título quebra em duas linhas antes de truncar.
- Se a interface for traduzida, reservar folga: o texto pode crescer bastante em outro idioma.

## Glossário do domínio

> Preencher conforme o projeto avança. Exemplo:

| Termo usado na UI | Não usar | Observação |
|---|---|---|
| Usuário | Membro, Colaborador | entidade principal do módulo de acesso |
| Tenant | Cliente, Conta | usado internamente e na UI de administração |
