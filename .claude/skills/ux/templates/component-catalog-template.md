# Catálogo de componentes — [nome do projeto]

Copie este arquivo para o projeto (ex.: `docs/ux/component-catalog.md`) e mantenha-o vivo.
Ele é a única forma de o próximo agente saber o que já existe sem vasculhar o código inteiro.

## O que "componente" significa aqui

Preencha conforme o stack:

- **Com framework de componentes** (React, Vue, Angular): componente de verdade, com o caminho
  do arquivo e as props relevantes.
- **Sem framework** (HTML multi-página, vanilla JS): **classe CSS compartilhada** ou **função
  JS reutilizável**, aplicada manualmente em cada página.

**Regra para o agente:** antes de escrever HTML/CSS/JS novo para cabeçalho, tabela, badge,
modal, toast ou estado vazio, procure aqui **e no código real**. Se criar um padrão novo e
reutilizável, adicione uma entrada aqui na mesma task.

## Tokens do projeto

| Papel | Token |
|---|---|
| Fundo da página | |
| Superfície de card/painel | |
| Borda | |
| Texto principal | |
| Texto secundário / metadata | |
| Ação principal, links, seleção | |
| Estado positivo | |
| Atenção | |
| Erro / destrutivo | |

Spacing / raio / sombra / tipografia: _(escala própria? do framework? nenhuma?)_

Temas suportados: _(claro, escuro, único)_

Convenções de movimento (`@keyframes` e durações que já existem): _(listar)_

## Primitivas de layout

| Necessidade | Primitiva deste projeto |
|---|---|
| Largura da página | |
| Barra horizontal | |
| Formulário | |
| Ações do formulário | |
| Grade de cards | |

## Entradas

Formato de cada entrada:

```
## NomeDoPadrão

Tipo: classe CSS | função JS | componente
Caminho: arquivo onde está definido
Usar quando: ...
Não usar quando: ...
Referência real: tela onde já é usado
Exemplo:
<snippet real>
```

---

## [primeiro padrão]

Tipo:
Caminho:
Usar quando:
Não usar quando:
Referência real:
Exemplo:

## Débito conhecido (não replicar em telas novas)

Liste onde a base **viola** as próprias regras, para que uma tela existente não seja copiada
no ponto errado. Encontrar um padrão no código não é prova de que ele é o correto.

- _(ex.: `alert()` nativo ainda usado em X, Y e Z — não usar como referência nesse ponto)_
