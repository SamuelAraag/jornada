# Permissões

- Ações que o usuário não tem permissão de executar não desaparecem silenciosamente —
  ficam desabilitadas com explicação (tooltip ou texto) do motivo, a menos que a própria
  existência da ação vaze informação sensível (nesse caso, sim, esconder).
- Quando uma ação estiver bloqueada por regra de negócio (não só permissão), explicar o
  motivo (ex.: "não é possível remover o último administrador ativo").
- Telas inteiras sem permissão de acesso usam o estado "Insufficient permission"
  (ver `06-feedback-states.md`), nunca um 404 genérico que confunde "não existe" com
  "você não pode ver".
- Regras de permissão que afetam múltiplos módulos (ex.: "apenas TenantAdmin pode X")
  devem ser centralizadas em um único guard/service — não replicadas em cada componente.
