# Acessibilidade

Padrão mínimo: WCAG 2.2 AA.

- Toda a interface deve ser operável por teclado: tab para navegar, enter/espaço para
  ativar, esc para fechar modais/drawers, sem armadilhas de foco.
- Ao abrir um modal/drawer, o foco move para dentro dele; ao fechar, retorna ao elemento
  que o abriu.
- Nenhuma informação é comunicada só por cor (status, erro, obrigatoriedade) — sempre
  acompanhada de ícone e/ou texto.
- Contraste mínimo de texto: 4.5:1 para texto normal, 3:1 para texto grande, seguindo os
  tokens de cor definidos — não usar cores fora da paleta para "resolver" contraste
  pontualmente.
- Todo input tem `label` associado (via `for`/`id` ou `aria-label` quando o label visual
  não for possível).
- Imagens e ícones com função (não decorativos) têm texto alternativo.
- Respeitar `prefers-reduced-motion: reduce`: toda animação criada pelo projeto precisa do
  guard que a desliga. Movimento parallax, pulso contínuo e entrada em cascata são
  desconfortáveis (e para algumas pessoas, incapacitantes) sem essa proteção.
- Nenhuma informação pode depender exclusivamente de movimento — um item que só se distingue
  por estar piscando não se distingue para quem desativou animações.
- Elementos interativos custom (ex.: dropdown próprio) implementam os atributos ARIA de
  papel/estado correspondentes — não usar `<div onclick>` para algo que se comporta como
  botão.
