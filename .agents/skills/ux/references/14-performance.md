# Performance percebida

Tela lenta é problema de UX, não só de engenharia. Estas são as metas e os padrões que fazem a
interface parecer rápida.

## Metas (Core Web Vitals)

Medidas no percentil 75 dos acessos reais, separadas por mobile e desktop.

| Métrica | O que mede | Bom | Ruim |
|---|---|---|---|
| LCP | quando o maior elemento da primeira dobra aparece | até 2,5 s | acima de 4 s |
| INP | atraso entre a interação e a resposta visual | até 200 ms | acima de 500 ms |
| CLS | quanto o layout salta sozinho | até 0,1 | acima de 0,25 |

## Os três limites de tempo de resposta

| Tempo | Como o usuário percebe | O que a interface faz |
|---|---|---|
| até 0,1 s | instantâneo, sensação de manipulação direta | nenhum indicador; o próprio controle muda de estado |
| até 1 s | atraso notado, raciocínio preservado | nenhum indicador, ou só no controle acionado |
| 1 a 10 s | atenção ameaçada | skeleton ou spinner com texto do que está acontecendo |
| acima de 10 s | atenção perdida | barra de progresso com percentual e opção de cancelar; permitir sair e voltar |

- Indicador que pisca por menos de 1 segundo atrapalha. Atrase a exibição do spinner ou skeleton
  em uns 300 a 500 ms: se a resposta chegar antes, nada aparece.
- Barra de progresso nunca volta para trás nem fica parada sem explicação.
- O feedback do toque (estado pressionado) aparece em até 100 ms, mesmo que a operação demore.

## UI otimista

Para ação com baixa chance de falha e fácil de desfazer (curtir, marcar, arquivar, reordenar,
alternar): aplique o resultado na hora e confirme com o servidor em segundo plano.

- Se falhar, desfaça a mudança e explique o que aconteceu, com ação de tentar de novo.
- Não usar em pagamento, envio irreversível ou qualquer coisa que o usuário tome como definitiva.

## Layout que não salta

- Imagem, vídeo, iframe e anúncio reservam espaço antes de carregar (`width` e `height`,
  `aspect-ratio` ou `min-height`).
- Conteúdo que chega depois (banner, aviso, resultado) não empurra o que o usuário está lendo:
  reserve o espaço, sobreponha ou insira abaixo da dobra.
- Skeleton com o formato e a quantidade do conteúdo final.
- Fonte web: `font-display: swap` ou `optional`, fonte de fallback com métricas próximas
  (`size-adjust`) e `preload` só das fontes críticas. Se não houver razão de marca, pilha de
  fontes do sistema.
- Animar `transform` e `opacity`. Ver `11-visual-judgment.md`.

## Interação que não trava

- Nenhuma tarefa longa no clique: trabalho pesado sai da thread principal ou é fatiado.
- Busca e filtro por digitação com debounce (uns 250 a 300 ms) e cancelamento da requisição
  anterior, para a resposta antiga não sobrescrever a nova.
- Listeners de `scroll` e `touchmove` passivos, salvo quando o gesto exige o contrário.
- Lista longa virtualizada ou paginada; `content-visibility: auto` em seções fora da tela.

## Carregamento

- O que está acima da dobra carrega primeiro; o resto, sob demanda.
- Imagens conforme `13-media-and-images.md`.
- Voltar e avançar devem ser instantâneos: não registrar `unload`, para a página entrar no cache
  de voltar e avançar do navegador.
- Pré-carregar o destino provável (hover, toque iniciado) quando a navegação for o caminho
  principal da tela.
- Conexão lenta e offline são estados previstos, não erro genérico. Ver `06-feedback-states.md`.

## Checklist

- [ ] Nada salta depois que a tela aparece.
- [ ] Todo toque tem resposta visual em até 100 ms.
- [ ] Operação acima de 1 s tem indicador; acima de 10 s tem progresso e cancelar.
- [ ] Indicador não pisca em resposta rápida.
- [ ] Testado com rede lenta simulada e em aparelho intermediário.
