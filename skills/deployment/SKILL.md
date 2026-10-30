
---
name: deployment
description: Orienta a preparação, configuração, publicação e verificação de sites estáticos no Cloudflare Pages utilizando GitHub.
---

# Skill de publicação no Cloudflare Pages

## Objetivo
Orientar a publicação segura e verificável do jogo da forca no Cloudflare Pages.

## Quando utilizar
Utilize esta Skill ao preparar o projeto para publicação, configurar o Cloudflare Pages ou investigar problemas de implantação.

## Procedimento

1. Leia o README.md e examine a estrutura atual do projeto.
2. Confirme que os arquivos HTML, CSS e JavaScript necessários existem.
3. Verifique se os caminhos dos arquivos funcionam em hospedagem estática.
4. Confirme que o projeto não depende de um servidor backend.
5. Verifique se o site funciona localmente antes da publicação.
6. Identifique se o repositório GitHub já existe.
7. Não sobrescreva arquivos, repositórios ou configurações existentes sem autorização.
8. Explique as etapas de conexão entre o GitHub e o Cloudflare Pages.
9. Utilize o diretório public/ como diretório de saída quando essa for a configuração adotada pelo projeto.
10. Não configure um comando de build desnecessário para HTML, CSS e JavaScript puros.
11. Oriente a configuração do deploy conforme as opções atuais disponíveis no painel do Cloudflare.
12. Após a publicação, abra o endereço gerado e verifique o funcionamento do jogo.
13. Registre o resultado do deploy e eventuais problemas encontrados.

## Configuração planejada

- Plataforma: Cloudflare Pages.
- Fonte do projeto: repositório GitHub.
- Tipo de projeto: site estático.
- Diretório de publicação: public/.
- Comando de build: nenhum, para a versão estática sem ferramentas de compilação.
- Tecnologias: HTML5, CSS3 e JavaScript puro.

A configuração deve ser ajustada caso a estrutura real do projeto seja diferente.

## Segurança

- Nunca solicite nem exponha senhas, tokens ou chaves de API.
- Não coloque credenciais em arquivos públicos.
- Utilize autenticação oficial do provedor.
- Não execute comandos destrutivos sem autorização explícita.
- Confirme o repositório e a conta de destino antes de publicar.
- Não declare uma publicação concluída sem verificar o resultado.

## Critérios de conclusão

- [ ] Os arquivos necessários estão presentes.
- [ ] O site funciona localmente.
- [ ] O repositório de destino foi confirmado.
- [ ] As configurações de publicação estão corretas.
- [ ] O deploy foi concluído sem erros.
- [ ] O endereço público abre o jogo.
- [ ] CSS e JavaScript carregam corretamente.
- [ ] Os principais comportamentos do jogo funcionam na versão publicada.
- [ ] O resultado e as limitações foram documentados.
