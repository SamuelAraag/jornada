# Ética de interface

Interface que engana funciona no curto prazo e custa confiança, e em vários casos é infração
(Código de Defesa do Consumidor e LGPD no Brasil; FTC nos EUA; DSA e GDPR na Europa). Se um
pedido exigir um destes padrões, sinalize ao usuário antes de implementar.

## Padrões enganosos: não implementar

| Padrão | O que é | O correto |
|---|---|---|
| Saída difícil | assinar é fácil, cancelar é escondido ou exige ligação | cancelar pelo mesmo canal e com o mesmo esforço de assinar |
| Cobrança surpresa | teste grátis que vira cobrança sem aviso | avisar antes da cobrança e mostrar a data na contratação |
| Custo escondido | taxa que só aparece no último passo | preço total o mais cedo possível |
| Item infiltrado | produto, seguro ou doação já no carrinho | nada entra sem escolha explícita |
| Culpa na recusa | "Não, prefiro pagar mais caro" | recusa neutra: "Agora não" |
| Urgência falsa | contador ou "restam 2" que não é real | escassez e prazo só quando verdadeiros |
| Ênfase enganosa | aceitar em destaque, recusar em cinza quase invisível | opções de peso equivalente quando a escolha é do usuário |
| Opção pré-marcada | consentimento ou adicional já selecionado | caixas de consentimento começam desmarcadas |
| Anúncio disfarçado | publicidade com cara de conteúdo ou de botão | identificar como anúncio |
| Insistência | pedir de novo a cada visita o que já foi recusado | respeitar o "não" e oferecer a opção nas configurações |
| Pergunta confusa | dupla negação, "desmarque para não deixar de receber" | pergunta afirmativa, uma coisa por caixa |

## Consentimento e dados

- Pedir só o dado necessário para a função. Campo opcional é opcional de verdade.
- Dizer para que o dado será usado, junto do campo, em linguagem comum.
- Consentimento é livre, informado e específico: uma finalidade por opção, sem pacote único.
- Recusar cookies e rastreamento é tão fácil quanto aceitar, no mesmo nível da interface.
- Revogar consentimento e excluir a conta são possíveis pela interface, sem contato com suporte.
- Permissão do sistema é pedida no contexto de uso, com o motivo antes.

## Atenção e hábito

- Notificação informa algo que o usuário pediu para saber. Não usar para trazer de volta.
- Reprodução automática e rolagem infinita só onde o usuário espera, com forma de parar.
- Não usar número vermelho de pendência para o que não é pendência.

## Honestidade de estado

- "Salvo", "enviado" e "pago" só aparecem depois da confirmação real.
- Erro é mostrado como erro. Não esconder falha atrás de sucesso otimista sem desfazer.
- Avaliação, depoimento e contador de usuários são reais ou não aparecem.
- Ação destrutiva diz o que será perdido e se tem volta.
