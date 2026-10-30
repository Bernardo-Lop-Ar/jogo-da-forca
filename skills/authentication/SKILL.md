# Skill: Authentication

## 1. Objetivo

Definir padrões para autenticação, autorização e gerenciamento de sessões no Jogo da Forca Multiplayer.

## 2. Provedores

A aplicação deverá oferecer login por:

- Google OAuth 2.0 / OpenID Connect.
- GitHub OAuth.

Os dois provedores deverão utilizar o mesmo sistema interno de usuários.

## 3. Fluxo de autenticação

- Implementar o fluxo OAuth adequado para cada provedor.
- Validar o parâmetro `state`.
- Utilizar `nonce` quando aplicável.
- Utilizar PKCE quando suportado pelo fluxo.
- Validar os dados recebidos do provedor.
- Identificar usuários por meio do identificador único do provedor.
- Criar ou atualizar o cadastro interno.
- Criar uma sessão segura após autenticação bem-sucedida.

## 4. Sessões

- Utilizar cookies `HttpOnly`.
- Utilizar `Secure` em produção.
- Configurar `SameSite` adequadamente.
- Definir prazo de expiração.
- Permitir encerramento da sessão.
- Invalidar sessões expiradas.
- Não armazenar tokens sensíveis no `localStorage`.
- Não expor identificadores ou credenciais privadas ao frontend.

## 5. Autorização

- Validar a sessão no backend.
- Proteger rotas privadas.
- Verificar se o usuário pertence à sala solicitada.
- Impedir que usuários não participantes acessem partidas.
- Garantir que somente operações autorizadas alterem o estado do jogo.

## 6. Segurança

- Validar respostas dos provedores.
- Proteger contra CSRF.
- Validar origem das requisições quando necessário.
- Não registrar tokens ou segredos nos logs.
- Armazenar segredos exclusivamente nas configurações seguras da Cloudflare.
- Não confiar em dados de identidade enviados pelo frontend.

## 7. Integração

A autenticação deverá funcionar com:

- Cloudflare Pages Functions ou Workers.
- Cloudflare D1.
- Cookies e sessões.
- Google.
- GitHub.
- Sistema de salas multiplayer.

## 8. Testes

Testar:

- Login com Google.
- Login com GitHub.
- Callback válido e inválido.
- Estado OAuth inválido.
- Sessão expirada.
- Logout.
- Acesso a rotas protegidas.
- Tentativa de acesso a salas sem autorização.

## 9. Critérios de qualidade

- Fluxos de autenticação seguros.
- Sessões corretamente gerenciadas.
- Provedores integrados.
- Rotas protegidas.
- Testes de segurança aprovados.

## 10. Diretriz principal

A autenticação e a autorização devem ser verificadas no servidor. Nunca confie exclusivamente nas informações ou validações realizadas pelo frontend.