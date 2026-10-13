# Base de HTML e plataforma web

O mínimo que qualquer página precisa ter, e o que o navegador já resolve sozinho.

## `<head>` mínimo

```html
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Nome da tela · Nome do produto</title>
  <meta name="description" content="Uma frase sobre a página.">
  <meta name="color-scheme" content="light dark">
  <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#121212" media="(prefers-color-scheme: dark)">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
</head>
```

- `lang` correto: muda a pronúncia do leitor de tela e a hifenização.
- `<title>` único por tela, com o específico antes do nome do produto. Em página única, atualizar
  a cada troca de rota.
- **Nunca** `user-scalable=no` nem `maximum-scale=1`: bloquear zoom fere a acessibilidade.
- `viewport-fit=cover` só quando a tela vai de borda a borda e trata `env(safe-area-inset-*)`.
- `theme-color` com o mesmo valor do token de fundo de cada tema.

## HTML semântico

- Um `<main>` por página, mais `<header>`, `<nav>` e `<footer>` quando existirem. São os marcos
  que o leitor de tela usa para pular entre regiões.
- Um `<h1>` por tela. Títulos em ordem, sem pular nível por causa de tamanho de fonte.
- `<button>` para ação, `<a href>` para navegação. Nunca `<div onclick>`. Botão dentro de
  formulário que não envia leva `type="button"`.
- Lista é `<ul>` ou `<ol>`; dado tabular é `<table>` com `<th scope>` e `<caption>`.
- Data e hora em `<time datetime="...">`.
- Link "pular para o conteúdo" como primeiro elemento focável em página com navegação longa.

## Nativo antes de biblioteca

Antes de escrever ou importar um componente, veja se o navegador já entrega:

| Necessidade | Nativo | Situação |
|---|---|---|
| Modal | `<dialog>` com `showModal()` | amplamente disponível; traz foco preso, Esc e fundo inerte |
| Menu, dica, popover | atributo `popover` | Baseline desde 2024 |
| Expandir e recolher | `<details>` e `<summary>` | amplamente disponível |
| Bloquear interação com uma área | atributo `inert` | amplamente disponível |
| Carrossel | `scroll-snap` | amplamente disponível |
| Layout por tamanho do componente | container queries | amplamente disponível |
| Estilo pelo conteúdo do pai | `:has()` | amplamente disponível desde 2026 |
| Transição entre estados da mesma página | View Transitions | Baseline desde outubro de 2025: usar com verificação de suporte |
| Transição entre páginas | View Transitions entre documentos | suporte parcial no Firefox: só como melhoria |
| Data | `<input type="date">` | amplamente disponível; ver `17-app-patterns.md` para quando não usar |

**Regra de suporte:** recurso "amplamente disponível" no Baseline pode ser usado direto. Recurso
"recém-disponível" entra como melhoria progressiva: a tela funciona sem ele e fica melhor com ele.
Confira o estado atual em `web.dev/baseline` ou no MDN antes de depender de algo recente.

## Melhoria progressiva

- O conteúdo e a ação principal funcionam antes do JavaScript carregar, ou a tela mostra um estado
  de carregamento em vez de ficar em branco.
- Formulário é `<form>` de verdade: Enter envia, o navegador oferece autopreenchimento e o
  gerenciador de senhas reconhece.
- Link é link: abre em nova aba, copia endereço, funciona com botão do meio.

## Página instalável (PWA)

Só quando faz sentido o produto ser instalado. Requisitos:

- Servida em HTTPS.
- Manifesto com `name` ou `short_name`, `start_url`, `display` (`standalone`, `fullscreen` ou
  `minimal-ui`) e ícones de **192 px e 512 px**. Incluir um ícone `maskable` para o Android.
- `theme_color` e `background_color` iguais aos tokens.
- Em modo `standalone` não existe barra do navegador: a tela precisa ter o próprio voltar e o
  próprio atualizar.
- Offline mostra um estado útil (conteúdo em cache ou mensagem com tentar de novo), nunca a
  página de erro do navegador.
- Convite para instalar só depois de o usuário ter tido valor, nunca na primeira visita.

## Impressão

Tela que é documento (relatório, recibo, comprovante) tem `@media print`: esconder navegação e
ações, fundo branco, texto escuro, links com endereço visível e `break-inside: avoid` em blocos.

## Segurança que aparece na interface

- Dado de usuário ou de API entra por `textContent`, nunca por `innerHTML` sem escapar.
- Link externo com `target="_blank"` leva `rel="noopener"` e avisa que abre em outra aba.
- Campo de senha e de dado sensível com o `autocomplete` certo (ver `04-forms.md`).
