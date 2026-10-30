
# Skill: JavaScript Development

## 1. Objetivo

Definir padrões de desenvolvimento JavaScript para o Jogo da Forca Multiplayer.

## 2. Tecnologias

- JavaScript ES6+.
- Async/Await.
- Fetch API.
- WebSocket API.
- JSON.
- APIs do navegador.

## 3. Padrões de código

- Utilizar const por padrão.
- Utilizar let quando houver necessidade de reatribuição.
- Evitar var.
- Utilizar funções pequenas e reutilizáveis.
- Utilizar nomes descritivos.
- Separar responsabilidades.
- Evitar duplicação de código.
- Preferir async/await para operações assíncronas.
- Utilizar tratamento de erros com try/catch.

## 4. Organização

Separar a lógica em módulos ou arquivos conforme a responsabilidade:

- Autenticação.
- Comunicação com APIs.
- Comunicação WebSocket.
- Interface.
- Estado visual.
- Eventos do jogo.

Evitar concentrar toda a lógica em um único arquivo.

## 5. Comunicação HTTP

- Utilizar Fetch API.
- Configurar métodos HTTP adequados.
- Enviar e receber JSON quando aplicável.
- Verificar response.ok.
- Tratar respostas inválidas.
- Implementar tratamento de falhas de rede.
- Não expor informações sensíveis.

## 6. WebSockets

- Gerenciar conexão e desconexão.
- Tratar eventos recebidos.
- Validar o formato das mensagens.
- Implementar reconexão controlada.
- Evitar conexões duplicadas.
- Atualizar a interface conforme os eventos recebidos.
- Não confiar no estado local para determinar resultados.

## 7. Regras do jogo

O JavaScript do frontend pode:

- Exibir letras descobertas.
- Atualizar elementos visuais.
- Exibir tentativas.
- Controlar interações do teclado.
- Mostrar mensagens e resultados recebidos.

O JavaScript do frontend não pode ser a autoridade sobre:

- Palavra secreta.
- Quantidade oficial de erros.
- Validade das tentativas.
- Resultado da partida.
- Participantes autorizados.

Essas regras devem ser controladas pelo servidor.

## 8. Segurança

- Não inserir dados do usuário diretamente em HTML sem tratamento.
- Evitar eval e execução dinâmica de código.
- Não armazenar segredos no frontend.
- Validar dados recebidos.
- Evitar exposição de informações sensíveis em logs.

## 9. Tratamento de erros

Utilizar mensagens claras e específicas.

Tratar:

- Falhas de comunicação.
- Respostas HTTP inesperadas.
- Desconexões.
- Mensagens WebSocket inválidas.
- Dados ausentes ou inconsistentes.

## 10. Critérios de qualidade

- Código legível.
- Funções reutilizáveis.
- Ausência de erros não tratados.
- Comunicação consistente.
- Testes aprovados.

## 11. Diretriz principal

Priorize simplicidade, segurança, manutenção e consistência.

A lógica de negócio crítica deve permanecer no backend.
