# Navegação

## Estrutura

- Navegação principal reflete os módulos do domínio, não a estrutura técnica do código.
- O item da tela atual é marcado visualmente e com `aria-current="page"`.
- Rótulo de navegação é texto. Ícone sozinho só para destino universal (início, busca, perfil), e
  ainda assim com nome acessível.
- Breadcrumbs são usados apenas quando há hierarquia real de mais de 2 níveis
  (ex.: Tenant > Usuários > Detalhe do usuário). Não usar breadcrumb decorativo de 1 nível.

## Por tamanho de tela

| Contexto | Padrão |
|---|---|
| Desktop com muitos módulos | barra lateral, recolhível |
| Desktop com poucos destinos | barra superior |
| Celular com 3 a 5 destinos principais | barra inferior fixa, ícone com rótulo, dentro da área segura |
| Celular com mais de 5 destinos | os 4 mais usados na barra inferior e "Mais", ou menu lateral |
| Subseções de uma tela | abas; no celular, abas roláveis na horizontal |

- Não esconder a navegação principal atrás de menu hambúrguer quando ela cabe na barra inferior.
- Tocar no item já ativo da barra inferior volta ao topo ou à raiz daquela seção.
- A barra inferior não é coberta pelo teclado virtual nem cobre toast e ação principal.

## Estado na URL

- Estado de navegação relevante para o usuário (filtro ativo, aba ativa, página da tabela,
  termo de busca, item aberto) vive na URL via query params, não em memória apenas. Isso permite
  voltar sem perder contexto e compartilhar links.
- Todo link pode ser aberto direto em outra aba, e atualizar a página mantém a tela onde estava.
- Navegação é `<a href>`. Não trocar por `<button>` com `onclick`, que quebra abrir em nova aba.

## Voltar

- Links de "voltar" retornam ao estado anterior real (com filtros aplicados), não para a versão
  "limpa" da tela anterior.
- O botão Voltar do navegador e do aparelho sempre faz algo coerente: fecha a camada aberta
  (modal, drawer, visualizador) antes de sair da tela.
- Uma entrada de histórico por mudança de lugar, não por mudança de detalhe. Digitar em um filtro
  usa `replaceState`; abrir uma tela ou camada usa `pushState`.
- Com `pushState`, tratar `popstate` de modo que fechar pelo botão, pelo gesto e pelo Voltar
  chegue ao mesmo estado. Nunca prender o usuário.
- Ao voltar para uma lista, a rolagem e a página estão onde estavam.
- Toda navegação que sai de um formulário com alterações não salvas confirma a saída
  (ver `05-dialogs-and-destructive-actions.md`).

## Troca de tela em página única (SPA)

O navegador não faz isso sozinho quando não há carga de página:

- Atualizar o `<title>`.
- Mover o foco para o `<h1>` da nova tela (com `tabindex="-1"`) ou para o `<main>`, para que
  teclado e leitor de tela partam do conteúdo novo.
- Navegação nova rola para o topo; voltar restaura a posição.
- Mostrar carregamento se a tela demorar, mantendo a navegação visível.

## Links

- O texto do link diz o destino. Nada de "clique aqui" ou "saiba mais" soltos.
- Link externo ou que abre nova aba é indicado.
- Link "pular para o conteúdo" como primeiro foco em página com navegação longa.
