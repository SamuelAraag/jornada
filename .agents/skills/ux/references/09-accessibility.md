# Acessibilidade

Padrão mínimo: WCAG 2.2 AA.

## Estrutura

- Marcos: um `<main>`, mais `<header>`, `<nav>` e `<footer>` quando existirem.
- Um `<h1>` por tela e títulos em ordem, sem pular nível.
- `lang` no `<html>` e `<title>` único por tela.
- Elemento nativo antes de ARIA: `<button>`, `<a>`, `<input>`, `<dialog>`, `<details>`. ARIA
  errado é pior que nenhum.
- Ordem no DOM igual à ordem visual.
- Link "pular para o conteúdo" quando há navegação longa antes do conteúdo.

## Teclado e foco

- Toda a interface é operável por teclado: tab para navegar, enter/espaço para
  ativar, esc para fechar modais/drawers, sem armadilhas de foco.
- Foco sempre visível (`:focus-visible`), com contraste de 3:1 e espessura de 2 px ou mais.
- O elemento em foco não fica escondido atrás de cabeçalho fixo, barra inferior ou banner
  (WCAG 2.4.11): usar `scroll-padding`.
- Ao abrir um modal/drawer, o foco move para dentro dele; ao fechar, retorna ao elemento
  que o abriu.
- Em troca de tela de página única, o foco vai para o título da nova tela.
- Componente composto (abas, menu, lista de opções) usa setas dentro e Tab para sair.
- Elementos interativos custom (ex.: dropdown próprio) implementam os atributos ARIA de
  papel/estado correspondentes. Não usar `<div onclick>` para algo que se comporta como botão.

## Ponteiro e toque

- Alvo de clique com 24 x 24 CSS px no mínimo, ou espaçamento equivalente (WCAG 2.5.8).
  Em interface de toque, 44 x 44.
- Tudo que se faz arrastando também se faz com clique ou toque simples (WCAG 2.5.7).
- Gesto com vários dedos ou com trajeto tem alternativa de toque único (WCAG 2.5.1).
- A ação dispara ao soltar, não ao pressionar, para permitir desistir (WCAG 2.5.2).

## Cor e contraste

- Nenhuma informação é comunicada só por cor (status, erro, obrigatoriedade): sempre
  acompanhada de ícone e/ou texto.
- Contraste mínimo de texto: 4.5:1 para texto normal, 3:1 para texto grande, seguindo os
  tokens de cor definidos. Não usar cores fora da paleta para "resolver" contraste pontualmente.
- Contraste de 3:1 para o que não é texto mas é necessário para entender: contorno de campo,
  ícone com função, estado de um controle, indicador de foco (WCAG 1.4.11).
- Funcionar em modo de alto contraste (`forced-colors`): estado comunicado por borda ou
  `outline`, não só por cor de fundo.

## Zoom, tamanho e espaçamento

- Nunca bloquear o zoom do navegador.
- Zoom de texto até 200% sem perda de conteúdo nem de função (WCAG 1.4.4).
- Em 320 CSS px de largura, o conteúdo reflui sem rolagem nos dois eixos, salvo tabela de dados,
  mapa e semelhantes (WCAG 1.4.10).
- O layout aguenta o usuário aumentar entrelinha para 1,5, espaço entre parágrafos para 2x,
  entre letras para 0,12x e entre palavras para 0,16x o tamanho da fonte (WCAG 1.4.12). Na
  prática: não fixar altura em caixa que contém texto.
- Tamanhos de fonte em `rem`.

## Formulários

- Todo input tem `label` associado (via `for`/`id` ou `aria-label` quando o label visual
  não for possível).
- Erro ligado ao campo por `aria-describedby`, com `aria-invalid`.
- `autocomplete` nos campos de dado pessoal (WCAG 1.3.5).
- Não pedir de novo o que já foi informado no mesmo fluxo (WCAG 3.3.7).
- Login sem teste de memória ou de transcrição: permitir colar, gerenciador de senhas e
  passkey; sem CAPTCHA de quebra-cabeça como único caminho (WCAG 3.3.8).

## Conteúdo não textual

- Imagens e ícones com função (não decorativos) têm texto alternativo. Decorativo usa `alt=""`
  ou `aria-hidden="true"`.
- Botão só com ícone tem nome acessível (`aria-label`).
- Vídeo com fala tem legenda.

## Mudanças dinâmicas

- Mensagem que surge sem troca de página é anunciada: `role="status"` para informação e sucesso,
  `role="alert"` para erro (WCAG 4.1.3).
- Conteúdo que aparece no hover ou no foco pode ser dispensado sem mover o ponteiro, pode ser
  apontado sem sumir e permanece até ser dispensado (WCAG 1.4.13).
- Limite de tempo avisa antes e pode ser estendido (WCAG 2.2.1).
- Ajuda (contato, chat, FAQ) fica no mesmo lugar em todas as telas (WCAG 3.2.6).

## Movimento

- Respeitar `prefers-reduced-motion: reduce`: toda animação criada pelo projeto precisa do
  guard que a desliga. Movimento parallax, pulso contínuo e entrada em cascata são
  desconfortáveis (e para algumas pessoas, incapacitantes) sem essa proteção.
- Nenhuma informação pode depender exclusivamente de movimento: um item que só se distingue
  por estar piscando não se distingue para quem desativou animações.
- Movimento que começa sozinho e dura mais de 5 s tem como pausar (WCAG 2.2.2).
- Nada pisca mais de 3 vezes por segundo (WCAG 2.3.1).

## O que entrou no WCAG 2.2

| Critério | Nível | Exigência |
|---|---|---|
| 2.4.11 Foco não encoberto | AA | o elemento em foco fica ao menos parcialmente visível |
| 2.5.7 Movimentos de arrastar | AA | alternativa de ponteiro único sem arrastar |
| 2.5.8 Tamanho do alvo | AA | 24 x 24 CSS px ou espaçamento equivalente |
| 3.2.6 Ajuda consistente | A | ajuda na mesma posição relativa entre telas |
| 3.3.7 Entrada redundante | A | não pedir de novo dado já informado |
| 3.3.8 Autenticação acessível | AA | login sem teste cognitivo obrigatório |

Como conferir: `19-verification.md`.
