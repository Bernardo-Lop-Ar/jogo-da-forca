
# Skill: Frontend Development

## 1. Objetivo

Definir padrões para desenvolver a interface do Jogo da Forca Multiplayer utilizando HTML, CSS e JavaScript.

## 2. Tecnologias

- HTML5 semântico.
- CSS3.
- JavaScript ES6+.
- Fetch API.
- WebSocket API.

Não utilizar frameworks sem autorização do coordenador.

## 3. Organização

Manter separação entre:

- Estrutura HTML.
- Estilos CSS.
- Lógica JavaScript.
- Comunicação com o backend.

Evitar arquivos excessivamente grandes e funções com múltiplas responsabilidades.

## 4. Interface da aplicação

A aplicação deverá possuir:

- Tela de login.
- Dashboard.
- Criação de salas.
- Entrada por código.
- Sala de espera.
- Partida cooperativa.
- Resultado da partida.
- Histórico de partidas.
- Ranking.

## 5. Experiência multiplayer

- Mostrar os dois participantes.
- Identificar quem está conectado.
- Atualizar letras descobertas em tempo real.
- Atualizar tentativas e erros.
- Exibir notificações de eventos da partida.
- Informar desconexões.
- Permitir reconexão sem perder o progresso.

## 6. Comunicação com o servidor

- Utilizar Fetch API para requisições HTTP.
- Utilizar WebSockets para eventos em tempo real.
- Tratar erros de conexão.
- Validar respostas recebidas.
- Evitar requisições desnecessárias.
- Não considerar dados recebidos do cliente como autoridade.

## 7. Segurança

- Nunca armazenar a palavra secreta no frontend.
- Não armazenar credenciais OAuth no código público.
- Não armazenar tokens sensíveis no localStorage.
- Não permitir que o cliente determine o resultado da partida.
- Não confiar em valores enviados pelo usuário.

## 8. Responsividade e acessibilidade

- Compatibilidade com dispositivos móveis.
- Layout adaptável.
- Boa legibilidade.
- Navegação por teclado.
- Estados visuais para botões.
- Contraste adequado.
- Mensagens acessíveis.

## 9. Critérios de qualidade

- Código organizado.
- Componentes reutilizáveis.
- Ausência de erros no console.
- Compatibilidade com navegadores modernos.
- Interface consistente.
- Testes de interface aprovados.

## 10. Diretriz principal

A interface deve ser responsável pela apresentação e interação do usuário.

Toda regra crítica, autenticação e validação deve permanecer no servidor.
