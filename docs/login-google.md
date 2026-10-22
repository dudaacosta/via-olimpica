# Login Google — estado para retomada no terminal

Projeto Supabase exclusivo: `uprbptqpgrhunbaaowib` (Via Olímpica Project).
Repositório: `https://github.com/dudaacosta/via-olimpica`, branch `main`.
Pasta: `C:\Users\ednac\OneDrive\Documentos\ChatGPT\Duda\via-olimpica`.
Não trabalhar no repositório antigo `olimpiada-coach-studio`.

## O que foi implementado

- Página inicial `/` preservada com os dois botões. “Criar meu plano personalizado” abre `/entrar`; “Acessar meu plano” abre o plano salvo, conforme o comportamento anterior.
- `/entrar` cria a conta ou faz login pelo Google usando Supabase Auth e PKCE. O retorno é fixo na origem atual, em `/entrar`.
- Sessão persistida e renovada pelo SDK; saída no Perfil. Não são solicitadas permissões de Gmail, mensagens, contatos ou Drive.
- Configuração ausente ou de outro projeto mantém o modo sem conta funcionando e informa que a entrada está em preparação.
- Preferências, favoritos e progresso são separados pelo ID da conta. As páginas ficam ocultas durante a troca e os formulários são remontados para não mostrar dados da conta anterior.
- Dados anteriores sem login permanecem nas chaves originais, sem transferência automática nem exclusão.
- Dados de estudo continuam neste navegador. Ainda não há sincronização entre aparelhos; a interface informa essa limitação. Autenticação real não significa armazenamento remoto do progresso.
- Nenhuma tabela ou política RLS foi alterada.

## Configuração externa já realizada com autorização

- Google Cloud: projeto `universal-code-512405-v8`, nome `Via Olimpica` (sem acento por exigência do Google Cloud).
- Identidade OAuth `Via Olímpica`, público externo em testes. A proprietária aceitou a política e criou o cliente `Via Olimpica Web`.
- Callback do Google: `https://uprbptqpgrhunbaaowib.supabase.co/auth/v1/callback`. Origem local: `http://127.0.0.1:5174`.
- O segredo foi inserido diretamente pela proprietária no Supabase. O ID do cliente foi completado e o Google ativado. Nunca registrar ou comitar o segredo.
- Supabase Site URL: `http://127.0.0.1:5174`. Retorno permitido: `http://127.0.0.1:5174/entrar`.
- `.env.local` existe somente nesta cópia local, com URL e chave publishable do projeto correto; é ignorado pelo Git. `.env.example` contém apenas os nomes das variáveis e exemplo sem chave.
- Conexão do plugin a utilizar: “Conta de Duda no Supabase”; acesso ao projeto correto confirmado. Descobrir o link_id atual nas ferramentas, sem reutilizar identificadores antigos.

## Verificação e limitações

- Verificado no navegador: o botão abre a escolha de conta Google. A proprietária concluiu o teste e informou que deu certo.
- Testes automatizados cobrem configuração pública e projeto correto, persistência, separação entre visitante e duas contas, restauração dos dados e falha segura de leitura.
- Recarga, saída e troca entre contas reais ainda precisam de validação manual completa. Não afirmar que a sincronização remota existe.
- Nenhum domínio publicado foi configurado. Ao publicar, propor e aprovar os endereços HTTPS de produção e variáveis da hospedagem. Não substituir endereços silenciosamente.
- Não habilitar contas anônimas, vinculação manual ou desativar confirmação de e-mail.
- Antes de alterar autenticação, tabelas ou RLS, apresentar as mudanças e obter aprovação da proprietária. Mudanças futuras no GitHub também exigem autorização.

## Continuar pelo PowerShell

```powershell
Set-Location 'C:\Users\ednac\OneDrive\Documentos\ChatGPT\Duda\via-olimpica'
git status
# Se Node/npm não estiverem no PATH desta janela:
$env:PATH = 'C:\Program Files\nodejs;' + $env:PATH
npm.cmd run dev -- --host 127.0.0.1 --port 5174
```

Se o servidor já estiver rodando nessa porta, use o existente. Não iniciar outra porta sem ajustar os retornos autorizados. Nesta pasta as dependências já estão instaladas; em outra cópia, usar `npm ci` e configurar as variáveis públicas localmente, sem copiar segredos para o GitHub.

Validação: `npm.cmd run typecheck`, `npm.cmd test`, `npm.cmd run build`.

O GitHub guarda código, testes e documentação. Configurações Google/Supabase ficam nos respectivos painéis; o progresso existente continua no navegador. Não limpar os dados do navegador se quiser preservá-lo.

Referência oficial: https://supabase.com/docs/guides/auth/social-login/auth-google
