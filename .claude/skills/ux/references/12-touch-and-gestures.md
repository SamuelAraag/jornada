# Toque e gestos

Vale para qualquer tela usada com o dedo: app mobile, PWA ou página responsiva. Para o caso
específico de visualizador de imagem, ver também `13-media-and-images.md`.

## Regras que não mudam

- **Todo gesto tem alternativa visível.** Arrastar, deslizar, pinçar e segurar nunca são a única
  forma de executar uma ação: sempre existe botão, menu ou tecla equivalente (WCAG 2.5.7 e 2.5.1).
- **Manipulação direta.** Quando o gesto representa mover ou dispensar, o conteúdo acompanha o
  dedo desde o reconhecimento, sem atraso e sem animação disparada só no fim.
- **Reversível.** Gesto incompleto volta ao estado original. `pointercancel`, perda de foco ou
  mudança de orientação restauram um estado válido, nunca deixam a tela deslocada.
- **Um gesto por vez.** Decida o eixo depois de uma pequena fase de reconhecimento e trave nele.
- **Não roubar gesto do sistema.** Voltar pela borda lateral, puxar para atualizar e zoom de
  página pertencem ao navegador. Não capture gesto horizontal colado na borda da tela.
- **Nada depende de `hover`.** Estilo de hover só dentro de `@media (hover: hover) and (pointer: fine)`.

## Prioridade entre gestos

Quando mais de um gesto pode responder ao mesmo toque, nesta ordem:

1. Controle interativo sob o dedo (botão, link, campo).
2. Rolagem de uma área interna que ainda tem para onde rolar.
3. Pan e zoom, se o conteúdo estiver ampliado.
4. Navegação horizontal (carrossel, galeria, abas).
5. Dispensa vertical (fechar sheet, fechar visualizador).

## Valores de partida

Não existe norma para limiar de gesto. Estes valores são ponto de partida, tirados de bibliotecas
conhecidas e de prática comum. **Calibre em dispositivo real antes de fechar a task.**

| Parâmetro | Ponto de partida | Origem |
|---|---|---|
| Tolerância antes de reconhecer arraste | 8 a 10 px | touch slop do Android (8dp) |
| Trava de eixo | eixo dominante quando um deslocamento passa de 1,5x o outro | prática comum |
| Dispensa por distância (drawer, sheet) | cerca de 50% do percurso | padrão do MUI SwipeableDrawer (0,52) |
| Dispensa por distância (visualizador) | 20% a 25% da altura da tela | prática comum, calibrar |
| Dispensa por velocidade | acima de 450 px/s (faixa útil: 250 a 1000) | padrão do MUI SwipeableDrawer |
| Escala mínima durante o arraste | 0,85 | prática comum |
| Resistência além do limite (elástico) | deslocamento multiplicado por 0,3 a 0,5 | prática comum |
| Retorno ao cancelar | 200 a 300 ms, sem overshoot perceptível | faixa média do Material 3 |

Velocidade vence distância: um gesto curto e rápido expressa intenção e pode confirmar antes do
limiar de distância. Um gesto longo e lento também confirma.

## Alvo de toque

- Mínimo absoluto: **24 x 24 CSS px** ou espaçamento equivalente (WCAG 2.5.8, nível AA).
- Padrão para interface de toque: **44 x 44 CSS px** (Apple HIG, WCAG 2.5.5 AAA, web.dev).
- Ação principal ou frequente: **48 x 48** (Material).
- Pelo menos 8 px entre alvos vizinhos. O ícone pode ser menor que o alvo: aumente a área com
  padding, não com o desenho.
- Ação principal de tela mobile fica na metade inferior, ao alcance do polegar.

## Implementação

**Pointer Events** unificam toque, caneta e mouse:

- `pointerdown`: guarda ponto inicial, instante e `pointerId`.
- `pointermove`: decide o eixo, depois atualiza o deslocamento.
- `pointerup`: calcula distância e velocidade, confirma ou cancela.
- `pointercancel` e `lostpointercapture`: restauram o estado. Tratar sempre.
- `setPointerCapture` para continuar recebendo eventos fora do elemento.

**CSS que evita briga com o navegador:**

- `touch-action` só no elemento que implementa o gesto e só com o que ele precisa
  (`pan-y` para gesto horizontal próprio, `pan-x` para vertical). Nunca `touch-action: none`
  na página inteira.
- `overscroll-behavior: contain` na camada rolável para a rolagem não vazar para a página.
- Nada de `preventDefault()` indiscriminado em `touchmove`: bloqueia rolagem, zoom e leitor de tela.
- Durante o arraste, o `transform` é escrito direto no elemento e a `transition` fica desligada.
  Transição CSS concorrente no mesmo `transform` causa atraso e salto.

**Estado explícito em vez de booleanos soltos.** Uma camada com gesto passa por
`closed`, `opening`, `open`, `drag-pending` (eixo indefinido), `dragging`, `closing`. Todo
cancelamento volta para `open` ou `closed`.

**Separar gesto de render:** uma camada calcula deslocamento, velocidade e decisão; outra aplica
`transform` e `opacity`. Não atualize estado de framework a cada pixel se isso re-renderiza a árvore:
escreva o estilo direto e sincronize o estado no fim do gesto.

**Limpeza:** remova listeners ao fechar e ao desmontar. Abrir e fechar 20 vezes não pode
acumular handler.

## Camada sobre lista (sheet, drawer, visualizador)

- Trave a rolagem do fundo e torne o fundo inerte (`<dialog>` com `showModal()` já faz o segundo;
  o primeiro pede `overflow: hidden` na raiz). Teste no Safari iOS: se a rolagem vazar, use o
  fallback de `position: fixed` com `top` negativo e restaure a posição ao fechar.
- Ao fechar, a lista está **exatamente** onde estava: mesma rolagem, filtros, ordenação e foco no
  item de origem. Lista virtualizada restaura por âncora do item, não por pixel.
- Se o item de origem sumiu (removido, filtrado), feche com saída curta e deixe a lista em
  posição útil.
- O botão Voltar do aparelho fecha a camada antes de sair da tela. Uma entrada de histórico por
  camada aberta, nunca uma por gesto. Ver `02-navigation.md`.

## Padrões comuns

| Padrão | Convenção |
|---|---|
| Bottom sheet | alça visível, arrastar para baixo fecha, botão de fechar existe, conteúdo interno rola antes de o sheet se mover |
| Ação por deslize em item de lista | revela no máximo 2 ou 3 ações, a mesma ação existe no menu do item, exclusão oferece desfazer |
| Puxar para atualizar | só em feed ou lista viva; existe botão de atualizar equivalente; desligar o nativo com `overscroll-behavior-y: contain` se for implementar um próprio |
| Carrossel | `scroll-snap` nativo antes de biblioteca; indicador de posição; botões anterior e próximo para teclado e mouse |
| Segurar (long press) | só para atalho de algo que também está em menu visível |
| Reordenar arrastando | alça de arraste, botões mover para cima e para baixo como alternativa, anúncio da nova posição |

## Checklist

- [ ] Cada gesto tem botão ou menu equivalente.
- [ ] O conteúdo acompanha o dedo sem atraso e o eixo é travado.
- [ ] Gesto incompleto e `pointercancel` voltam ao estado inicial.
- [ ] O gesto não conflita com rolagem interna, zoom nem com o voltar do sistema.
- [ ] Alvos de toque com 44 px ou mais; nada depende de hover.
- [ ] O Voltar do aparelho fecha a camada e a lista volta no mesmo ponto.
- [ ] Testado em Safari iOS e Chrome Android, em aparelho real.
