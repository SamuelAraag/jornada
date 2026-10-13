# Navegação

- Navegação principal (sidebar/menu) reflete os módulos do domínio, não a estrutura técnica
  do código.
- Breadcrumbs são usados apenas quando há hierarquia real de mais de 2 níveis
  (ex.: Tenant > Usuários > Detalhe do usuário). Não usar breadcrumb decorativo de 1 nível.
- Toda navegação que sai de um formulário com alterações não salvas deve confirmar a saída
  (ver `05-dialogs-and-destructive-actions.md`).
- Estado de navegação relevante para o usuário (filtro ativo, aba ativa, página da tabela)
  vive na URL via query params — não em memória apenas. Isso permite voltar (botão do
  navegador) sem perder contexto e compartilhar links.
- Links de "voltar" devem retornar ao estado anterior real (com filtros aplicados), não
  para a versão "limpa" da tela anterior.
