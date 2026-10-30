# Skill: Multiplayer Development

## 1. Objetivo

Definir padrões para implementar o modo cooperativo online do Jogo da Forca.

## 2. Regras do modo cooperativo

- Cada sala deverá possuir exatamente dois participantes.
- Os dois jogadores compartilharão a mesma palavra secreta.
- Ambos visualizarão as mesmas letras descobertas.
- Ambos compartilharão o número de erros.
- Cada tentativa deverá ser sincronizada entre os participantes.
- A partida deverá possuir um único estado oficial.

## 3. Tecnologias

- JavaScript.
- WebSockets.
- Cloudflare Durable Objects.
- Cloudflare Workers ou Pages Functions.
- Cloudflare D1.

## 4. Gerenciamento das salas

- Criar salas com identificadores únicos.
- Permitir entrada de até dois jogadores.
- Impedir a entrada de terceiros após o preenchimento da sala.
- Validar a participação antes de aceitar operações.
- Permitir que o criador convide o segundo jogador.
- Controlar o estado de espera e início da partida.

## 5. Sincronização

- Utilizar WebSockets para comunicação em tempo real.
- Sincronizar tentativas, erros e letras descobertas.
- Atualizar a interface dos dois jogadores.
- Tratar mensagens duplicadas.
- Validar mensagens recebidas.
- Implementar reconexão quando houver perda de conexão.

## 6. Autoridade do servidor

- O servidor deverá controlar a palavra secreta.
- O servidor deverá validar todas as tentativas.
- O servidor deverá controlar os erros.
- O servidor deverá determinar vitória ou derrota.
- O frontend nunca deverá decidir o resultado oficial.
- Nunca enviar a palavra secreta antes do encerramento da partida.

## 7. Desconexões

- Identificar quando um jogador perder a conexão.
- Preservar o estado da partida durante desconexões temporárias.
- Permitir que o jogador retorne à sala.
- Impedir que uma reconexão crie uma segunda participação.
- Definir regras claras para abandono e encerramento da partida.

## 8. Concorrência

- Evitar que duas tentativas simultâneas corrompam o estado.
- Processar operações de maneira consistente.
- Impedir tentativas após o encerramento.
- Garantir que cada tentativa seja registrada uma única vez.

## 9. Testes

Testar:

- Entrada do primeiro jogador.
- Entrada do segundo jogador.
- Tentativa de entrada de um terceiro jogador.
- Sincronização entre participantes.
- Letras repetidas.
- Erros compartilhados.
- Vitória e derrota.
- Desconexão e reconexão.
- Tentativas simultâneas.
- Acesso não autorizado.

## 10. Critérios de qualidade

- Estado compartilhado consistente.
- Comunicação em tempo real funcional.
- Ausência de divergência entre jogadores.
- Palavra secreta protegida.
- Reconexão funcional.
- Regras de partida respeitadas.

## 11. Diretriz principal

O servidor é a única autoridade sobre o estado da partida. Os dois jogadores apenas enviam ações e recebem atualizações.