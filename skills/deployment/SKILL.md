
# Skill: Cloudflare Deployment

## 1. Objetivo

Definir padrões para configurar, testar e publicar o Jogo da Forca Multiplayer na infraestrutura Cloudflare.

## 2. Tecnologias

- Cloudflare Pages.
- Cloudflare Workers.
- Cloudflare D1.
- Cloudflare Durable Objects.
- Wrangler CLI.
- Git.
- GitHub.

## 3. Organização

Manter configurações e arquivos de infraestrutura organizados.

Utilizar wrangler.toml ou wrangler.jsonc conforme a configuração adotada pelo projeto.

Documentar bindings, recursos e variáveis necessários.

## 4. Ambientes

### Desenvolvimento

- Utilizar recursos locais sempre que possível.
- Utilizar banco D1 local para testes.
- Manter credenciais de desenvolvimento separadas.
- Validar configurações antes de publicar.

### Produção

- Utilizar recursos oficiais da Cloudflare.
- Configurar D1 remoto.
- Configurar Durable Objects.
- Configurar variáveis e secrets.
- Configurar URLs de produção para OAuth.
- Validar a comunicação WebSocket.

## 5. Banco D1

- Criar e versionar migrações SQL.
- Aplicar migrações localmente antes da produção.
- Verificar a integridade dos dados.
- Evitar alterações manuais não documentadas.
- Manter backups e procedimentos de recuperação adequados.

## 6. Durable Objects

- Configurar bindings corretamente.
- Definir classes e identificadores necessários.
- Configurar migrações de implantação.
- Validar conexões WebSocket.
- Testar comportamento de salas e reconexões.

## 7. Segurança

- Nunca versionar credenciais.
- Utilizar secrets da Cloudflare.
- Separar variáveis de desenvolvimento e produção.
- Proteger endpoints.
- Conferir permissões dos recursos.
- Não expor informações sensíveis nos logs.

## 8. Processo de publicação

Antes de publicar:

1. Verificar alterações no Git.
2. Executar os testes.
3. Validar configurações.
4. Conferir migrações.
5. Conferir bindings.
6. Verificar secrets.
7. Publicar.
8. Validar a aplicação em produção.

## 9. Versionamento

- Utilizar commits descritivos.
- Manter histórico de alterações.
- Não publicar funcionalidades não testadas.
- Documentar mudanças na infraestrutura.

## 10. Critérios de aceitação

- Configuração válida.
- Recursos Cloudflare funcionando.
- Banco D1 operacional.
- Durable Objects operacionais.
- OAuth funcionando em produção.
- Comunicação em tempo real validada.
- Deploy concluído sem erros.

## 11. Diretriz principal

Priorize segurança, estabilidade e reprodutibilidade.

Nunca publique credenciais ou configurações sensíveis no GitHub.
