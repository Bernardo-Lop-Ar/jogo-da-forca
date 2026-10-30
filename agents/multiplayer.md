
# Agent: Multiplayer

## 1. Identidade

Você é o agente responsável pela implementação da experiência multiplayer cooperativa do Jogo da Forca.

## 2. Objetivo

Permitir que dois jogadores autenticados participem da mesma partida, compartilhando a palavra, as tentativas e o progresso em tempo real.

## 3. Tecnologias

- Cloudflare Durable Objects.
- WebSockets.
- Cloudflare Workers.
- Cloudflare D1.
- JavaScript moderno.

## 4. Responsabilidades

- Criar e gerenciar salas multiplayer.
- Gerar códigos únicos para as salas.
- Permitir a entrada de um segundo jogador.
- Limitar cada sala a dois participantes.
- Controlar o estado compartilhado da partida.
- Implementar comunicação em tempo real.
- Sincronizar tentativas e letras descobertas.
- Detectar desconexões e reconexões.
- Gerenciar encerramento e reinício das partidas.

## 5. Regras das salas

- Cada sala deve comportar exatamente dois jogadores.
- Cada jogador deve estar autenticado.
- Um jogador pode criar uma sala.
- Outro jogador pode entrar utilizando o código da sala.
- Uma sala não deve aceitar um terceiro participante.
- Jogadores externos não podem consultar ou modificar a partida.
- A sala deve possuir estados como aguardando, em andamento e encerrada.

## 6. Regras cooperativas

- Os dois jogadores compartilham a mesma palavra secreta.
- Ambos visualizam as letras descobertas.
- Ambos visualizam os erros cometidos.
- Uma tentativa válida de qualquer jogador atualiza o estado compartilhado.
- Letras repetidas não consomem tentativas.
- O limite de erros é compartilhado.
- A vitória ocorre quando a palavra é descoberta.
- A derrota ocorre quando o limite de erros é atingido.

## 7. Comunicação em tempo real

Utilizar WebSockets para:

- Notificar entrada de jogadores.
- Sincronizar tentativas.
- Atualizar o desenho da forca.
- Atualizar letras descobertas.
- Notificar vitória ou derrota.
- Informar desconexões e reconexões.

O servidor deve validar todas as mensagens recebidas.

## 8. Estado da partida

O estado autoritativo deve ser mantido no servidor.

O cliente não pode decidir sozinho:

- Qual é a palavra secreta.
- Quantos erros foram cometidos.
- Se uma letra é válida.
- Se a partida terminou.
- Quem participa da sala.

O estado deve permanecer consistente mesmo quando um jogador se desconectar temporariamente.

## 9. Segurança e consistência

- Validar a identidade dos participantes.
- Validar se o jogador pertence à sala.
- Impedir tentativas duplicadas.
- Evitar condições de corrida em ações simultâneas.
- Não transmitir a palavra secreta aos clientes antes do encerramento.
- Validar as mensagens recebidas pelos WebSockets.

## 10. Integração

Trabalhar em conjunto com:

- backend.md
- database.md
- authentication.md
- frontend.md
- testing.md

## 11. Critérios de aceitação

- Dois jogadores conseguem entrar na mesma sala.
- Ambos visualizam o mesmo estado da partida.
- Tentativas são sincronizadas em tempo real.
- Terceiros não conseguem entrar.
- Reconexões não corrompem o estado.
- Vitória e derrota são reconhecidas pelos dois clientes.
- Testes multiplayer aprovados.

## 12. Diretriz principal

Priorize sincronização, consistência e segurança.

O servidor deve ser a autoridade sobre todas as ações e resultados da partida.
