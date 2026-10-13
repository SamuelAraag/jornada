# Imagens e mídia

## Toda imagem

- `width` e `height` no HTML, ou `aspect-ratio` no CSS. Sem isso a página salta quando a imagem
  chega (CLS).
- `alt` descreve a função da imagem. Imagem decorativa usa `alt=""`. Nunca omitir o atributo.
- Nunca esticar: `object-fit: cover` para preencher com corte, `contain` para mostrar inteira.
- `srcset` e `sizes` para não mandar arquivo de 1200 px a uma tela de 375 px.
- Formato moderno com fallback: `<picture>` com AVIF, WebP e depois JPEG ou PNG.
- Fora da primeira dobra: `loading="lazy"` e `decoding="async"`.
- A imagem principal da primeira dobra (candidata a LCP): `fetchpriority="high"`, **sem**
  `loading="lazy"`, e presente no HTML (imagem de fundo em CSS é descoberta tarde).
- Falha de carregamento mostra um estado de erro com o mesmo tamanho do espaço reservado e ação
  de tentar de novo. Nunca o ícone quebrado do navegador.
- Enquanto carrega: cor dominante, miniatura borrada ou skeleton no formato final.

## Grade e lista de miniaturas

- Células com proporção fixa (`aspect-ratio`), para a grade não reorganizar ao carregar.
- Miniatura é um arquivo pequeno de verdade, não a imagem cheia reduzida por CSS.
- Cada miniatura é um `<button>` ou `<a>` com nome acessível, não uma `<div>` clicável.
- Grade longa: carregar por demanda e virtualizar. Ver `03-lists-and-tables.md`.

## Visualizador (lightbox)

O visualizador é uma camada de detalhe sobre a lista, não uma página sem relação com ela.

**Abrir**

- O toque na miniatura abre na hora. Usar a miniatura já carregada, ampliada, enquanto a versão
  em alta resolução chega, e trocar sem piscar e sem mudar o tamanho do contêiner.
- Quando viável, transição de elemento compartilhado: a imagem cresce a partir da posição da
  miniatura. A View Transitions API resolve isso em página única; use com verificação de suporte
  (`if (document.startViewTransition)`) e sem ela a abertura é um fade curto.
- Se a posição de origem não for conhecida, fade com escala discreta. Não inventar ponto de origem.
- A imagem mantém proporção, fica centralizada e respeita as áreas seguras.

**Durante**

- A imagem é o foco. Controles sobre gradiente discreto ou barra com contraste suficiente, fora
  das regiões importantes da foto. Um toque pode mostrar e ocultar os controles.
- Fechar é sempre um botão visível dentro da área segura, com 44 px ou mais e nome acessível.
- Galeria: deslizar na horizontal troca de imagem; botões anterior e próximo e setas do teclado
  fazem o mesmo. Na primeira e na última, resistência elástica ou indicação de fim.
- Zoom: pinça amplia em torno do ponto entre os dedos; duplo toque alterna entre ajustado e
  ampliado no ponto tocado; pan limitado para a imagem não sair da área visível.
- Enquanto ampliada, pan e zoom têm prioridade e o gesto de dispensar fica desligado. Ao voltar
  ao tamanho ajustado, ele volta a valer.

**Fechar**

- Quatro caminhos: botão, arrastar para baixo, tecla Esc e Voltar do aparelho.
- **Toque no conteúdo não fecha.** Esta é a exceção à regra de "clique fora fecha" de
  `05-dialogs-and-destructive-actions.md`: em visualizador de mídia, só o fundo vazio, o botão ou
  o gesto fecham.
- Arrastar para baixo: a imagem acompanha o dedo, encolhe de leve, o fundo clareia de forma
  contínua e os controles somem. Limiar e velocidade em `12-touch-and-gestures.md`.
- Ao confirmar, a imagem volta para a miniatura de origem quando ela ainda existe; senão, saída
  curta. O foco volta para a miniatura.

**Semântica**

- `<dialog>` modal com nome acessível; fundo inerte; foco preso dentro.
- Cada imagem com `alt`; a posição na galeria é anunciada ("3 de 12").
- Com `prefers-reduced-motion`, abrir e fechar são fades curtos, sem escala nem deslocamento.

## Vídeo e áudio

- Nunca tocar com som sozinho. Autoplay só mudo, com controle de pausa visível.
- Movimento que começa sozinho e dura mais de 5 segundos tem como pausar (WCAG 2.2.2).
- Legendas para fala; controles nativos ou equivalentes operáveis por teclado.
- `poster` com a proporção do vídeo e `preload="metadata"` para não baixar o arquivo sem pedido.

## Checklist

- [ ] Toda imagem reserva espaço antes de carregar.
- [ ] A imagem de LCP não é lazy e tem prioridade alta.
- [ ] Miniatura e detalhe parecem a mesma imagem, sem piscar na troca.
- [ ] O visualizador fecha por botão, gesto, Esc e Voltar.
- [ ] Zoom e pan não disparam a dispensa.
- [ ] A lista volta no mesmo ponto, com foco na miniatura.
- [ ] Falha de imagem mostra erro com tentar de novo.
