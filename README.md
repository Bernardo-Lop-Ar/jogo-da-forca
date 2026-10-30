
# Jogo da Forca

## Objetivo
Desenvolver um jogo da forca funcional, responsivo e visualmente agradável, utilizando HTML, CSS e JavaScript puro.

## Tecnologias
- HTML5 para estruturar a página.
- CSS3 para o visual e a responsividade.
- JavaScript puro para a lógica do jogo.
- Git e GitHub para versionamento.
- Cloudflare Pages para hospedagem.

Não utilizar frameworks ou bibliotecas externas sem aprovação prévia.

## Regras do jogo
1. O jogo deve selecionar uma palavra aleatória de uma lista.
2. A palavra deve ser representada por espaços ou traços ocultos.
3. O jogador deve tentar descobrir a palavra escolhendo letras.
4. Cada letra errada deve aumentar o número de erros.
5. Letras corretas devem aparecer nas posições correspondentes.
6. Uma letra já escolhida não pode ser contabilizada novamente.
7. O jogador vence quando descobre todas as letras.
8. O jogador perde quando atinge o limite de erros.
9. Ao terminar a partida, as tentativas devem ser bloqueadas.
10. Deve existir uma opção para iniciar uma nova partida.

## Interface
- Exibir a palavra oculta.
- Exibir o teclado de letras.
- Exibir a quantidade de erros e tentativas restantes.
- Desenhar progressivamente a forca.
- Informar claramente vitória ou derrota.
- Apresentar um botão para reiniciar a partida.
- Funcionar em computadores e dispositivos móveis.
- Utilizar HTML semântico e recursos básicos de acessibilidade.

## Organização planejada
- `agents/`: definições e responsabilidades dos agentes.
- `skills/`: instruções reutilizáveis para tarefas específicas.
- `public/index.html`: estrutura da página.
- `public/style.css`: estilos da interface.
- `public/script.js`: lógica do jogo.
- `README.md`: documentação principal.

## Publicação
O projeto deverá ser versionado no GitHub e publicado no Cloudflare Pages.

A configuração de publicação deve ser compatível com um site estático, sem necessidade de servidor backend ou etapa de build.

## Critérios de qualidade
- Código organizado e legível.
- Separação entre HTML, CSS e JavaScript.
- Regras do jogo funcionando corretamente.
- Interface responsiva.
- Testes dos principais cenários de vitória, derrota e reinício.
- Instruções de execução e publicação documentadas.
