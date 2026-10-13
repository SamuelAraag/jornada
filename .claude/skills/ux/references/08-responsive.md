# Responsividade e mobile

Responsivo não é desktop comprimido. No celular muda o espaço, a forma de apontar (dedo em vez de
mouse), o teclado e a área útil da tela.

## Faixa e breakpoints

- Faixa obrigatória de suporte: 320px até desktop (sem limite superior fixo, mas testar
  também em ~1280px e ~1440px).
- Breakpoints de referência: 320px (mobile), 768px (tablet), 1280px (desktop). Se o projeto tem
  os seus, eles vencem.
- Escrever o CSS do menor para o maior (`min-width`): o celular é a base e as telas maiores
  acrescentam.
- Quebrar onde o conteúdo pede, não onde um aparelho específico termina.
- Componente que aparece em contextos de larguras diferentes usa container query, não media
  query de página.
- Nenhuma rolagem horizontal da página em 320 px.

## Viewport e área útil

- `<meta name="viewport" content="width=device-width, initial-scale=1">`. Nunca bloquear zoom
  (`user-scalable=no`, `maximum-scale=1`).
- `100vh` no celular inclui a área atrás da barra do navegador. Para altura de tela cheia usar
  `100dvh`, com `100vh` declarado antes como fallback:

  ```css
  .tela { min-height: 100vh; min-height: 100dvh; }
  ```

- `svh` (menor altura) para o que não pode ser cortado nunca; `dvh` para o que acompanha a barra.
- Áreas seguras: o que encosta nas bordas usa `env(safe-area-inset-*)`, com
  `viewport-fit=cover` no meta. Vale para barra inferior, botão flutuante, cabeçalho fixo e
  qualquer controle em tela cheia.

  ```css
  .barra-inferior { padding-bottom: max(12px, env(safe-area-inset-bottom)); }
  ```

- As unidades de viewport **não** encolhem com o teclado virtual. Garantir que o campo em foco e
  o botão de envio fiquem visíveis com o teclado aberto, testando em aparelho.
- Testar retrato e paisagem, e a barra de endereço aparecendo e sumindo.

## Toque

- Alvo de toque: 44 x 44 CSS px por padrão, 24 x 24 como mínimo absoluto, 8 px entre alvos.
- Nada depende de `hover`: ação de tabela, menu e dica precisam existir no toque.

  ```css
  @media (hover: hover) and (pointer: fine) { .linha:hover { /* só com mouse */ } }
  ```

- Ação principal na parte de baixo da tela, ao alcance do polegar; ação destrutiva longe dela.
- Gestos: ver `12-touch-and-gestures.md`.

## O que muda de estrutura no celular

Ao reduzir espaço, nesta ordem: preservar o conteúdo principal, reduzir a informação secundária,
mover as ações secundárias, adaptar a navegação e só então mudar a estrutura.

- **Tabelas:** preferir colapsar colunas secundárias antes de forçar scroll horizontal. Scroll
  horizontal só é aceitável quando a comparação entre colunas é o propósito central da tela
  (ex.: planilha financeira), e nesse caso a primeira coluna fica fixa. A alternativa comum é
  transformar cada linha em um item de lista ou card.
- **Filtros** que ficam em linha no desktop colapsam para um painel/drawer expansível no
  mobile, nunca empilhados ocupando a tela toda de forma que esconda o conteúdo. O botão de
  filtro mostra quantos estão ativos.
- **Ações de tabela** (ícones/botões) precisam de área de toque adequada e não dependem de
  hover. Com mais de duas, vão para um menu do item.
- **Formulários** em mobile usam uma coluna.
- **Navegação:** barra inferior para 3 a 5 destinos (ver `02-navigation.md`).
- **Modal:** vira bottom sheet ou tela cheia (ver `05-dialogs-and-destructive-actions.md`).
- **Ação principal** pode virar botão fixo no rodapé, dentro da área segura e sem cobrir conteúdo.

## Texto e imagem

- Texto base de 16 px; campo de formulário com 16 px ou mais.
- Tamanhos em `rem`. A tela continua usável com o texto do sistema ampliado e com zoom de 200%.
- Linha de leitura limitada em tela grande (`max-width: 65ch` em texto corrido).
- Imagem responsiva: `max-width: 100%`, `height: auto`, `srcset` e `sizes`
  (ver `13-media-and-images.md`).

## Tela grande

- Conteúdo com largura máxima, para a linha não esticar em monitor largo.
- Espaço extra vira mais colunas ou painel lateral, não elementos maiores.
