# Diálogos e operações destrutivas

## Quando usar modal

- Confirmações curtas (uma pergunta, uma decisão).
- Formulários de 1 único campo/etapa (ex.: renomear).
- Nunca para fluxos com mais de uma etapa: nesse caso, usar página ou drawer
  (ver princípio 4 em `00-principles.md`).
- Nunca para mensagem de sucesso nem para informação que cabe na própria tela.

## Como o modal se comporta

- Preferir `<dialog>` com `showModal()`: entrega foco preso, Esc e fundo inerte. Se o projeto já
  tem um diálogo próprio que faz isso, usar o do projeto.
- Tem nome acessível (título ligado por `aria-labelledby`) e um botão de fechar visível.
- **Foco ao abrir:** no primeiro elemento focável; em conteúdo longo, no título; em ação
  destrutiva, no botão menos destrutivo.
- **Foco ao fechar:** volta para quem abriu. Se quem abriu não existe mais, vai para o ponto
  lógico seguinte.
- A rolagem da página de trás fica travada e volta ao normal ao fechar.
- **Fechar por clique fora:** vale para modal de leitura ou de decisão simples. **Não vale**
  quando há dado digitado que seria perdido, nem em visualizador de mídia quando o clique é no
  conteúdo (ver `13-media-and-images.md`).
- O Voltar do aparelho fecha o modal.
- Nunca abrir modal sobre modal.

## No celular

- Decisão curta: modal centralizado ou bottom sheet.
- Lista de opções ou ações de um item: bottom sheet, com as ações ao alcance do polegar.
- Formulário: tela cheia com fechar e salvar no topo, não um modal pequeno com teclado por cima.
- Bottom sheet tem alça, fecha arrastando para baixo e tem botão equivalente
  (ver `12-touch-and-gestures.md`).

## Confirmar ou desfazer

A confirmação protege pouco quando aparece sempre: o usuário aprende a clicar sem ler.

| Situação | Padrão |
|---|---|
| Ação reversível (arquivar, remover da lista, mover) | executar e oferecer **Desfazer** em toast |
| Perda de dado relevante ou irreversível (excluir de vez, revogar, cancelar contrato) | confirmação nomeada |
| Perda grave e rara (excluir conta, apagar projeto inteiro) | confirmação que exige digitar o nome do item |

Desfazer é melhor que confirmar sempre que for tecnicamente possível, e não dispensa a
confirmação nas ações mais perigosas.

## Confirmação de operações destrutivas

- Exigir confirmação sempre que houver perda relevante de dados (exclusão, revogação,
  cancelamento irreversível).
- A confirmação informa **exatamente qual entidade** será afetada e a consequência
  (ex.: "Excluir o usuário Maria Silva? Ela perde o acesso imediatamente."), nunca "Tem certeza?".
- Não usar textos genéricos como "Tem certeza?" ou "Esta ação não pode ser desfeita"
  isoladamente: combinar com o nome/identificador do registro.
- Os botões dizem a ação: "Excluir usuário" e "Cancelar", não "Sim" e "Não".
- O botão de confirmação usa a variante `danger` **apenas** para a ação irreversível em si;
  o botão "Cancelar" nunca é `danger`.
- A ação destrutiva não é o padrão do Enter: o foco inicial fica na opção segura.
- Para exclusões em massa (múltiplos registros selecionados), listar ou contar quantos
  registros serão afetados no próprio diálogo.

## Drawer vs. página

- Drawer: edição rápida de um registro sem sair do contexto da listagem (ex.: editar um
  item sem perder a página/filtro da tabela atrás).
- Página: fluxos longos, com múltiplas seções, ou quando o usuário precisa navegar
  (voltar/avançar) entre etapas.
- Drawer segue as mesmas regras de foco, Esc e Voltar do modal.

## Menus, popovers e dicas

- Menu e popover fecham com Esc, com clique fora e ao escolher um item; o foco volta ao gatilho.
- Preferir o atributo `popover` nativo quando o projeto não tem componente próprio.
- Dica (tooltip) nunca carrega informação essencial nem conteúdo interativo, e não existe no
  toque: o que importa precisa estar visível.
