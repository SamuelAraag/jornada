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
6. A interface deve prevenir erros antes de exibir mensagens de erro: tipo de campo e teclado
   certos, formato aceito com tolerância, valor padrão sensato, restrição explicada antes.
   Prevenir **não** é desabilitar o botão de envio: ele fica habilitado e, ao clicar, o usuário
   vê o que falta (ver `04-forms.md`).
7. Preservar o contexto do usuário após ações e navegação (filtros, página, busca, scroll).
8. Mensagens de erro devem explicar como o usuário pode prosseguir, não só o que falhou.
9. Preferir desfazer a confirmar. Confirmação fica para o que não tem volta.
10. Todo gesto tem alternativa visível. Nada depende de hover, arraste ou toque longo.
11. Toda interação responde em até 100 ms, mesmo que o resultado demore.
12. Seguir a convenção da plataforma antes de inventar: o usuário já sabe usar o que é padrão.
13. Não enganar: sem urgência falsa, opção pré-marcada ou saída escondida (ver `18-ethics.md`).

## Obrigatório (MUST)

- Usar o que já está catalogado no projeto (classe CSS, função JS ou componente) antes de
  escrever algo novo. Ver Passo 0 da skill.
- Cumprir WCAG 2.2 AA.
- Funcionar completamente por teclado (tab, enter, esc).
- Implementar os estados de loading, erro e vazio em qualquer tela que carregue dados.
- Não escrever cor hex nova nem escala própria de spacing/raio/sombra — usar os tokens que o
  projeto já tem. Em tela nova sem projeto, definir os tokens uma vez conforme
  `15-visual-foundation.md` e usar só eles.
- Não adicionar dependências novas sem necessidade real. Recurso nativo do navegador vem antes
  de biblioteca (ver `16-html-baseline.md`).
- Manter responsividade entre 320px e desktop, sem rolagem horizontal da página.
- Alvo de toque com 44 x 44 CSS px em interface usada no celular.
- Não bloquear o zoom do navegador.
- Reservar espaço para imagem e conteúdo que carrega depois: nada salta na tela.
- Abrir a tela e usar antes de entregar (ver `19-verification.md`).

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
- Desabilitar o botão de envio porque o formulário está incompleto.
- Usar `type="number"` para CPF, CEP, telefone, cartão ou código.
- Bloquear colar em qualquer campo.
- Deixar um gesto como único caminho para uma ação.
- Esconder ação atrás de hover em tela usada com toque.
- Implementar padrão enganoso (ver `18-ethics.md`).

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
- [ ] Operações destrutivas possuem confirmação contextual (não genérica) ou desfazer.
- [ ] Nenhuma rolagem horizontal em 320px; zoom de 200% não quebra a tela.
- [ ] Alvos de toque com 44px; nada depende de hover; todo gesto tem botão equivalente.
- [ ] Áreas seguras e `dvh` tratados em tela cheia ou com barra fixa.
- [ ] Campos com `autocomplete`, `inputmode` e fonte de 16px.
- [ ] Imagens com espaço reservado; nada salta ao carregar.
- [ ] Voltar do navegador e atualizar a página deixam a tela coerente.
- [ ] Mensagens dinâmicas são anunciadas (`role="status"` ou `role="alert"`).
- [ ] Abri a tela e percorri o roteiro de `19-verification.md`; relatei o que não deu para testar.
- [ ] Lint, build e testes estão passando.
