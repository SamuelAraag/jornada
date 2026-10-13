# Conteúdo e terminologia

- Idioma padrão da interface: português do Brasil, tom direto e profissional (sem
  gírias, sem excesso de formalidade).
- Nomes de entidades e ações são consistentes em todo o sistema — manter um glossário
  aqui conforme o domínio evolui (ex.: sempre "Usuário", nunca alternar com "Membro" para
  a mesma entidade).
- Botões descrevem a ação com verbo claro ("Convidar usuário", não "OK" ou "Confirmar"
  isolado quando o contexto não é óbvio).
- Mensagens de erro nunca expõem detalhes técnicos crus (stack trace, código SQL) ao
  usuário final — apenas uma mensagem humana, com o detalhe técnico disponível em log.
- Datas e números seguem formato brasileiro (DD/MM/AAAA, vírgula decimal), a menos que o
  domínio exija outro padrão (ex.: exportação para sistema internacional).

## Glossário do domínio

> Preencher conforme o projeto avança. Exemplo:

| Termo usado na UI | Não usar | Observação |
|---|---|---|
| Usuário | Membro, Colaborador | entidade principal do módulo de acesso |
| Tenant | Cliente, Conta | usado internamente e na UI de administração |
