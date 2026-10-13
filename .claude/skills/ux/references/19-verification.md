# Verificação antes de entregar

Lint, build e teste passando não provam que a tela funciona. Antes de dizer que está pronto,
**abra a tela e use**. Se houver ferramenta de navegador disponível, use para tirar captura em
cada largura e ler o console. O que não foi possível conferir é dito na entrega, sem disfarçar.

## Roteiro

**1. Larguras:** 320, 375, 768 e 1280 px. Em cada uma: nada cortado, nada com rolagem horizontal
da página, a ação principal visível, a hierarquia preservada.

**2. Teclado:** percorrer a tela inteira só com Tab, Shift+Tab, Enter, Espaço, Esc e setas.
O foco é sempre visível, segue a ordem visual, não fica preso e não some atrás de cabeçalho fixo.
Modal prende o foco e devolve ao fechar.

**3. Zoom:** 200% no navegador sem perder conteúdo nem função. Em 400% (equivalente a 320 px de
largura) o conteúdo reflui em uma coluna, sem rolagem nos dois eixos.

**4. Estados:** forçar cada um: carregando, vazio, vazio por filtro, erro com tentar de novo,
sem permissão, offline. Formulário: inválido, enviando, erro do servidor, sucesso.

**5. Conteúdo extremo:** nome muito longo, texto sem espaço, número grande, lista com 0, 1 e
muitos itens, imagem que falha.

**6. Temas e preferências:** claro e escuro; `prefers-reduced-motion`; texto do sistema ampliado.

**7. Toque** (quando a tela é usada no celular): em aparelho real ou emulação de toque. Alvos com
44 px ou mais, nada depende de hover, teclado virtual não cobre o campo nem o botão, barra de
endereço aparecendo e sumindo não quebra o layout, retrato e paisagem. Gestos conforme o
checklist de `12-touch-and-gestures.md`. Navegadores: Safari iOS e Chrome Android.

**8. Navegação:** Voltar do navegador em cada ponto do fluxo, atualizar a página no meio,
abrir o link direto em outra aba. O estado continua coerente.

**9. Leitor de tela (amostra):** com VoiceOver ou NVDA, ouvir o título da página, os marcos, o nome
de cada controle e o anúncio de erro e de sucesso.

**10. Automático:** axe ou Lighthouse para acessibilidade e performance; console sem erro. Estas
ferramentas pegam só uma parte dos problemas: não substituem os passos acima.

**11. Rede lenta:** simular 3G lento. Nada salta, indicadores aparecem, a tela continua usável.

## Como relatar

Na entrega, dizer em uma lista curta: o que foi verificado e como, o que falhou e foi corrigido,
e o que **não** foi verificado (por exemplo: "não testei em aparelho iOS real").
