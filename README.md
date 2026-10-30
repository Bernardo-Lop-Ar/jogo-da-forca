# Jogo da Forca Multiplayer

## 1. Sobre o projeto

O Jogo da Forca Multiplayer é uma aplicação web de entretenimento que transforma o tradicional jogo da forca em uma experiência cooperativa online.

Dois jogadores poderão entrar na mesma sala e trabalhar juntos para descobrir uma palavra secreta. As tentativas, letras descobertas e erros serão compartilhados em tempo real.

A aplicação contará com autenticação, gerenciamento de salas, partidas multiplayer e histórico de resultados.

## 2. Objetivo

Desenvolver uma aplicação web funcional, responsiva, segura e escalável, utilizando tecnologias web e serviços da Cloudflare.

O projeto deverá oferecer:

- Cadastro e autenticação de usuários.
- Login com Google e GitHub.
- Criação e entrada em salas.
- Partidas cooperativas com exatamente dois jogadores.
- Sincronização em tempo real.
- Histórico de partidas.
- Possibilidade futura de ranking e estatísticas.

## 3. Tecnologias

### Frontend
- HTML5.
- CSS3.
- JavaScript puro.
- WebSockets para comunicação em tempo real.
- Fetch API para comunicação com o backend.

### Backend e infraestrutura
- Cloudflare Workers ou Pages Functions.
- Cloudflare Durable Objects para gerenciamento das partidas em tempo real.
- Cloudflare D1 para persistência dos dados.
- Cloudflare Pages para hospedagem do frontend.
- Wrangler CLI para desenvolvimento e gerenciamento da infraestrutura.

### Autenticação
- Google OAuth 2.0 / OpenID Connect.
- GitHub OAuth.

### Versionamento
- Git.
- GitHub.

Não utilizar frameworks ou bibliotecas externas sem aprovação prévia.

## 4. Regras do jogo

1. Cada sala deverá possuir exatamente dois jogadores.
2. O servidor deverá selecionar uma palavra secreta para a partida.
3. A palavra deverá possuir entre 5 e 12 letras.
4. O catálogo deverá conter mais de 1.000 palavras em português.
5. Os dois jogadores compartilharão a mesma palavra e o mesmo estado da partida.
6. Letras corretas deverão ser reveladas para ambos.
7. Letras incorretas deverão aumentar o contador compartilhado de erros.
8. Uma letra já utilizada não poderá ser contabilizada novamente.
9. Os jogadores deverão visualizar as atualizações em tempo real.
10. A vitória ocorrerá quando todas as letras forem descobertas.
11. A derrota ocorrerá quando o limite de erros for atingido.
12. Após o encerramento, novas tentativas deverão ser bloqueadas.
13. O resultado deverá ser determinado exclusivamente pelo servidor.

## 5. Modo cooperativo

O modo multiplayer deverá funcionar da seguinte maneira:

- Um jogador cria uma sala.
- O segundo jogador entra utilizando o identificador ou convite da sala.
- A partida começa quando os dois jogadores estiverem presentes.
- Ambos participam da descoberta da mesma palavra.
- Cada tentativa atualiza o estado compartilhado.
- Os dois jogadores recebem as atualizações em tempo real.
- Em caso de desconexão, deverá existir suporte à reconexão.

Não será permitido que um terceiro jogador participe de uma sala já preenchida.

## 6. Autenticação e segurança

A aplicação deverá oferecer autenticação por Google e GitHub.

Requisitos:

- Validar os fluxos de autenticação no servidor.
- Utilizar sessões seguras.
- Proteger rotas privadas.
- Verificar a participação dos usuários nas salas.
- Proteger os dados pessoais.
- Não armazenar tokens sensíveis no localStorage.
- Não confiar nas validações realizadas exclusivamente pelo frontend.
- Nunca enviar a palavra secreta antes do encerramento da partida.

## 7. Arquitetura

A aplicação será organizada em três partes principais:

### Frontend
Responsável pela interface, interação dos jogadores, telas de autenticação, salas e partidas.

### Backend
Responsável pelas regras de negócio, autenticação, autorização, validação das tentativas e comunicação entre os participantes.

### Banco de dados
Responsável pela persistência de usuários, identidades OAuth, sessões, salas, participantes, partidas, palavras, tentativas e histórico.

Os Durable Objects serão utilizados para manter e sincronizar o estado das partidas em tempo real.

## 8. Organização planejada

- `agents/`: definições e responsabilidades dos agentes especializados.
- `skills/`: instruções reutilizáveis para tarefas específicas.
- `public/`: arquivos do frontend.
  - `index.html`: estrutura das páginas.
  - `style.css`: estilos e responsividade.
  - `script.js`: interações e comunicação com o backend.
- `functions/` ou estrutura equivalente: endpoints do backend.
- `migrations/`: migrações versionadas do banco D1.
- `README.md`: documentação principal.
- `wrangler.toml` ou `wrangler.jsonc`: configuração da infraestrutura Cloudflare, conforme a implementação.

A estrutura definitiva do backend será definida durante a implementação.

## 9. Banco de dados

O Cloudflare D1 será utilizado para armazenar os dados persistentes.

O modelo deverá contemplar:

- Usuários.
- Identidades OAuth.
- Sessões.
- Salas.
- Participantes.
- Partidas.
- Palavras.
- Tentativas.
- Histórico de partidas.

Todas as alterações estruturais deverão ser registradas por meio de migrações versionadas.

## 10. Testes

O projeto deverá possuir testes para:

- Autenticação com Google.
- Autenticação com GitHub.
- Gerenciamento de sessões.
- Criação e entrada em salas.
- Limite de dois jogadores.
- Sincronização entre participantes.
- Tentativas corretas e incorretas.
- Vitória e derrota.
- Reconexão.
- Proteção contra acessos não autorizados.
- Persistência dos resultados.

## 11. Publicação

O frontend será publicado no Cloudflare Pages.

A infraestrutura deverá contemplar:

- Backend executado na Cloudflare.
- Banco de dados D1.
- Durable Objects.
- Configuração dos provedores OAuth.
- Variáveis de ambiente e segredos.
- Migrações de banco de dados.

O ambiente local deverá permitir testar a aplicação antes da publicação em produção.

## 12. Critérios de qualidade

- Código organizado e legível.
- Separação adequada de responsabilidades.
- Interface responsiva.
- Autenticação segura.
- Estado multiplayer consistente.
- Comunicação em tempo real funcional.
- Proteção da palavra secreta.
- Persistência confiável.
- Testes dos principais cenários.
- Documentação atualizada.

## 13. Diretriz principal

O projeto deverá priorizar segurança, integridade dos dados, consistência das partidas e uma boa experiência cooperativa.

O servidor será sempre a autoridade sobre autenticação, regras e resultados das partidas.

Nenhuma funcionalidade deverá ser considerada concluída sem implementação e testes correspondentes.