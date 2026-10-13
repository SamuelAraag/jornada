# Fundação visual para tela nova

**Quando usar:** só quando o Passo 0 não encontrou tokens, isto é, tela HTML avulsa, protótipo ou
projeto que está começando. Se o projeto já tem tokens, eles vencem e este arquivo não se aplica.

A regra "não escrever hex novo" continua valendo com uma única exceção: nesta situação, os
tokens são definidos **uma vez**, em `:root`, e toda a tela usa só os tokens. Hex solto em
`style="..."` ou no meio do CSS continua proibido.

## Tokens de partida

Paleta neutra, com contraste conferido (texto acima de 4,5:1, borda de controle acima de 3:1,
nos dois temas). Troque o `--accent` pela cor da marca e confira o contraste de novo.

```css
:root {
  color-scheme: light dark;

  --bg:             light-dark(#ffffff, #121212);
  --surface:        light-dark(#f6f7f8, #1e1e1e);
  --border:         light-dark(#dcdfe3, #34373c);   /* separador decorativo */
  --border-control: light-dark(#767a80, #8b9097);   /* contorno de campo e botão */
  --text:           light-dark(#1a1a1a, #e8e8e8);
  --text-2:         light-dark(#5c6066, #a6abb2);   /* metadata, legenda */
  --accent:         light-dark(#0b57d0, #a8c7fa);   /* ação principal, link, seleção */
  --on-accent:      light-dark(#ffffff, #062e6f);
  --success:        light-dark(#146c2e, #6dd58c);
  --warning:        light-dark(#8a5000, #f5bd6b);
  --danger:         light-dark(#b3261e, #f2b8b5);
  --on-danger:      light-dark(#ffffff, #601410);

  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-5: 24px; --space-6: 32px; --space-7: 48px; --space-8: 64px;

  --radius-1: 4px; --radius-2: 8px; --radius-3: 12px; --radius-full: 999px;

  --font: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --font-mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;

  --text-xs: 0.75rem;  --text-sm: 0.875rem; --text-md: 1rem;
  --text-lg: 1.25rem;  --text-xl: 1.5rem;   --text-2xl: 2rem;

  --ease: cubic-bezier(0.2, 0, 0, 1);
  --dur-1: 150ms; --dur-2: 250ms; --dur-3: 400ms;
}
```

`light-dark()` é Baseline desde 2024. Se o projeto precisa de navegador mais antigo, declare os
valores claros em `:root` e os escuros em `@media (prefers-color-scheme: dark)`.

## Tipografia

- Texto base de **16 px** (`1rem`). Nunca menos de 12 px, e 12 px só para metadata.
- Tamanhos em `rem`, para respeitar o tamanho de fonte que o usuário configurou.
- Entrelinha de 1,5 no corpo e 1,2 a 1,3 em título.
- Linha de leitura entre 45 e 75 caracteres: `max-width: 65ch` em texto corrido.
- No máximo 2 famílias e 3 pesos. Hierarquia por tamanho e peso antes de cor.
- Número em tabela ou contador: `font-variant-numeric: tabular-nums`.
- Título fluido, quando precisar: `clamp(1.5rem, 1rem + 2vw, 2rem)`. Corpo de texto não é fluido.
- Campo de formulário com fonte de 16 px ou mais, senão o Safari do iOS dá zoom ao focar.

## Espaçamento e forma

- Só os valores da escala (múltiplos de 4). Dentro de um grupo, espaço menor; entre grupos, maior.
- Padding de tela no mobile: 16 px. Largura de conteúdo conforme o tipo de tela (`01-layout.md`).
- Um raio para controle, um para card. Não misturar três raios na mesma tela.
- Sombra só para o que flutua de verdade (menu, modal, toast). Card separado por superfície
  ou borda, não por sombra.

## Cor

- Uma cor de destaque. Ela marca ação principal, link e seleção, nada mais.
- Verde, amarelo e vermelho só para estado, sempre com ícone ou texto junto.
- Contraste: texto normal 4,5:1; texto grande (24 px, ou 19 px em negrito) 3:1; contorno de
  campo, ícone com função e indicador de foco 3:1.
- Texto sobre cor de destaque usa o token `--on-*`, não branco fixo.

## Tema escuro

- Respeitar `prefers-color-scheme` por padrão. Se houver seletor manual, lembrar a escolha.
- Fundo cinza muito escuro em vez de preto puro; superfície mais alta é **mais clara**, porque
  sombra não aparece em fundo escuro.
- Cores de destaque e de estado mais claras e menos saturadas que no tema claro.
- Texto principal não é branco puro.
- Imagem, ilustração e logo conferidos nos dois temas.
- `<meta name="color-scheme" content="light dark">` para os controles nativos e a barra de
  rolagem acompanharem o tema.

## Outras preferências do sistema

- `prefers-reduced-motion`: ver `11-visual-judgment.md`.
- `prefers-contrast: more`: bordas e textos secundários ganham contraste.
- `forced-colors: active` (alto contraste do Windows): não depender de `background-color` para
  comunicar estado; usar borda ou `outline`, que sobrevivem.

## Foco

```css
:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
```

Nunca `outline: none` sem substituto. O anel de foco não pode ficar escondido atrás de cabeçalho
fixo: use `scroll-padding-top` com a altura do cabeçalho.
