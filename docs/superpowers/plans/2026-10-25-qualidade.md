# Limpeza da checagem de qualidade

> Execução nesta conversa pela própria assistente; nenhuma publicação sem confirmação da usuária.

**Goal:** Fazer a checagem de qualidade terminar sem erros nem avisos, preservando o funcionamento do Via Olímpica.

**Architecture:** Aplicar a formatação configurada, fixar quebras de linha dos arquivos de texto em LF e separar funções compartilhadas dos módulos de componentes. O temporizador do quiz deve depender da ação estável `complete`, sem depender do objeto inteiro da loja.

**Tech Stack:** React, TypeScript, Zustand, ESLint e Prettier.

**Spec:** Pedido da usuária de 25/10/2026 para corrigir os apontamentos da auditoria.

## Restrições

- Preservar medalhas, conteúdo curricular, regras de progresso e dados salvos.
- Manter as regras do ESLint ativas; não ocultar os avisos.
- Não alterar segredos, configuração externa de login ou repositório de backup.
- GitHub permanece na versão aprovada até nova confirmação de envio.

## Revisão

- A formatação deve preservar o significado dos arquivos.
- Estilos compartilhados devem continuar disponíveis para os componentes consumidores.
- Cada hook deve consumir a mesma instância de contexto que seu provider.
- O carregamento do quiz deve terminar sem reiniciar o temporizador em cada mudança da loja.
- Uma compilação nova não deve recriar erros de formatação em arquivos gerados.

## Etapas

- [x] Reproduzir a falha e listar regras e arquivos afetados em `../tmp/lint-inicial.json`.
- [x] Formatar os arquivos apontados; comparar a estrutura do código antes/depois e definir LF para evitar reincidência no Windows.
- [x] Mover variantes de botão, badge, toggle e menu para módulos `.ts`; mover contextos/hooks de formulário, sidebar e autenticação para módulos `.ts`; atualizar os consumidores.
- [x] Corrigir a dependência da animação no quiz usando a ação estável da loja.
- [x] Validar com `npm test`, `npm run typecheck`, `npm run build`, `eslint . --max-warnings 0` e `git diff --check`; revisar as mudanças funcionais separadamente da formatação.
