
---
name: javascript
description: Orienta a implementação da lógica de jogos e de interações web com JavaScript puro, priorizando regras consistentes, tratamento de estados e facilidade de testes.
---

# Skill de desenvolvimento JavaScript

## Objetivo
Orientar a implementação da lógica do jogo da forca utilizando JavaScript puro, sem frameworks ou dependências desnecessárias.

## Quando utilizar
Utilize esta Skill ao implementar ou modificar regras do jogo, interações, eventos, validações e atualização dos elementos da interface por JavaScript.

## Procedimento

1. Leia o README.md antes de iniciar o trabalho.
2. Examine os arquivos existentes antes de modificá-los.
3. Mantenha a lógica do jogo separada da estrutura HTML e dos estilos CSS.
4. Utilize nomes de variáveis e funções claros e descritivos.
5. Evite variáveis globais desnecessárias.
6. Separe responsabilidades em funções pequenas e reutilizáveis.
7. Valide as entradas recebidas antes de alterar o estado do jogo.
8. Não permita que uma mesma letra seja contabilizada duas vezes.
9. Diferencie letras corretas de letras incorretas.
10. Atualize a quantidade de erros somente quando uma letra inédita estiver errada.
11. Defina e respeite um limite máximo de erros.
12. Detecte a vitória quando todas as letras da palavra tiverem sido reveladas.
13. Detecte a derrota quando o limite de erros for atingido.
14. Bloqueie novas tentativas após a vitória ou a derrota.
15. Implemente uma função de reinício que restaure todos os estados necessários.
16. Atualize a interface de acordo com o estado atual do jogo.
17. Utilize eventos de forma organizada, sem registrar manipuladores duplicados.
18. Evite utilizar eval() ou executar código recebido como texto.
19. Preserve as funcionalidades existentes ao modificar o código.
20. Ao concluir, informe os arquivos alterados, os testes realizados e eventuais limitações.

## Regras específicas do jogo da forca

O jogo deverá controlar, no mínimo:

- A palavra selecionada.
- As letras já escolhidas.
- A quantidade de erros.
- O limite máximo de erros.
- O estado da partida: em andamento, vitória ou derrota.

### Seleção de letras

- Aceitar somente letras válidas.
- Ignorar tentativas repetidas.
- Revelar todas as ocorrências de uma letra correta.
- Contabilizar apenas erros válidos e inéditos.

### Encerramento da partida

- A vitória ocorre quando todas as letras da palavra são descobertas.
- A derrota ocorre quando o limite de erros é atingido.
- Após o encerramento, novas tentativas devem ser ignoradas.
- A interface deve comunicar claramente o resultado.

### Reinício

- Selecionar uma nova palavra.
- Limpar as letras escolhidas.
- Zerar a contagem de erros.
- Restaurar o estado da partida.
- Reativar os controles necessários.

## Tratamento de erros e qualidade

- Não permitir estados inconsistentes.
- Evitar manipulações do DOM em elementos inexistentes sem validação.
- Não confiar apenas no estado visual dos botões para controlar as regras.
- Manter uma única fonte de verdade para o estado da partida.
- Evitar duplicação desnecessária de código.
- Não introduzir bibliotecas externas sem autorização.

## Critérios de conclusão

- [ ] Letras corretas revelam todas as suas ocorrências.
- [ ] Letras erradas incrementam os erros corretamente.
- [ ] Letras repetidas não alteram o resultado.
- [ ] A vitória é detectada corretamente.
- [ ] A derrota é detectada corretamente.
- [ ] Tentativas são bloqueadas após o fim da partida.
- [ ] O reinício restaura o jogo completamente.
- [ ] A interface acompanha o estado real do jogo.
- [ ] Os principais cenários foram testados.
