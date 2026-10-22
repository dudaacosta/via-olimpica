# Cronograma com datas — primeira entrega

Base: `dudaacosta/via-olimpica`, branch `main`, commit inicial `a3300be`.
Nenhum commit do repositório antigo foi incorporado.

## Comportamento

- Quiz com sexta pergunta para a data da prova, incluindo o ano. O ano escolar continua selecionando a base de conteúdos.
- Perfil permite editar a data. Datas novas precisam ser reais e futuras; a data é informada pela escola, sem presumir um calendário oficial.
- Perfis antigos continuam carregando sem data inventada. O cronograma anterior continua disponível e oferece um link para completar a data no perfil.
- Com data preenchida, o cronograma distribui somente os intervalos pendentes da base selecionada, com datas concretas, duração diária limitada e pausas.
- Os ciclos de sete dias ficam ancorados na primeira configuração da data: os primeiros N dias são de estudo. Reabrir o aplicativo não reinicia o ciclo.
- O tempo concluído hoje no plano selecionado reduz a disponibilidade restante de hoje. A conclusão usa a duração estimada do intervalo, não um cronômetro. Registros de outra olimpíada ou ano escolar não bloqueiam a disponibilidade do plano atual.
- O dia da prova não oferece disponibilidade de preparação. Conteúdo excedente permanece visível com indicação de referência após o prazo; não há aumento automático de carga ou exclusão de conteúdo.
- As chaves e os intervalos de progresso permanecem compatíveis. Conclusões do plano selecionado aparecem em um histórico com opção de desfazer.
- As quatro olimpíadas, bases curriculares, favoritos, chaves de armazenamento existentes e estilos visuais foram preservados.

## Validação

Execute `npm test` para todas as suítes locais e `npm run build` para o build.

Os dez testes novos em `tests/calendario.cjs` cobrem datas reais, ano bissexto, virada do ano, prazo vencido, excesso, pausas, persistência de perfis antigos, replanejamento dos 28 planos, preservação dos intervalos e desconto da disponibilidade já consumida hoje. As suítes existentes continuam cobrindo os currículos, favoritos e 1.008 combinações de cronogramas.

Conferência no navegador: quiz completo com as quatro opções, data e resumo; cronograma com prazo curto; conclusão e recarga; alteração do tempo diário no perfil sem perda da conclusão. Não houve erro de console nesse fluxo.

Na primeira entrega, a checagem independente `tsc --noEmit` apontava três erros preexistentes:

- `src/lib/api/example.functions.ts`: `inputValidator` ausente na versão instalada e parâmetro `data` implicitamente `any`.
- `src/routes/__root.tsx`: o componente de erro espera `Error`, mas o roteador pode fornecer `unknown`.

Esses três erros foram corrigidos na etapa seguinte: o exemplo de API usa `.validator`, conforme a versão instalada, restaurando a inferência de `data`; o componente global de erros usa o tipo `ErrorComponentProps` fornecido pelo roteador. Não foram adicionadas supressões ou relaxamentos das regras de tipos.

A checagem passou sem erros. Agora também pode ser executada com `npm run typecheck`. O build não executa essa checagem automaticamente.

## Atualização: painéis com dados reais

- A página Progresso usa os conteúdos reais da olimpíada e do ano escolar selecionados. O percentual principal e o nível consideram somente conteúdos integralmente concluídos. O percentual de tempo permanece disponível separadamente na consulta da carga estimada.
- O card principal apresenta o nível atual, conteúdos completos e percentual do plano. O tempo fica em um card complementar; sobreposições são unificadas e registros de outros planos não entram no resumo.
- A página inicial preserva a data da prova, a contagem de dias e as sessões de hoje. O resumo destaca conteúdos completos, percentual e nível.
- As sessões de hoje usam o mesmo cálculo do cronograma, descontando o tempo já concluído no dia. Há mensagens para pausa, limite diário utilizado, plano completo, data ausente e prova vencida.
- Os indicadores aguardam a leitura do armazenamento local antes de mostrar números. Concluir ou desfazer trechos atualiza os painéis sem apagar o histórico ou mudar as chaves de armazenamento.
- Oito novos testes em `tests/resumo-progresso.cjs` cobrem sobreposição, conclusão parcial, isolamento dos planos, semana, datas inválidas/futuras, desfazer, plano vazio e os 28 planos reais. A conferência no navegador incluiu concluir uma sessão, recarregar, comparar os dois painéis e desfazer somente a marcação usada no teste.

## Níveis e meta semanal por conteúdos

- `src/features/progress/levels.ts` centraliza nomes, limites percentuais, cores e `imageSrc`/`imageAlt` independentes para Bronze (0 a menos de 25%), Prata (25 a menos de 50%), Ouro (50 a menos de 80%) e Diamante (80 a 100%). Os quatro caminhos começam em `null`; o card usa fundo próprio e ícone enquanto não houver imagens. Basta adicionar cada imagem em `public/` e configurar seu caminho, sem mudar a lógica do progresso.
- A trilha usa o percentual real de conteúdos completos, destaca o nível atual e calcula o próximo alvo com arredondamento para cima da quantidade necessária. O percentual textual é truncado para não anunciar um limite antes de atingi-lo. Diamante não apresenta um nível seguinte fictício.
- A meta usa os ciclos de sete dias do cronograma, ancorados em `planStartDate`. Os alvos são conteúdos cuja conclusão está prevista dentro da semana e antes da prova. Conteúdos com apenas trechos previstos ficam sinalizados separadamente como em continuidade.
- A meta é reconstruída com o progresso que existia no começo da semana: concluir uma sessão hoje não apaga seu alvo do denominador. Alterar as preferências recalcula a meta. Não há um novo armazenamento de progresso ou metas fixas arbitrárias.
- O progresso parcial, as horas e a listagem detalhada permanecem disponíveis. Nenhum currículo, favorito ou chave de armazenamento foi alterado.
- `tests/niveis-meta.cjs` cobre limites de níveis, arredondamento, conclusão parcial, desmarcação, reconstrução semanal após restauração, conteúdos em múltiplos dias, semana vazia, recálculo e renderização de todos os níveis sem imagens.

## Próxima fase e limites

Na revisão da página inicial, os cards passaram para uma única grade: Cronograma de hoje e Meta semanal na primeira linha; Próxima prova e Meu progresso na segunda, com alturas alinhadas. As atividades de hoje são links para a sessão exata, com foco e destaque no cronograma. A prévia exibe até três sessões e permite abrir a lista completa.

A causa do estado vazio indevido foi reproduzida antes da correção: o tempo estudado em outra olimpíada/ano estava sendo descontado da disponibilidade do plano selecionado. `buildDatedSchedule` agora filtra o registro pelas chaves reais da base ativa e limita os intervalos à duração atual do conteúdo, sem alterar os dados salvos. `tests/cronograma-hoje.cjs` cobre as quatro olimpíadas, troca de ano, preservação do limite do plano ativo e identificadores únicos para todas as sessões dos 28 planos.

- Permitir escolha de dias específicos da semana, em vez de primeiros N dias de cada ciclo.
- Tratar múltiplas provas/etapas e revisar as estimativas pedagógicas sem alterar a base nesta entrega.
- A persistência continua no navegador; esta entrega não cria sincronização de conta ou entre dispositivos.

As alterações estão preparadas localmente para revisão. O envio ao GitHub requer confirmação da usuária.
