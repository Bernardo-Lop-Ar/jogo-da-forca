
# Skill: Database Development

## 1. Objetivo

Definir padrões para modelagem, criação, manutenção e integração do banco de dados do Jogo da Forca Multiplayer.

## 2. Tecnologias

- Cloudflare D1.
- SQLite.
- SQL.
- Wrangler CLI.
- JavaScript.

## 3. Modelagem

O banco deverá contemplar:

- Usuarios.
- IdentidadesOAuth.
- Sessoes.
- Salas.
- Participantes.
- Partidas.
- Palavras.
- Tentativas.
- HistoricoPartidas.

Definir chaves primárias, estrangeiras, restrições e índices adequados.

## 4. Migrações

- Versionar todas as alterações estruturais.
- Utilizar arquivos SQL numerados.
- Manter histórico das migrações.
- Testar alterações localmente.
- Aplicar migrações remotas somente após validação.
- Não realizar alterações manuais sem documentação.

## 5. Catálogo de palavras

O banco deverá conter mais de 1.000 palavras em português.

Requisitos:

- Mínimo de 5 letras.
- Máximo de 12 letras.
- Não permitir duplicidades.
- Evitar palavras inadequadas.
- Excluir nomes próprios e siglas.
- Preservar acentos na palavra original.
- Permitir normalização para comparação.
- Armazenar informações de categoria quando aplicável.
- Selecionar palavras aleatoriamente.

A validação do comprimento deverá considerar a quantidade de letras, não os bytes utilizados para armazenar caracteres acentuados.

## 6. Consultas

- Utilizar prepared statements.
- Utilizar parâmetros nas consultas.
- Evitar concatenação insegura de SQL.
- Criar índices para consultas frequentes.
- Evitar consultas desnecessárias.
- Paginar resultados extensos quando necessário.

## 7. Integridade

- Garantir relacionamentos válidos.
- Evitar registros órfãos.
- Controlar exclusões.
- Utilizar transações quando necessário.
- Garantir consistência entre partidas e tentativas.

## 8. Segurança

- Nunca armazenar senhas dos provedores OAuth.
- Não expor dados privados dos usuários.
- Restringir acesso aos registros das salas.
- Utilizar consultas parametrizadas.
- Validar operações no backend.

## 9. Critérios de qualidade

- Modelagem documentada.
- Migrações reproduzíveis.
- Catálogo validado.
- Consultas testadas.
- Integridade referencial verificada.
- Integração com o backend aprovada.

## 10. Diretriz principal

Priorize integridade, segurança, desempenho e manutenção.

Toda alteração no esquema deve possuir uma migração versionada.
