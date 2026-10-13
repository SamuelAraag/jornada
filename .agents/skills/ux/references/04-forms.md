# Formulários

## Regras gerais

- Labels sempre visíveis — nunca depender só de placeholder.
- Placeholder não substitui label; usar apenas como exemplo de formato quando necessário
  (ex.: "AAAA-MM-DD").
- Validar campo ao sair dele (`blur`) e novamente ao tentar enviar o formulário.
- Exibir erro próximo ao campo correspondente, nunca só num resumo genérico no topo
  (o resumo no topo pode existir *além* do erro por campo, não no lugar dele).
- Desabilitar o botão de submit enquanto a requisição estiver em andamento, com indicador
  de loading no próprio botão.
- Se a operação falhar, manter os dados preenchidos pelo usuário — nunca limpar o formulário
  em caso de erro.

## Estados obrigatórios de um formulário

1. Inicial
2. Alterado (dirty) — habilita indicação de "alterações não salvas" ao tentar sair
3. Inválido
4. Enviando
5. Erro de validação (client-side)
6. Erro do servidor (ex.: 500, regra de negócio violada)
7. Salvo com sucesso
8. Conflito de concorrência (registro alterado por outra pessoa enquanto editava)

Um formulário só é considerado pronto se tratar pelo menos os estados 1, 3, 4, 6 e 7.
O estado 8 é obrigatório sempre que a entidade puder ser editada por mais de uma pessoa.

## Campos

- Campos obrigatórios são marcados de forma consistente (não misturar "*" em uma tela e
  "(obrigatório)" em outra).
- Máscaras de input (CPF, telefone, moeda) formatam durante a digitação, não só na exibição.
- Campos numéricos usam `type="number"` ou input mascarado — nunca texto livre validado
  só por regex depois.
