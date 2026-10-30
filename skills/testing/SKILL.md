
---
name: testing
description: Orienta a verificação funcional e técnica de aplicações web estáticas, com foco em detectar falhas, validar regras de negócio e confirmar resultados dos testes.
---

# Skill de testes e qualidade

## Objetivo
Verificar se o jogo da forca funciona conforme os requisitos do README.md, identificando falhas antes da publicação.

## Quando utilizar
Utilize esta Skill após implementar uma funcionalidade, corrigir um erro ou preparar uma versão para publicação.

## Procedimento

1. Leia o README.md e identifique os requisitos aplicáveis.
2. Examine os arquivos e as alterações realizadas.
3. Identifique os comportamentos esperados antes de executar os testes.
4. Teste os principais fluxos do jogo.
5. Verifique o console do navegador em busca de erros JavaScript.
6. Verifique se os arquivos HTML, CSS e JavaScript carregam corretamente.
7. Confirme se a interface funciona em telas pequenas e grandes.
8. Registre os resultados dos testes com clareza.
9. Diferencie testes executados de testes apenas planejados.
10. Não declare que um teste passou sem evidência suficiente.
11. Se encontrar uma falha, descreva os passos para reproduzi-la.
12. Sugira uma correção objetiva e verifique novamente o comportamento alterado.

## Cenários obrigatórios

### Inicialização
- [ ] O jogo inicia com uma palavra selecionada.
- [ ] As letras da palavra permanecem ocultas inicialmente.
- [ ] A contagem de erros começa em zero.
- [ ] Os controles de letras estão disponíveis.

### Letras
- [ ] Uma letra correta revela todas as ocorrências correspondentes.
- [ ] Uma letra incorreta incrementa a contagem de erros.
- [ ] Uma letra repetida não incrementa os erros novamente.
- [ ] A mesma letra não pode ser contabilizada duas vezes.
- [ ] Letras inválidas não alteram o estado da partida.

### Vitória e derrota
- [ ] Descobrir todas as letras encerra a partida com vitória.
- [ ] Atingir o limite de erros encerra a partida com derrota.
- [ ] O resultado final é exibido claramente.
- [ ] Novas tentativas não alteram uma partida encerrada.

### Reinício
- [ ] O botão de reinício inicia uma nova partida.
- [ ] A contagem de erros volta a zero.
- [ ] As letras escolhidas são limpas.
- [ ] Os controles são reativados.
- [ ] O jogo continua funcionando após várias partidas.

### Interface e publicação
- [ ] Os botões funcionam com mouse e teclado.
- [ ] A interface se adapta a telas pequenas.
- [ ] Não há erros inesperados no console.
- [ ] Os caminhos dos arquivos funcionam em hospedagem estática.
- [ ] A versão publicada funciona no endereço do Cloudflare Pages.

## Relatório de testes

Ao concluir, apresente:

- Funcionalidades verificadas.
- Testes executados e seus resultados.
- Falhas encontradas.
- Correções aplicadas e retestadas.
- Testes pendentes ou limitações do ambiente.

Não utilize bibliotecas de teste externas sem autorização prévia. Quando não houver automação disponível, execute testes manuais reproduzíveis e identifique-os como manuais.
