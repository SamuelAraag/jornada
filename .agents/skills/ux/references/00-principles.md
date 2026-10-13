# Princípios de UX

Estes princípios valem para toda a aplicação. Eles não descrevem pixels — orientam
decisões quando uma situação nova aparecer e não houver um padrão explícito para ela.

1. Clareza antes de densidade. Prefira mostrar menos informação de forma legível a
   espremer tudo na tela.
2. A ação principal de cada tela deve ser imediatamente identificável, sem precisar
   procurar.
3. Não esconder ações essenciais em menus de três pontos.
4. Evitar modais para fluxos com mais de uma etapa — usar página ou drawer.
5. Toda operação assíncrona deve comunicar seu estado (carregando, sucesso, erro).
6. A interface deve prevenir erros antes de exibir mensagens de erro (ex.: desabilitar
   submit com campos inválidos em vez de deixar o usuário errar e mostrar mensagem depois).
7. Preservar o contexto do usuário após ações e navegação (filtros, página, busca, scroll).
8. Mensagens de erro devem explicar como o usuário pode prosseguir, não só o que falhou.

## Obrigatório (MUST)

- Usar o que já está catalogado no projeto (classe CSS, função JS ou componente) antes de
  escrever algo novo. Ver Passo 0 da skill.
- Cumprir WCAG 2.2 AA.
- Funcionar completamente por teclado (tab, enter, esc).
- Implementar os estados de loading, erro e vazio em qualquer tela que carregue dados.
- Não escrever cor hex nova nem escala própria de spacing/raio/sombra — usar os tokens que o
  projeto já tem.
- Não adicionar dependências novas sem necessidade real.
- Manter responsividade entre 320px e desktop.

## Preferencial (SHOULD)

- Manter a ação principal no cabeçalho da página.
- Usar progressive disclosure (esconder complexidade até que seja necessária).
- Preservar filtros e ordenação durante a navegação.
- Reutilizar padrões encontrados em telas existentes antes de inventar um novo.

## Proibido (MUST NOT)

- Criar um componente duplicado quando um equivalente já existe.
- Usar placeholder como substituto de label.
- Esconder a única ação principal de uma tela em menu contextual.
- Apresentar erro apenas por cor (sem ícone/texto).
- Usar modal para fluxo complexo de múltiplas etapas.
- Substituir componentes existentes por HTML customizado "só para essa tela".

## Checklist final

Antes de considerar uma tela concluída:

- [ ] Reutilizei o que já existia no catálogo do projeto (ou registrei o que criei).
- [ ] Não introduzi hex novo nem escala nova de spacing/raio/sombra.
- [ ] A tela funciona em todos os temas que o projeto suporta (claro e escuro, se houver).
- [ ] Implementei loading, empty e error.
- [ ] Testei navegação por teclado, com foco visível em todo elemento interativo.
- [ ] Estados de hover/focus/active/disabled/loading definidos onde se aplicam.
- [ ] Animação nova reutiliza a convenção existente e respeita `prefers-reduced-motion`.
- [ ] Testei em mobile, tablet e desktop (320px, 768px, 1280px).
- [ ] Textos de erro explicam como o usuário pode prosseguir.
- [ ] A ação principal está visualmente clara.
- [ ] Operações destrutivas possuem confirmação contextual (não genérica).
- [ ] Lint, build e testes estão passando.
