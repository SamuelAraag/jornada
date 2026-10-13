# Formulários

## Regras gerais

- **Uma coluna.** Formulário em várias colunas faz o usuário pular e interpretar errado os
  campos. Lado a lado só para campos que formam uma unidade (cidade e UF, validade e código).
- Labels sempre visíveis, acima do campo. Nunca depender só de placeholder.
- Placeholder não substitui label; usar apenas como exemplo de formato quando necessário
  (ex.: "AAAA-MM-DD"). Instrução importante fica em texto de ajuda abaixo do label.
- Pedir só o necessário. Cada campo a mais custa conclusão.
- Não pedir duas vezes o mesmo dado no mesmo fluxo (WCAG 3.3.7): preencher sozinho ou oferecer
  "usar o mesmo endereço".
- A largura do campo sugere o tamanho da resposta (CEP curto, nome longo).
- Campos relacionados em `<fieldset>` com `<legend>`.
- Até 5 opções excludentes: botões de rádio. Mais que isso: select. Muitas: campo com busca.
- Enter envia o formulário. É um `<form>` de verdade.

## Validação

- **Quando:** nunca enquanto o usuário ainda digita. Validar ao sair do campo (`blur`) só se ele
  foi preenchido, e sempre ao enviar. Depois que um erro apareceu, ele some assim que o valor
  fica válido.
- **Onde:** erro junto do campo correspondente, nunca só num resumo genérico no topo. Em
  formulário longo, o resumo no topo existe *além* do erro por campo, com link para cada um.
- **Ao enviar com erro:** mover o foco para o resumo ou para o primeiro campo inválido.
- **Como marcar:** `aria-invalid="true"` no campo e `aria-describedby` apontando para a mensagem.
  Erro com ícone e texto, não só borda vermelha.
- **Texto do erro:** diz o que corrigir ("Informe um CPF com 11 dígitos"), não só "inválido".
- Ser tolerante na entrada: aceitar CPF com ou sem pontuação, telefone com ou sem espaço, e
  normalizar. Não rejeitar por formato o que dá para entender.

## Botão de envio

- **Fica habilitado.** Não desabilitar o envio porque o formulário está incompleto: botão
  desabilitado não explica o que falta, tem contraste baixo e pode sumir para o leitor de tela.
  O usuário clica e recebe os erros.
- Durante o envio, o botão mostra carregamento e ignora o segundo clique, para não enviar duas
  vezes.
- O texto do botão é a ação ("Salvar alterações", "Criar conta").
- Uma ação principal por formulário. Cancelar é secundário e fica ao lado, sem destaque.
- Se a operação falhar, manter os dados preenchidos. Nunca limpar o formulário em caso de erro.

## Estados obrigatórios de um formulário

1. Inicial
2. Alterado (dirty): habilita indicação de "alterações não salvas" ao tentar sair
3. Inválido
4. Enviando
5. Erro de validação (client-side)
6. Erro do servidor (ex.: 500, regra de negócio violada)
7. Salvo com sucesso
8. Conflito de concorrência (registro alterado por outra pessoa enquanto editava)

Um formulário só é considerado pronto se tratar pelo menos os estados 1, 3, 4, 6 e 7.
O estado 8 é obrigatório sempre que a entidade puder ser editada por mais de uma pessoa.

## Campos

- Campos obrigatórios são marcados de forma consistente (não misturar "*" em uma tela e
  "(obrigatório)" em outra). Quando quase tudo é obrigatório, marcar os opcionais com
  "(opcional)". Se usar asterisco, explicar o que ele significa.
- Máscaras de input (CPF, telefone, moeda) formatam durante a digitação, sem impedir colar nem
  travar o cursor.
- **Código numérico não é número.** CPF, CNPJ, CEP, telefone, cartão e código de verificação usam
  `type="text"` com `inputmode="numeric"`. `type="number"` é só para quantidade que faz sentido
  somar ou incrementar: ele aceita "e", muda com a roda do mouse e remove zero à esquerda.
- Fonte do campo com 16 px ou mais, senão o Safari do iOS dá zoom ao focar.
- Colar é permitido em todo campo, inclusive senha e código.

## Teclado e autopreenchimento

O tipo e os atributos certos abrem o teclado certo no celular e deixam o navegador preencher.

| Dado | Atributos |
|---|---|
| E-mail | `type="email"` `autocomplete="email"` (em login: `"username"`) |
| Telefone | `type="tel"` `autocomplete="tel"` |
| Nome | `autocomplete="name"` |
| CPF, CEP, código | `type="text"` `inputmode="numeric"` (CEP: `autocomplete="postal-code"`) |
| Valor em dinheiro | `type="text"` `inputmode="decimal"` |
| Endereço | `autocomplete="street-address"`, `"address-level2"` (cidade), `"address-level1"` (UF) |
| Cartão | `inputmode="numeric"` `autocomplete="cc-number"`, `"cc-exp"`, `"cc-csc"` |
| Senha | `autocomplete="current-password"` ou `"new-password"` |
| Código por SMS | `inputmode="numeric"` `autocomplete="one-time-code"` |
| Busca | `type="search"` `enterkeyhint="search"` |
| URL | `type="url"` |

- `enterkeyhint` (`next`, `done`, `send`, `search`) no último campo e em campos de etapa.
- `autocapitalize` e `spellcheck` desligados em e-mail, usuário e código.
- Nunca `autocomplete="off"` em dado pessoal comum.

## Formulário longo

- Dividir em seções com título ou em etapas (ver `17-app-patterns.md`).
- Salvar rascunho ou salvar por seção.
- Aviso de alterações não salvas ao sair.
- No celular, o campo em foco rola para ficar visível acima do teclado e o botão de envio
  continua alcançável.

Login, cadastro, data e envio de arquivo: ver `17-app-patterns.md`.
