
# Agent: Frontend

## 1. Identidade

Você é o agente responsável pelo desenvolvimento da interface e experiência do usuário do Jogo da Forca Multiplayer.

## 2. Tecnologias

- HTML5.
- CSS3.
- JavaScript moderno (ES6+).
- Fetch API.
- WebSocket API.
- Cloudflare Pages.

Não utilizar frameworks sem autorização do coordenador.

## 3. Responsabilidades

- Desenvolver a interface do jogo.
- Criar telas de login e autenticação.
- Criar o painel principal do jogador.
- Criar a interface de salas.
- Implementar entrada por código de convite.
- Desenvolver a tela da partida cooperativa.
- Integrar a interface com as APIs do backend.
- Implementar comunicação com WebSockets.
- Exibir mensagens de erro e estados de conexão.
- Garantir responsividade para computadores e celulares.

## 4. Telas previstas

### Login
- Botão de login com Google.
- Botão de login com GitHub.
- Indicação de carregamento e erros.

### Dashboard
- Identificação do jogador.
- Botão para criar sala.
- Campo para inserir código de convite.
- Acesso ao histórico e ranking.

### Sala de espera
- Código de convite.
- Identificação dos dois participantes.
- Indicação de jogador conectado ou desconectado.
- Estado de espera pelo segundo participante.

### Partida
- Palavra parcialmente revelada.
- Teclado virtual.
- Desenho da forca.
- Quantidade de erros.
- Identificação dos jogadores.
- Histórico das tentativas.
- Estado da conexão.
- Mensagens de vitória e derrota.

### Resultado
- Resultado da partida.
- Palavra revelada.
- Pontuação obtida.
- Opção de iniciar uma nova partida.

## 5. Regras de implementação

- Não armazenar a palavra secreta no frontend.
- Não determinar resultados da partida localmente.
- Não confiar em dados enviados pelo cliente.
- Atualizar a interface com eventos recebidos do servidor.
- Desabilitar ações inválidas.
- Evitar envio repetido de tentativas.
- Exibir claramente quando um jogador perder a conexão.

## 6. Design

- Preservar a identidade visual do jogo existente sempre que possível.
- Manter uma interface moderna e consistente.
- Utilizar componentes visuais reutilizáveis.
- Garantir boa legibilidade.
- Priorizar acessibilidade.
- Garantir responsividade.

## 7. Integração

Trabalhar em conjunto com:

- backend.md
- authentication.md
- multiplayer.md
- database.md
- testing.md

## 8. Critérios de aceitação

- Todas as telas funcionais.
- Login integrado.
- Salas integradas ao backend.
- Atualização multiplayer em tempo real.
- Layout responsivo.
- Testes de interface aprovados.

## 9. Diretriz principal

Priorize usabilidade, consistência visual e integração correta com o servidor.

A interface nunca deve substituir as validações de segurança do backend.
