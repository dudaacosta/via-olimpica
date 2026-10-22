# Cronograma com datas — primeira entrega

Base: `dudaacosta/via-olimpica`, branch `main`, commit inicial `a3300be`.
Nenhum commit do repositório antigo foi incorporado.

## Comportamento

- Quiz com sexta pergunta para a data da prova, incluindo o ano. O ano escolar continua selecionando a base de conteúdos.
- Perfil permite editar a data. Datas novas precisam ser reais e futuras; a data é informada pela escola, sem presumir um calendário oficial.
- Perfis antigos continuam carregando sem data inventada. O cronograma anterior continua disponível e oferece um link para completar a data no perfil.
- Com data preenchida, o cronograma distribui somente os intervalos pendentes da base selecionada, com datas concretas, duração diária limitada e pausas.
- Os ciclos de sete dias ficam ancorados na primeira configuração da data: os primeiros N dias são de estudo. Reabrir o aplicativo não reinicia o ciclo.
- O tempo concluído hoje, inclusive em outros planos, reduz a disponibilidade restante de hoje. A conclusão usa a duração estimada do intervalo, não um cronômetro.
- O dia da prova não oferece disponibilidade de preparação. Conteúdo excedente permanece visível com indicação de referência após o prazo; não há aumento automático de carga ou exclusão de conteúdo.
- As chaves e os intervalos de progresso permanecem compatíveis. Conclusões do plano selecionado aparecem em um histórico com opção de desfazer.
- As quatro olimpíadas, bases curriculares, favoritos, chaves de armazenamento existentes e estilos visuais foram preservados.

## Validação

Execute `npm test` para todas as suítes locais e `npm run build` para o build.

Os dez testes novos em `tests/calendario.cjs` cobrem datas reais, ano bissexto, virada do ano, prazo vencido, excesso, pausas, persistência de perfis antigos, replanejamento dos 28 planos, preservação dos intervalos e desconto da disponibilidade já consumida hoje. As suítes existentes continuam cobrindo os currículos, favoritos e 1.008 combinações de cronogramas.

Conferência no navegador: quiz completo com as quatro opções, data e resumo; cronograma com prazo curto; conclusão e recarga; alteração do tempo diário no perfil sem perda da conclusão. Não houve erro de console nesse fluxo.

A checagem independente `tsc --noEmit` já falhava na base e continua apontando os mesmos três erros:

- `src/lib/api/example.functions.ts`: `inputValidator` ausente na versão instalada e parâmetro `data` implicitamente `any`.
- `src/routes/__root.tsx`: o componente de erro espera `Error`, mas o roteador pode fornecer `unknown`.

O build não executa essa checagem de tipos. Portanto, build aprovado não significa checagem de tipos aprovada.

## Próxima fase e limites

- Integrar a página Progresso e os indicadores da página inicial ao progresso real; a página Progresso ainda contém exemplos fixos.
- Permitir escolha de dias específicos da semana, em vez de primeiros N dias de cada ciclo.
- Tratar múltiplas provas/etapas e revisar as estimativas pedagógicas sem alterar a base nesta entrega.
- A persistência continua no navegador; esta entrega não cria sincronização de conta ou entre dispositivos.

As alterações estão preparadas localmente para revisão. O envio ao GitHub requer confirmação da usuária.
