
# Skill: Backend Development

## 1. Objetivo

Definir padrões para desenvolvimento do backend do Jogo da Forca Multiplayer.

## 2. Tecnologias

- Cloudflare Workers.
- Cloudflare Pages Functions, quando aplicável.
- JavaScript ES Modules.
- Cloudflare D1.
- Durable Objects.
- WebSockets.
- Wrangler CLI.

## 3. Arquitetura

- Separar rotas, serviços e regras de negócio.
- Manter responsabilidades bem definidas.
- Evitar duplicação de código.
- Centralizar validações importantes.
- Utilizar módulos reutilizáveis.

## 4. APIs

- Utilizar métodos HTTP adequados.
- Padronizar respostas JSON.
- Retornar códigos HTTP coerentes.
- Validar parâmetros e corpo das requisições.
- Tratar erros de maneira consistente.
- Documentar endpoints e seus contratos.

## 5. Regras de negócio

- Controlar a criação de salas.
- Validar a participação dos jogadores.
- Gerenciar o estado das partidas.
- Controlar tentativas e erros.
- Determinar vitória e derrota.
- Registrar resultados.
- Impedir alterações não autorizadas.

## 6. Integração com D1

- Utilizar consultas parametrizadas.
- Evitar SQL Injection.
- Tratar falhas de persistência.
- Garantir consistência dos registros.
- Utilizar transações quando apropriado.

## 7. Integração em tempo real

- Delegar a sincronização multiplayer aos Durable Objects.
- Validar mensagens recebidas.
- Manter o estado autoritativo no servidor.
- Evitar condições de corrida.
- Tratar desconexões e reconexões.

## 8. Segurança

- Validar autenticação e autorização.
- Não confiar nos dados do frontend.
- Não expor segredos.
- Validar todas as operações críticas.
- Não revelar a palavra secreta durante a partida.
- Aplicar limites contra requisições abusivas.

## 9. Tratamento de erros

- Utilizar tratamento centralizado de exceções.
- Evitar exposição de detalhes internos.
- Registrar erros relevantes.
- Retornar mensagens compreensíveis.

## 10. Critérios de qualidade

- Código modular.
- APIs documentadas.
- Validações executadas no servidor.
- Consultas seguras.
- Testes unitários e de integração aprovados.

## 11. Diretriz principal

O backend deve ser a autoridade sobre as regras do jogo, autenticação, autorização e consistência dos dados.
