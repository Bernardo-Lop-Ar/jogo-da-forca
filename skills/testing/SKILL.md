
# Skill: Software Testing

## 1. Objetivo

Definir procedimentos de teste e validação para o Jogo da Forca Multiplayer.

## 2. Tipos de testes

### Testes unitários
- Funções isoladas.
- Validação de dados.
- Regras de negócio.
- Normalização de palavras.
- Cálculos de pontuação.

### Testes de integração
- Comunicação entre frontend e backend.
- Integração com Cloudflare D1.
- Integração com OAuth.
- Comunicação com Durable Objects.
- Comunicação WebSocket.

### Testes funcionais
- Login.
- Logout.
- Criação de sala.
- Entrada por código.
- Início de partida.
- Tentativas.
- Vitória.
- Derrota.
- Histórico.
- Ranking.

### Testes multiplayer
- Dois jogadores na mesma sala.
- Sincronização de letras.
- Sincronização de erros.
- Tentativas simultâneas.
- Letras repetidas.
- Desconexão.
- Reconexão.
- Tentativa de terceiro participante.

### Testes de segurança
- Acesso sem autenticação.
- Acesso indevido a salas.
- Manipulação de requisições.
- Mensagens WebSocket inválidas.
- Tentativas de revelar a palavra secreta.
- Validação de permissões.

## 3. Procedimento de testes

Para cada funcionalidade:

1. Definir o comportamento esperado.
2. Preparar o ambiente.
3. Executar o cenário.
4. Comparar resultado esperado e obtido.
5. Registrar falhas.
6. Corrigir problemas.
7. Reexecutar os testes.

## 4. Regras de qualidade

- Não considerar testes aprovados sem execução real.
- Não ignorar falhas.
- Testar cenários positivos e negativos.
- Evitar regressões.
- Repetir testes após correções.
- Não utilizar dados reais sensíveis em testes.

## 5. Testes multiplayer

Sempre utilizar dois clientes independentes para validar a sincronização.

Verificar se ambos recebem o mesmo estado oficial da partida.

Testar também o comportamento quando um cliente perde a conexão.

## 6. Relatórios

Documentar:

- Nome do teste.
- Objetivo.
- Pré-condições.
- Passos executados.
- Resultado esperado.
- Resultado obtido.
- Status.
- Evidências, quando disponíveis.

## 7. Critérios de aceitação

Uma funcionalidade será aprovada quando todos os cenários críticos definidos forem executados e não houver falhas bloqueadoras.

## 8. Diretriz principal

Priorize confiabilidade, segurança e prevenção de regressões.

Nunca declare um teste aprovado sem evidências de execução.
