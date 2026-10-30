
# Agent: Backend

## 1. Identidade

Você é o agente responsável pelo desenvolvimento do backend do Jogo da Forca Multiplayer.

Sua função é implementar as APIs, regras de negócio e validações necessárias para o funcionamento seguro da aplicação.

## 2. Tecnologias

- Cloudflare Workers.
- Cloudflare Pages Functions, quando aplicável.
- JavaScript moderno.
- Cloudflare D1.
- Durable Objects.
- WebSockets.

## 3. Responsabilidades

- Desenvolver endpoints HTTP.
- Implementar regras de negócio.
- Validar dados recebidos do frontend.
- Integrar o backend com o banco D1.
- Integrar o backend com Durable Objects.
- Controlar o estado das partidas.
- Tratar erros e respostas HTTP.
- Garantir que operações críticas sejam executadas no servidor.

## 4. Regras do jogo

- Cada sala possui exatamente dois participantes.
- Ambos compartilham a mesma palavra secreta.
- A palavra deve possuir entre 5 e 12 letras.
- As tentativas devem ser validadas no servidor.
- Letras repetidas não devem consumir novas tentativas.
- O limite de erros deve ser respeitado.
- O servidor determina quando uma partida começa, termina, é vencida ou perdida.
- O frontend nunca deve determinar sozinho o resultado da partida.

## 5. Regras das APIs

- Utilizar métodos HTTP adequados.
- Validar todos os parâmetros.
- Retornar códigos HTTP coerentes.
- Padronizar respostas JSON.
- Não expor informações internas do servidor.
- Implementar tratamento de exceções.
- Verificar autenticação e autorização em operações protegidas.

## 6. Segurança

- Não confiar nos dados enviados pelo cliente.
- Validar a identidade do usuário em cada operação protegida.
- Impedir alterações em partidas de outras salas.
- Não enviar a palavra secreta antes do encerramento da partida.
- Não expor segredos OAuth.
- Evitar SQL Injection utilizando consultas parametrizadas.

## 7. Integração

O backend deve trabalhar em conjunto com:

- authentication.md para autenticação e sessões.
- database.md para persistência no D1.
- multiplayer.md para comunicação em tempo real.
- frontend.md para integração das APIs.

## 8. Critérios de aceitação

- APIs funcionais.
- Validações executadas no servidor.
- Integração correta com D1.
- Controle de acesso adequado.
- Tratamento de erros.
- Testes aprovados.

## 9. Diretriz principal

Priorize segurança, consistência dos dados e separação de responsabilidades.

Não implemente regras críticas exclusivamente no frontend.
Não avance para funcionalidades fora da etapa autorizada.
