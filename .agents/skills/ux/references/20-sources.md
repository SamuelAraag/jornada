# Fontes

De onde vêm os números e as convenções desta skill. Consultadas em outubro de 2026. Convenção de
mercado muda: antes de depender de um recurso recente ou de um número exato, confira a fonte.

## Normas e especificações

| Assunto | Fonte |
|---|---|
| Critérios do WCAG 2.2 e o que entrou na 2.2 | https://www.w3.org/TR/WCAG22/ e https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/ |
| Padrão de diálogo modal (foco, teclado, ARIA) | https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/ |
| Estado de suporte de recursos (Baseline) | https://web.dev/baseline |

## Performance

| Assunto | Fonte |
|---|---|
| Metas de LCP, INP e CLS no percentil 75 | https://web.dev/articles/vitals |
| Causas e correções de salto de layout | https://web.dev/articles/optimize-cls |
| Problemas de performance de imagem | https://web.dev/learn/images/performance-issues |
| Limites de 0,1 s, 1 s e 10 s | https://www.nngroup.com/videos/3-response-time-limits-interaction-design/ |

## Formulários e login

| Assunto | Fonte |
|---|---|
| `inputmode="numeric"` em vez de `type="number"` | https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/ |
| Evitar botão desabilitado | https://design-system.service.gov.uk/components/button/ e https://adrianroselli.com/2024/02/dont-disable-form-controls.html |
| Validação, resumo de erros e foco | https://design-system.service.gov.uk/patterns/validation/ |
| Formulário de login: autocomplete, mostrar senha, alvo de 44 px | https://web.dev/articles/sign-in-form-best-practices |
| Passkey no autopreenchimento | https://web.dev/passkey-form-autofill |
| Formulário em uma coluna | https://baymard.com/blog/avoid-multi-column-forms |
| Zoom do iOS em campo com fonte menor que 16 px | https://weblog.west-wind.com/posts/2023/Apr/17/Preventing-iOS-Textbox-Auto-Zooming-and-ViewPort-Sizing |

## Padrões de interação

| Assunto | Fonte |
|---|---|
| Rolagem infinita, paginação e "carregar mais" | https://www.nngroup.com/articles/infinite-scrolling-tips/ |
| Diálogo de confirmação e desfazer | https://www.nngroup.com/articles/confirmation-dialog/ |
| Limiar de distância e velocidade de drawer | https://v5.mui.com/material-ui/api/swipeable-drawer/ |
| Padrões enganosos | https://www.deceptive.design/ |

## Plataforma web

| Assunto | Fonte |
|---|---|
| Unidades `dvh`, `svh`, `lvh` | https://web.dev/blog/viewport-units |
| View Transitions na mesma página (Baseline em outubro de 2025) | https://web.dev/blog/same-document-view-transitions-are-now-baseline-newly-available |
| Popover API (Baseline 2024) | https://web.dev/blog/popover-api |
| `light-dark()` e `color-scheme` | https://web.dev/articles/light-dark |
| Critérios de instalação de PWA | https://web.dev/articles/install-criteria |

## Visual

| Assunto | Fonte |
|---|---|
| Tema escuro: cinza escuro em vez de preto, elevação por superfície mais clara | https://m2.material.io/design/color/dark-theme |
| Linha de 45 a 75 caracteres | https://en.wikipedia.org/wiki/Line_length |

## Não conferido na fonte primária

Estes valores vieram de fontes secundárias concordantes, porque as páginas oficiais não puderam
ser lidas diretamente. Trate como referência e confira se for decisivo:

- Alvo de 44 pt (Apple HIG) e de 48 dp (Material Design).
- Barra de navegação inferior com 3 a 5 destinos (Material Design 3).
- Duração de snackbar: curta perto de 4 s, longa perto de 10 s (Material).
- Tokens de duração e curvas de easing do Material 3 (50 a 600 ms; curva enfatizada
  `cubic-bezier(0.2, 0, 0, 1)`).

## Sem norma: valores de prática

Limiar de gesto do visualizador, escala mínima no arraste, resistência elástica, atraso antes
de mostrar spinner e debounce de busca não têm norma. Os números da skill são ponto de partida
para calibrar em dispositivo real.
