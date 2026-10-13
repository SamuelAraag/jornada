# Julgamento visual

Esta é a camada de **desempate**: vale quando as convenções do projeto e as regras dos
documentos 00–10 não dizem nada sobre o caso.

O objetivo não é produzir telas bonitas. É produzir telas **claras, rápidas de compreender,
consistentes com o produto que já existe, acessíveis e densas sem parecerem congestionadas**.
A tela entregue deve parecer construída pela mesma equipe que construiu o resto do sistema —
não uma tela desenhada isoladamente.

## Referências externas

Use apenas como calibragem de gosto, **nunca de identidade visual**: Linear (clareza sobre
decoração, hierarquia forte, densidade sem desordem, navegação subordinada ao conteúdo) e
Vercel/Geist (funcional antes de decorativo, interação previsível, estados completos, teclado
excelente). Não importe o visual desses produtos — a identidade é a do projeto.

## Princípios de julgamento

### Não compita por atenção que você não conquistou

Nem todo elemento merece o mesmo peso visual. A tarefa principal do usuário domina a tela.
Navegação, orientação, metadata, ações secundárias e controles auxiliares recebem **menos**
peso — em tamanho, cor e contraste. Metadata usa o token de texto secundário; dado principal
usa o de texto primário.

Para cada elemento, pergunte: *este elemento merece a atenção visual que está recebendo?*
A importância visual deve corresponder à importância funcional.

### Estrutura deve ser sentida, não vista

Não use borda, caixa, card ou separador só para criar estrutura. Resolva primeiro com
**proximidade, alinhamento, espaçamento, tipografia e contraste de superfície**. Só adicione
divisor quando ele ajudar o usuário a entender a relação entre elementos.

Antes de adicionar uma borda: *sem ela, a relação entre esses elementos continua clara?* Se
sim, ela é desnecessária. Não envolva cada seção em um card; prefira superfície contínua.

### Densidade sem congestionamento

Ferramenta profissional tem muita informação. Não resolva densidade só adicionando espaço —
use hierarquia, agrupamento, escala tipográfica, progressive disclosure, menu de contexto e
metadata silenciosa. Uma tela pode ser densa sem parecer entulhada.

### Tipografia e cor comunicam antes da decoração

Use tipografia para hierarquia antes de recorrer a cor, fundo, borda ou sombra. Evite muitas
combinações de tamanho/peso/cor na mesma tela.

Cor comunica significado ou hierarquia, nunca "deixa mais interessante". Cor forte se reserva
a ação principal, estado, feedback, alerta e seleção.

### Ícones com função

Ícone existe para melhorar reconhecimento ou economizar espaço. Evite ícone decorativo, ícone
com fundo colorido em todo item, ícones diferentes sem significado e ícone onde texto seria
mais claro.

## Interação e comportamento

Uma tela não é uma composição estática. Para **cada elemento interativo**, determine:

trigger → response → feedback → loading → success → error → disabled → comportamento de
teclado → comportamento de foco → comportamento de dispensa (dismissal).

Nunca implemente apenas o estado visual inicial. Considere o ciclo completo da interação.

- `focus` é obrigatório e **visível** — não remova outline sem colocar equivalente; é
  acessibilidade, não estética.
- `loading` mora no controle que disparou a ação (botão de submit desabilitado com indicador),
  não só numa área distante da tela.
- `disabled` comunica **por quê** quando não for óbvio (tooltip ou texto).
- Dispensa de modal: Esc, clique fora e botão de fechar, com o foco voltando para quem abriu.
  Se o projeto já tem função que faz isso, não reimplemente.
- Em touch, ação de tabela não pode depender de `hover` para existir.

## Movimento

Movimento precisa ter função. Use animação para indicar entrada ou saída, comunicar mudança de
estado, preservar continuidade espacial, direcionar atenção, explicar relação entre elementos e
dar feedback. **Não use animação só para deixar a interface mais bonita.**

### Hierarquia de motion

Nesta ordem de prioridade: 1. transição de estado — 2. continuidade espacial — 3. feedback de
interação — 4. direcionamento de atenção — 5. decoração. Animação puramente decorativa deve ser
rara.

### Continuidade e modelo espacial

Quando um elemento muda de posição ou estado, preserve a sensação de continuidade: o usuário
precisa entender de onde algo veio, para onde foi, o que mudou e o que permaneceu. Mantenha
lógica espacial consistente — um painel que entra pela direita sai por direção coerente; um
popover que pertence a um botão aparece de forma que reforce essa relação.

### Micro-interações

Considere feedback para hover, press, seleção, toggle, expandir/colapsar, arrastar, reordenar,
copiar, salvar, sucesso e falha. **O feedback deve ser proporcional à importância da ação** —
salvar um formulário merece mais do que passar o mouse numa linha.

### Timing

Interface de produtividade pede animação curta e discreta. Interação frequente precisa parecer
especialmente rápida, e **o usuário nunca deve esperar uma animação para continuar trabalhando**.

Não escolha duração no chute: considere distância percorrida, quantidade de elementos,
importância da mudança e frequência da interação. Nada acima de ~0.4s em resposta direta a uma
ação. Ponto de partida quando o projeto não tem convenção própria (**se tiver, ela vence**):

| Situação | Convenção |
|---|---|
| Micro-interação (hover, foco, transform) | `0.2s ease` |
| Transição de estado maior, fade | `0.3s ease` |
| Entrada de elemento na tela | `0.4s` |
| Modal abrindo | `0.3s cubic-bezier(0.16, 1, 0.3, 1)` |
| Toast entrando | `0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)` |
| Skeleton | shimmer `1.2s infinite` |
| Pulso de status ao vivo | `2s infinite` |
| Spinner | `1s linear infinite` |

Antes de criar uma animação nova, procure os `@keyframes` que o projeto já tem. A tendência
sem isso é criar uma duração nova a cada tela — exatamente o que acontece com cor e spacing.

### Easing

Evite movimento linear para transição natural — entrada, saída e deslocamento devem transmitir
aceleração e desaceleração. `linear` fica reservado a rotação contínua (spinner). Reutilize as
curvas já praticadas no projeto antes de inventar uma nova.

### Performance

Anime **`transform` e `opacity`**. Evite animar `width`, `height`, `top`/`left`: provocam
layout/reflow e engasgam em lista longa. Não anime a entrada de item de lista que carrega em
quantidade — 30 linhas em cascata é ruído. E `transition: all` é para evitar: declare a
propriedade (`transition: opacity 0.2s ease`).

Loading não pode saltar layout: skeleton com o formato do conteúdo final e estrutura estável
entre carregando e carregado. Prefira skeleton a spinner quando o formato é conhecido.

### Reduced motion

Respeite `prefers-reduced-motion`. Quando o movimento não for essencial, reduza ou remova.
Quando ele **comunicar informação**, substitua por uma mudança de estado que não dependa de
movimento (ex.: em vez do pulso de status ao vivo, um rótulo textual).

```css
@media (prefers-reduced-motion: reduce) {
    .minha-classe { animation: none; transition: none; }
}
```

Se as animações do projeto ainda não têm esse guard, cubra a que sua task encostar.

## Ordem de trabalho

**Layout, agrupamento, alinhamento, spacing, largura e densidade primeiro**; borda, sombra,
fundo e decoração só depois. Card não é solução automática de layout.

Responsivo não é desktop comprimido. Ao reduzir espaço, nesta ordem: preserve o conteúdo
principal → reduza informação secundária → mova ações secundárias → adapte a navegação →
só então mude a estrutura.

## Processo

**1. Comece pela tarefa, não pelo layout.** Qual o objetivo da tela, qual a ação principal do
usuário, o que é essencial, o que é secundário, quais estados podem ocorrer.

**2. Analise o produto existente.** Ache telas semelhantes e o que já está catalogado.
Reutilizar vem antes de criar — e se você criar algo reutilizável, **registre no catálogo na
mesma task**, senão o próximo agente recria.

**3. Declare a hierarquia** explicitamente: Primary, Secondary, Tertiary.

**4. Construa a estrutura** com as primitivas de `01-layout.md` — layout, agrupamento,
alinhamento, spacing, largura, densidade. Só depois considere borda, sombra, fundo, decoração.

**5. Escolha componentes convencionais.** Ação → button; navegação → link; seleção exclusiva →
radio/select; ativação → checkbox/switch; ações contextuais → menu; dados tabulares → table.
Não invente interação nova quando um padrão conhecido resolve. Aparência não pode atropelar
semântica.

## Anti-patterns

Card dentro de card; borda em todo container; sombra sem função; gradiente decorativo; excesso
de badges e de ícones; título enorme em aplicação; padding excessivo; modal para tarefa que cabe
inline; dropdown para poucas opções; tooltip carregando informação essencial; cinza com
contraste insuficiente; animação que atrasa ação. Dashboard não é coleção de cartões por padrão.

Cada um destes viola uma regra escrita nos documentos 00–10:

- Tela administrativa como modal quando deveria ser rota própria.
- `alert()` / `confirm()` nativos.
- "Tem certeza?" sem nomear a entidade afetada.
- Erro de validação de campo comunicado só por toast — validação é inline, revalidada no submit.
- `innerHTML` com dado da API sem escapar.
- Tela que trata só o caminho feliz, sem loading, vazio e erro.
- Cor hex nova em `style="..."` inline.

## Segunda passagem (obrigatória antes de entregar)

Relate explicitamente:

- **Hierarquia** — a ação principal é evidente?
- **Ruído** — algo chama mais atenção do que merece?
- **Estrutura** — alguma borda, card ou container pode sair?
- **Consistência** — essa solução já existia no produto?
- **Densidade** — há espaço desperdiçado ou informação entulhada?
- **Estados** — loading, vazio, vazio-por-filtro, erro, sem permissão, disabled, sucesso?
- **Ciclo de interação** — para cada elemento interativo: Idle → Hover → Focus → Active →
  Loading → Success/Error → Disabled. Depois confira teclado, mouse, touch, mudança de
  contexto, entrada e saída de elementos e o feedback de cada ação.
- **Movimento** — cada animação tem função? reutiliza a convenção existente? anima só
  `transform`/`opacity`? tem guard de `prefers-reduced-motion`?
- **Acessibilidade** — dá para usar sem mouse? foco visível? contraste? nada só por cor?
- **Responsividade** — a hierarquia se mantém em 320px, 768px e 1280px?
- **Temas** — funciona em todos os temas que o projeto suporta?

Fechar com o checklist de `00-principles.md`.

## Regra final

Entre duas soluções igualmente funcionais, prefira a de menos elementos, menos estilos, menos
exceções e menor carga cognitiva. Não maximize elementos visíveis — maximize informação
compreensível.
